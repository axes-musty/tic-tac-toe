/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';


const Tile = (props) => {
  const {currentPlayer, dispatch, board} = useContext(AppContext);
  let displayValue = board[props.id];
  const handleClick = (e) => {
    if (board[props.id]==='Z') {
      dispatch({
        type: 'CHANGE_PLAYER',
      });
      dispatch({
        type: 'SET_GAMESTATE',
        payload: 1,
      });
      dispatch({
        type: 'SET_TILEVALUE',
        id: props.id,
        value: currentPlayer,
      });
      /* setValue(currentPlayer); */
    } else {
      alert('Tile occupied!');
    }
  };
  if (board[props.id] === 'Z') {
    displayValue = '';
  }
  return (
    <button className='btn' id={props.id}
      onClick={(e) => handleClick(e)}>{displayValue}
    </button>
  );
};

export default Tile;

