---
layout: hero
title: Forniture Pubblica Amministrazione
description: Arredofrigo è presente su MEPA e START Toscana per forniture alla Pubblica Amministrazione. Cucine professionali e attrezzature per mense scolastiche, forze dell’ordine e scuole alberghiere.
hero_image: /assets/img/acquisti-in-rete-pa-mepa.webp
---

# Forniture Pubblica Amministrazione – MEPA & START Toscana

## Arredofrigo per la Pubblica Amministrazione

Arredofrigo è presente sul MEPA (Mercato Elettronico della Pubblica Amministrazione) e sul portale START della Regione Toscana, offrendo soluzioni complete di progettazione, fornitura, installazione e assistenza per cucine e attrezzature professionali.

Da oltre trent’anni affianchiamo enti pubblici e istituzioni in tutta la Toscana e in Italia, garantendo qualità, affidabilità e trasparenza nei processi di acquisto.

## Dove operiamo

Le nostre forniture per la Pubblica Amministrazione comprendono:

- Mense scolastiche di scuole primarie e secondarie
- Strutture delle Forze dell’Ordine e caserme
- Laboratori e cucine didattiche per scuole alberghiere
- Enti sanitari, RSA e comunità pubbliche

## Perché scegliere Arredofrigo

- Presenza ufficiale su MEPA e START Toscana
- Esperienza pluridecennale nelle forniture pubbliche
- Assistenza completa: dalla progettazione alla manutenzione
- Consegne rapide e installazioni certificate

## Come acquistare tramite MEPA

Il nostro team è a disposizione per guidarti passo dopo passo nella procedura di acquisto.

Per maggiori informazioni [contattaci](/contatti).

<div class="realizzazioni-correlate">
    <h3>🎯 Nostre realizzazioni correlate</h3>
    <div class="correlate-grid">
            {% assign realizzazioni = site.data.realizzazioni %}
        {% assign correlati = "" | split: "" %}

        {% assign ambiti = "scuola alberghiera" | split: "," %}

        {% for realizzazione in realizzazioni %}
            {% if realizzazione.nome != page.nome_completo %}
            {% assign has_common = false %}
            {% for a in realizzazione.tipo %}
                {% if ambiti contains a %}
                {% assign has_common = true %}
                {% endif %}
            {% endfor %}
            {% if has_common %}
                {% assign correlati = correlati | push: realizzazione %}
            {% endif %}
            {% endif %}
        {% endfor %}

        {% assign realizzazioni_correlate = correlati | sample: 3 %}

        {% for realizzazione in realizzazioni_correlate %}
        {% assign cartella_correlata = realizzazione.cartella_foto | default: realizzazione.nome | slugify | prepend: '/assets/img/realizzazioni/' %}
        {% assign foto_correlata = realizzazione.foto_copertina | default: 'foto1.webp' %}

        <div class="correlata-card">
            <div class="correlata-image">
                <img src="{{ cartella_correlata }}/{{ foto_correlata }}" alt="{{ realizzazione.nome }}" loading="lazy">
            </div>
            <div class="correlata-info">
                <h4>{{ realizzazione.nome }}</h4>
                <p class="correlata-location">📍 {{ realizzazione.citta }}</p>
                <a href="/realizzazioni/{{ realizzazione.slug | default: realizzazione.nome | slugify }}.html"
                    class="btn-correlata">Vedi dettagli</a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<link rel="stylesheet" href="{{ '/assets/css/realizzazione-dettaglio.css' | relative_url }}">