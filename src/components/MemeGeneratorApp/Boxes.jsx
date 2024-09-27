import { useState } from "react";

const Boxes = (props) => {
  return (
    <div
      onClick={props.toggle}
      className={`border ${
        props.on ? "bg-[#222222]" : "transparent"
      } w-20 h-20 rounded-sm m-2 inline-block`}
    ></div>
  );
};

export default Boxes;
