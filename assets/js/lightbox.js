// JavaScript per il lightbox delle realizzazioni

let currentImageIndex = 0;
let images = [];
let descriptions = [];
let currentScale = 1;
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let isCadMode = false; // Flag per distinguere modalità CAD da galleria
let cadImages = [];

// Inizializza le immagini quando la pagina si carica
document.addEventListener('DOMContentLoaded', function() {
  images = Array.from(document.querySelectorAll('.foto-item img')).map(img => ({
    src: img.src,
    alt: img.alt
  }));
  
  // Crea array delle descrizioni
  descriptions = Array.from(document.querySelectorAll('.foto-item')).map(item => {
    const descrizioneEl = item.querySelector('.foto-nome');
    return descrizioneEl ? descrizioneEl.textContent.trim() : '';
  });

  // Inizializza le immagini CAD
  cadImages = Array.from(document.querySelectorAll('.cad-image-wrapper img')).map(img => ({
    src: img.src,
    alt: img.alt
  }));
});

function openLightbox(index) {
  isCadMode = false; // Modalità galleria normale
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-description');

  const counter = document.getElementById('lightbox-counter');
  
  // Reset zoom e posizione
  currentScale = 1;
  translateX = 0;
  translateY = 0;
  
  if (images[index]) {
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    lightboxImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    counter.textContent = `${index + 1} / ${images.length}`;
    
    // Mostra la descrizione se disponibile
    if (descriptions[index]) {
      lightboxTitle.textContent = descriptions[index];
    } else {
      lightboxTitle.textContent = 'Immagine';
    }
    
    // Mostra i controlli di navigazione solo se ci sono più immagini
    const navButtons = document.querySelectorAll('.lightbox-nav');
    navButtons.forEach(btn => {
      btn.style.display = images.length > 1 ? 'block' : 'none';
    });
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Aggiungi event listeners per zoom e drag
    setupImageInteractions(lightboxImg);
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  isCadMode = false;
  // Reset zoom e posizione
  currentScale = 1;
  translateX = 0;
  translateY = 0;
  
  const lightboxImg = document.getElementById('lightbox-image');
  if (lightboxImg) {
    lightboxImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  }
}

// Funzione specifica per il lightbox CAD
function openLightboxCAD(imageSrc, title) {
  isCadMode = true; // Modalità CAD
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxDescription = document.getElementById('lightbox-description');
  const counter = document.getElementById('lightbox-counter');

  if (counter) {
    counter.textContent = `1 / 1`;
  }

  // Reset zoom e posizione
  currentScale = 1;
  translateX = 0;
  translateY = 0;
  
  lightboxImg.src = imageSrc;
  lightboxImg.alt = title;
  lightboxImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  
  if (lightboxDescription) {
    lightboxDescription.textContent = title;
    lightboxDescription.style.display = 'block';
  }
  
  lightbox.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Aggiungi event listeners per zoom e drag
  setupImageInteractions(lightboxImg);
}

function navigateImage(direction) {

  let curImagesList = isCadMode ? cadImages : images;

  if (curImagesList.length <= 1) return;
  
  currentImageIndex += direction;

  if (currentImageIndex >= curImagesList.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = curImagesList.length - 1;
  }
  
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-description');
  const counter = document.getElementById('lightbox-counter');
  
  // Reset zoom e posizione per la nuova immagine
  currentScale = 1;
  translateX = 0;
  translateY = 0;

  lightboxImg.src = curImagesList[currentImageIndex].src;
  lightboxImg.alt = curImagesList[currentImageIndex].alt;
  lightboxImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
  counter.textContent = `${currentImageIndex + 1} / ${curImagesList.length}`;

  // Aggiorna la descrizione
  if (descriptions[currentImageIndex]) {
    lightboxTitle.textContent = descriptions[currentImageIndex];
  } else {
    lightboxTitle.textContent = 'Immagine';
  }
  
  // Rimuovi e aggiungi nuovamente i listener per la nuova immagine
  setupImageInteractions(lightboxImg);
}

function setupImageInteractions(img) {
  // Rimuovi event listeners esistenti per evitare duplicati
  img.onwheel = null;
  img.onmousedown = null;
  img.onmousemove = null;
  img.onmouseup = null;
  img.onmouseleave = null;
  
  // Zoom con rotella del mouse
  img.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.5, Math.min(3, currentScale + delta));
    
    if (newScale !== currentScale) {
      currentScale = newScale;
      img.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
      
      // Aggiungi classe per indicare che l'immagine è zoomata
      if (currentScale > 1) {
        img.classList.add('zoomed');
      } else {
        img.classList.remove('zoomed');
        translateX = 0;
        translateY = 0;
        img.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
      }
    }
  });
  
  // Dragging per spostare l'immagine quando è zoomata
  img.addEventListener('mousedown', function(e) {
    if (currentScale > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      img.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });
  
  img.addEventListener('mousemove', function(e) {
    if (isDragging && currentScale > 1) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
    
      // Limita il trascinamento per evitare di trascinare troppo lontano
      const maxTranslate = 200 * currentScale;
      translateX = Math.min(Math.max(translateX, -maxTranslate), maxTranslate);
      translateY = Math.min(Math.max(translateY, -maxTranslate), maxTranslate);

      img.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    }
  });
  
  img.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      img.style.cursor = currentScale > 1 ? 'grab' : 'grab';
    }
  });
  
  img.addEventListener('mouseleave', function() {
    if (isDragging) {
      isDragging = false;
      img.style.cursor = currentScale > 1 ? 'grab' : 'grab';
    }
  });
  
  // Double click per reset zoom
  img.addEventListener('dblclick', function() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    img.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    img.classList.remove('zoomed');
  });
}

// Gestione tasti per navigazione
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === '0' || e.key === 'r') {
            // Tasto 0 o R per reset zoom
            const lightboxImg = document.getElementById('lightbox-img');
            currentScale = 1;
            translateX = 0;
            translateY = 0;
            lightboxImg.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
            lightboxImg.classList.remove('zoomed');
        }
  }
});
