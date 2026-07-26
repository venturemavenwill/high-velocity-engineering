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
    if ($text -match '(?m)^\*\*Depends on:\*\*\s*(.+?)\s*$')      { $node.depends_on_raw = $Matches[1].Trim() }
    if ($text -match '(?m)^\*\*Re-tests:\*\*\s*(.+?)\s*$')        { $node.re_tests_raw   = $Matches[1].Trim() }
    if ($text -match '(?m)^\*\*Retrieves from:\*\*\s*(.+?)\s*$')   { $node.retrieves_from_raw = $Matches[1].Trim() }

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

    # depends_on  — the day's argument cannot be constructed without it. Constrains
    #               ordering in EVERY projection.
    # re_tests    — retrieved because the spaced-retrieval schedule says so. Constrains
    #               ordering ONLY where there is spacing.
    # Split at 2026-07-26; see projections/workshop-2day/DERIVATION.md for why one
    # edge type could not carry both. `retrieves_from` is retained as their union so
    # existing queries keep working.
    foreach ($pair in @(
        @{ raw = $n.depends_on_raw;     type = 'depends_on' },
        @{ raw = $n.re_tests_raw;       type = 're_tests' },
        @{ raw = $n.retrieves_from_raw; type = 'retrieves_from' }
    )) {
        if (-not $pair.raw) { continue }
        $raw = $pair.raw
        foreach ($m in [regex]::Matches($raw, 'S(\d{3})\s*[–-]\s*S(\d{3})')) {
            [int]$a = $m.Groups[1].Value; [int]$b = $m.Groups[2].Value
            for ($i = $a; $i -le $b; $i++) { Add-Edge $n.id ('wiki/seminars/S{0:D3}' -f $i) $pair.type }
            $raw = $raw.Replace($m.Value, ' ')
        }
        foreach ($m in [regex]::Matches($raw, 'S(\d{3})')) {
            Add-Edge $n.id ('wiki/seminars/S' + $m.Groups[1].Value) $pair.type
        }
    }

    # retrieves_from is the union of the two, for queries written before the split
    if (-not $n.retrieves_from_raw) {
        foreach ($src in @($n.depends_on_raw, $n.re_tests_raw)) {
            if (-not $src) { continue }
            $raw = $src
            foreach ($m in [regex]::Matches($raw, 'S(\d{3})\s*[–-]\s*S(\d{3})')) {
                [int]$a = $m.Groups[1].Value; [int]$b = $m.Groups[2].Value
                for ($i = $a; $i -le $b; $i++) { Add-Edge $n.id ('wiki/seminars/S{0:D3}' -f $i) 'retrieves_from' }
                $raw = $raw.Replace($m.Value, ' ')
            }
            foreach ($m in [regex]::Matches($raw, 'S(\d{3})')) {
                Add-Edge $n.id ('wiki/seminars/S' + $m.Groups[1].Value) 'retrieves_from'
            }
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

# ---------------------------------------------------------------- entry state

# satisfiable_from deliberately does NOT live in the seminar files. Those are the
# substrate of ONE projection (the BSc), whose entry state is fixed at "knows
# nothing"; a cross-projection field does not belong inside one projection's
# files, and 90 scattered values cannot be reviewed for consistency.
# concepts/entry-state.md is the source and this attaches it to the nodes.
# Node-level, not edge-level: the consumer is closure pruning, which asks a node
# question. See that page for why, and for the limitations on the judgements.
$entryState = @{}
$esPath = Join-Path $RepoRoot 'concepts\entry-state.md'
if (Test-Path $esPath) {
    $esText = Get-Content -LiteralPath $esPath -Raw
    $esRow  = '(?m)^\|\s*(S\d{3})\s*\|\s*(this-programme-only|ordinary-professional-experience|either)\s*\|'
    foreach ($m in [regex]::Matches($esText, $esRow)) {
        $entryState['wiki/seminars/' + $m.Groups[1].Value] = $m.Groups[2].Value
    }
}
foreach ($n in $nodes) {
    if ($entryState.ContainsKey($n.id)) {
        $n | Add-Member -NotePropertyName satisfiable_from -NotePropertyValue $entryState[$n.id] -Force
    }
}
$esMissing = @($nodes | Where-Object { $_.kind -eq 'seminar' -and -not $_.satisfiable_from })
if ($esMissing.Count) {
    Write-Warning "satisfiable_from missing for $($esMissing.Count) day(s): $(($esMissing.id | Sort-Object) -join ', ')"
}

# ---------------------------------------------------------------- claims

# Platform claims are NOT authored here and no judgement is applied. Every seminar
# day from S016 already carries a "Perishable content in this day" table pairing a
# durable claim with the platform instance that teaches it; this indexes those rows
# so they can be queried by product before an offering, which is what the months-long
# platform decay actually demands.
#
# Two known blind spots, recorded rather than papered over:
#   S001-S015 use a prose "Perishability register" that predates the table format.
#             Left unconverted on the same principle as the unamended S001-S040
#             specifications: the early form stays legible.
#   S090      genuinely has no perishable content of substance. A true zero.
$claims   = [System.Collections.Generic.List[object]]::new()
$claimGap = @()
foreach ($n in $nodes) {
    if ($n.kind -ne 'seminar') { continue }
    $text = Get-Content -LiteralPath (Join-Path $RepoRoot ($n.path -replace '/', '\')) -Raw
    $i = $text.IndexOf('## Perishable content in this day')
    if ($i -lt 0) { $claimGap += $n.id; continue }
    $j = $text.IndexOf("`n## ", $i + 5)
    if ($j -lt 0) { $j = $text.Length }
    $k = 0
    foreach ($line in (($text.Substring($i, $j - $i)) -split "`r?`n")) {
        if ($line -notmatch '^\|')          { continue }   # not a table row
        if ($line -match   '^\|\s*[-: ]+\|'){ continue }   # separator
        if ($line -match   '^\|\s*Durable') { continue }   # header, both variants
        $cells = @($line.Trim().Trim('|') -split '\|' | ForEach-Object { $_.Trim() })
        if ($cells.Count -lt 2 -or -not $cells[0] -or -not $cells[1]) { continue }
        $k++
        $claims.Add([pscustomobject]@{
            id                 = ('{0}.p{1}' -f ($n.id -replace '.*/', ''), $k)
            day                = $n.id
            module             = $n.module
            quarter            = $n.quarter
            durable            = $cells[0]
            perishable         = $cells[1]
            platform_anchor    = $n.platform_anchor
            namespace          = 'platform'
            decay              = 'months'
            verify_cadence     = 'before every offering'
            assessment_bearing = [bool]$n.assessment_bearing
        })
    }
    if ($k -eq 0 -and $claimGap -notcontains $n.id) { $claimGap += $n.id }
}

# ---------------------------------------------------------------- predictions

# The whitepapers' section 9 is the repository's own falsifiable-claim layer: an
# atomic prediction with a named instrument, in a uniform format, in all 90 papers.
# Extracted mechanically for the same reason as the platform claims -- no judgement
# means no drift. Unlike the platform table this spans ALL eight namespaces, because
# every whitepaper carries one whatever it is about.
$predictions = [System.Collections.Generic.List[object]]::new()
foreach ($n in $nodes) {
    if ($n.kind -ne 'whitepaper') { continue }
    $text = Get-Content -LiteralPath (Join-Path $RepoRoot ($n.path -replace '/', '\')) -Raw
    $wp   = $n.id -replace '.*/', ''
    $day  = 'wiki/seminars/S' + ($wp -replace '\D', '')
    $k = 0
    foreach ($m in [regex]::Matches($text, '(?ms)^\*\*(Prediction[^*]*?)\*\*(.+?)(?=^\*\*Prediction|^##\s|\z)')) {
        $body = $m.Groups[2].Value
        $parts = $body -split '\*Instrument:\*', 2
        $k++
        $predictions.Add([pscustomobject]@{
            id         = ('{0}.pred{1}' -f $wp, $k)
            whitepaper = $n.id
            day        = $day
            module     = $n.module
            quarter    = $n.quarter
            label      = ($m.Groups[1].Value -replace '\s+', ' ').Trim()
            claim      = (($parts[0] -replace '\s+', ' ').Trim() -replace '^[.\s]+', '')
            instrument = if ($parts.Count -gt 1) { ($parts[1] -replace '\s+', ' ').Trim() } else { $null }
            namespace  = $n.primary_namespace
            namespaces = $n.namespaces
        })
    }
}

# ---------------------------------------------------------------- evidence ledger

# Every whitepaper closes by sorting its claims into exactly four evidence classes.
# The classes are uniform across all 90; the claims inside each are prose, so this
# indexes the CLASS and what it cites, not the individual claims. Splitting those
# paragraphs into atomic claims needs authoring judgement and is deliberately not
# done here -- see mcp/hve-iq/README.md for why that is a separate decision.
$EVIDENCE_CLASSES = [ordered]@{
    'Verified in this repository.'                                            = @{ n = 1; name = 'verified-here';     licenses = 'Cites a Cliff Note in research/, which records what was checked and against what.' }
    'Cited from general knowledge, not verified here.'                        = @{ n = 2; name = 'general-knowledge'; licenses = 'Direction and mechanism only. No effect size, ever.' }
    'Design reasoning with no external warrant.'                              = @{ n = 3; name = 'design-reasoning';  licenses = 'The design''s own argument. Carries no evidential weight outside it.' }
    'Grounded in vendor documentation, with its version and its silence recorded.' = @{ n = 4; name = 'vendor-docs'; licenses = 'What the documentation states at a version, together with what it does NOT report that a reader would need.' }
}
$evidence = [System.Collections.Generic.List[object]]::new()
foreach ($n in $nodes) {
    if ($n.kind -ne 'whitepaper') { continue }
    $text = Get-Content -LiteralPath (Join-Path $RepoRoot ($n.path -replace '/', '\')) -Raw
    $i = $text.IndexOf('## Evidence status')
    if ($i -lt 0) { continue }
    $sec = $text.Substring($i)
    $wp  = $n.id -replace '.*/', ''

    # locate each class lead, then slice from it to whichever lead comes next
    $marks = @()
    foreach ($lead in $EVIDENCE_CLASSES.Keys) {
        $at = $sec.IndexOf('**' + $lead + '**')
        if ($at -ge 0) { $marks += [pscustomobject]@{ lead = $lead; at = $at } }
    }
    $marks = @($marks | Sort-Object at)
    for ($x = 0; $x -lt $marks.Count; $x++) {
        $start = $marks[$x].at
        $end   = if ($x + 1 -lt $marks.Count) { $marks[$x + 1].at } else { $sec.Length }
        $body  = $sec.Substring($start, $end - $start)
        $meta  = $EVIDENCE_CLASSES[$marks[$x].lead]
        $cites = @([regex]::Matches($body, '\((research/[^)\s]+?\.md)\)') | ForEach-Object { $_.Groups[1].Value -replace '\.md$', '' } | Select-Object -Unique)
        $evidence.Add([pscustomobject]@{
            id          = ('{0}.e{1}' -f $wp, $meta.n)
            whitepaper  = $n.id
            day         = 'wiki/seminars/S' + ($wp -replace '\D', '')
            module      = $n.module
            class       = $meta.n
            class_name  = $meta.name
            licenses    = $meta.licenses
            cites       = $cites
            namespace   = $n.primary_namespace
            words       = (($body -split '\s+' | Where-Object { $_ }).Count)
        })
    }
}

# ---------------------------------------------------------------- write

$nodesPath = Join-Path $OutDir 'nodes.jsonl'
$edgesPath = Join-Path $OutDir 'edges.jsonl'

$nodes | ForEach-Object { $_ | ConvertTo-Json -Compress -Depth 6 } | Set-Content $nodesPath -Encoding utf8
$final | ForEach-Object { $_ | ConvertTo-Json -Compress } | Set-Content $edgesPath -Encoding utf8
$claims | ForEach-Object { $_ | ConvertTo-Json -Compress } | Set-Content (Join-Path $OutDir 'claims.jsonl') -Encoding utf8
$predictions | ForEach-Object { $_ | ConvertTo-Json -Compress } | Set-Content (Join-Path $OutDir 'predictions.jsonl') -Encoding utf8
$evidence | ForEach-Object { $_ | ConvertTo-Json -Compress } | Set-Content (Join-Path $OutDir 'evidence.jsonl') -Encoding utf8

[pscustomobject]@{
    generated   = (Get-Date).ToString('yyyy-MM-dd')
    nodes       = $nodes
    edges       = $final
    claims      = $claims
    predictions = $predictions
    evidence    = $evidence
} | ConvertTo-Json -Depth 8 | Set-Content (Join-Path $OutDir 'graph.json') -Encoding utf8

$kindMap  = [ordered]@{}; $nodes | Group-Object kind  | Sort-Object Name | ForEach-Object { $kindMap[$_.Name]  = $_.Count }
$layerMap = [ordered]@{}; $nodes | Group-Object layer | Sort-Object Name | ForEach-Object { $layerMap[$_.Name] = $_.Count }
$typeMap  = [ordered]@{}; $final | Group-Object type  | Sort-Object Name | ForEach-Object { $typeMap[$_.Name]  = $_.Count }
$esMap    = [ordered]@{}; $nodes | Where-Object { $_.satisfiable_from } | Group-Object satisfiable_from | Sort-Object Name | ForEach-Object { $esMap[$_.Name] = $_.Count }
$predNs   = [ordered]@{}; $predictions | Where-Object { $_.namespace } | Group-Object namespace | Sort-Object Count -Descending | ForEach-Object { $predNs[$_.Name] = $_.Count }

[pscustomobject]@{
    generated         = (Get-Date).ToString('yyyy-MM-dd')
    node_count        = $nodes.Count
    edge_count        = $final.Count
    claim_count       = $claims.Count
    claim_days        = @($claims | Select-Object -ExpandProperty day -Unique).Count
    claim_gap_days    = $claimGap.Count
    prediction_count  = $predictions.Count
    evidence_count    = $evidence.Count
    nodes_by_kind     = $kindMap
    nodes_by_layer    = $layerMap
    edges_by_type     = $typeMap
    satisfiable_from  = $esMap
    predictions_by_ns = $predNs
} | ConvertTo-Json -Depth 6 | Set-Content (Join-Path $OutDir 'stats.json') -Encoding utf8

Write-Host "nodes: $($nodes.Count)  edges: $($final.Count)"
$final | Group-Object type | Sort-Object Count -Descending | ForEach-Object { '  {0,-16} {1}' -f $_.Name, $_.Count }
if ($esMap.Count) {
    Write-Host 'satisfiable_from:'
    $esMap.GetEnumerator() | ForEach-Object { '  {0,-32} {1}' -f $_.Key, $_.Value }
}
Write-Host "platform claims: $($claims.Count) across $(@($claims | Select-Object -ExpandProperty day -Unique).Count) days  (no table: $($claimGap.Count))"
Write-Host "predictions:     $($predictions.Count)   evidence rows: $($evidence.Count)"
$predNs.GetEnumerator() | ForEach-Object { '  {0,-14} {1}' -f $_.Key, $_.Value }
