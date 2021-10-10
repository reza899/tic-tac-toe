import React from "react";
import Board from "./components/Board/Board";
import Hisotry from "./components/Hisotry/Hisotry";

function App() {
  return (
    <div className="h-screen flex flex-row justify-center items-center gap-20">
      <Board />
      <Hisotry />
    </div>
  );
}

export default App;
