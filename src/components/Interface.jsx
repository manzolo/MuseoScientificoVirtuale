import { useEffect } from 'react'
import { ROOMS } from '../data/rooms'

const projectMeta = {
  chemistry: ['01', 'CHIMICA'],
  astronomy: ['02', 'ASTRONOMIA'],
  galaxy: ['03', 'ESOPIANETI'],
  biology: ['04', 'BIOLOGIA'],
}

export function Interface({
  started,
  onStart,
  language,
  setLanguage,
  room,
  teleport,
  fly,
  setFly,
  guided,
  setGuided,
  selected,
  setSelected,
  fade,
  t,
}) {
  useEffect(() => {
    const toggleFly = (event) => {
      if (event.code === 'KeyF') setFly((value) => !value)
    }
    window.addEventListener('keydown', toggleFly)
    return () => window.removeEventListener('keydown', toggleFly)
  }, [setFly])

  return (
    <div className="interface">
      {!started && (
        <section className="landing">
          <div className="landing-grid" />
          <div className="eyebrow"><span /> DIGITAL SCIENCE ARCHIVE · 2026</div>
          <h1>MUSEO<br /><strong>SCIENTIFICO</strong><br />VIRTUALE</h1>
          <p>{t.intro}</p>
          <button className="primary-action" onClick={onStart}>
            <span>{t.enter}</span><b>→</b>
          </button>
          <div className="landing-controls">{t.controls}</div>
        </section>
      )}

      {started && (
        <>
          <header className="topbar">
            <div className="brand"><i>MSV</i><span>MUSEO SCIENTIFICO<br />VIRTUALE</span></div>
            <div className="top-actions">
              <button onClick={() => setGuided(!guided)} className={guided ? 'active' : ''}>
                {guided ? t.guided : t.free}
              </button>
              <button onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}>{t.language}</button>
            </div>
          </header>

          <div className="room-index">
            <span>{ROOMS[room].short}</span>
            <strong>{ROOMS[room].label[language]}</strong>
          </div>

          <aside className="minimap">
            <div className="map-title">{t.map}</div>
            <div className="map-field">
              <div className="map-lines" />
              {Object.values(ROOMS).map((item) => (
                <button
                  key={item.id}
                  className={`map-node ${room === item.id ? 'current' : ''}`}
                  style={{ left: `${item.map[0]}%`, top: `${item.map[1]}%`, '--accent': item.color }}
                  onClick={() => teleport(item.id)}
                  title={item.label[language]}
                >
                  {item.short}
                </button>
              ))}
            </div>
          </aside>

          <nav className="wing-nav">
            {Object.entries(projectMeta).map(([id, [number, fallback]]) => (
              <button key={id} onClick={() => teleport(id)} className={room === id ? 'active' : ''}>
                <small>{number}</small>
                <span>{ROOMS[id].label[language] || fallback}</span>
              </button>
            ))}
          </nav>

          <div className="mode-controls">
            <button onClick={() => setFly(!fly)} className={fly ? 'active' : ''}>
              <span>{fly ? '↟' : '⌁'}</span>{fly ? t.fly : t.walk}
            </button>
            <div className="crosshair">+</div>
          </div>

          {guided && (
            <div className="guide-card">
              <small>GUIDA · 00{Object.keys(ROOMS).indexOf(room) + 1}</small>
              <p>{room === 'hall' ? t.guideHall : `${ROOMS[room].label[language]} — ${t.explore}`}</p>
            </div>
          )}

          <div className="mobile-controls" aria-label="Movement controls">
            <button onPointerDown={() => dispatchKey('KeyW', 'keydown')} onPointerUp={() => dispatchKey('KeyW', 'keyup')}>▲</button>
            <button onPointerDown={() => dispatchKey('KeyA', 'keydown')} onPointerUp={() => dispatchKey('KeyA', 'keyup')}>◀</button>
            <button onPointerDown={() => dispatchKey('KeyS', 'keydown')} onPointerUp={() => dispatchKey('KeyS', 'keyup')}>▼</button>
            <button onPointerDown={() => dispatchKey('KeyD', 'keydown')} onPointerUp={() => dispatchKey('KeyD', 'keyup')}>▶</button>
          </div>
        </>
      )}

      {selected && (
        <div className="info-overlay" onClick={() => setSelected(null)}>
          <article className="info-card" onClick={(event) => event.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)} aria-label={t.close}>×</button>
            <div className="eyebrow"><span /> INSTALLAZIONE INTERATTIVA</div>
            <h2>{selected.title}</h2>
            <p>{selected.body}</p>
            <a href={selected.url} target="_blank" rel="noreferrer">{t.project} ↗</a>
          </article>
        </div>
      )}
      <div className={`fade ${fade ? 'visible' : ''}`} />
    </div>
  )
}

function dispatchKey(code, type) {
  window.dispatchEvent(new KeyboardEvent(type, { code }))
}
