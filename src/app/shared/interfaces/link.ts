export interface Link {
  name: string
  route: string
  external: boolean
  sublinks?: Link[]
}
