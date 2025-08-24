#!/bin/bash

# Parametri configurabili
QUALITY=80
MAX_WIDTH=1600

# Directory di input: relativa allo script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
IMG_DIR="$SCRIPT_DIR/../assets/img"

# Controlla se è stato passato l'argomento --force
FORCE=false
if [ "$1" == "--force" ]; then
  FORCE=true
  echo "Modalità FORZATA: rigenero tutti i WebP anche se esistono già."
fi

echo "Conversione immagini in corso nella cartella: $IMG_DIR"

# Cerca ricorsivamente file immagine
find "$IMG_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  output="${img%.*}.webp"

  if [ -f "$output" ] && [ "$FORCE" = false ]; then
    echo "Salto $img (già convertito)"
  else
    echo "Convertendo $img -> $output"
    magick "$img" -auto-orient -resize "${MAX_WIDTH}>" -quality $QUALITY "$output"
  fi
done

echo "Operazione completata!"
