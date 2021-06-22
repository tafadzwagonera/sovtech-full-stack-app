import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import schema from './src/graphql/schemasMap'

const PORT = 4000
const app = express()

app.use(cors())

const server = new ApolloServer({
  schema,
})

server.applyMiddleware({ app, path: '/graphql' })
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(` 🚀 Server listening at http://localhost:${PORT} `)
})