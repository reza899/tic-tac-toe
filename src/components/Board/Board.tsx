import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-evenly">
      <h2 className="text-xl text-red-900">STATUS</h2>
      <div>
        <div className="flex flex-row p-0">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="flex flex-row p-0">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="flex flex-row p-0">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
};

export default Board;
