export interface Person {
  [key: string]: string
  name: string
  height: string
  mass: string
  gender: string
  homeworld: string
}

export interface NextButtonProps {
  setPage: Function
}

export interface FindByPageResult {
  count: number
  next: string
  previous: string
  people: Person[]
}

export interface PreviousButtonProps {
  setPage: Function
}

export interface FindByPageQueryVars {
  page: number
}

export interface FindByNameQueryVars {
  name: string
}

export interface ApplicationContext {
  page: number,
  peopleByPageResult: FindByPageResult
}
