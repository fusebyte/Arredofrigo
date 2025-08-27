---
layout: default
title: I nostri marchi
permalink: /i-nostri-marchi
---

# I nostri marchi

Collaboriamo con i migliori brand del settore della ristorazione professionale. Di seguito una selezione dei nostri partner:

<div class="grid-marchi">
  {% for marchio in site.data.marchi %}
    <a href="{{ marchio.url }}" target="_blank" class="marchio">
      <img src="/assets/img/loghi-fornitori/{{ marchio.logo }}" alt="{{ marchio.nome }}" />
    </a>
  {% endfor %}
</div>

{% comment %}
Va fatta una sezione su Moretti Forni dicendo che siamo rivenditori Moretti Forni da oltre 30 anni. La sezione deve presentare Moretti e i suoi prodotti in modo simile a quanto fatto qui: https://www.arredofrigo.net/i-nostri-partners/forni-da-pizza-moretti/

- /assets/img/moretti-forni/colonna-serie-s-con-lievitatore-e-cappa.webp
- /assets/img/moretti-forni/moretti-serie-s-primo-piano.webp

Bisogna mostrare queste immagini all'interno della pagina
{% endcomment %}

---

## Moretti Forni – Rivenditori da oltre 30 anni

Siamo orgogliosi di essere **rivenditori ufficiali Moretti Forni da oltre 30 anni**.  
Moretti Forni è un punto di riferimento mondiale nella produzione di forni per pizzeria, panificazione e pasticceria, con soluzioni tecnologiche all’avanguardia e un’attenzione particolare all’efficienza energetica e alla qualità della cottura.

Grazie all’ampia gamma di prodotti – dai **forni elettrici di ultima generazione** ai **forni tradizionali per pizza** – Moretti Forni offre la massima affidabilità e prestazioni eccellenti, garantendo risultati perfetti in ogni cucina professionale.


{% assign prodotti_moretti = site.data.prodotti | where: "marchio", "Moretti Forni"  %}
  
{% include products-cards.html 
   prodotti=prodotti_moretti
%}


{% comment %}
{% assign prodotti_unox = site.data.prodotti | where: "marchio", "Unox"  %}
  
{% include products-cards.html 
   prodotti=prodotti_unox
%}
{% endcomment %}