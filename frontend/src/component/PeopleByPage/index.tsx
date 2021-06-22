import React, { useContext} from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Person } from '../../contract'
import AppContext from '../../util/context'
import colors from '../../util/colors'

const { 
  primary,
  white,
  lightGrayishBlue1,
  lightGrayishBlue3,
  veryLightGray1,
  veryLightGray3
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
  overflow: hidden;
  position:relative;
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

        a {
          color: ${primary};
          font-size: 1.8rem;
          cursor: pointer;
        }
      }
    }
  }
`

const StyledPageCountHeading = styled.h3<{
  page: number,
  count: number | undefined
}>`
  position: relative;

  :after {
    position: absolute;
    right: 0;
    bottom: 25%;
    font-size: 1.2rem;
    ${({page, count}) => page && count && `
      content: '${page} out of ${count}'
    `}
  }
`

/* eslint-disable jsx-a11y/anchor-is-valid */
const Link = ({ name } : { name: string}) => {
  const history = useHistory()

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation()
    e.preventDefault()

    history.push(
      { 
        pathname: `/PersonDetails/${encodeURIComponent(name)}`,
        state: name,
      }
    )
  }

  return <a href='#' onClick={handleClick}>{name}</a>
}

const PeopleByPage = () => {

  const { 
    page, 
    peopleByPageResult: { 
      count, 
      people 
    } 
  } = useContext(AppContext)

  return (
    <StyledTable striped bordered hover responsive>
      <thead>
        <tr>
          <th>
            <StyledPageCountHeading
              page={page}
              count={count}
            >
              SW List of Actors
            </StyledPageCountHeading>
          </th>
        </tr>
      </thead>
      <tbody>
        {people && people.map((person: Person, key: number) => (
          <tr key={key}>
            <td>
              <Link name={person.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default PeopleByPage