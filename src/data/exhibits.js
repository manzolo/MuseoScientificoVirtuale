export const categories = [
  { id: 'all', label: { it: 'Tutte le sale', en: 'All rooms' } },
  { id: 'astronomy', label: { it: 'Astronomia', en: 'Astronomy' } },
  { id: 'chemistry', label: { it: 'Chimica', en: 'Chemistry' } },
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
]

export const upcoming = [
  {
    number: '04',
    category: { it: 'Astronomia', en: 'Astronomy' },
    title: { it: 'Evoluzione Stellare', en: 'Stellar Evolution' },
    description: {
      it: 'Una timeline interattiva sul ciclo di vita delle stelle, con transizioni tra nana rossa, gigante, supernova e residui stellari.',
      en: 'An interactive timeline of stellar life cycles, from red dwarfs and giants to supernovae and stellar remnants.',
    },
    accent: '#ffb45c',
  },
  {
    number: '05',
    category: { it: 'Scienze della Terra', en: 'Earth Science' },
    title: { it: 'Viaggio nel Tempo Geologico', en: 'Journey Through Geological Time' },
    description: {
      it: 'La Terra cambia dal Precambriano a oggi, con una timeline esplorabile e overlay dei principali eventi geologici e biologici.',
      en: 'Explore Earth from the Precambrian to today, with geological and biological events layered over an interactive timeline.',
    },
    accent: '#54d6a0',
  },
]

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
