import { useEffect, useMemo, useState } from 'react'
import { categories, exhibits, learningProject, upcoming } from './data/exhibits'

const copy = {
  it: {
    museum: 'Museo Scientifico\nVirtuale',
    rooms: 'Sale',
    learningNav: 'Quiz',
    upcomingNav: 'In arrivo',
    archive: 'Archivio scientifico digitale',
    heroTitle: <>La scienza,<br /><em>da esplorare.</em></>,
    heroBody: 'Un museo virtuale che raccoglie esperienze interattive per osservare, sperimentare e capire il mondo.',
    visitRooms: 'Visita le sale',
    collection: 'Collezione · 001—004',
    activeExperiences: 'esperienze attive',
    curiosity: 'curiosità',
    freeAccess: 'accesso libero',
    permanent: 'Collezione permanente',
    choose: 'Scegli una sala',
    independent: 'Ogni sala apre un’esperienza indipendente in una nuova scheda.',
    filter: 'Filtra le sale',
    room: 'Sala',
    explore: 'Esplora',
    discoverQuizzes: 'Apri i quiz',
    viewCode: 'Vedi il codice',
    educationalProject: 'Progetto didattico',
    growing: 'Il museo cresce',
    nextOpenings: 'Prossime aperture',
    progressive: 'Nuove sale ed esperimenti verranno aggiunti progressivamente.',
    preparing: 'in preparazione',
    footer: 'Esperienze scientifiche interattive, aperte a tutti.',
    openSource: 'Open source',
    language: 'Lingua',
  },
  en: {
    museum: 'Virtual Science\nMuseum',
    rooms: 'Rooms',
    learningNav: 'Quizzes',
    upcomingNav: 'Coming soon',
    archive: 'Digital science archive',
    heroTitle: <>Science,<br /><em>made explorable.</em></>,
    heroBody: 'A virtual museum of interactive experiences for observing, experimenting and understanding our world.',
    visitRooms: 'Visit the rooms',
    collection: 'Collection · 001—004',
    activeExperiences: 'active experiences',
    curiosity: 'curiosity',
    freeAccess: 'free access',
    permanent: 'Permanent collection',
    choose: 'Choose a room',
    independent: 'Each room opens an independent experience in a new tab.',
    filter: 'Filter rooms',
    room: 'Room',
    explore: 'Explore',
    discoverQuizzes: 'Open quizzes',
    viewCode: 'View source',
    educationalProject: 'Educational project',
    growing: 'The museum grows',
    nextOpenings: 'Upcoming exhibits',
    progressive: 'New rooms and experiments will be added progressively.',
    preparing: 'in development',
    footer: 'Interactive science experiences, open to everyone.',
    openSource: 'Open source',
    language: 'Language',
  },
}

function localize(value, language) {
  return typeof value === 'object' ? value[language] : value
}

function ExhibitCard({ exhibit, language, t }) {
  const image = `${import.meta.env.BASE_URL}${exhibit.image.replace(/^\//, '')}`

  return (
    <a
      className="exhibit-card"
      href={exhibit.url}
      target="_blank"
      rel="noreferrer"
      style={{ '--accent': exhibit.accent }}
    >
      <div className="card-topline">
        <span>{t.room} {exhibit.number}</span>
        <span>{localize(exhibit.eyebrow, language)}</span>
      </div>
      <div className="exhibit-visual">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="card-copy">
        <h3>{localize(exhibit.title, language)}</h3>
        <p>{localize(exhibit.description, language)}</p>
        <span className="visit">{t.explore}<b>↗</b></span>
      </div>
    </a>
  )
}

function LanguageSwitch({ language, setLanguage, label }) {
  return (
    <div className="language-switch" aria-label={label}>
      <button
        className={language === 'it' ? 'active' : ''}
        onClick={() => setLanguage('it')}
        aria-label="Italiano"
        title="Italiano"
      >
        🇮🇹 <span>IT</span>
      </button>
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
        aria-label="English"
        title="English"
      >
        🇬🇧 <span>EN</span>
      </button>
    </div>
  )
}

export default function App() {
  const [language, setLanguage] = useState('it')
  const [category, setCategory] = useState('all')
  const t = copy[language]
  const filteredExhibits = useMemo(
    () => category === 'all'
      ? exhibits
      : exhibits.filter((exhibit) => exhibit.category === category),
    [category],
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.museum.replace('\n', ' ')}>
          <span className="brand-mark">MSV</span>
          <span>{t.museum.split('\n').map((line) => <span key={line}>{line}</span>)}</span>
        </a>
        <div className="header-actions">
          <nav>
            <a href="#sale">{t.rooms}</a>
            <a href="#didattica">{t.learningNav}</a>
            <a href="#futuro">{t.upcomingNav}</a>
            <a href="https://github.com/manzolo/MuseoScientificoVirtuale" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
          <LanguageSwitch language={language} setLanguage={setLanguage} label={t.language} />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="kicker"><span /> {t.archive}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <a className="hero-action" href="#sale">
            {t.visitRooms} <span>↓</span>
          </a>
        </div>
        <div className="hero-object" aria-hidden="true">
          <div className="sphere">
            <span className="ring ring-a" />
            <span className="ring ring-b" />
            <span className="ring ring-c" />
            <i className="satellite" />
          </div>
          <span className="object-label">{t.collection}</span>
        </div>
        <div className="hero-stats">
          <span><b>{String(exhibits.length + 1).padStart(2, '0')}</b> {t.activeExperiences}</span>
          <span><b>∞</b> {t.curiosity}</span>
          <span><b>OPEN</b> {t.freeAccess}</span>
        </div>
      </section>

      <section className="exhibitions" id="sale">
        <div className="section-heading">
          <div>
            <div className="kicker"><span /> {t.permanent}</div>
            <h2>{t.choose}</h2>
          </div>
          <p>{t.independent}</p>
        </div>

        <div className="filters" aria-label={t.filter}>
          {categories.map((item) => (
            <button
              key={item.id}
              className={category === item.id ? 'active' : ''}
              onClick={() => setCategory(item.id)}
            >
              {localize(item.label, language)}
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
            <ExhibitCard key={exhibit.id} exhibit={exhibit} language={language} t={t} />
          ))}
        </div>
      </section>

      <section className="learning-section" id="didattica">
        <div className="learning-media" aria-hidden="true">
          <div className="learning-symbol">
            <span>?</span>
            <i>7 × 8</i>
            <i>MCD</i>
            <i>3/4</i>
            <i>ABC</i>
          </div>
          <span>{t.educationalProject} · 04</span>
        </div>
        <div className="learning-copy">
          <div className="kicker"><span /> {localize(learningProject.eyebrow, language)}</div>
          <h2>{localize(learningProject.title, language)}</h2>
          <p className="learning-lead">{localize(learningProject.description, language)}</p>
          <p>{localize(learningProject.details, language)}</p>
          <div className="subject-list">
            {localize(learningProject.subjects, language).map((subject) => (
              <span key={subject}>{subject}</span>
            ))}
          </div>
          <div className="learning-actions">
            <a href={learningProject.url} target="_blank" rel="noreferrer">
              {t.discoverQuizzes} <span>↗</span>
            </a>
            <a href={learningProject.repository} target="_blank" rel="noreferrer">
              {t.viewCode} <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="upcoming-section" id="futuro">
        <div className="section-heading">
          <div>
            <div className="kicker"><span /> {t.growing}</div>
            <h2>{t.nextOpenings}</h2>
          </div>
          <p>{t.progressive}</p>
        </div>
        <div className="upcoming-grid">
          {upcoming.map((item) => (
            <article key={item.number} style={{ '--accent': item.accent }}>
              <span>{item.number}</span>
              <small>{localize(item.category, language)} · {t.preparing}</small>
              <h3>{localize(item.title, language)}</h3>
              <p>{localize(item.description, language)}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">MSV</span>
          <span>{t.museum.replace('\n', ' ')}</span>
        </a>
        <p>{t.footer}</p>
        <span>© {new Date().getFullYear()} · {t.openSource}</span>
      </footer>
    </main>
  )
}
