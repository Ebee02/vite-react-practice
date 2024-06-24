import { forwardRef, useImperativeHandle, useState } from "react";

const CounterApp = (props, ref) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  useImperativeHandle(ref, () => ({ resetCounter }));
  return (
    <main className="">
      <div className="p-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Count: {counter}
        </h1>
        <div className="mt-4 flex items-center gap-5">
          <button
            onClick={incrementCounter}
            className="w-40 py-2 text-lg font-semibold bg-green-500 rounded-sm shadow-md cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={decrementCounter}
            className="w-40 py-2 text-lg font-semibold bg-red-500 rounded-sm shadow-md cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
};

export default forwardRef(CounterApp);
