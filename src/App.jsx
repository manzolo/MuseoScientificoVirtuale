import { useMemo, useState } from 'react'
import { categories, exhibits, upcoming } from './data/exhibits'

function ExhibitVisual({ type }) {
  if (type === 'galaxy') {
    return (
      <div className="exhibit-visual galaxy" aria-hidden="true">
        <span className="galaxy-core" />
        {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
      </div>
    )
  }

  if (type === 'orbit') {
    return (
      <div className="exhibit-visual orbit" aria-hidden="true">
        <span className="sun" />
        <i className="orbit-line orbit-one"><b /></i>
        <i className="orbit-line orbit-two"><b /></i>
        <i className="orbit-line orbit-three"><b /></i>
      </div>
    )
  }

  return (
    <div className="exhibit-visual elements" aria-hidden="true">
      {['H', 'C', 'Fe', 'Au', 'O', 'Na', 'Si', 'Ne', 'Li'].map((element, index) => (
        <i key={element} style={{ '--index': index }}>{element}</i>
      ))}
    </div>
  )
}

function ExhibitCard({ exhibit }) {
  return (
    <a
      className="exhibit-card"
      href={exhibit.url}
      target="_blank"
      rel="noreferrer"
      style={{ '--accent': exhibit.accent }}
    >
      <div className="card-topline">
        <span>SALA {exhibit.number}</span>
        <span>{exhibit.eyebrow}</span>
      </div>
      <ExhibitVisual type={exhibit.visual} />
      <div className="card-copy">
        <h3>{exhibit.title}</h3>
        <p>{exhibit.description}</p>
        <span className="visit">{exhibit.status}<b>↗</b></span>
      </div>
    </a>
  )
}

export default function App() {
  const [category, setCategory] = useState('all')
  const filteredExhibits = useMemo(
    () => category === 'all'
      ? exhibits
      : exhibits.filter((exhibit) => exhibit.category === category),
    [category],
  )

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Museo Scientifico Virtuale">
          <span className="brand-mark">MSV</span>
          <span>Museo Scientifico<br />Virtuale</span>
        </a>
        <nav>
          <a href="#sale">Sale</a>
          <a href="#futuro">In arrivo</a>
          <a href="https://github.com/manzolo" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="kicker"><span /> ARCHIVIO SCIENTIFICO DIGITALE</div>
          <h1>La scienza,<br /><em>da esplorare.</em></h1>
          <p>
            Un museo virtuale che raccoglie esperienze interattive
            per osservare, sperimentare e capire il mondo.
          </p>
          <a className="hero-action" href="#sale">
            Visita le sale <span>↓</span>
          </a>
        </div>
        <div className="hero-object" aria-hidden="true">
          <div className="sphere">
            <span className="ring ring-a" />
            <span className="ring ring-b" />
            <span className="ring ring-c" />
            <i className="satellite" />
          </div>
          <span className="object-label">COLLEZIONE · 001—003</span>
        </div>
        <div className="hero-stats">
          <span><b>{String(exhibits.length).padStart(2, '0')}</b> esperienze attive</span>
          <span><b>∞</b> curiosità</span>
          <span><b>OPEN</b> accesso libero</span>
        </div>
      </section>

      <section className="exhibitions" id="sale">
        <div className="section-heading">
          <div>
            <div className="kicker"><span /> COLLEZIONE PERMANENTE</div>
            <h2>Scegli una sala</h2>
          </div>
          <p>Ogni sala apre un’esperienza indipendente in una nuova scheda.</p>
        </div>

        <div className="filters" aria-label="Filtra le sale">
          {categories.map((item) => (
            <button
              key={item.id}
              className={category === item.id ? 'active' : ''}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
              <small>
                {item.id === 'all'
                  ? exhibits.length
                  : exhibits.filter((exhibit) => exhibit.category === item.id).length}
              </small>
            </button>
          ))}
        </div>

        <div className="exhibit-grid">
          {filteredExhibits.map((exhibit) => (
            <ExhibitCard key={exhibit.id} exhibit={exhibit} />
          ))}
        </div>
      </section>

      <section className="upcoming-section" id="futuro">
        <div className="section-heading">
          <div>
            <div className="kicker"><span /> IL MUSEO CRESCE</div>
            <h2>Prossime aperture</h2>
          </div>
          <p>Nuove sale ed esperimenti verranno aggiunti progressivamente.</p>
        </div>
        <div className="upcoming-grid">
          {upcoming.map((item) => (
            <article key={item.number} style={{ '--accent': item.accent }}>
              <span>{item.number}</span>
              <small>{item.category} · in preparazione</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">MSV</span>
          <span>Museo Scientifico Virtuale</span>
        </a>
        <p>Esperienze scientifiche interattive, aperte a tutti.</p>
        <span>© {new Date().getFullYear()} · Open source</span>
      </footer>
    </main>
  )
}
