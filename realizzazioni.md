---
layout: default
title: Realizzazioni
---

## Realizzazioni recenti

Ecco alcune cucine professionali realizzate e installate per i nostri clienti:

<div class="realizzazioni-gallery">
  {% for realizzazione in site.data.realizzazioni %}
    {% assign cartella = realizzazione.cartella_foto | default: realizzazione.nome | slugify | prepend: '/assets/img/realizzazioni/' %}
    {% assign foto_copertina = realizzazione.foto_copertina | default: 'foto1.jpg' %}
    
    <div class="realizzazione-card">
      <div class="realizzazione-image">
        <img src="{{ cartella }}/{{ foto_copertina }}" alt="{{ realizzazione.nome }}" loading="lazy">
        <div class="realizzazione-overlay">
          <div class="realizzazione-info">
            <h3>{{ realizzazione.nome }}</h3>
            <p class="location">📍 {{ realizzazione.citta }}</p>
            {% if realizzazione.descrizione %}
              <p class="description">{{ realizzazione.descrizione | truncate: 100 }}</p>
            {% endif %}
          </div>
          <a href="/realizzazioni/{{ realizzazione.slug default: realizzazione.nome | slugify }}.html" class="btn-dettagli">Vedi dettagli</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<style>
.realizzazioni-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.realizzazione-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.realizzazione-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.realizzazione-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.realizzazione-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.realizzazione-card:hover .realizzazione-image img {
  transform: scale(1.1);
}

.realizzazione-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%);
  color: white;
  padding: 1.5rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.realizzazione-card:hover .realizzazione-overlay {
  transform: translateY(0);
}

.realizzazione-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.realizzazione-info .location {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

.realizzazione-info .description {
  margin: 0 0 1rem 0;
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.8;
}

.btn-dettagli {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #0073aa;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-dettagli:hover {
  background: #005a87;
}

@media (max-width: 768px) {
  .realizzazioni-gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .realizzazione-card {
    margin: 0 1rem;
  }
  
  .realizzazione-overlay {
    transform: translateY(0);
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 70%, transparent 100%);
  }
}
</style>