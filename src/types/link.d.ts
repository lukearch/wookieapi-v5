import { Link } from 'src/app/shared/interfaces/link'

declare module '**/link.json' {
  const value: Link[]
  export default value
}
