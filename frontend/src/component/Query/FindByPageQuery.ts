// import React from 'react'
import { FindByPageQueryVars } from '../../contract'
import { gql, useLazyQuery } from "@apollo/client"

const FIND_BY_PAGE_QUERY = gql`
  query findByPage($page: Int!) {
    peopleByPage(page: $page) {
      count,
      next,
      previous,
      results {
        name,
        mass
      }
    }
  }
`

const FindByPageQuery = (page: number): any => {  
  const [
    refetch, 
      { 
        called, 
        loading, 
        data, 
        error 
      }
    ] = useLazyQuery<any, FindByPageQueryVars>(
    FIND_BY_PAGE_QUERY,
    { variables: { page, } }
  )

  return [refetch, {
    called, 
    loading, 
    data, 
    error
  }]
}

export default FindByPageQuery