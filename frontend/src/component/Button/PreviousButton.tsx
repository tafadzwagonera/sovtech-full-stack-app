import React, { useContext} from 'react'
import AppContext from '../../util/context'
import { PreviousButtonProps } from '../../contract'
import Button from '.'

const PreviousButton = ({
  setPage
} : PreviousButtonProps) => {

  const { page } = useContext(AppContext)

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (page > 1) setPage((prev: number) => prev - 1)
  }

  return (
    <Button 
      type="button"
      onClick={handleClick}
    >
      Previous
    </Button>
  )
}

export default PreviousButton