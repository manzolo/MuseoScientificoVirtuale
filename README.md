# Museo Scientifico Virtuale

Prototipo 3D di un museo scientifico immersivo costruito con React, Three.js e React Three Fiber.

## Prima fase

- Hall centrale con mappa e quattro accessi
- Ala Chimica con installazione Tavola Periodica 3D
- Ala Astronomia con Sistema Solare
- Ala Esopianeti con visualizzazione galattica
- Spazio predisposto per la futura Ala Biologia
- Navigazione WASD, mouse look, fly mode e teletrasporto
- Interfaccia responsive in italiano e inglese

Le installazioni della scena base sono rappresentazioni native leggere. I pannelli informativi collegano ai progetti originali:

- [Tavola Periodica 3D](https://manzolo.github.io/TavolaPeriodica3D/)
- [Sistema Solare](https://manzolo.github.io/SistemaSolare/)
- [IFAC Galaxy](https://manzolo.github.io/IfacGalaxy/)

## Sviluppo

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
```

## Docker

Avvio locale tramite container Nginx:

```bash
make build
make up
```

Il museo sarà disponibile su `http://localhost:8080`. Per usare un'altra
porta:

```bash
make up PORT=3000
```

Comandi principali:

```bash
make logs
make ps
make restart
make down
make clean
```

## Controlli

- `WASD` o frecce: movimento
- Mouse: visuale
- `Shift`: movimento rapido
- `F`: alterna cammino/volo
- `Spazio` / `Ctrl`: salita/discesa in modalità volo

## Architettura

I renderer delle installazioni sono isolati in `src/components/Museum.jsx`. Nella fase di integrazione verranno sostituiti o estesi con componenti condivisi estratti dai tre repository originali, mantenendo invariati navigazione, stanze e UI.

## Licenza

Da definire prima della pubblicazione.
