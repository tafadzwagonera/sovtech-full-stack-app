import React, { useContext} from 'react'
import AppContext from '../../util/context'
import { NextButtonProps } from '../../contract'
import Button from '.'

const NextButton = ({
  setPage,
} : NextButtonProps) => {

  const { 
    page, 
    peopleByPageResult: { count } 
  } = useContext(AppContext)

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (page < count) setPage((prev: number) => prev + 1)
  }

  return (
    <Button 
      type='button'
      onClick={handleClick}
    >
      Next
    </Button>
  )
}

export default NextButton