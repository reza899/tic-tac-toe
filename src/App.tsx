import React from "react";
import Board from "./components/Board/Board";
import Hisotry from "./components/Hisotry/Hisotry";
import useGameState, { GameContext } from "./hooks/useGameState";

function App() {
  return (
    <GameContext.Provider value={useGameState()}>
      <div className="h-screen flex flex-row justify-center items-center gap-20">
        <Board />
        <Hisotry />
      </div>
    </GameContext.Provider>
  );
}

export default App;
