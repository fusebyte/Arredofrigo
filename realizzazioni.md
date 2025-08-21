---
layout: default
title: Realizzazioni
---

## Realizzazioni recenti

<!-- Filtri e ricerca -->
<div class="realizzazioni-controls">
  <div class="search-container">
    <input type="text" id="search-input" placeholder="🔍 Cerca per nome o città..." onkeyup="filterRealizzazioni()">
  </div>
  <div class="filter-container">
    <label for="tipo-filter">Filtra per tipo:</label>
    <select id="tipo-filter" onchange="filterRealizzazioni()">
      <option value="tutti">Tutti</option>
      <option value="ristorante">Ristoranti</option>
      <option value="pizzeria">Pizzerie</option>
      <option value="bar">Bar</option>
      <option value="pasticceria">Pasticcerie</option>
      <option value="scuola alberghiera">Scuole Alberghiere</option>
    </select>
  </div>
  <div class="sort-container">
    <label for="sort-select">Ordina per:</label>
    <select id="sort-select" onchange="sortRealizzazioni()">
      <option value="nome">Nome</option>
      <option value="citta">Città</option>
      <option value="tipo">Tipo</option>
    </select>
  </div>
</div>

<div class="realizzazioni-gallery" id="realizzazioni-gallery">
  <!-- Le realizzazioni vengono caricate dinamicamente tramite JavaScript -->
</div>

<style>
/* Controlli per filtri e ricerca */
.realizzazioni-controls {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  align-items: end;
}

.search-container input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-container input:focus {
  outline: none;
  border-color: #0073aa;
}

.filter-container, .sort-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-container label, .sort-container label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.filter-container select, .sort-container select {
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.filter-container select:focus, .sort-container select:focus {
  outline: none;
  border-color: #0073aa;
}

/* Risultati e statistiche */
.realizzazioni-stats {
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  background: #e8f4f8;
  border-radius: 8px;
  border-left: 4px solid #0073aa;
}

.realizzazioni-stats strong {
  color: #0073aa;
  font-size: 1.1rem;
}

/* Messaggio nessun risultato */
.no-results {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
  background: #f9f9f9;
  border-radius: 12px;
  margin: 2rem 0;
}

.no-results .emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.realizzazioni-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.realizzazione-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.realizzazione-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.realizzazione-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.realizzazione-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.realizzazione-card:hover .realizzazione-image img {
  transform: scale(1.1);
}

.realizzazione-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
  color: white;
  padding: 1.5rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.realizzazione-card:hover .realizzazione-overlay {
  transform: translateY(0);
}

.realizzazione-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.realizzazione-info .location {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.meta-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.meta-info .location {
  margin: 0;
}

/* Badge per il tipo di locale */
.tipo-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #0073aa;
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
}

.tipo-badge.ristorante { background: #28a745; }
.tipo-badge.pizzeria { background: #fd7e14; }
.tipo-badge.bar { background: #6f42c1; }
.tipo-badge.pasticceria { background: #e83e8c; }
.tipo-badge.scuola { background: #20c997; }
.tipo-badge.trattoria { background: #dc3545; }
.tipo-badge.osteria { background: #17a2b8; }
.tipo-badge.default { background: #6c757d; }

.realizzazione-info .description {
  margin: 0 0 1rem 0;
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.8;
}

.btn-dettagli {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #0073aa;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-dettagli:hover {
  background: #005a87;
}

@media (max-width: 768px) {
  .realizzazioni-controls {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .realizzazioni-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .realizzazione-card {
    margin: 0 1rem;
  }
  
  .realizzazione-overlay {
    transform: translateY(0);
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 70%, transparent 100%);
  }
  
  .meta-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .tipo-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }
}
</style>

<script>
// Dati delle realizzazioni per JavaScript
let realizzazioniData = [
  {% for realizzazione in site.data.realizzazioni %}
  {
    nome: "{{ realizzazione.nome }}",
    citta: "{{ realizzazione.citta }}",
    tipo: "{{ realizzazione.tipo | default: 'ristorante' }}",
    descrizione: "{{ realizzazione.descrizione | escape }}",
    cartella_foto: "{{ realizzazione.cartella_foto | default: realizzazione.nome | slugify | prepend: '/assets/img/realizzazioni/' }}",
    foto_copertina: "{{ realizzazione.foto_copertina | default: 'foto1.jpg' }}",
    slug: "{{ realizzazione.slug | default: realizzazione.nome | slugify }}"
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

let realizzazioniFiltrate = [...realizzazioniData];

// Funzione per generare il badge del tipo
function getTipoBadge(tipo) {
  const tipi = {
    'ristorante': { emoji: '🍽️', label: 'Ristorante', class: 'ristorante' },
    'pizzeria': { emoji: '🍕', label: 'Pizzeria', class: 'pizzeria' },
    'bar': { emoji: '☕', label: 'Bar', class: 'bar' },
    'pasticceria': { emoji: '🧁', label: 'Pasticceria', class: 'pasticceria' },
    'scuola alberghiera': { emoji: '🎓', label: 'Scuola Alberghiera', class: 'scuola' },
    'trattoria': { emoji: '🍝', label: 'Trattoria', class: 'trattoria' },
    'osteria': { emoji: '🐟', label: 'Osteria', class: 'osteria' }
  };
  
  const tipoInfo = tipi[tipo] || { emoji: '🏪', label: 'Locale', class: 'default' };
  return `<span class="tipo-badge ${tipoInfo.class}">${tipoInfo.emoji} ${tipoInfo.label}</span>`;
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
    <div class="realizzazione-card" data-tipo="${realizzazione.tipo}">
      <div class="realizzazione-image">
        <img src="${realizzazione.cartella_foto}/${realizzazione.foto_copertina}" 
             alt="${realizzazione.nome}" loading="lazy">
        <div class="realizzazione-overlay">
          <div class="realizzazione-info">
            <h3>${realizzazione.nome}</h3>
            <div class="meta-info">
              <p class="location">📍 ${realizzazione.citta}</p>
              ${getTipoBadge(realizzazione.tipo)}
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
    <p>Mostrando <strong>${count}</strong> di <strong>${realizzazioniData.length}</strong> realizzazioni</p>
  `;
}

// Funzione di filtro e ricerca
function filterRealizzazioni() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const tipoFilter = document.getElementById('tipo-filter').value;
  
  realizzazioniFiltrate = realizzazioniData.filter(realizzazione => {
    const matchesSearch = realizzazione.nome.toLowerCase().includes(searchTerm) || 
                         realizzazione.citta.toLowerCase().includes(searchTerm) ||
                         (realizzazione.descrizione && realizzazione.descrizione.toLowerCase().includes(searchTerm));
    
    const matchesTipo = tipoFilter === 'tutti' || realizzazione.tipo === tipoFilter;
    
    return matchesSearch && matchesTipo;
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
        return a.tipo.localeCompare(b.tipo);
      default:
        return 0;
    }
  });
  
  renderRealizzazioni(realizzazioniFiltrate);
}

// Inizializzazione quando la pagina si carica
document.addEventListener('DOMContentLoaded', function() {
  renderRealizzazioni(realizzazioniData);
  
  // Aggiungi event listener per ricerca in tempo reale
  document.getElementById('search-input').addEventListener('input', filterRealizzazioni);
});
</script>