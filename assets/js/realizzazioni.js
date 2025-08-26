// JavaScript per la gestione delle realizzazioni

let realizzazioniFiltrate = [];

// Funzione per generare i badge dei tipi (supporta array)
function getTipiBadges(tipi) {
  const tipiInfo = {
    'ristorante': { emoji: '🍽️', label: 'Ristorante', class: 'ristorante' },
    'pizzeria': { emoji: '🍕', label: 'Pizzeria', class: 'pizzeria' },
    'bar': { emoji: '☕', label: 'Bar', class: 'bar' },
    'pasticceria': { emoji: '🧁', label: 'Pasticceria', class: 'pasticceria' },
    'bisteccheria': { emoji: '🥩', label: 'Bisteccheria', class: 'bisteccheria' },
    'scuola alberghiera': { emoji: '🎓', label: 'Scuola Alberghiera', class: 'scuola' },
    'trattoria': { emoji: '🍝', label: 'Trattoria', class: 'trattoria' },
    'osteria': { emoji: '🐟', label: 'Osteria', class: 'osteria' },
    'agriturismo' : { emoji: '🌾', label: 'Agriturismo', class: 'agriturismo' },
    'supermercato' : { emoji: '🛒', label: 'Supermercato', class: 'supermercato' },
    'mensa' : { emoji: '🍽️', label: 'Mensa Aziendale', class: 'mensa' },
    'pesce' : { emoji: '🐟', label: 'Pesce', class: 'pesce' }
  };
  
  // Se tipi è una stringa, la convertiamo in array
  const tipiArray = Array.isArray(tipi) ? tipi : [tipi];
  
  return tipiArray.map(tipo => {
    const tipoInfo = tipiInfo[tipo] || { emoji: '🏪', label: 'Locale', class: 'default' };
    return `<span class="tipo-badge ${tipoInfo.class}">${tipoInfo.emoji} ${tipoInfo.label}</span>`;
  }).join(' ');
}

// Funzione per renderizzare le realizzazioni
function renderRealizzazioni(realizzazioni) {
  const gallery = document.getElementById('realizzazioni-gallery');
  
  if (realizzazioni.length === 0) {
    gallery.innerHTML = `
      <div class="no-results">
        <span class="emoji">🔍</span>
        <p>Nessuna realizzazione trovata con i criteri selezionati.</p>
        <p>Prova a modificare i filtri di ricerca.</p>
      </div>
    `;
    return;
  }
  
  gallery.innerHTML = realizzazioni.map(realizzazione => `
    <div class="realizzazione-card" data-tipo="${Array.isArray(realizzazione.tipo) ? realizzazione.tipo.join(',') : realizzazione.tipo}">
      <div class="realizzazione-image">
        <img src="${realizzazione.cartella_foto}/${realizzazione.foto_copertina}" 
             alt="${realizzazione.nome}" loading="lazy">
        <div class="realizzazione-overlay">
          <div class="realizzazione-info">
            <h3>${realizzazione.nome}</h3>
            <div class="meta-info">
              <p class="location">📍 ${realizzazione.citta}</p>
              <div class="badges-container">
                ${getTipiBadges(realizzazione.tipo)}
                ${realizzazione.disegno_cad ? '<span class="cad-badge">📐 CAD</span>' : ''}
              </div>
            </div>
            ${realizzazione.descrizione ? `<p class="description">${realizzazione.descrizione.substring(0, 100)}...</p>` : ''}
          </div>
          <a href="/realizzazioni/${realizzazione.slug}.html" class="btn-dettagli">Vedi dettagli</a>
        </div>
      </div>
    </div>
  `).join('');
  
  // Aggiorna le statistiche
  updateStats(realizzazioni.length);
}

// Funzione per aggiornare le statistiche
function updateStats(count) {
  let statsElement = document.querySelector('.realizzazioni-stats');
  if (!statsElement) {
    statsElement = document.createElement('div');
    statsElement.className = 'realizzazioni-stats';
    document.querySelector('.realizzazioni-controls').insertAdjacentElement('afterend', statsElement);
  }
  
  statsElement.innerHTML = `
    <p>Mostrando <strong>${count}</strong> realizzazioni</p>
  `; //  di <strong>${realizzazioniData.length}</strong> 
}

// Funzione di filtro e ricerca
function filterRealizzazioni() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const tipoFilter = document.getElementById('tipo-filter').value;
  const cadFilter = document.getElementById('cad-filter').checked;
  
  realizzazioniFiltrate = realizzazioniData.filter(realizzazione => {
    const matchesSearch = realizzazione.nome.toLowerCase().includes(searchTerm) || 
                         realizzazione.citta.toLowerCase().includes(searchTerm) ||
                         (realizzazione.descrizione && realizzazione.descrizione.toLowerCase().includes(searchTerm));
    
    // Gestisce sia array che stringhe per il tipo
    const tipiArray = Array.isArray(realizzazione.tipo) ? realizzazione.tipo : [realizzazione.tipo];
    const matchesTipo = tipoFilter === 'tutti' || tipiArray.includes(tipoFilter);
    
    // Filtro CAD: se attivo, mostra solo realizzazioni con disegno_cad
    const matchesCad = !cadFilter || (realizzazione.disegno_cad && realizzazione.disegno_cad.trim() !== '');
    
    return matchesSearch && matchesTipo && matchesCad;
  });
  
  renderRealizzazioni(realizzazioniFiltrate);
}

// Funzione di ordinamento
function sortRealizzazioni() {
  const sortBy = document.getElementById('sort-select').value;
  
  realizzazioniFiltrate.sort((a, b) => {
    switch(sortBy) {
      case 'nome':
        return a.nome.localeCompare(b.nome);
      case 'citta':
        return a.citta.localeCompare(b.citta);
      case 'tipo':
        // Per ordinamento tipo, usa il primo tipo nell'array
        const tipoA = Array.isArray(a.tipo) ? a.tipo[0] : a.tipo;
        const tipoB = Array.isArray(b.tipo) ? b.tipo[0] : b.tipo;
        return tipoA.localeCompare(tipoB);
      default:
        return 0;
    }
  });
  
  renderRealizzazioni(realizzazioniFiltrate);
}

// Inizializzazione quando la pagina si carica
function initRealizzazioni() {
  realizzazioniFiltrate = [...realizzazioniData];
  renderRealizzazioni(realizzazioniData);
  
  // Aggiungi event listener per ricerca in tempo reale
  document.getElementById('search-input').addEventListener('input', filterRealizzazioni);
}

// Avvia l'inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initRealizzazioni);
