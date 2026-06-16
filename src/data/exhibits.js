export const categories = [
  { id: 'all', label: { it: 'Tutte le sale', en: 'All rooms' } },
  { id: 'astronomy', label: { it: 'Astronomia', en: 'Astronomy' } },
  { id: 'chemistry', label: { it: 'Chimica', en: 'Chemistry' } },
  { id: 'earth-science', label: { it: 'Scienze della Terra', en: 'Earth Science' } },
  { id: 'biology', label: { it: 'Biologia', en: 'Biology' } },
]

export const exhibits = [
  {
    id: 'solar-system',
    number: '01',
    category: 'astronomy',
    eyebrow: { it: 'Astronomia', en: 'Astronomy' },
    title: { it: 'Sistema Solare', en: 'Solar System' },
    description: {
      it: 'Osserva il nostro sistema planetario, le orbite e le caratteristiche dei corpi celesti.',
      en: 'Observe our planetary system, its orbits and the characteristics of celestial bodies.',
    },
    url: 'https://manzolo.github.io/SistemaSolare/',
    image: '/images/exhibits/sistema-solare.webp',
    accent: '#45b9ff',
  },
  {
    id: 'ifac-galaxy',
    number: '02',
    category: 'astronomy',
    eyebrow: { it: 'Esopianeti e galassia', en: 'Exoplanets and galaxy' },
    title: { it: 'IFAC Galaxy', en: 'IFAC Galaxy' },
    description: {
      it: 'Naviga una galassia interattiva e scopri stelle, sistemi planetari ed esopianeti.',
      en: 'Navigate an interactive galaxy and discover stars, planetary systems and exoplanets.',
    },
    url: 'https://manzolo.github.io/IfacGalaxy/',
    image: '/images/exhibits/ifac-galaxy.webp',
    accent: '#9c7cff',
  },
  {
    id: 'periodic-table',
    number: '03',
    category: 'chemistry',
    eyebrow: { it: 'Chimica', en: 'Chemistry' },
    title: { it: 'Tavola Periodica 3D', en: '3D Periodic Table' },
    description: {
      it: 'Esplora gli elementi chimici in una tavola periodica tridimensionale e interattiva.',
      en: 'Explore chemical elements through an interactive three-dimensional periodic table.',
    },
    url: 'https://manzolo.github.io/TavolaPeriodica3D/',
    image: '/images/exhibits/tavola-periodica-3d.webp',
    accent: '#ff9d52',
  },
  {
    id: 'starlife-3d',
    number: '04',
    category: 'astronomy',
    eyebrow: { it: 'Ciclo di vita delle stelle', en: 'Stellar life cycle' },
    title: { it: 'StarLife 3D', en: 'StarLife 3D' },
    description: {
      it: 'Scegli la massa di una stella e seguine l’evoluzione in 3D, dalla nebulosa fino a nana bianca, stella di neutroni o buco nero.',
      en: 'Pick a star’s mass and follow its evolution in 3D, from nebula to white dwarf, neutron star or black hole.',
    },
    url: 'https://manzolo.github.io/StarLife3D/',
    image: '/images/exhibits/starlife-3d.webp',
    accent: '#ffb45c',
  },
  {
    id: 'geotime-voyage',
    number: '05',
    category: 'earth-science',
    eyebrow: { it: 'Scienze della Terra', en: 'Earth Science' },
    title: { it: 'GeoTime Voyage', en: 'GeoTime Voyage' },
    description: {
      it: 'Viaggia nel tempo geologico della Terra: trascina la timeline o ruota il globo per scoprire i principali eventi geologici e biologici dall’Adeano a oggi.',
      en: 'Travel through Earth’s geological time: drag the timeline or spin the globe to discover the major geological and biological events from the Hadean to today.',
    },
    url: 'https://manzolo.github.io/GeoTimeVoyage/',
    image: '/images/exhibits/geotime-voyage.webp',
    accent: '#54d6a0',
  },
  {
    id: 'cell-cycle-3d',
    number: '06',
    category: 'biology',
    eyebrow: { it: 'Biologia', en: 'Biology' },
    title: { it: 'CellCycle 3D', en: 'CellCycle 3D' },
    description: {
      it: 'Un simulatore 3D della divisione cellulare: segui passo passo le fasi della mitosi e della meiosi e confrontale tra loro.',
      en: 'A 3D cell-division simulator: step through the phases of mitosis and meiosis and compare them side by side.',
    },
    url: 'https://manzolo.github.io/CellCycle3D/',
    image: '/images/exhibits/cell-cycle-3d.webp',
    accent: '#3fd0d6',
  },
  {
    id: 'gene-flow-3d',
    number: '07',
    category: 'biology',
    eyebrow: { it: 'Biologia', en: 'Biology' },
    title: { it: 'GeneFlow 3D', en: 'GeneFlow 3D' },
    description: {
      it: 'Esplora la doppia elica del DNA in 3D e segui il flusso dell’informazione genetica: trascrizione, traduzione e codice genetico.',
      en: 'Explore the DNA double helix in 3D and follow the flow of genetic information: transcription, translation and the genetic code.',
    },
    url: 'https://manzolo.github.io/GeneFlow3D/',
    image: '/images/exhibits/gene-flow-3d.webp',
    accent: '#e26db0',
  },
  {
    id: 'evo-tree-3d',
    number: '08',
    category: 'biology',
    eyebrow: { it: 'Biologia', en: 'Biology' },
    title: { it: 'EvoTree 3D', en: 'EvoTree 3D' },
    description: {
      it: 'Esplora l’albero della vita in 3D: da LUCA ai tre domini, segui l’evoluzione lungo una timeline con i grandi eventi della storia biologica.',
      en: 'Explore the tree of life in 3D: from LUCA to the three domains, follow evolution along a timeline of the major events in life’s history.',
    },
    url: 'https://manzolo.github.io/EvoTree3D/',
    image: '/images/exhibits/evo-tree-3d.webp',
    accent: '#8bd450',
  },
  {
    id: 'protein-suite',
    number: '09',
    category: 'biology',
    eyebrow: { it: 'Biologia', en: 'Biology' },
    title: { it: 'Protein Suite', en: 'Protein Suite' },
    description: {
      it: 'Cataloga proteine, analizza sequenze FASTA e studia proprietà biochimiche (massa, carica, pI, idrofobicità) con metodi e fonti dichiarati.',
      en: 'Catalogue proteins, analyse FASTA sequences and study biochemical properties (mass, charge, pI, hydrophobicity) with stated methods and sources.',
    },
    url: 'https://manzolo.github.io/ProteinSuite/',
    image: '/images/exhibits/protein-suite.webp',
    accent: '#ff6f61',
  },
]

export const upcoming = []

export const learningProject = {
  title: { it: 'Quiz Didattici', en: 'Educational Quizzes' },
  eyebrow: { it: 'Imparare insieme', en: 'Learning together' },
  description: {
    it: 'Questo progetto è nato per aiutare le mie figlie durante la scuola media: una raccolta semplice e gratuita di quiz con cui ripassare, esercitarsi e imparare facendo.',
    en: 'This project started as a way to help my daughters through middle school: a simple, free collection of quizzes for reviewing, practising and learning by doing.',
  },
  details: {
    it: 'Comprende esercizi di matematica su equivalenze, operazioni, frazioni, espressioni, geometria, MCD e mcm, oltre a quiz di italiano sui tempi verbali. I risultati restano nel browser e il progetto continua a crescere.',
    en: 'It includes maths exercises on conversions, operations, fractions, expressions, geometry, GCD and LCM, plus Italian verb tense quizzes. Results stay in the browser and the project keeps growing.',
  },
  subjects: {
    it: ['Scuola media', 'Matematica', 'Italiano', 'Progressi locali'],
    en: ['Middle school', 'Mathematics', 'Italian', 'Local progress'],
  },
  url: 'https://manzolo.github.io/quiz-didattici/',
  repository: 'https://github.com/manzolo/quiz-didattici',
}
