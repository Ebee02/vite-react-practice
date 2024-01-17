import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(2);

  function increaseCounter() {
    setCounter((counter) => counter + 1);
  }

  function decreaseCounter() {
    setCounter((counter) => counter - 1);
  }

  return (
    <div className="h-screen bg-[cornsilk] antialiased text-slate-800 flex items-center justify-center">
      <div className="w-80  bg-green-200 p-4 font-semibold flex flex-col items-center justify-center rounded-md shadow-md shadow-gray-500">
        <h2 className="text-xl mb-4 ">The count is: </h2>
        <h1 className="text-7xl mb-4 ">{counter}</h1>

        <button
          onClick={increaseCounter}
          className="border border-black py-2 px-6 cursor-pointer rounded-sm transition-all duration-150 hover:bg-black hover:text-white mb-4"
        >
          Increment
        </button>
        <button
          onClick={decreaseCounter}
          className="border border-black py-2 px-6 cursor-pointer rounded-sm transition-all duration-150 hover:bg-black hover:text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
