// This exists to keep untranslated content in a single place, not included
// in the i18n JSON files to allow easier changes - .map merged with json objects in page.tsx when used
export const projectsArrayTech = [
  {
    // working and repo made public
    id: 1,
    title: 'Classroom Reactor',
    image: '/images/projects/classroom-reactor-dashboard.png',
    logo: '/images/projects/classroom-reactor-logo.png',
    url: 'https://social-app-skeleton-five.vercel.app/',
    repo: 'https://github.com/esoterik12/classroom-reactor',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'MongoDB', icon: 'mongodb' }
    ]
  },
  {
    // repo made public - api keys hidden - done
    id: 2,
    title: 'E-Nite | Party Services',
    image: '/images/projects/e-nite-homepage.png',
    logo: '/images/projects/e-nite-logo.png',
    url: 'https://nextjs-i18n-enite-test.vercel.app/en',
    repo: 'https://github.com/esoterik12/nextjs-i18n-enite',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  },

  {
    // this is a problem - needs to be remade - code is a mess
    id: 3,
    title: 'Next Chinese',
    image: '/images/projects/next-chinese-flashcard.png',
    logo: '/images/flags/zh.svg',
    url: 'https://next-chinese.vercel.app/',
    repo: 'https://github.com/esoterik12/next-chinese',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'JavaScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'MongoDB', icon: 'mongodb' }
    ]
  },
  {
    // public, working - needs some clean up
    id: 4,
    title: 'Reactive Games',
    logo: '/images/projects/reactive-games-logo.svg',
    image: '/images/projects/reactive-classroom-wordsearch.png',
    url: 'https://reactive-classroom.vercel.app/',
    repo: 'https://github.com/esoterik12/reactive-games',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'CSS', icon: 'css' },
      { name: 'PostgreSQL', icon: 'postgres' }
    ]
  },
  {
    // public, working
    id: 5,
    title: 'Protfolio Page',
    image: '/images/projects/portfolio-v1-homepage.png',
    logo: '',
    url: 'https://luke-hide.vercel.app/en',
    repo: 'https://github.com/esoterik12/luke-hide',
    tech: [
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'React', icon: 'reactjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' }
    ]
  }
]
