# Museo Scientifico Virtuale

[Italiano](#italiano) · [English](#english)

Un portale leggero e in continua evoluzione che raccoglie esperienze
scientifiche interattive.

> Questo progetto nasce dalla curiosità e dalla voglia di imparare. Non ho una
> formazione specifica nello sviluppo web o nella divulgazione scientifica:
> suggerimenti, correzioni, idee e contributi sono davvero benvenuti.

## Italiano

### Il progetto

Il Museo Scientifico Virtuale è un punto di accesso semplice a piccoli progetti
dedicati all'esplorazione della scienza. Ogni sala conduce a un'esperienza
interattiva indipendente:

- [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/) — stelle, sistemi ed
  esopianeti;
- [Sistema Solare](https://manzolo.github.io/SistemaSolare/) — pianeti, orbite
  e corpi celesti;
- [Tavola Periodica 3D](https://manzolo.github.io/TavolaPeriodica3D/) —
  esplorazione tridimensionale degli elementi chimici.

Prossime aperture:

- **Evoluzione Stellare** — timeline interattiva sul ciclo di vita delle stelle
  e sulle loro transizioni di stato;
- **Viaggio nel Tempo Geologico** — la Terra dal Precambriano a oggi, con
  eventi geologici e biologici sovrapposti alla timeline.

Il precedente prototipo immersivo basato su Three.js è conservato nel branch
[`museo-3d`](../../tree/museo-3d).

### Obiettivi

- Rendere i progetti scientifici facili da trovare e utilizzare.
- Costruire un'interfaccia semplice, accessibile e adatta anche ai dispositivi
  mobili.
- Aggiungere progressivamente nuove sale.
- Imparare attraverso lo sviluppo aperto e il confronto con altre persone.
- Mantenere separati i singoli esperimenti, collegandoli attraverso un museo
  comune.

### Avvio locale

Sono richiesti Node.js 24 o una versione compatibile e npm.

```bash
npm ci
npm run dev
```

Vite mostrerà nel terminale l'indirizzo locale da aprire nel browser.

Per verificare la build di produzione:

```bash
npm run lint
npm run build
npm run preview
```

### Avvio con Docker

```bash
make build
make up
```

Il sito sarà disponibile su [http://localhost:8080](http://localhost:8080).

Comandi utili:

```bash
make logs
make restart
make down
make clean
```

Per utilizzare una porta diversa:

```bash
make up PORT=3000
```

### Aggiungere una sala

Le sale e le prossime aperture sono definite in
[`src/data/exhibits.js`](src/data/exhibits.js).

Per aggiungere un'esperienza pubblicata, inserire un nuovo oggetto nell'array
`exhibits`:

```js
{
  id: 'nome-progetto',
  number: '04',
  category: 'biology',
  eyebrow: 'Biologia',
  title: 'Titolo della sala',
  description: 'Una breve descrizione del progetto.',
  url: 'https://manzolo.github.io/NomeProgetto/',
  accent: '#54d6a0',
  visual: 'elements',
  status: 'Esplora',
}
```

Le categorie disponibili per i filtri sono definite nell'array `categories`.
I progetti non ancora pubblicati possono essere inseriti nell'array `upcoming`.

### Pubblicazione su GitHub Pages

Il workflow
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) pubblica
automaticamente il branch `main`.

1. Creare su GitHub un repository chiamato `MuseoScientificoVirtuale`.
2. Collegare questo repository locale e pubblicare `main`.
3. Aprire **Settings → Pages** nel repository GitHub.
4. Impostare **Source** su **GitHub Actions**.
5. Aprire la scheda **Actions** e attendere il completamento del workflow
   `Deploy GitHub Pages`.

Il sito sarà disponibile all'indirizzo:

<https://manzolo.github.io/MuseoScientificoVirtuale/>

Ogni push successivo su `main` pubblicherà automaticamente una nuova versione.

### Contribuire

Il progetto è anche un percorso di apprendimento. Non è necessario proporre
soltanto codice: sono utili anche segnalazioni scientifiche, correzioni dei
testi, suggerimenti sull'accessibilità, idee grafiche e indicazioni per rendere
il progetto più semplice da mantenere.

Per contribuire:

1. Aprire una **Issue** per descrivere un problema o una proposta.
2. Creare un fork e un branch dedicato per una modifica.
3. Inviare una **Pull Request** spiegando cosa cambia e perché.

Ogni consiglio costruttivo e ogni forma di aiuto sono ben accetti.

### Licenza

Il progetto è distribuito con licenza [MIT](LICENSE). È possibile utilizzarlo,
studiarlo, modificarlo e redistribuirlo nel rispetto dei termini della licenza.

---

## English

### About the project

The Virtual Science Museum is a simple entry point for small projects devoted
to exploring science. Each room opens an independent interactive experience:

- [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/) — stars, systems and
  exoplanets;
- [Solar System](https://manzolo.github.io/SistemaSolare/) — planets, orbits
  and celestial bodies;
- [3D Periodic Table](https://manzolo.github.io/TavolaPeriodica3D/) — a
  three-dimensional exploration of chemical elements.

Planned rooms:

- **Stellar Evolution** — an interactive timeline of stellar life cycles and
  state transitions;
- **Journey Through Geological Time** — Earth from the Precambrian to the
  present, with geological and biological events overlaid on the timeline.

The previous immersive Three.js prototype is preserved in the
[`museo-3d`](../../tree/museo-3d) branch.

### Goals

- Make scientific projects easy to find and use.
- Build a simple, accessible and mobile-friendly interface.
- Add new museum rooms progressively.
- Learn through open development and feedback from other people.
- Keep each experiment independent while connecting everything through one
  shared museum.

### Run locally

Node.js 24 or a compatible version and npm are required.

```bash
npm ci
npm run dev
```

Vite will print the local address to open in a browser.

To check the production build:

```bash
npm run lint
npm run build
npm run preview
```

### Run with Docker

```bash
make build
make up
```

The website will be available at
[http://localhost:8080](http://localhost:8080).

Useful commands:

```bash
make logs
make restart
make down
make clean
```

To use a different port:

```bash
make up PORT=3000
```

### Add a room

Rooms and planned exhibits are defined in
[`src/data/exhibits.js`](src/data/exhibits.js).

Add a new object to the `exhibits` array to publish another experience:

```js
{
  id: 'project-name',
  number: '04',
  category: 'biology',
  eyebrow: 'Biology',
  title: 'Room title',
  description: 'A short project description.',
  url: 'https://manzolo.github.io/ProjectName/',
  accent: '#54d6a0',
  visual: 'elements',
  status: 'Explore',
}
```

Filter categories are defined in the `categories` array. Projects that are not
available yet can be added to the `upcoming` array.

### Publish with GitHub Pages

The
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) workflow automatically
deploys the `main` branch.

1. Create a GitHub repository named `MuseoScientificoVirtuale`.
2. Connect this local repository and push `main`.
3. Open **Settings → Pages** in the GitHub repository.
4. Set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for the `Deploy GitHub Pages` workflow to
   complete.

The website will be available at:

<https://manzolo.github.io/MuseoScientificoVirtuale/>

Every later push to `main` will automatically deploy a new version.

### Contributing

This project is also a learning journey. I do not have a formal background in
web development or science communication, but I want to learn and improve.
Advice, corrections, ideas and contributions are sincerely welcome.

Contributions do not have to be code. Scientific feedback, text corrections,
accessibility suggestions, design ideas and maintainability improvements are
all useful.

To contribute:

1. Open an **Issue** describing a problem or proposal.
2. Fork the repository and create a dedicated branch.
3. Submit a **Pull Request** explaining what changes and why.

Constructive feedback and any kind of help are greatly appreciated.

## License

This project is released under the [MIT License](LICENSE). You may use, study,
modify and redistribute it under the terms of the license.
