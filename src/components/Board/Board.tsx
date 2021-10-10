import React, { useContext } from "react";
import { BoardState, GameContext } from "../../hooks/useGameState";
import Square from "./Square";

const Board = () => {
  const {
    winner,
    xIsNext,
    clickHandler,
    current: board,
  } = useContext(GameContext);

  const createSquareProps = (square: number) => {
    return {
      value: board[square],
      onClick: () => clickHandler(square),
    };
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-evenly">
      <h2 className={` ${winner ? "text-green-500 text-3xl" : "text-red-900 text-xl"}`}>
        {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
      </h2>
      <div>
        <div className="flex flex-row p-0">
          <Square {...createSquareProps(0)} />
          <Square {...createSquareProps(1)} />
          <Square {...createSquareProps(2)} />
        </div>
        <div className="flex flex-row p-0">
          <Square {...createSquareProps(3)} />
          <Square {...createSquareProps(4)} />
          <Square {...createSquareProps(5)} />
        </div>
        <div className="flex flex-row p-0">
          <Square {...createSquareProps(6)} />
          <Square {...createSquareProps(7)} />
          <Square {...createSquareProps(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
