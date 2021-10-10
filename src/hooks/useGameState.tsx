import React, { useState } from "react";

type GameType = {
    clickHandler: (square: number) => void;
    jumpTo: (step: number) => void;
    current: BoardState;
    gameState: GameState;
    winner: Value;
    xIsNext: boolean
}

export const GameContext = React.createContext<GameType>({} as GameType);

export type Value = "X" | "O" | null;

export type BoardState = Value[];

const createBoardState = () => Array<Value>(9).fill(null);

const calculateWinner = (boardState: BoardState) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
};

export type GameState = {
  history: BoardState[];
  step: number;
};

const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  const current = gameState.history[gameState.step];
  const xIsNext = gameState.step % 2 === 0;
  const winner = calculateWinner(current);

  const clickHandler = (square: number) => {
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }

    const newBoardState = boardState.slice();
    newBoardState[square] = gameState.step % 2 === 0 ? "X" : "O";
    history.push(newBoardState);
    setGameState({
      history: history,
      step: history.length - 1,
    });
  };

  const jumpTo = (step: number) => {
    setGameState({
      history: gameState.history,
      step,
    });
  };

  return {
    gameState,
    current,
    xIsNext,
    winner,
    clickHandler,
    jumpTo
  };
};

export default useGameState;
