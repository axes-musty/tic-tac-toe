/* eslint-disable react/prop-types */
import React, {createContext, useReducer} from 'react';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      return {
        ...state,
      };
    case 'SET_GAMESTATE':
      state.gameState = action.payload;
      switch (state.gameState) {
        case 0:
          state.TextBoxContent =
          'Place ' + state.currentPlayer + ' to start the game!';
          break;
        case 1:
          state.TextBoxContent = 'Place ' + state.currentPlayer;
          break;
        case 2:
          if (state.currentPlayer === 'X') {
            state.TextBoxContent = 'O won!';
          } else {
            state.TextBoxContent = 'X won!';
          }
          break;
        case 3:
          state.TextBoxContent = 'Tie!';
          break;
        default:
          console.log('Unhandled gameState: ' + state.gameState);
      }
      return {
        ...state,
      };
    case 'SET_TILEVALUE':
      state.board[action.id] = action.value;
      return {
        ...state,
      };
    case 'RESET_BOARD':
      state.board ={
        Tile11: 'Z', Tile12: 'Z', Tile13: 'Z',
        Tile21: 'Z', Tile22: 'Z', Tile23: 'Z',
        Tile31: 'Z', Tile32: 'Z', Tile33: 'Z'};
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export const AppContext = createContext();
const initialState = {
  currentPlayer: 'X',
  TextBoxContent: 'Place X to start the game!',
  gameState: 0,
  /*
    0 - game not started
    1 - game ongoing
    2 - game finished with a winner
    3 - game finished with a tie
  */
  board:
    {Tile11: 'Z', Tile12: 'Z', Tile13: 'Z',
      Tile21: 'Z', Tile22: 'Z', Tile23: 'Z',
      Tile31: 'Z', Tile32: 'Z', Tile33: 'Z'}, /* Z = empty */
};
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        TextBoxContent: state.TextBoxContent,
        currentPlayer: state.currentPlayer,
        gameState: state.gameState,
        winner: state.winner,
        board: state.board,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
