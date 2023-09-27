/* eslint-disable array-callback-return */
const evalGame = (board, gameState) => {
  let localgameState = 0;
  const winningPatterns = [
    ['Tile11', 'Tile12', 'Tile13'],
    ['Tile21', 'Tile22', 'Tile23'],
    ['Tile31', 'Tile32', 'Tile33'],
    ['Tile11', 'Tile21', 'Tile31'],
    ['Tile12', 'Tile22', 'Tile32'],
    ['Tile13', 'Tile23', 'Tile33'],
    ['Tile11', 'Tile22', 'Tile33'],
    ['Tile13', 'Tile22', 'Tile31'],
  ];
  /* check if tie */
  if (gameState === 1) {
    if (![...Object.values(board)].includes('Z')) {
      console.log('Tie');
      localgameState = 3;
    } else {
      winningPatterns.map((wPatt) => {
        if (
          board[wPatt[0]] === board[wPatt[1]] &&
          board[wPatt[0]] === board[wPatt[2]] &&
          board[wPatt[1]] === board[wPatt[2]]
        ) {
          if (!(board[wPatt[0]] === 'Z')) {
            localgameState = 2;
          }
        }
      });
    }
  }
  return localgameState;
};

export default evalGame;
