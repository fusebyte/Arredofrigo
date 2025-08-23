---
layout: hero
title: Contatti
---

**Arredofrigo**  
Via Arno 27/A  
51018 Pieve a Nievole (PT)

📞 Tel: [0572 952803](tel:+390572952803)  
📱 Cell: [335 8398660](tel:+393358398660)  
✉️ Email: [info@arredofrigo.net](mailto:info@arredofrigo.net)  
💬 WhatsApp: [Scrivici su WhatsApp](https://wa.me/+390572952803)

<!-- 📍 [Come arrivare su Google Maps](https://maps.google.com/?q=Arredofrigo+Pieve+a+Nievole) -->

<link rel="stylesheet" href="{{ '/assets/css/realizzazione-dettaglio.css' | relative_url }}">
<style>
.btn-mappa{
    margin: 5px;
    min-width:200px;
}
</style>

<section class="maps-section realizzazione-mappa">
<h2>📍 Posizione</h2>
<p>Arredofrigo dista un paio di chilometri dall’uscita di Montecatini Terme dell’Autostrada</p>
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
    <p>📞 <a href='tel:+390572952803'>Chiamaci</a> per fissare un appuntamento</p>
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