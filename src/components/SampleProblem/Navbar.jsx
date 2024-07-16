import React, { useState } from "react";
import GridCard from "./GridCard";
import ListCard from "./ListCard";

const Navbar = ({ onHandleViewChange }) => {
  return (
    <main>
      <div className="bg-gray-100 w-full p-5 flex items-center justify-center">
        <div className="flex items-center gap-5 font-medium">
          <button
            onClick={() => onHandleViewChange("list")}
            className="bg-green-600 text-white px-6 py-2 rounded-sm cursor-pointer shadow-lg text-sm"
          >
            List
          </button>
          <button
            onClick={() => onHandleViewChange("grid")}
            className="bg-red-600 text-white px-6 py-2 rounded-sm cursor-pointer shadow-lg text-sm"
          >
            Grid
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
