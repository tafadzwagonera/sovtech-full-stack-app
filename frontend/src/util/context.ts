import { createContext } from 'react'
import { Person, FindByPageResult, ApplicationContext } from '../contract'

const people: Person[] = [
  {
    name: '',
    height: '',
    mass: '',
    gender: '',
    homeworld: '',
  }
]

const peopleByPageResult: FindByPageResult = {
  count: 0,
  next: '',
  previous: '',
  people,
}

const defaultApplicationContext: ApplicationContext = {
  page: 1,
  peopleByPageResult
}

const AppContext = createContext<ApplicationContext>(defaultApplicationContext)

export default AppContext