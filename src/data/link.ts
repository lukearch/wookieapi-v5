import { Link } from 'src/app/shared/interfaces/link'

export const links: Link[] = [
  {
    name: 'Home',
    route: '/',
    external: false
  },
  {
    name: 'Documentation',
    route: '/documentation',
    external: false,
    sublinks: [
      {
        name: 'Getting Started',
        route: '/documentation/getting-started',
        external: false
      },
      {
        name: 'Consuming with Axios',
        route: '/documentation/consuming-with-axios',
        external: false
      }
    ]
  },
  {
    name: 'About',
    route: '/about',
    external: false
  },
  {
    name: 'Github',
    route: 'https://github.com/lukearch',
    external: true
  }
]
