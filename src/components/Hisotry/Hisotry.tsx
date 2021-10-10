import React, { useContext } from "react";
import { GameContext } from "../../hooks/useGameState";

const Hisotry = () => {
  const { gameState, jumpTo } = useContext(GameContext);
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl">Move History</h1>
      <ol>
        {gameState.history.map((item, i) => {
          return (
            <li key={i}>
              <button
                className={`text-center text-gray-400 font-bold m-1 focus:outline-none border-2`}
                onClick={() => jumpTo(i)}
              >
                Go to {i === 0 ? "start" : `move #${i}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Hisotry;
