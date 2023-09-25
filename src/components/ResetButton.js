import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const ResetButton = () => {
  const { dispatch } = useContext(AppContext)
  const handleClick = () => {
    dispatch({
      type: 'RESET_BOARD'
    })
    dispatch({
      type: 'SET_GAMESTATE',
      payload: 0
    })
  }

  return (
    <button className='btn-reset' onClick={() => handleClick()} >Reset</button>
  )
}
export default ResetButton
