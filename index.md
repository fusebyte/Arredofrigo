---
layout: home
title: Home
---

<main style="padding-bottom: 20px;">
<a href="{{ '/chi-siamo' | relative_url }}" class="link-no-decoration">
{% capture contenuto %}
### Chi siamo

Arredofrigo nasce nel 1990 a Pieve a Nievole, in provincia di Pistoia. La ditta è specializzata nel settore dell’arredamento, delle cucine professionali e delle attrezzature per ristoranti, bar, pizzerie, fast food, negozi e supermercati. L’azienda offre progettazione del laboratorio, assistenza sull’attrezzatura e vendita dei macchinari.
{% endcapture %}

{% include image-text-block.html 
   text=contenuto 
   img_src="assets/img/ArredofrigoPrima.webp" 
   img_alt="Arredofrigo molti anni fa"
   img_side="right"
%}
</a>
</main>

<section class="banner-section section-blue">
  <h2>Servizi</h2>

  {% include card-grid.html
  content = site.data.servizi
  class = "servizio"
  %}

</section>

<section class="banner-section section-gray">
  <h2>Settori</h2>
  {% include card-grid.html
  content = site.data.targets
  %}
</section>

{% include realizzazioni-correlate.html
    titolo_tab = "Realizzazioni"
    samples = 5
 %}

<h2 style="text-align:center;">Marchi</h2>
<div class="grid-marchi">

{% assign marchi_filtrati = site.data.marchi | where_exp: "item", "item.homepage" %}
{% assign marchi_sample = marchi_filtrati | sample: 5 %}

{% for marchio in marchi_sample %}
  <a href="{{ marchio.url }}" target="_blank" class="marchio">
    <img src="/assets/img/loghi-fornitori/{{ marchio.logo }}" alt="{{ marchio.nome }}">
  </a>
{% endfor %}
</div>

<section class="banner-section section-gray">
  <div style="text-align: center;">
    <a href="contatti" class="btn-primary">
      📞 contattaci
    </a>
  </div>
</section>
