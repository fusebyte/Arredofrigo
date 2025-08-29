---
layout: hero
title: Contatti
---

<link rel="stylesheet" href="{{ '/assets/css/realizzazione-dettaglio.css' | relative_url }}">
<style>
.container {
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0073aa;

  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.container h3 {
  color: var(--brand-blue);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contatti-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}


.contatto-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.contatto-item:hover {
  background: #e9ecef;
  transform: translateY(-1px);
}

.contatto-item .icon {
  font-size: 1.3rem;
  margin-right: 1rem;
  min-width: 2rem;
  text-align: center;
}

.contatto-item {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.contatto-item:hover {
  color: var(--brand-blue);
}

.contatto-item[href*="wa.me"] {
  background: #e8f5e8 !important;
  border: 1px solid #25D366;
  color: #25D366 !important;
  font-weight: 600;
}

.contatto-item[href*="wa.me"]:hover {
  background: #d4f4d4 !important;
  color: #1da851 !important;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .contatto-item {
    padding: 1rem;
  }
  
  .btn-mappa {
    <!-- width: 90%; -->
    max-width: 300px;
    min-width: auto;
    margin: 0.5rem auto;
    display: block;
  }
  
  .mappa-link {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 1rem !important;
  }
}

.btn-mappa{
    margin: 5px;
    min-width: 200px;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    display: inline-block;
    font-size: 1rem;
}
</style>

<div class="container">
  
  <div class="contatti-grid">
    
    <!-- Card Informazioni Principali -->
      <h3>🏢 Informazioni Azienda</h3>

      <a href="https://wa.me/390572952803" target="_blank" class="contatto-item">
        <span class="icon">💬</span>
        <div>WhatsApp</div>
      </a>

      <a href="tel:+390572952803" class="contatto-item">
        <span class="icon">📞</span>
        <div>0572 952803</div>
      </a>

      <a href="tel:+393358398660" class="contatto-item">
        <span class="icon">📱</span>
        <div>335 8398660</div>
      </a>

      <a href="mailto:info@arredofrigo.net" class="contatto-item">
        <span class="icon">✉️</span>
        <div>info@arredofrigo.net</div>
      </a>

  </div>
</div>

<section class="container">
<h2>📍 Posizione</h2>
<p>Arredofrigo si trova a Pieve a Nievole, a soli 2 km dall'uscita Montecatini Terme dell'Autostrada A11</p>
<div class="maps-container mappa-container">
    {% assign search_query = 'Arredofrigo di Simone Pacini, Pieve a Nievole' %}
    <iframe 
    src="https://maps.google.com/maps?q={{ search_query }}&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy"
    title="Mappa di {{ page.nome }}, {{ page.citta }}">
    </iframe>
    <div class="mappa-info">
    <p>� <a href='tel:+390572952803'>Chiamaci</a> per fissare un appuntamento</p>
    </div>
    <div class="mappa-link" style="display:flex; justify-content:space-evenly; flex-wrap:wrap;">
    <a href="https://maps.app.goo.gl/RzG2moj1iwsGgCYu6" target="_blank" rel="noopener noreferrer" class="btn-mappa" style="background: #a52222;">
        🗺️ Apri in Google Maps
    </a>
    <a href="tel:+390572952803" class="btn-mappa">
        📞 Fissa un appuntamento
    </a>
    </div>
</div>
</section>
