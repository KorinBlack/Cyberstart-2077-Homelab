# Builds the extension and creates the ZIP to upload to the Chrome Web Store.
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$manifest = Get-Content -Raw (Join-Path $projectRoot 'manifest.json') | ConvertFrom-Json
$version = $manifest.version
$outputDirectory = Join-Path $projectRoot 'dist'
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

Push-Location $projectRoot
try {
  & node 'scripts/build.cjs'
  if ($LASTEXITCODE -ne 0) { throw 'JavaScript build failed.' }
} finally {
  Pop-Location
}

$rootFiles = @(
  'manifest.json', 'index.html', 'title-bootstrap.js', 'terminal.svg',
  'PRIVACY_POLICY.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md',
  'scripts/build.cjs'
)
$files = @($rootFiles | ForEach-Object { Get-Item -LiteralPath (Join-Path $projectRoot $_) })
foreach ($directory in @('assets', 'icons', 'src')) {
  $files += @(Get-ChildItem -LiteralPath (Join-Path $projectRoot $directory) -File -Recurse)
}

$outputPath = Join-Path $outputDirectory "cyberstart-2077-custom-v$version-store.zip"
$stream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
$archive = [System.IO.Compression.ZipArchive]::new($stream, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($file in $files) {
    $entryName = [System.IO.Path]::GetRelativePath($projectRoot, $file.FullName).Replace('\', '/')
    $entry = $archive.CreateEntry($entryName, [System.IO.Compression.CompressionLevel]::Optimal)
    $source = [System.IO.File]::OpenRead($file.FullName)
    $destination = $entry.Open()
    try { $source.CopyTo($destination) }
    finally { $destination.Dispose(); $source.Dispose() }
  }
} finally {
  $archive.Dispose()
  $stream.Dispose()
}

Write-Output "Created $([System.IO.Path]::GetRelativePath($projectRoot, $outputPath)) with $($files.Count) files."
