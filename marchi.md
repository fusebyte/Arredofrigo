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
