# Creates original Chrome Web Store artwork and full-bleed crops of real screenshots.
# Requires Windows PowerShell/PowerShell on Windows with System.Drawing.
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$iconDirectory = Join-Path $projectRoot 'icons'
$storeDirectory = Join-Path $projectRoot 'store/assets'
New-Item -ItemType Directory -Force -Path $iconDirectory, $storeDirectory | Out-Null

function Get-StoreColor([string]$hex) {
  return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function Draw-BrandMark($graphics, [float]$x, [float]$y, [float]$scale) {
  $state = $graphics.Save()
  $graphics.TranslateTransform($x, $y)
  $graphics.ScaleTransform($scale, $scale)
  $panel = [System.Drawing.SolidBrush]::new((Get-StoreColor '#0b1220'))
  $cyan = [System.Drawing.Pen]::new((Get-StoreColor '#22d3ee'), 4)
  $yellow = [System.Drawing.Pen]::new((Get-StoreColor '#fde047'), 5)
  $pink = [System.Drawing.SolidBrush]::new((Get-StoreColor '#ec4899'))
  try {
    # The 96-pixel mark sits inside 16 pixels of transparent padding at 128x128.
    $graphics.FillRectangle($panel, 16, 16, 96, 96)
    $graphics.DrawRectangle($cyan, 18, 18, 92, 92)
    $graphics.FillRectangle($pink, 78, 16, 34, 6)
    $graphics.DrawLines($cyan, [System.Drawing.PointF[]]@(
      [System.Drawing.PointF]::new(39, 43),
      [System.Drawing.PointF]::new(57, 64),
      [System.Drawing.PointF]::new(39, 85)
    ))
    $graphics.DrawLine($yellow, 65, 85, 91, 85)
  } finally {
    $panel.Dispose(); $cyan.Dispose(); $yellow.Dispose(); $pink.Dispose()
    $graphics.Restore($state)
  }
}

function New-StoreBitmap([int]$width, [int]$height) {
  return [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
}

function Save-StorePng($bitmap, [string]$path) {
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output "Created $([System.IO.Path]::GetRelativePath($projectRoot, $path))"
}

foreach ($size in @(16, 48, 128)) {
  $bitmap = New-StoreBitmap $size $size
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  try {
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    Draw-BrandMark $graphics 0 0 ($size / 128.0)
    Save-StorePng $bitmap (Join-Path $iconDirectory "icon$size.png")
  } finally {
    $graphics.Dispose(); $bitmap.Dispose()
  }
}

function Draw-PromoBackground($graphics, [int]$width, [int]$height, [int]$gridSize) {
  $graphics.Clear((Get-StoreColor '#070b12'))
  $grid = [System.Drawing.Pen]::new((Get-StoreColor '#173040'), 1)
  $frame = [System.Drawing.Pen]::new((Get-StoreColor '#22d3ee'), 3)
  $pink = [System.Drawing.SolidBrush]::new((Get-StoreColor '#ec4899'))
  try {
    for ($x = 0; $x -lt $width; $x += $gridSize) { $graphics.DrawLine($grid, $x, 0, $x, $height) }
    for ($y = 0; $y -lt $height; $y += $gridSize) { $graphics.DrawLine($grid, 0, $y, $width, $y) }
    $graphics.DrawRectangle($frame, 10, 10, $width - 21, $height - 21)
    $graphics.FillRectangle($pink, 10, 10, [Math]::Min(120, $width / 4), 6)
  } finally {
    $grid.Dispose(); $frame.Dispose(); $pink.Dispose()
  }
}

function Draw-PromoText($graphics, [int]$size, [int]$x, [int]$y) {
  $cyan = [System.Drawing.SolidBrush]::new((Get-StoreColor '#22d3ee'))
  $yellow = [System.Drawing.SolidBrush]::new((Get-StoreColor '#fde047'))
  $pink = [System.Drawing.SolidBrush]::new((Get-StoreColor '#ec4899'))
  $large = [System.Drawing.Font]::new('Consolas', [float]$size, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $medium = [System.Drawing.Font]::new('Consolas', [float]($size * 0.78), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $small = [System.Drawing.Font]::new('Consolas', [float]($size * 0.42), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  try {
    $graphics.DrawString('SYSTEM ONLINE', $small, $pink, [float]$x, [float]$y)
    $graphics.DrawString('CYBERSTART', $large, $cyan, [float]$x, [float]($y + $size * 0.9))
    $graphics.DrawString('2077 CUSTOM', $medium, $yellow, [float]$x, [float]($y + $size * 2.1))
    $graphics.DrawString('NEW TAB / HOMELAB', $small, $cyan, [float]$x, [float]($y + $size * 3.8))
  } finally {
    $cyan.Dispose(); $yellow.Dispose(); $pink.Dispose()
    $large.Dispose(); $medium.Dispose(); $small.Dispose()
  }
}

$promos = @(
  @{ Name = 'promo-small.png'; Width = 440; Height = 280; Grid = 32; TextSize = 26; X = 26; Y = 43; IconX = 288; IconY = 83; IconScale = 1.05 },
  @{ Name = 'promo-marquee.png'; Width = 1400; Height = 560; Grid = 50; TextSize = 72; X = 92; Y = 100; IconX = 970; IconY = 115; IconScale = 2.55 }
)
foreach ($promo in $promos) {
  $bitmap = New-StoreBitmap $promo.Width $promo.Height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    Draw-PromoBackground $graphics $promo.Width $promo.Height $promo.Grid
    Draw-PromoText $graphics $promo.TextSize $promo.X $promo.Y
    Draw-BrandMark $graphics $promo.IconX $promo.IconY $promo.IconScale
    Save-StorePng $bitmap (Join-Path $storeDirectory $promo.Name)
  } finally {
    $graphics.Dispose(); $bitmap.Dispose()
  }
}

for ($number = 1; $number -le 2; $number++) {
  $sourcePath = Join-Path $projectRoot ('screenshots/{0:000}.png' -f $number)
  $source = [System.Drawing.Image]::FromFile($sourcePath)
  $bitmap = New-StoreBitmap 1280 800
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  try {
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $cropWidth = [int][Math]::Round($source.Height * 1.6)
    $cropX = [int][Math]::Floor(($source.Width - $cropWidth) / 2)
    $destination = [System.Drawing.Rectangle]::new(0, 0, 1280, 800)
    $crop = [System.Drawing.Rectangle]::new($cropX, 0, $cropWidth, $source.Height)
    $graphics.DrawImage($source, $destination, $crop, [System.Drawing.GraphicsUnit]::Pixel)
    Save-StorePng $bitmap (Join-Path $storeDirectory ('screenshot-{0:00}.png' -f $number))
  } finally {
    $graphics.Dispose(); $bitmap.Dispose(); $source.Dispose()
  }
}
