# Prompt template — nuovo progetto (app scientifica educativa)

Template per generare con un agente AI una web app statica, bilingue IT/EN,
destinata a GitHub Pages e coerente con l'ecosistema "Museo Scientifico Virtuale".

## Come si usa

1. Copia il blocco "PROMPT" qui sotto.
2. Sostituisci tutti i segnaposto `«...»`.
3. Cancella le righe delle sezioni che non servono al progetto specifico
   (es. se non c'è un dataset, togli la sezione DATASET e i punti collegati).
4. Incollalo all'agente.

Segnaposto da compilare:

- `«NomeApp»` — nome leggibile (es. "Protein Suite").
- `«NomeRepo»` — nome repository / slug GitHub (es. "ProteinSuite").
- `«dominio»` — di cosa tratta (es. "le proteine e la loro analisi").
- `«FUNZIONALITÀ»` — elenco delle funzionalità obbligatorie.
- `«MODULI_IN_ORDINE»` — moduli nell'ordine di consegna.
- `«FONTI»` — fonti scientifiche autorevoli da citare.
- Sezioni opzionali (DATASET, CALCOLI, KNOWLEDGE CENTER): compila o rimuovi.

---

## PROMPT

```
Agisci come lead architect e unico sviluppatore del progetto.
Non generare roadmap, MVP, blueprint, mockup, esempi, scheletri o placeholder.
Devi costruire il software reale.

# OBIETTIVO
Realizzare una web application denominata "«NomeApp»", destinata a GitHub Pages
(URL finale: https://manzolo.github.io/«NomeRepo»/), parte di un ecosistema di app
scientifiche educative bilingui. Tratta di «dominio».
Composta da HTML, CSS, JavaScript ES6 (moduli), JSON e documentazione Markdown.

# STACK OBBLIGATORIO (NON NEGOZIABILE)
- Sito 100% statico: NESSUN build step, NESSUN bundler, NESSUN framework
  (no React, no Vite, no TypeScript, no dipendenze npm a runtime).
- Solo HTML5 + CSS3 + JavaScript ES6 nativo con import/export (moduli ES).
- Deve funzionare servito da: GitHub Pages, `python3 -m http.server` e nginx,
  senza alcuna trasformazione.
- TUTTI i percorsi (data, docs, lang, assets, moduli JS) devono essere RELATIVI.
  È VIETATO ogni percorso assoluto che inizia con "/", perché il sito vive in una
  sottocartella ("/«NomeRepo»/"). Usa percorsi relativi al documento.
- Librerie di terze parti ammesse SOLO se incluse localmente in assets/
  (niente CDN obbligatorie a runtime). Preferisci codice nativo.

# REGOLE OPERATIVE
1. Non interrompere il lavoro per chiedere conferme.
2. Non descrivere ciò che farai. Niente piani, roadmap o considerazioni progettuali.
3. Fornisci esclusivamente codice, file e contenuti definitivi.
4. Ogni risposta contiene uno o più file completi e funzionanti, consegnati per intero.
5. I file successivi devono essere compatibili con quelli già generati.
6. Nessun placeholder ("coming soon", "TODO", "to be implemented", "module later").
7. Nessun dato fittizio dove esiste un dato reale utilizzabile (usa identificatori reali).
8. Ogni modulo deve essere utilizzabile immediatamente dopo la generazione.
9. I dettagli implementativi fini (nomi classi CSS, struttura interna dei moduli JS)
   sono a tua discrezione, purché coerenti.

# FORMATO DI CONSEGNA
Per ogni file:

FILE: percorso/file.ext
[codice completo]

FILE: percorso/file.ext
[codice completo]

Nessuna spiegazione, commento introduttivo o testo fuori dai file.

# ARCHITETTURA DI REPOSITORY
«NomeRepo»/
├── index.html
├── css/
├── js/
├── data/                  # dataset (JSON) + eventuali indici di ricerca
├── docs/
│   ├── it/                # documentazione in Markdown
│   └── en/
├── lang/                  # stringhe UI it.json / en.json
├── assets/                # icone, font, eventuali librerie locali
├── .github/workflows/     # deploy-pages.yml (pubblica il sito statico, niente build npm)
├── Makefile               # target: help, build, up, down, restart, logs, serve, open; var PORT (default 8080)
├── Dockerfile             # nginx:alpine che copia i file statici
├── docker-compose.yml
├── LICENSE                # MIT
├── NOTICE.md              # fonti scientifiche, attribuzioni, disclaimer
├── README.md              # italiano
└── README.en.md           # inglese

Il Makefile deve offrire `make serve` (python3 http.server, senza Docker) e
`make build && make up` (Docker/nginx), con override `PORT=`. Il workflow Pages
pubblica direttamente i file statici della repo (NON esegue alcun build npm).

# FUNZIONALITÀ OBBLIGATORIE
«FUNZIONALITÀ»
- Tema chiaro/scuro: default da `prefers-color-scheme`, segue i cambi OS via matchMedia,
  più toggle utente; preferenza persistita in localStorage.
- Sistema bilingue IT/EN: IT lingua di default; lingua persistita in localStorage;
  stringhe UI in lang/it.json e lang/en.json; ogni contenuto localizzabile è bilingue.
- Ricerca full-text.
- Help scalabile e contestuale.
- Accessibilità (ARIA, navigazione da tastiera, focus visibile) e mobile-first responsive.

# DATASET (rimuovere se non pertinente)
- Dataset iniziale: «N» voci curate, con identificatori REALI e verificabili
  («es. ID di banche dati ufficiali»).
- Campi obbligatori per voce: «elenco campi».
- Categorie/filtri: «elenco categorie».
- Filtri, ordinamento, ricerca e link alle fonti ufficiali.

# CALCOLI / STRUMENTI (rimuovere se non pertinente)
- Implementa solo metodi scientifici reali e citabili.
- Per ogni scala, costante o algoritmo dichiara esplicitamente la fonte
  nel codice e nella documentazione.
- «elenco calcoli/strumenti con il metodo di riferimento per ciascuno»

# KNOWLEDGE CENTER (rimuovere se non serve un sistema documentale completo)
Vero sistema documentale, NON un popup Help.
- Argomenti: «elenco argomenti».
- Bilingue: ogni argomento esiste sia in docs/it/ che in docs/en/ (Markdown).
- Ricerca full-text sui documenti, navigazione ad albero + breadcrumb.
- Help contestuale collegato alle funzioni dell'app.
- Glossario bilingue, FAQ, sezione References con le fonti.
- Due livelli di lettura per ogni argomento:
  (a) didattico — divulgativo e accessibile;
  (b) scientifico — con strumenti di studio, analisi e approfondimento,
      con rimandi diretti alle funzioni dell'app.
- Grafica chiara, leggibile, ben gerarchizzata; rendering Markdown coerente col tema.
- Le fonti scientifiche sono riportate esplicitamente in ogni argomento e in References.

# FONTI SCIENTIFICHE (da citare esplicitamente)
«FONTI»
In NOTICE.md includi: elenco fonti con URL, note d'uso dei dati e il disclaimer
"progetto educativo indipendente, non affiliato né approvato dalle istituzioni citate".
Il codice originale è rilasciato sotto licenza MIT (LICENSE).

# QUALITÀ E INTENTO
Priorità a semplicità, accessibilità, mobile-friendliness e accuratezza scientifica.
Grafica ottimizzata: chiara, ben definita, contrasto adeguato in entrambi i temi.

# ORDINE DI CONSEGNA (obbligatorio)
1. Core Framework completo (index.html, layout, navigazione SPA, theme, sistema bilingue,
   ricerca, scaffolding repo: Makefile, Dockerfile, docker-compose.yml, workflow Pages,
   LICENSE, README.md, README.en.md, NOTICE.md).
«MODULI_IN_ORDINE»

Inizia ora dal punto 1 e procedi modulo per modulo senza fermarti.
```

---

## Note di integrazione col portale (post-pubblicazione)

Quando l'app è online, aggiungila al portale Museo modificando solo
`MuseoScientificoVirtuale/src/data/exhibits.js`: una voce in `exhibits` con
`id`, `number`, `category` (deve combaciare con un id in `categories`),
`eyebrow`/`title`/`description` bilingui, `url`
(`https://manzolo.github.io/«NomeRepo»/`), `image` e `accent`.
