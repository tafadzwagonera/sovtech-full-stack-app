import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import swApi from './util/api'
import { ApolloProvider } from "@apollo/client"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={swApi}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
