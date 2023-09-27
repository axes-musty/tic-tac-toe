import React, { useContext } from 'react';
import { AppContext, AppProvider } from '../context/AppContext';
import evalGame from './EvalGame';
import '../App.css';

const TextBox = () => {
  const { TextBoxContent, board, gameState, dispatch } = useContext(AppContext);

  if (gameState === 1) {
    const result = evalGame(board, gameState);
    if (!(result === 0)) {
      dispatch({
        type: 'SET_GAMESTATE',
        payload: result,
      });
    }
  }
  return (
    <AppProvider>
      <span>{TextBoxContent}</span>
    </AppProvider>
  );
};

export default TextBox;
