# Builds a machine-readable knowledge graph of every markdown file in this repository.
#
#   pwsh ./scripts/build-graph.ps1
#
# Outputs (all under ./graph):
#   nodes.jsonl   one JSON object per document
#   edges.jsonl   one JSON object per typed relationship
#   graph.json    both of the above in a single file, for small-context loading
#   stats.json    counts, for a quick sanity check
#
# The graph is derived entirely from the files. It holds no facts of its own,
# so it can be regenerated at any time and must be, after any structural change.

param(
    [string]$RepoRoot = (Split-Path -Parent $PSScriptRoot),
    [string]$OutDir
)

if (-not $OutDir) { $OutDir = Join-Path $RepoRoot 'graph' }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
Set-Location $RepoRoot

$rootLen = $RepoRoot.TrimEnd('\').Length + 1

function Get-RelPath([string]$full) { ($full.Substring($rootLen)) -replace '\\', '/' }
function Get-NodeId([string]$rel) { $rel -replace '\.md$', '' }

function Get-Kind([string]$rel) {
    switch -Regex ($rel) {
        '^wiki/seminars/'                       { return 'seminar' }
        '^wiki/whitepapers/'                    { return 'whitepaper' }
        '^wiki/modules/'                        { return 'module' }
        '^wiki/quarters/'                       { return 'quarter' }
        '^wiki/program/'                        { return 'program-page' }
        '^wiki/Home\.md$'                       { return 'wiki-home' }
        '^research/99-source-register/'         { return 'source-register' }
        '^research/.*/collected-materials\.md$' { return 'research-index' }
        '^research/.*-memo\.md$'                { return 'research-memo' }
        '^research/.*/reading-list\.md$'        { return 'research-reading-list' }
        '^research/'                            { return 'research-note' }
        '^sources/vendor-courses/'              { return 'vendor-course' }
        '^sources/design-analysis/'             { return 'design-analysis' }
        '^README\.md$'                          { return 'readme' }
        default                                 { return 'other' }
    }
}

function Get-Layer([string]$rel) {
    if ($rel -like 'wiki/*')     { return 'wiki' }
    if ($rel -like 'research/*') { return 'research' }
    if ($rel -like 'sources/*')  { return 'sources' }
    return 'root'
}

# ---------------------------------------------------------------- scan

$files = Get-ChildItem -Path $RepoRoot -Recurse -File -Filter *.md |
         Where-Object { $_.FullName -notmatch '\\(node_modules|\.git)\\' }

$nodes = [System.Collections.Generic.List[object]]::new()
$edges = [System.Collections.Generic.List[object]]::new()
$byId  = @{}

function Add-Edge([string]$from, [string]$to, [string]$type) {
    if (-not $from -or -not $to -or $from -eq $to) { return }
    $edges.Add([pscustomobject]@{ from = $from; to = $to; type = $type })
}

foreach ($f in $files) {
    $rel  = Get-RelPath $f.FullName
    $id   = Get-NodeId $rel
    $text = Get-Content -LiteralPath $f.FullName -Raw
    if ($null -eq $text) { $text = '' }

    $title = if ($text -match '(?m)^#\s+(.+?)\s*$') { $Matches[1].Trim() } else { $f.BaseName }

    $headings = @()
    foreach ($m in [regex]::Matches($text, '(?m)^##\s+(.+?)\s*$')) { $headings += $m.Groups[1].Value.Trim() }

    $node = [ordered]@{
        id       = $id
        path     = $rel
        kind     = Get-Kind $rel
        layer    = Get-Layer $rel
        title    = $title
        headings = $headings
        words    = ($text -split '\s+' | Where-Object { $_ }).Count
        lines    = ($text -split "`n").Count
    }

    # --- structured header block, present on seminars and whitepapers
    if ($text -match '\*\*Module:\*\*\s*\[?(M\d+)')            { $node.module  = $Matches[1] }
    if ($text -match '\*\*Quarter:\*\*\s*\[?(Q\d)')            { $node.quarter = $Matches[1] }
    if ($text -match '\*\*Complexity class:\*\*\s*(\d)')       { $node.complexity_class = [int]$Matches[1] }
    if ($text -match '(?m)^\*\*Strands:\*\*\s*(.+?)\s*$') {
        $node.strands = @($Matches[1] -split '[·,]' | ForEach-Object { ($_ -replace '\*', '').Trim() } | Where-Object { $_ -match '^[A-Z]{2}$' })
    }
    if ($text -match '(?m)^\*\*Platform anchor:\*\*\s*(.+?)\s*$') {
        $node.platform_anchor = ($Matches[1] -replace '\*\*MCP servers:\*\*.*$', '' -replace '\*', '').Trim(' ·')
    }
    if ($text -match '\*\*MCP servers:\*\*\s*(.+?)\s*(?:\r?\n|$)') {
        $node.mcp_servers = @($Matches[1] -split '[·,]' | ForEach-Object { ($_ -replace '\*', '').Trim() } | Where-Object { $_ })
    }
    if ($text -match '(?m)^\*\*Retrieves from:\*\*\s*(.+?)\s*$') { $node.retrieves_from_raw = $Matches[1].Trim() }

    $node.assessment_bearing = ($title -match '⊘') -or ($text -match 'Assessment-bearing day')

    $nodes.Add([pscustomobject]$node)
    $byId[$id] = $node
}

# ---------------------------------------------------------------- edges

$known = @{}
foreach ($n in $nodes) { $known[$n.id] = $true }

foreach ($n in $nodes) {
    $full = Join-Path $RepoRoot ($n.path -replace '/', '\')
    $text = Get-Content -LiteralPath $full -Raw
    if ($null -eq $text) { $text = '' }

    # links_to — every resolvable internal markdown link
    $seen = @{}
    foreach ($m in [regex]::Matches($text, '\]\(([^)\s#]+\.md)(?:#[^)]*)?\)')) {
        $tgt = $m.Groups[1].Value
        if ($tgt -match '^https?://') { continue }
        $tid = Get-NodeId $tgt
        if ($known.ContainsKey($tid) -and -not $seen.ContainsKey($tid)) {
            $seen[$tid] = $true
            Add-Edge $n.id $tid 'links_to'
            if ($n.layer -eq 'wiki' -and $tid -like 'research/*')     { Add-Edge $n.id $tid 'grounded_in' }
            if ($n.layer -eq 'research' -and $tid -like 'sources/*')  { Add-Edge $n.id $tid 'summarises' }
        }
    }

    # retrieves_from — the spaced-retrieval schedule, expanding S0NN–S0MM ranges
    if ($n.retrieves_from_raw) {
        $raw = $n.retrieves_from_raw
        foreach ($m in [regex]::Matches($raw, 'S(\d{3})\s*[–-]\s*S(\d{3})')) {
            [int]$a = $m.Groups[1].Value; [int]$b = $m.Groups[2].Value
            for ($i = $a; $i -le $b; $i++) { Add-Edge $n.id ('wiki/seminars/S{0:D3}' -f $i) 'retrieves_from' }
            $raw = $raw.Replace($m.Value, ' ')
        }
        foreach ($m in [regex]::Matches($raw, 'S(\d{3})')) {
            Add-Edge $n.id ('wiki/seminars/S' + $m.Groups[1].Value) 'retrieves_from'
        }
    }

    # seminar <-> whitepaper pairing
    if ($n.kind -eq 'seminar' -and $n.id -match 'S(\d{3})$') {
        Add-Edge $n.id ('wiki/whitepapers/WP-' + $Matches[1]) 'has_whitepaper'
    }
    if ($n.kind -eq 'whitepaper' -and $n.id -match 'WP-(\d{3})$') {
        Add-Edge $n.id ('wiki/seminars/S' + $Matches[1]) 'documents'
    }

    # containment
    if ($n.module)  { Add-Edge $n.id ('wiki/modules/'  + $n.module)  'part_of' }
    if ($n.quarter) { Add-Edge $n.id ('wiki/quarters/' + $n.quarter) 'part_of' }
    if ($n.layer -eq 'research' -and $n.kind -eq 'research-note') {
        $folder = ($n.path -split '/')[1]
        Add-Edge $n.id ("research/$folder/collected-materials") 'part_of'
    }
}

# drop edges whose target does not exist, so the graph is closed
$final = @($edges | Where-Object { $known.ContainsKey($_.to) })

# ---------------------------------------------------------------- namespaces
# See concepts/namespaces.md. A research note takes its namespace from its folder;
# that is definitional. A wiki page takes its namespace mix by DERIVATION from what
# it actually cites, so a page that claims to be about measurement while citing only
# vendor documentation is reported as a platform page, whatever its title says.

$nsOfFolder = @{
    '01-course-structure'       = 'curriculum'
    '02-technical-foundations'  = 'ai-systems'
    '03-measurement-evaluation' = 'measurement'
    '04-professional-formation' = 'pedagogy'
    '05-fde-craft'              = 'fde-craft'
    '06-microsoft-platform'     = 'platform'
    '07-accreditation-exemplars'= 'curriculum'
    '08-assessment-epas'        = 'assessment'
}
$decayOf = @{
    'platform'    = @{ decay = 'months';       verify = 'before every offering' }
    'ai-systems'  = @{ decay = '1-3 years';    verify = 'annually' }
    'measurement' = @{ decay = 'permanent';    verify = 'on amendment' }
    'pedagogy'    = @{ decay = 'decades';      verify = '3 years' }
    'assessment'  = @{ decay = 'decades';      verify = '3 years' }
    'fde-craft'   = @{ decay = 'slow';         verify = '3 years' }
    'curriculum'  = @{ decay = 'years';        verify = 'annually' }
    'method'      = @{ decay = 'on amendment'; verify = 'on amendment' }
}

foreach ($n in $nodes) {
    if ($n.layer -eq 'research') {
        $folder = ($n.path -split '/')[1]
        if ($nsOfFolder.ContainsKey($folder)) { $n | Add-Member -NotePropertyName namespace -NotePropertyValue $nsOfFolder[$folder] -Force }
    }
}

$nsByNode = @{}
foreach ($n in $nodes) { $nsByNode[$n.id] = $n.namespace }

foreach ($n in $nodes) {
    if ($n.layer -ne 'wiki') { continue }
    $mix = @{}
    foreach ($e in $final) {
        if ($e.from -ne $n.id -or $e.type -ne 'grounded_in') { continue }
        $ns = $nsByNode[$e.to]
        if ($ns) { $mix[$ns] = 1 + [int]$mix[$ns] }
    }
    $n | Add-Member -NotePropertyName _mix -NotePropertyValue $mix -Force
}

# A seminar day cites almost nothing directly — by design, its evidence lives in the
# paired whitepaper's Evidence status. So a seminar inherits its whitepaper's mix.
$mixById = @{}
foreach ($n in $nodes) { if ($n._mix) { $mixById[$n.id] = $n._mix } }
foreach ($n in $nodes) {
    if ($n.kind -ne 'seminar' -or $n._mix.Count -gt 0) { continue }
    if ($n.id -match 'S(\d{3})$') {
        $wp = 'wiki/whitepapers/WP-' + $Matches[1]
        if ($mixById.ContainsKey($wp)) { $n._mix = $mixById[$wp] }
    }
}

foreach ($n in $nodes) {
    if ($n.layer -ne 'wiki') { continue }
    $mix = $n._mix
    # programme pages are the design's own discipline: no external warrant by construction
    if ($mix.Count -eq 0) { $mix = @{ 'method' = 1 } }

    $ordered = [ordered]@{}
    $mix.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object { $ordered[$_.Key] = $_.Value }
    $primary = ($ordered.Keys | Select-Object -First 1)

    $n | Add-Member -NotePropertyName namespaces        -NotePropertyValue $ordered -Force
    $n | Add-Member -NotePropertyName primary_namespace -NotePropertyValue $primary -Force
    $n | Add-Member -NotePropertyName platform_bearing  -NotePropertyValue ([bool]$mix['platform'] -or [bool]$n.platform_anchor) -Force
    $n.PSObject.Properties.Remove('_mix')
}

foreach ($n in $nodes) {
    $ns = if ($n.namespace) { $n.namespace } elseif ($n.primary_namespace) { $n.primary_namespace } else { $null }
    if ($ns -and $decayOf.ContainsKey($ns)) {
        $n | Add-Member -NotePropertyName decay          -NotePropertyValue $decayOf[$ns].decay  -Force
        $n | Add-Member -NotePropertyName verify_cadence -NotePropertyValue $decayOf[$ns].verify -Force
    }
}

# evidence classes actually present in a whitepaper's Evidence status section
foreach ($n in $nodes) {
    if ($n.kind -ne 'whitepaper') { continue }
    $t = Get-Content -LiteralPath (Join-Path $RepoRoot ($n.path -replace '/', '\')) -Raw
    $cls = @()
    if ($t -match 'Verified in this repository')            { $cls += 'verified-in-repo' }
    if ($t -match 'Cited from general knowledge')           { $cls += 'general-knowledge-no-effect-size' }
    if ($t -match 'Design reasoning with no external')      { $cls += 'design-reasoning-no-warrant' }
    if ($t -match 'Grounded in vendor documentation')       { $cls += 'vendor-doc-versioned' }
    $n | Add-Member -NotePropertyName evidence_classes -NotePropertyValue $cls -Force
}

# ---------------------------------------------------------------- write

$nodesPath = Join-Path $OutDir 'nodes.jsonl'
$edgesPath = Join-Path $OutDir 'edges.jsonl'

$nodes | ForEach-Object { $_ | ConvertTo-Json -Compress -Depth 6 } | Set-Content $nodesPath -Encoding utf8
$final | ForEach-Object { $_ | ConvertTo-Json -Compress } | Set-Content $edgesPath -Encoding utf8

[pscustomobject]@{
    generated = (Get-Date).ToString('yyyy-MM-dd')
    nodes     = $nodes
    edges     = $final
} | ConvertTo-Json -Depth 8 | Set-Content (Join-Path $OutDir 'graph.json') -Encoding utf8

$kindMap  = [ordered]@{}; $nodes | Group-Object kind  | Sort-Object Name | ForEach-Object { $kindMap[$_.Name]  = $_.Count }
$layerMap = [ordered]@{}; $nodes | Group-Object layer | Sort-Object Name | ForEach-Object { $layerMap[$_.Name] = $_.Count }
$typeMap  = [ordered]@{}; $final | Group-Object type  | Sort-Object Name | ForEach-Object { $typeMap[$_.Name]  = $_.Count }

[pscustomobject]@{
    generated      = (Get-Date).ToString('yyyy-MM-dd')
    node_count     = $nodes.Count
    edge_count     = $final.Count
    nodes_by_kind  = $kindMap
    nodes_by_layer = $layerMap
    edges_by_type  = $typeMap
} | ConvertTo-Json -Depth 6 | Set-Content (Join-Path $OutDir 'stats.json') -Encoding utf8

Write-Host "nodes: $($nodes.Count)  edges: $($final.Count)"
$final | Group-Object type | Sort-Object Count -Descending | ForEach-Object { '  {0,-16} {1}' -f $_.Name, $_.Count }
