import React, {useContext} from 'react';
import {AppContext, AppProvider} from '../context/AppContext';
import evalGame from './EvalGame';
import '../App.css';


const TextBox = () => {
  const {TextBoxContent, board, gameState, dispatch} = useContext(AppContext);

  /* useEffect(() => {
    evalGame(board, gameState);
  }, board); */
  if (gameState === 1) {
    const result = evalGame(board, gameState);
    dispatch({
      type: 'SET_GAMESTATE',
      payload: result,
    });
  }
  return (
    <AppProvider>
      <span>{TextBoxContent}</span>
    </AppProvider>
  );
};

export default TextBox;
