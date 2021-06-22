import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_PORT = 4000

const uri = `http://localhost:${API_PORT}/graphql`

const swApi = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

export default swApi