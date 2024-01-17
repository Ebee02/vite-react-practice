import { useState } from "react";

function FirstChild() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((counter) => counter + 1);
  }

  function decreaseCounter() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div className="antialiased h-screen flex items-center justify-center font-semibold text-3xl text-slate-800">
      <div className="flex flex-col items-center justify-center">
        <div className="w-40 h-40 bg-black text-white rounded-full border-none flex items-center justify-center cursor-pointer mb-4">
          <h1 className="text-6xl font-medium">{counter}</h1>
        </div>
        <button
          onClick={increaseCounter}
          className="border-2 border-slate-500 py-2 px-8 rounded cursor-pointer shadow mb-4"
        >
          +
        </button>
        <button
          onClick={decreaseCounter}
          className="border-2 border-slate-500 py-2 px-8 rounded cursor-pointer shadow"
        >
          -
        </button>
      </div>
    </div>
  );
}
export default FirstChild;
