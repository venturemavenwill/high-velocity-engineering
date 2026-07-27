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

$md = Get-ChildItem -Recurse -File -Filter *.md | Where-Object { $_.FullName -notmatch '\\(node_modules|\.git)\\' }

Write-Host "`nHVE IQ verification gate`n"

# ---------------------------------------------------------------- graph

Write-Host 'graph'
$build = & pwsh -NoProfile -File (Join-Path $PSScriptRoot 'build-graph.ps1') 2>&1
Check 'graph rebuilds without warnings' (-not ($build | Where-Object { $_ -match 'WARNING|Exception' })) `
      (($build | Where-Object { $_ -match '^nodes:' }) -join '')

# ---------------------------------------------------------------- links

Write-Host "`nlinks"
# The only legitimate unresolvable links are the format placeholders inside a
# fenced code block in the whitepaper standard.
$PLACEHOLDERS = @('/wiki/seminars/S0NN.md', '/wiki/modules/M0N.md', '/wiki/quarters/QN.md')
$notAbsolute = @(); $broken = @()
foreach ($f in $md) {
    $src = ((Resolve-Path $f.FullName -Relative) -replace '^\.\\', '') -replace '\\', '/'
    foreach ($m in [regex]::Matches((Get-Content $f.FullName -Raw), '\]\((?!https?://|#|mailto:)([^)\s]+?)(?:#[^)]*)?\)')) {
        $l = $m.Groups[1].Value
        if ($l -notmatch '^/')                                                      { $notAbsolute += "$l <- $src" }
        elseif (($PLACEHOLDERS -notcontains $l) -and -not (Test-Path $l.TrimStart('/'))) { $broken += "$l <- $src" }
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
$PROHIBITION_PAGES = @('09-Durable-and-Perishable-Register.md', '11-Microsoft-AI-Platform-Map.md')
$banned = '36%|agents launch in weeks rather than months|five-stage maturity'
$hits = @($md | Where-Object { $_.FullName -match '\\wiki\\' -and $PROHIBITION_PAGES -notcontains $_.Name } |
             Select-String -Pattern $banned | ForEach-Object { "$($_.Filename):$($_.LineNumber)" })
Check 'no prohibited claim asserted in the wiki' ($hits.Count -eq 0) ($hits | Select-Object -First 3)

# Narrow on purpose. "Cohen" in a discussion of agreement and "hedges" as a verb
# are legitimate; only a stated magnitude is not.
$effect = @($md | Where-Object { $_.FullName -match '\\wiki\\' } |
               Select-String -Pattern "\b[dg]\s*=\s*0?\.\d|Cohen's d\s*=|Hedges'?s?\s*g\s*=" |
               ForEach-Object { "$($_.Filename):$($_.LineNumber)" })
Check 'no effect size asserted in the wiki' ($effect.Count -eq 0) ($effect | Select-Object -First 3)

# ---------------------------------------------------------------- structure

Write-Host "`nstructure"
$papers   = @(Get-ChildItem wiki\whitepapers -Filter 'WP-*.md')
$seminars = @(Get-ChildItem wiki\seminars    -Filter 'S*.md')

$evidence = @(Get-Content graph\evidence.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
$byPaper  = $evidence | Group-Object whitepaper
Check 'every whitepaper sorts its claims into all four evidence classes' `
      (($byPaper | Where-Object { $_.Count -ne 4 }).Count -eq 0) `
      "$($byPaper.Count) papers, $($evidence.Count) rows"

$preds = @(Get-Content graph\predictions.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
Check 'every falsifiable prediction names an instrument' `
      (@($preds | Where-Object { -not $_.instrument }).Count -eq 0) "$($preds.Count) predictions"

$nodes = @(Get-Content graph\nodes.jsonl | ForEach-Object { $_ | ConvertFrom-Json })
$noEntry = @($nodes | Where-Object { $_.kind -eq 'seminar' -and -not $_.satisfiable_from })
Check 'every seminar day declares an entry state' ($noEntry.Count -eq 0) `
      "$($seminars.Count) days"

$unpaired = @($seminars | Where-Object { -not (Test-Path ("wiki\whitepapers\WP-" + ($_.BaseName -replace '\D', '') + ".md")) })
Check 'every seminar day has its whitepaper' ($unpaired.Count -eq 0) `
      "$($papers.Count) papers"

# ---------------------------------------------------------------- server

Write-Host "`nserver"
if (Test-Path 'mcp\hve-iq\node_modules') {
    Push-Location 'mcp\hve-iq'
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
