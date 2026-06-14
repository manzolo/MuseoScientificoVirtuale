# Museo Scientifico Virtuale

Portale leggero ed estendibile che raccoglie esperienze scientifiche
interattive:

- [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/)
- [Sistema Solare](https://manzolo.github.io/SistemaSolare/)
- [Tavola Periodica 3D](https://manzolo.github.io/TavolaPeriodica3D/)

Il precedente prototipo immersivo è conservato nel branch `museo-3d`.

## Sviluppo

```bash
npm ci
npm run dev
```

Oppure tramite Docker:

```bash
make build
make up
```

Il sito sarà disponibile su `http://localhost:8080`.

## Aggiungere una sala

Le sale sono definite in `src/data/exhibits.js`. Per pubblicare una nuova
esperienza è sufficiente aggiungere un oggetto all'array `exhibits`:

```js
{
  id: 'nome-progetto',
  number: '04',
  category: 'biology',
  eyebrow: 'Biologia',
  title: 'Titolo',
  description: 'Descrizione breve.',
  url: 'https://manzolo.github.io/NomeProgetto/',
  accent: '#54d6a0',
  visual: 'elements',
  status: 'Esplora',
}
```

## GitHub Pages

Il workflow `.github/workflows/deploy-pages.yml` pubblica automaticamente
`main` su GitHub Pages. Nel repository GitHub impostare **Settings → Pages →
Source** su **GitHub Actions**.
