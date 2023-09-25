/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Tile = (props) => {
  const { currentPlayer, dispatch, board, gameState } = useContext(AppContext)
  let displayValue = board[props.id]
  const handleClick = (e) => {
    if (gameState === 1 || gameState === 0) {
      if (board[props.id] === 'Z') {
        dispatch({
          type: 'CHANGE_PLAYER'
        })
        dispatch({
          type: 'SET_GAMESTATE',
          payload: 1
        })
        dispatch({
          type: 'SET_TILEVALUE',
          id: props.id,
          value: currentPlayer
        })
      } else {
        alert('Tile occupied!')
      }
      /* setValue(currentPlayer); */
    }
  }
  if (board[props.id] === 'Z') {
    displayValue = ''
  }
  return (
    <button className='btn' id={props.id}
      onClick={(e) => handleClick(e)}>{displayValue}
    </button>
  )
}

export default Tile
