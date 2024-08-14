// Redundant
export const projectsArray = [
  {
    id: 1,
    title: 'Next Chinese',
    image: '/images/next-chinese-flashcard.png',
    url: 'https://next-chinese.vercel.app/'
  },
  {
    id: 2,
    title: 'E-Nite | Party Services',
    image: '/images/e-nite-homepage.png',
    url: 'https://nextjs-i18n-enite-test.vercel.app/en'
  },
  {
    id: 3,
    title: 'Classroom Reactor',
    image: '/images/classroom-reactor-dashboard.png',
    url: 'https://social-app-skeleton-five.vercel.app/'
  }
]

// This exists to keep untranslated content in a single place, not included
// in the i18n JSON files to allow easier changes - .map merged with json objects in page.tsx when used
export const projectsArrayTech = [
  {
    id: 1,
    title: 'Next Chinese',
    image: '/images/next-chinese-flashcard.png',
    url: 'https://next-chinese.vercel.app/',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  },
  {
    id: 2,
    title: 'E-Nite | Party Services',
    image: '/images/e-nite-homepage.png',
    url: 'https://nextjs-i18n-enite-test.vercel.app/en',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  },
  {
    id: 3,
    title: 'Classroom Reactor',
    image: '/images/classroom-reactor-dashboard.png',
    url: 'https://social-app-skeleton-five.vercel.app/',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  },
  {
    id: 4,
    title: 'Reactive Games',
    image: '/images/reactive-classroom-wordsearch.png',
    url: 'https://reactive-classroom.vercel.app/',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'CSS', icon: 'css' },
      { name: 'PostgreSQL', icon: 'postgres' }
    ]
  },
  {
    id: 5,
    title: 'Marbella Luxury Cars',
    image: '/images/marbella-cars.png',
    url: 'https://social-app-skeleton-five.vercel.app/',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'ThreeJS', icon: 'threejs' }
    ]
  },
  {
    id: 6,
    title: 'Protfolio Page',
    image: '/images/portfolio-v1-homepage.png',
    url: 'https://social-app-skeleton-five.vercel.app/',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  }
]
