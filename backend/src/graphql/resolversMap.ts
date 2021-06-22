import { IResolvers } from 'graphql-tools'
import { merge } from 'lodash'
import { PersonResolvers } from './resolvers/PersonResolver'

const resolversMap: IResolvers = merge(PersonResolvers)
export default resolversMap