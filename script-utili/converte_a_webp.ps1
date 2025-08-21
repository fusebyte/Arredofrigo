$quality = 80
$maxWidth = 1600

$images = Get-ChildItem -Path . -File | Where-Object { $_.Extension -match '(\.png|\.jpe?g)$' }


# Controlla se magick è disponibile
if (Get-Command magick -ErrorAction SilentlyContinue) {
    Write-Host "Trovato ImageMagick"
    $images | ForEach-Object {
        $output = "$($_.BaseName).webp"
        magick $_.FullName -auto-orient -resize "${maxWidth}>" -quality $quality $output
        Write-Host "Convertito $($_.Name) -> $output"
    }
} else {
    Write-Host "ImageMagick non trovato. Per installarlo: winget install ImageMagick.Q16-HDRI"
    Write-Host "Fallback su cwebp..."
    $images | ForEach-Object {
        $output = "$($_.BaseName).webp"
        cwebp $_.FullName -q $quality -metadata all -o $output
        Write-Host "Convertito $($_.Name) -> $output"
    }
}
