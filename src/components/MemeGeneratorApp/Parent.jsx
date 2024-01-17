import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="h-screen antialiased text-slate-800 font-medium flex flex-col gap-5 items-center justify-center">
      <h2 className="text-xl tracking-wide">the count is</h2>
      <h1 className="text-6xl font-bold">{count}</h1>
      <Child
        sign="+"
        background="bg-green-500"
        onHandleClick={incrementCount}
      />
      <Child sign="-" background="bg-red-800" onHandleClick={decrementCount} />
    </div>
  );
};

export default Parent;
