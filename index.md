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
<main>
{% include realizzazioni-selector.html
    titolo = "Realizzazioni"
    filtro_tipi = "ristorante,pizzeria,pasticceria,bar"
    top_k = 10
 %}
 </main>
 </section>


<section class="banner-section section-gray">
  <h2>Servizi</h2>

  {% include card-grid.html
  content = site.data.servizi
  class = "servizio"
  %}

</section>

<section class="banner-section section-red">
  <h2>Settori</h2>
  {% include card-grid.html
  content = site.data.targets
  %}
</section>



<h2 style="text-align:center;">Marchi</h2>
<div class="grid-marchi">

{% assign marchi_filtrati = site.data.marchi | where_exp: "item", "item.homepage" %}
{% assign marchi_sample = marchi_filtrati | sample: 6 %}

{% for marchio in marchi_sample %}
  {% assign new_tab = marchio.new_tab %}
  {% if new_tab == nil or new_tab == "" %}
    {% assign new_tab = true %}
  {% endif %}
  <a href="{{ marchio.url }}" {% if new_tab %}target="_blank"{% endif %} class="marchio">
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
