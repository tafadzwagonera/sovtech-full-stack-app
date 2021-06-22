import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AppContext from './util/context'
import PersonDetails from './component/PeopleDetail'
import PeopleByPage from './component/PeopleByPage'
import NextButton from './component/Button/NextButton'
import PreviousButton from './component/Button/PreviousButton'
import FindByPageQuery from './component/Query/FindByPageQuery'
import { queryDidFetch, getPeopleByPageResult } from './component/Query/helpers'
import { ApplicationContext } from './contract'
import colors from './util/colors'

const { warning, darkLimeGreen, } = colors

const StyledContainer = styled(Container)`
  @media (min-width: 992px) {
    width: 40%;
  }
`

const Error = styled.p`
  color: ${warning};
`

const Loading = styled.p`
  color: ${darkLimeGreen};
`

const App = () => {
  const [page, setPage] = useState(1)
  const [refetch, { called, loading, data, error }] = FindByPageQuery(page)
  const completed = queryDidFetch(called, loading)

  useEffect(() => {
    refetch()
  }, [page, refetch])

  let applicationContext: ApplicationContext = { } as ApplicationContext
  if (completed) {
    applicationContext = {
      page,
      peopleByPageResult: getPeopleByPageResult(data)
    }
  }

  if (error) {
    return (
      <StyledContainer fluid>
        <Row>
          <Col>
            <Error>Error: {error.message}</Error>
          </Col>
        </Row>
      </StyledContainer>
    )
  }

  return (
    <StyledContainer fluid>
      <AppContext.Provider value={{...applicationContext}}>
        <Router>
          <Switch>
            <Route 
              exact path='/' render={() => (
                <>
                  <Row>
                    <Col className='d-flex justify-content-center'>
                      {completed ? (
                          <PeopleByPage />
                        ) : (
                          <Loading>Loading...</Loading>
                      )}
                    </Col>
                  </Row>
                  <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                      {completed && 
                        <PreviousButton setPage={setPage}
                        />
                      }
                    </Col>
                    <Col className='d-flex justify-content-center'>
                      {completed && 
                        <NextButton setPage={setPage}
                        />
                      }
                    </Col>
                  </Row>
                </>
              )} 
            />
            <Route path='/PersonDetails' component={PersonDetails} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </StyledContainer>
  )
}

export default App