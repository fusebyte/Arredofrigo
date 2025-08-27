---
layout: hero

---

# Forniture per la Grande Distribuzione Organizzata (GDO)

## Arredofrigo per la GDO

Arredofrigo è specializzata nella fornitura di attrezzature e impianti professionali per supermercati, minimarket e catene della GDO.
Da oltre trent’anni supportiamo le realtà della distribuzione moderna con soluzioni complete: progettazione, fornitura, installazione e assistenza tecnica certificata.

## Soluzioni per la Grande Distribuzione

Siamo il partner ideale per le aziende della GDO che richiedono efficienza, affidabilità e continuità operativa.
Le nostre forniture comprendono:

- Banchi frigo e impianti di refrigerazione industriale
- Cucine professionali per reparti gastronomia, panetteria e pasticceria
- Forni e attrezzature per la produzione su larga scala
- Servizi di manutenzione e assistenza rapida

## Perché scegliere Arredofrigo per la GDO

- Esperienza consolidata in supermercati e catene di distribuzione
- Progettazione su misura con sistemi CAD
- Fornitura di attrezzature nuove e usate garantite
- Consegne rapide e servizio post-vendita dedicato
- Assistenza tecnica

## Case study e realizzazioni

Abbiamo realizzato impianti e forniture per diversi punti vendita della grande distribuzione in Toscana e in altre regioni.
Visita la sezione [Realizzazioni](/realizzazioni) per scoprire alcuni esempi concreti.

## Contatti

Vuoi ricevere una consulenza personalizzata per il tuo supermercato o punto vendita GDO?
Il nostro team è a disposizione: compila il form nella pagina [Contatti](/contatti).

<div class="realizzazioni-correlate">
    <h3>🎯 Nostre realizzazioni correlate</h3>
    <div class="correlate-grid">
            {% assign realizzazioni = site.data.realizzazioni %}
        {% assign correlati = "" | split: "" %}

        {% assign ambiti = "supermercato" | split: "," %}

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