import { Person, FindByPageResult } from '../../contract'

const getPeopleByPageResult = (data: any): FindByPageResult => {
  const { 
    peopleByPage: {
      count,
      next, 
      previous, 
      results: people,
    } 
  } = data

  return {
    count,
    next, 
    previous, 
    people,
  }
}

const getPersonByName = (data: any): Person => {
  const { 
    personByName: {
      name,
      gender,
      height,
      mass,
      homeworld,
    } 
  } = data

  return {
    name,
    gender,
    height,
    mass,
    homeworld,
  }
}

const queryDidFetch = (called: boolean, loading: boolean): boolean => 
  called && !loading

export { 
  queryDidFetch,
  getPersonByName,
  getPeopleByPageResult
}