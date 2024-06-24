import React, { useState } from "react";

const SampleProblem = () => {
  const nums = [1, 2, 3, 4, 5];
  const finalNums = nums.map((n) => n * n);

  console.log(finalNums);
  return (
    <main className="antialiased font-medium min-h-screen bg-purple-500 text-white">
      <h1>The map function explain</h1>
    </main>
  );
};

export default SampleProblem;
