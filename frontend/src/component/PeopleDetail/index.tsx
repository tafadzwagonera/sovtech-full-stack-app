// import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FindByNameQuery from '../Query/FindByNameQuery'
import { getPersonByName } from '../Query/helpers'
import styled from 'styled-components'
import colors from '../../util/colors'
import { Person } from '../../contract'
import Button from '../Button'

const {
  white,
  lightGrayishBlue1,
  lightGrayishBlue3,
  warning,
  veryLightGray1,
  veryLightGray3,
  darkLimeGreen
} = colors

const StyledTable = styled(Table)`
  position: relative;
  margin: 1.5rem 0;
  border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
  background-color: ${lightGrayishBlue3};
  table-layout: fixed;
  word-wrap: break-word;
  position: relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  thead {
    th {
      border-color: ${veryLightGray1};
      padding: 1.5rem 3rem;
    }
  }

  tbody {
    tr {
      background-color: ${white};

      :hover {
        background-color: ${lightGrayishBlue1};
        transition: all 0.5s ease-in-out;
      }

      :nth-of-type(odd) {
        background-color: ${veryLightGray3};

        :hover {
          background-color: ${lightGrayishBlue1};
          transition: all 0.5s ease-in-out;
        }
      }

      td {
        border-color: ${veryLightGray1};
        padding: 2rem 4rem;
      }
    }
  }
`

const Loading = styled.p`
  color: ${darkLimeGreen};
`
const Error = styled.p`
  color: ${warning};
`

const StyledCenteredHeading = styled.th`
  text-align: center;
`

const StyledUpperCaseTd = styled.td`
  textTransform: 'capitalize';
`

const PeopleDetail = () => {
  const history = useHistory()
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => history.goBack()
  const { state } = useLocation()
  const name = state as string
  const { loading, error, data } = FindByNameQuery(name)

  let person: Person = { } as Person
  if (data) person = getPersonByName(data)

  if (error) {
    return (
      <Row>
        <Col>
          <Error>Error: {error.message}</Error>
        </Col>
      </Row>
    )
  }

  if (loading) {
    return (
      <Row>
        <Col>
        <Loading>Loading...</Loading>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Row>
        <Col>
          <StyledTable striped bordered hover responsive>
            <thead>
              <tr>
                <StyledCenteredHeading colSpan={2}>
                  SW Profile
                </StyledCenteredHeading>
              </tr>
            </thead>
            <tbody>
              {person && Object.keys(person).map((key: string, val) => (
                <tr key={val}>
                  <StyledUpperCaseTd>{key}</StyledUpperCaseTd>
                  <td>{person[key] as string}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Button 
            type="button"
            onClick={handleClick}
          >
            Go back
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default PeopleDetail