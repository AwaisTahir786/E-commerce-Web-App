"use client";

import React from "react";
import { useState } from "react";

function Quantity() {
  const [num, setnum] = useState(0);
  function add() {
    setnum(num + 1);
  }

  function subtract() {
    {
      num <= 0 ? 0 : setnum(num - 1);
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <button
        onClick={() => subtract()}
        className="w-6 h-6 rounded-full border center"
      >
        -
      </button>

      <span>{num}</span>

      <button
        onClick={() => add()}
        className="w-6 h-6 rounded-full border center"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
