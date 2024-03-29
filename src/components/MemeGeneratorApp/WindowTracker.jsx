import React from "react";

const WindowTracker = () => {
  return (
    <h1 className="mt-4 text-4xl font-bold antialiased">
      Window width: {window.innerWidth}
    </h1>
  );
};

export default WindowTracker;
