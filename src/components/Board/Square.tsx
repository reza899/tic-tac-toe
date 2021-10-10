import React, { useContext } from "react";
import { GameContext, Value } from "../../hooks/useGameState";

interface Props {
  value: Value;
  onClick: () => void;
}

const Square = ({ onClick: OnClick, value }: Props) => {
  const { xIsNext } = useContext(GameContext);
  return (
    <button
      onClick={OnClick}
      className={`border border-black bg-white-100 text-2xl text-black-500 p-0 w-24 h-24 hover:border-gray-400  ${
        xIsNext
          ? "hover:border-red-800 hover:bg-red-200"
          : "hover:border-blue-800 hover:bg-blue-200"
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
