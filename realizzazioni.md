---
layout: default
title: Realizzazioni
permalink: /realizzazioni
---

<!-- Link ai file CSS e JS -->
<link rel="stylesheet" href="{{ '/assets/css/realizzazioni.css' | relative_url }}">

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
      <option value="bisteccheria">Bisteccherie</option>
      <option value="scuola alberghiera">Scuole Alberghiere</option>
      <option value="agriturismo">Agriturismo</option>
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

<!-- Dati per JavaScript -->
<script>
// Dati delle realizzazioni per JavaScript
let realizzazioniData = [
  {% for realizzazione in site.data.realizzazioni %}
  {
    nome: "{{ realizzazione.nome }}",
    citta: "{{ realizzazione.citta }}",
    tipo: {% if realizzazione.tipo.size > 1 %}{{ realizzazione.tipo | jsonify }}{% else %}["{{ realizzazione.tipo | first | default: 'ristorante' }}"]{% endif %},
    descrizione: "{{ realizzazione.descrizione | escape }}",
    cartella_foto: "{{ realizzazione.cartella_foto | default: realizzazione.nome | slugify | prepend: '/assets/img/realizzazioni/' }}",
    foto_copertina: "{{ realizzazione.foto_copertina | default: 'foto1.jpg' }}",
    slug: "{{ realizzazione.slug | default: realizzazione.nome | slugify }}"
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>

<!-- Link al JavaScript -->
<script src="{{ '/assets/js/realizzazioni.js' | relative_url }}"></script>
