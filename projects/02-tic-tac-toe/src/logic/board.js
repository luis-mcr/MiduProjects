import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      // A cada variable se le asigna un valor a través de la destructuración
      const [a, b, c] = combo;
      // comprobar si hay ganador
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //Si no hay ganador
    return null;
  };
  
  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };