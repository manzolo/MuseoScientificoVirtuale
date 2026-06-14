export const categories = [
  { id: 'all', label: 'Tutte le sale' },
  { id: 'astronomy', label: 'Astronomia' },
  { id: 'chemistry', label: 'Chimica' },
]

export const exhibits = [
  {
    id: 'ifac-galaxy',
    number: '01',
    category: 'astronomy',
    eyebrow: 'Esopianeti e galassia',
    title: 'IFAC Galaxy',
    description:
      'Naviga una galassia interattiva e scopri stelle, sistemi planetari ed esopianeti.',
    url: 'https://manzolo.github.io/IfacGalaxy/',
    accent: '#9c7cff',
    visual: 'galaxy',
    status: 'Esplora',
  },
  {
    id: 'solar-system',
    number: '02',
    category: 'astronomy',
    eyebrow: 'Astronomia',
    title: 'Sistema Solare',
    description:
      'Osserva il nostro sistema planetario, le orbite e le caratteristiche dei corpi celesti.',
    url: 'https://manzolo.github.io/SistemaSolare/',
    accent: '#45b9ff',
    visual: 'orbit',
    status: 'Esplora',
  },
  {
    id: 'periodic-table',
    number: '03',
    category: 'chemistry',
    eyebrow: 'Chimica',
    title: 'Tavola Periodica 3D',
    description:
      'Esplora gli elementi chimici in una tavola periodica tridimensionale e interattiva.',
    url: 'https://manzolo.github.io/TavolaPeriodica3D/',
    accent: '#ff9d52',
    visual: 'elements',
    status: 'Esplora',
  },
]

export const upcoming = [
  {
    number: '04',
    category: 'Biologia',
    title: 'La vita al microscopio',
    description: 'Una nuova sala dedicata a cellule, DNA ed ecosistemi.',
    accent: '#54d6a0',
  },
  {
    number: '05',
    category: 'Fisica',
    title: 'Laboratorio delle forze',
    description: 'Esperimenti interattivi su energia, moto e gravità.',
    accent: '#ffd166',
  },
]
