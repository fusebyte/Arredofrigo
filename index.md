---
layout: home
title: Home
---

<section class="banner-section section-gray">
  {% include card-grid.html%}
</section>

<section class="banner-section section-blue">
  <h2>I nostri servizi</h2>

  <div class="card-grid">

    <a href="{{ '/progettazione-cucine-professionali' | relative_url }}" class="card servizio">
      <h3>
        🏗️ Progettazione cucine con CAD
      </h3>
      <p>
        Progetti su misura realizzati con software CAD per ottimizzare spazi e funzionalità
      </p>
    </a>

    <a href="{{ '/servizi' | relative_url }}" class="card servizio">
      <h3>
        🛒 Fornitura attrezzature
      </h3>
      <p>
        Attrezzature professionali nuove e usate, selezionate per qualità e affidabilità
      </p>
    </a>

    <a href="{{ '/servizi' | relative_url }}" class="card servizio">
      <h3>
        🔧 Installazione e collaudo
      </h3>
      <p>
        Installazione professionale e collaudo completo di tutte le attrezzature
      </p>
    </a>

    <a href="{{ '/assistenza' | relative_url }}" class="card servizio">
      <h3>
        ⚙️ Assistenza e manutenzione
      </h3>
      <p>
        Supporto tecnico continuativo per mantenere le tue attrezzature sempre efficienti
      </p>
    </a>

    <a href="{{ '/impianti-aspirazione' | relative_url }}" class="card servizio">
      <h3>
        💨 Impianti di aspirazione
      </h3>
      <p>
        Progettazione e installazione di sistemi di aspirazione e canalizzazione
      </p>
    </a>

    </div>
</section>

{% include realizzazioni-correlate.html
    titolo_tab = "Nostre realizzazioni"
    samples = 5
 %}

<section class="banner-section section-gray">
  <div style="text-align: center;">
    <a href="contatti" class="btn-primary">
      📞 contattaci
    </a>
  </div>
</section>
