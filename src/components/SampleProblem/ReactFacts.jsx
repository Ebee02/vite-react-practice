import { useRef } from "react";
import CounterApp from "./CounterApp";

const ReactFacts = () => {
  const counterRef = useRef();
  return (
    <>
      <CounterApp ref={counterRef} />
      <p
        onClick={() => counterRef.current.resetCounter()}
        className=" px-4 text-lg font-semibold tracking-tight text-red-500 cursor-pointer"
      >
        Reset your counter
      </p>
    </>
  );
};

export default ReactFacts;
