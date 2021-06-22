import { IResolvers } from 'graphql-tools'
import {
  Maybe,
  Person,
  PeopleByPageResult,
  QueryPersonByNameArgs,
  QueryPeopleByPageArgs
} from '../generated'
import axios, { AxiosInstance } from 'axios'
import { map, pick } from 'lodash'

const baseURL = 'https://swapi.dev/api'

const swApi: AxiosInstance = axios.create({
  baseURL,
})

const findByPage = (page: Maybe<number> | undefined) => swApi.get(`/people/?page=${page}`)

const findByName = (name: string) => swApi.get(`/people/?search=${name}`)

const getPersonAttributes = (
  people: Person[],
  attrs: Array<string> = ['name', 'height', 'mass', 'gender', 'homeworld']
): Person[] => map(people, person => pick(person, attrs))

export const PersonResolvers: IResolvers = {
  Query: {
    async peopleByPage(_: void, args: QueryPeopleByPageArgs): Promise<PeopleByPageResult> {
      const { page } = args

      const {
        data: {
          count,
          next,
          previous,
          results: people
        }
      } = await findByPage(page)

      return {
        count,
        next,
        previous,
        results: getPersonAttributes(people)
      }
    },
    async personByName(_: void, args: QueryPersonByNameArgs): Promise<Person> {
      const { name } = args

      const { 
        data: { results: people } 
      } = await findByName(name)

      const [person,] = [...getPersonAttributes(people)]

      return person
    }
  }
}