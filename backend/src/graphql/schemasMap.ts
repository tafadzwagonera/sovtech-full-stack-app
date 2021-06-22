import 'graphql-import-node'
import * as emptyTypeDefs from './schemas/empty.graphql'
import * as personTypeDefs from './schemas/person.graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolversMap'
import { GraphQLSchema } from 'graphql'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, personTypeDefs],
  resolvers,
})

export default schema