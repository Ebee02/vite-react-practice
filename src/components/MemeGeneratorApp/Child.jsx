import React from "react";

const Child = (props) => {
  return (
    <div>
      <button
        onClick={props.onHandleClick}
        className={`px-6 py-2 text-base antialiased font-medium rounded-md shadow-md shadow-gray-300 text-white cursor-pointer ${props.background}`}
      >
        {props.sign}
      </button>
    </div>
  );
};

export default Child;
