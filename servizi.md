---
layout: default
title: Servizi
permalink: /servizi/
---

# I nostri servizi

Da oltre trent’anni, offriamo un servizio completo per la realizzazione e la gestione di cucine professionali. Dalla consulenza iniziale alla fornitura di attrezzature nuove e usate, dall’installazione all’assistenza tecnica, accompagniamo ogni cliente in tutte le fasi operative, con soluzioni su misura e tempi rapidi.

## Progettazione di cucine professionali

{% capture contenuto %}
Ogni cucina è unica e nasce da un ascolto attento delle esigenze del cliente.  
Il nostro servizio di progettazione parte da un confronto diretto per comprendere gli obiettivi, gli spazi e il tipo di attività.  
Successivamente eseguiamo un sopralluogo tecnico, elaboriamo una proposta in CAD con distribuzione funzionale delle attrezzature e seguiamo i lavori fino alla messa in opera, garantendo sempre il rispetto delle normative vigenti in materia di sicurezza, igiene e flussi operativi.
{% endcapture %}

{% include image-text-block.html 
   text=contenuto
   img_src="/assets/img/Progettatore.jpg" 
   img_alt="Simone Pacini, fondatore di Arredofrigo" 
   img_class="img-icon"
   img_side="left"
%}

## Fornitura di attrezzature nuove e usate

{% capture contenuto %}
Disponiamo di un'ampia selezione di attrezzature professionali per ristoranti, pizzerie, bar, gastronomie e laboratori alimentari.  
Lavoriamo con i migliori marchi del settore per offrire prodotti affidabili, tecnologicamente avanzati e duraturi.  
Offriamo anche soluzioni usate e revisionate, ideali per chi cerca qualità a costi contenuti e con disponibilità immediata.
{% endcapture %}

{% include image-text-block.html 
   text=contenuto
   img_src="/assets/img/camion-consegna-arredofrigo.jpg" 
   img_alt="consegna sul posto" 
   img_class="img-base"
   img_side="right"
%}

## Installazione e collaudo

{% capture contenuto %}
L’installazione delle attrezzature non si limita al mero montaggio: il nostro servizio comprende l’allineamento completo con gli impianti esistenti, il collaudo tecnico e un anno di assistenza post-vendita inclusa.  
Il lavoro viene eseguito da personale specializzato, con attenzione a ogni dettaglio, per garantire fin da subito un funzionamento ottimale e sicuro.
{% endcapture %}

{% include image-text-block.html 
   text=contenuto
   img_src="/assets/img/cucina-arredofrigo.jpg" 
   img_alt="installazione e collaudo attrezzature sul posto" 
   img_class="img-icon"
   img_side="left"
%}

## Impianti di aspirazione e canalizzazione

Progettiamo e realizziamo impianti di aspirazione personalizzati per cucine professionali.  
Ci occupiamo di tutto: calcolo delle portate, sezioni dei canali, scelta dei motori e dei sistemi di filtrazione, installazione e collaudo. Ogni impianto è pensato per garantire efficienza energetica, comfort per il personale e conformità alle normative.

## Consegna rapida

Abbiamo a disposizione un magazzino fornito con attrezzature pronte per la consegna immediata.  
In caso di urgenze, siamo in grado di offrire il ritiro in sede o una consegna rapida.

## Formazione e supporto

Affianchiamo i nostri clienti anche dopo l’installazione. Offriamo supporto tecnico, formazione sull’utilizzo delle attrezzature e assistenza continua. Il nostro obiettivo è garantire il massimo rendimento degli impianti e la massima autonomia operativa del personale.

## Demo pratiche su attrezzature

Organizziamo regolarmente dimostrazioni pratiche delle principali attrezzature professionali, presso il nostro showroom o direttamente in loco.  
Le demo sono un’occasione concreta per vedere le macchine in azione, scoprire le funzionalità avanzate e valutarne le prestazioni reali prima dell’acquisto.  
Questo servizio è particolarmente utile per ristoratori, cuochi e operatori del settore che desiderano investire con consapevolezza su prodotti realmente adatti alle proprie esigenze. Consulta la pagina [demo forni Unox](/demo-forni-unox) per maggiori dettagli sulle demo dei forni a convezione Unox.

## I nostri marchi

Collaboriamo con i migliori brand della ristorazione professionale. Ecco una selezione dei nostri partner:

<div class="grid-marchi">
{% for marchio in site.data.marchi %}
  <a href="{{ marchio.url }}" target="_blank" class="marchio">
    <img src="/assets/img/loghi-fornitori/{{ marchio.logo }}" alt="{{ marchio.nome }}">
  </a>
{% endfor %}
</div>

---

Per maggiori informazioni, per richiedere un preventivo o una consulenza gratuita, [contattaci](/contatti/).
