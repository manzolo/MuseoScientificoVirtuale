# Museo Scientifico Virtuale

[Italiano](#italiano) · [English](#english)

**🔭 Demo live → <https://manzolo.github.io/MuseoScientificoVirtuale/>**

Un portale leggero che raccoglie esperienze scientifiche interattive. Ogni sala
apre un progetto indipendente in una nuova scheda.

> Progetto nato dalla curiosità e dalla voglia di imparare. Sono un informatico
> senza una formazione scientifica specifica: correzioni, idee e contributi sui
> contenuti sono molto graditi.

---

## Italiano

### Le sale

| Sala | Tema |
| --- | --- |
| [Sistema Solare](https://manzolo.github.io/SistemaSolare/) | pianeti, orbite e corpi celesti |
| [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/) | stelle, sistemi ed esopianeti |
| [Tavola Periodica 3D](https://manzolo.github.io/TavolaPeriodica3D/) | elementi chimici in 3D |
| [Quiz Didattici](https://manzolo.github.io/quiz-didattici/) | esercizi di matematica e italiano per la scuola media |

**Prossime aperture:** Evoluzione Stellare (ciclo di vita delle stelle) e
Viaggio nel Tempo Geologico (la Terra dal Precambriano a oggi).

Il vecchio prototipo immersivo Three.js è nel branch
[`museo-3d`](../../tree/museo-3d).

### Sviluppo

Richiede Node.js 24.

```bash
npm ci
npm run dev     # server di sviluppo Vite
npm run lint    # ESLint
npm run build   # build di produzione in dist/
npm run preview # anteprima della build
```

Con Docker: `make build && make up` → <http://localhost:8080> (porta
personalizzabile con `make up PORT=3000`). Altri comandi: `make logs`,
`make restart`, `make down`, `make clean`.

### Aggiungere una sala

Tutti i contenuti sono in
[`src/data/exhibits.js`](src/data/exhibits.js). Aggiungi un oggetto all'array
`exhibits` (campi bilingui `it`/`en`):

```js
{
  id: 'nome-progetto',
  number: '04',
  category: 'chemistry',
  eyebrow: { it: 'Chimica', en: 'Chemistry' },
  title: { it: 'Titolo', en: 'Title' },
  description: { it: 'Breve descrizione.', en: 'Short description.' },
  url: 'https://manzolo.github.io/NomeProgetto/',
  image: '/images/exhibits/nome-progetto.webp',
  accent: '#54d6a0',
}
```

La `category` deve corrispondere a una voce dell'array `categories` (filtri). I
progetti non ancora pubblicati vanno in `upcoming`.

### Creare una nuova app scientifica

Per generare con un agente AI una nuova esperienza coerente con questo ecosistema
(sito statico bilingue per GitHub Pages), parti dal template di prompt in
[`docs/prompt-template-nuovo-progetto.md`](docs/prompt-template-nuovo-progetto.md):
compila i segnaposto `«...»` e incollalo all'agente.

### Pubblicazione

Ogni push su `main` viene pubblicato automaticamente su GitHub Pages dal workflow
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml). Su GitHub: **Settings →
Pages → Source: GitHub Actions**.

### Contribuire

Non serve solo codice: segnalazioni scientifiche, correzioni dei testi,
suggerimenti su accessibilità e grafica sono tutti utili. Apri una **Issue** o
una **Pull Request** spiegando cosa cambia e perché.

### Licenza

[MIT](LICENSE).

---

## English

### The rooms

| Room | Topic |
| --- | --- |
| [Solar System](https://manzolo.github.io/SistemaSolare/) | planets, orbits and celestial bodies |
| [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/) | stars, systems and exoplanets |
| [3D Periodic Table](https://manzolo.github.io/TavolaPeriodica3D/) | chemical elements in 3D |
| [Educational Quizzes](https://manzolo.github.io/quiz-didattici/) | maths and Italian exercises for middle school |

**Coming soon:** Stellar Evolution (stellar life cycles) and Journey Through
Geological Time (Earth from the Precambrian to today).

The previous immersive Three.js prototype lives in the
[`museo-3d`](../../tree/museo-3d) branch.

### Development

Requires Node.js 24.

```bash
npm ci
npm run dev     # Vite dev server
npm run lint    # ESLint
npm run build   # production build to dist/
npm run preview # preview the build
```

With Docker: `make build && make up` → <http://localhost:8080> (custom port with
`make up PORT=3000`). Other commands: `make logs`, `make restart`, `make down`,
`make clean`.

### Add a room

All content lives in [`src/data/exhibits.js`](src/data/exhibits.js). Add an
object to the `exhibits` array (bilingual `it`/`en` fields):

```js
{
  id: 'project-name',
  number: '04',
  category: 'chemistry',
  eyebrow: { it: 'Chimica', en: 'Chemistry' },
  title: { it: 'Titolo', en: 'Title' },
  description: { it: 'Breve descrizione.', en: 'Short description.' },
  url: 'https://manzolo.github.io/ProjectName/',
  image: '/images/exhibits/project-name.webp',
  accent: '#54d6a0',
}
```

The `category` must match an entry in the `categories` array (filters).
Unreleased projects go in `upcoming`.

### Create a new science app

To generate a new experience consistent with this ecosystem (a bilingual static
site for GitHub Pages) with an AI agent, start from the prompt template in
[`docs/prompt-template-nuovo-progetto.md`](docs/prompt-template-nuovo-progetto.md):
fill in the `«...»` placeholders and paste it to the agent.

### Deployment

Every push to `main` is automatically published to GitHub Pages by the
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) workflow. On GitHub:
**Settings → Pages → Source: GitHub Actions**.

### Contributing

Code is not the only way to help: scientific feedback, text corrections,
accessibility and design suggestions are all welcome. Open an **Issue** or a
**Pull Request** explaining what changes and why.

### License

[MIT](LICENSE).
