// import React from 'react'
import { FindByNameQueryVars } from '../../contract'
import { gql, useQuery } from "@apollo/client"

const FIND_BY_NAME_QUERY = gql`
  query personByName($name: String!) {
    personByName(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`

const FindByNameQuery = (name: string): any => {  
  const { loading, error, data } = useQuery<any, FindByNameQueryVars>(
    FIND_BY_NAME_QUERY,
    { variables: { name, } }
  )

  return { 
    loading, 
    error, 
    data 
  }
}

export default FindByNameQuery