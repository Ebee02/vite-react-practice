import React from "react";

function Button({ text, onHandleClick, background }) {
  return (
    <button
      onClick={onHandleClick}
      className={`px-6 py-2 font-semibold rounded-lg cursor-pointer shadow-md ${background}`}
    >
      {text}
    </button>
  );
}

export default Button;
