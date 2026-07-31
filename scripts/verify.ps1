<#
    verify.ps1 — the deterministic gate.

    Every invariant this repository claims about itself, checked mechanically.
    Run it before committing, and let CI run it on every pull request.

        pwsh ./scripts/verify.ps1

    WHY THIS EXISTS, AND WHY IT IS DETERMINISTIC

    The intended write path for HVE IQ is an agent that researches, judges and
    proposes upgrades to the knowledge — and it **opens pull requests, never
    commits**. That is not a courtesy; the loop is unattended, so a human merge
    is the only place a mistake reliably stops.

    This script is the other half of that arrangement. It is the contract a
    proposal must satisfy, and it is deliberately **not** an LLM: a gate that
    shares a model family with the proposer is not a gate, it is an echo. It is
    also cheap enough to run on every push, which is what makes it worth having.

    ADDING THE AGENT LATER

    Nothing here needs to change. The agent becomes a second proposer alongside
    the human one, and .github/workflows/verify.yml already runs this on any
    pull request whatever opened it. See mcp/hve-iq/README.md for the full path.

    WHAT THIS CHECKS, AND WHAT IT DOES NOT

    Invariants, not snapshots. Counts that legitimately grow as the knowledge
    grows are reported, never asserted — a gate that fails on intended change is
    a gate someone disables. Snapshot regressions belong in mcp/hve-iq/smoke.js,
    which this script runs last.
#>

$ErrorActionPreference = 'Stop'
$repo = Split-Path $PSScriptRoot -Parent
Push-Location $repo

$failures = [System.Collections.Generic.List[string]]::new()
function Check([string]$label, [bool]$ok, [string]$detail = '') {
    $mark = if ($ok) { 'PASS' } else { 'FAIL'; }
    if (-not $ok) { $failures.Add($label) }
    Write-Host ('  {0}  {1}{2}' -f $mark, $label, $(if ($detail) { "  — $detail" } else { '' }))
}

# Keep this exclusion list identical to the one in build-graph.ps1. If the gate scans
# a directory the builder skips, it reports link failures for files that are not nodes.
$md = Get-ChildItem -Recurse -File -Filter *.md | Where-Object { $_.FullName -notmatch '[\\/](node_modules|\.git|\.venv|venv|__pycache__|site-packages|raw)[\\/]' }

Write-Host "`nHVE IQ verification gate`n"

# ---------------------------------------------------------------- graph

Write-Host 'graph'
$build = & pwsh -NoProfile -File (Join-Path $PSScriptRoot 'build-graph.ps1') 2>&1
Check 'graph rebuilds without warnings' (-not ($build | Where-Object { $_ -match 'WARNING|Exception' })) `
      (($build | Where-Object { $_ -match '^nodes:' }) -join '')

# A derived index that changes when nothing changed is worse than no index: it makes
# graph/ permanently dirty, so a real change becomes invisible in the diff. This has
# happened twice, both times from a plain @{} whose enumeration order .NET randomises
# per process. CI caught it both times and this gate did not, which is the wrong way
# round -- the check costs one extra build and removes an entire class of defect.
$before = Get-ChildItem (Join-Path $repo 'graph') -File | Where-Object { $_.Extension -in '.json', '.jsonl' } |
          Sort-Object Name | ForEach-Object { (Get-FileHash $_.FullName).Hash }
& pwsh -NoProfile -File (Join-Path $PSScriptRoot 'build-graph.ps1') *> $null
$after  = Get-ChildItem (Join-Path $repo 'graph') -File | Where-Object { $_.Extension -in '.json', '.jsonl' } |
          Sort-Object Name | ForEach-Object { (Get-FileHash $_.FullName).Hash }
Check 'graph is deterministic across rebuilds' (-not (Compare-Object $before $after)) `
      'two consecutive builds of the same substrate must be byte-identical'

# graph/ is committed and public. raw/ is gitignored because this repository is not
# licensed to redistribute what is in it -- purchased books, and access-controlled
# internal documents. Those two facts only stay compatible while nothing derived from
# raw/ reaches graph/, and gitignore does not enforce that: it stops the FILES being
# committed and says nothing about an index built from them. A scan that reached raw/
# put 98 internal document paths and titles into graph/nodes.jsonl. It was caught by
# the link gate, by luck, because internal documents link to internal hosts.
#
# This check removes the luck. Any gitignored path appearing in a committed derived
# artefact is a leak, whatever produced it, and the assertion is about the OUTPUT so
# it holds no matter how the exclusion list drifts.
#
# The pattern is '"([^"]*/)?<dir>/' and the optional group is load-bearing. The first
# version written here was '"[^"]*(^|/)<dir>/', which cannot match anything: '^'
# anchors to the start of the whole string, so after '[^"]*' the alternation collapses
# to '/' alone and a value that BEGINS with the directory -- which is exactly what a
# node id looks like -- slips through. That guard passed on a tree that had just
# leaked 98 records. A gate is not verified by running it on clean input; the
# negative test below is the check, and it must stay.
#
# The directory list is read from .gitignore, NOT from the filesystem. The first
# version enumerated directories that exist, which made it vacuous exactly where it
# matters most: in CI, a fresh clone has no raw/ at all, so it reported "checked 0
# gitignored top-level directories" and passed without testing anything. A guard whose
# coverage depends on the author's working copy is not a guard. Parsing the ignore
# rules gives the same answer on every machine, including one that has never held the
# material -- which is the machine standing between this repository and the public.
$leakPattern = { param($dir) '"([^"]*/)?' + [regex]::Escape($dir) + '/' }
if (('{"id":"raw/x/y","path":"raw/x/y.md"}' -notmatch (& $leakPattern 'raw')) -or
    ('{"id":"wiki/seminars/S066"}'          -match  (& $leakPattern 'raw'))) {
    throw 'leak-guard self-test failed: the pattern does not discriminate. Fix before trusting this gate.'
}
$ignoreFile = Join-Path $repo '.gitignore'
$ignoredDirs = @(Get-Content $ignoreFile |
                 ForEach-Object { $_.Trim() } |
                 Where-Object { $_ -and $_[0] -ne '#' -and $_[0] -ne '!' } |
                 Where-Object { $_ -match '^[A-Za-z0-9_.\-]+/$' } |
                 ForEach-Object { $_.TrimEnd('/') } |
                 Sort-Object -Unique)
if ($ignoredDirs.Count -eq 0) {
    throw 'leak-guard found no directory rules in .gitignore. Either the file moved or the parse broke; fix before trusting this gate.'
}
$derived = Get-ChildItem (Join-Path $repo 'graph') -File | Where-Object { $_.Extension -in '.json', '.jsonl' }
$leaks = foreach ($dir in $ignoredDirs) {
    foreach ($f in $derived) {
        if (Select-String -Path $f.FullName -Pattern (& $leakPattern $dir) -Quiet) {
            "graph/$($f.Name) references gitignored '$dir/'"
        }
    }
}
Check 'no gitignored path reaches the committed graph' ($leaks.Count -eq 0) `
      $(if ($leaks) { $leaks -join '; ' } else { "self-tested; $($ignoredDirs.Count) ignored dirs from .gitignore: $($ignoredDirs -join ', ')" })

# ---------------------------------------------------------------- links

Write-Host "`nlinks"
# The only legitimate unresolvable links are the format placeholders inside a
# fenced code block in the whitepaper standard.
# The only legitimate unresolvable links are the format placeholders inside a
# fenced code block in the whitepaper standard. Both path forms are listed: the
# archived programme's copy moved under archive/ on 2026-07-31 and its placeholders
# moved with it, which broke this allowlist and produced three failures that looked
# like real defects.
$PLACEHOLDERS = @(
    '/wiki/seminars/S0NN.md', '/wiki/modules/M0N.md', '/wiki/quarters/QN.md',
    '/archive/bsc-programme/seminars/S0NN.md', '/archive/bsc-programme/modules/M0N.md', '/archive/bsc-programme/quarters/QN.md'
)
# Test-Path answers "does this exist on THIS machine", which is the wrong question for
# a public repository. A link into a gitignored directory resolves for whoever holds
# the material and 404s for everyone else, so the gate passed locally and CI failed on
# ten links into raw/ -- copyrighted books this repository deliberately never commits.
# Anything under an ignored directory is broken by construction, wherever it is run.
$ignoredLinkPattern = '^/(' + (($ignoredDirs | ForEach-Object { [regex]::Escape($_) }) -join '|') + ')/'
$notAbsolute = @(); $broken = @()
foreach ($f in $md) {
    $src = ((Resolve-Path $f.FullName -Relative) -replace '^\.\\', '') -replace '\\', '/'
    foreach ($m in [regex]::Matches((Get-Content $f.FullName -Raw), '\]\((?!https?://|#|mailto:)([^)\s]+?)(?:#[^)]*)?\)')) {
        $l = $m.Groups[1].Value
        if ($l -notmatch '^/')                            { $notAbsolute += "$l <- $src" }
        elseif ($PLACEHOLDERS -contains $l)               { }
        elseif ($l -match $ignoredLinkPattern)            { $broken += "$l <- $src  (gitignored: never committed, so this 404s for every reader)" }
        elseif (-not (Test-Path $l.TrimStart('/')))       { $broken += "$l <- $src" }
    }
}
# A bare relative link resolves from its OWN file's directory, not the repo root,
# so `wiki/quarters/Q1.md` inside wiki/Home.md became wiki/wiki/quarters/Q1.md.
# That defect killed 10,166 links and the old check could not see it.
Check 'every link is root-absolute' ($notAbsolute.Count -eq 0) ($notAbsolute | Select-Object -First 3)
Check 'every link resolves'        ($broken.Count -eq 0)       ($broken      | Select-Object -First 3)

# ---------------------------------------------------------------- prohibitions

Write-Host "`nstanding prohibitions"
# These may appear ONLY on the two pages that exist to forbid them.
# NOTE the separator class. A backslash-only pattern matches nothing on Linux,
# which makes both of these checks scan zero files and pass vacuously — the
# worst failure a gate can have, because it looks like success.
$PROHIBITION_PAGES = @('09-Durable-and-Perishable-Register.md', '11-Microsoft-AI-Platform-Map.md')
$banned = '36%|agents launch in weeks rather than months|five-stage maturity'
$hits = @($md | Where-Object { $_.FullName -match '[\\/]wiki[\\/]' -and $PROHIBITION_PAGES -notcontains $_.Name } |
             Select-String -Pattern $banned | ForEach-Object { "$($_.Filename):$($_.LineNumber)" })
Check 'no prohibited claim asserted in the wiki' ($hits.Count -eq 0) ($hits | Select-Object -First 3)

# Narrow on purpose. "Cohen" in a discussion of agreement and "hedges" as a verb
# are legitimate; only a stated magnitude is not.
$effect = @($md | Where-Object { $_.FullName -match '[\\/]wiki[\\/]' } |
               Select-String -Pattern "\b[dg]\s*=\s*0?\.\d|Cohen's d\s*=|Hedges'?s?\s*g\s*=" |
               ForEach-Object { "$($_.Filename):$($_.LineNumber)" })
Check 'no effect size asserted in the wiki' ($effect.Count -eq 0) ($effect | Select-Object -First 3)

# ---------------------------------------------------------------- structure

Write-Host "`nstructure"
$papers   = @(Get-ChildItem wiki/whitepapers -Filter 'WP-*.md')
$seminars = @(Get-ChildItem wiki/seminars    -Filter 'S*.md')

$evidence = @(Get-Content graph/evidence.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
$byPaper  = $evidence | Group-Object whitepaper
Check 'every whitepaper sorts its claims into all four evidence classes' `
      (($byPaper | Where-Object { $_.Count -ne 4 }).Count -eq 0) `
      "$($byPaper.Count) papers, $($evidence.Count) rows"

$preds = @(Get-Content graph/predictions.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
Check 'every falsifiable prediction names an instrument' `
      (@($preds | Where-Object { -not $_.instrument }).Count -eq 0) "$($preds.Count) predictions"

$nodes = @(Get-Content graph/nodes.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
$noEntry = @($nodes | Where-Object { $_.kind -eq 'seminar' -and -not $_.satisfiable_from })
Check 'every seminar day declares an entry state' ($noEntry.Count -eq 0) `
      "$($seminars.Count) days"

$unpaired = @($seminars | Where-Object { -not (Test-Path ("wiki/whitepapers/WP-" + ($_.BaseName -replace '\D', '') + ".md")) })
Check 'every seminar day has its whitepaper' ($unpaired.Count -eq 0) `
      "$($papers.Count) papers"

# ---------------------------------------------------------------- server

Write-Host "`nserver"
if (Test-Path 'mcp/hve-iq/node_modules') {
    Push-Location 'mcp/hve-iq'
    $smoke = & node smoke.js 2>&1
    Pop-Location
    Check 'MCP smoke suite passes' ($LASTEXITCODE -eq 0) `
          (($smoke | Where-Object { $_ -match 'FAIL|all passed' }) -join ' ')
} else {
    Write-Host '  SKIP  MCP smoke suite — run npm install in mcp/hve-iq first'
}

# ---------------------------------------------------------------- result

Pop-Location
if ($failures.Count) {
    Write-Host "`n$($failures.Count) FAILED: $($failures -join '; ')`n" -ForegroundColor Red
    exit 1
}
Write-Host "`nall gates passed`n" -ForegroundColor Green
exit 0
