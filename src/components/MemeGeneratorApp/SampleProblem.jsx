import React, { useState } from "react";

const SampleProblem = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isClick: false,
  });

  const onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("form submitted successfully");
    } else {
      console.log("Password do not march");
      return;
    }
    if (formData.isClick === true) {
      console.log("Thanks for signing up for our newsletter!");
    }
  };
  return (
    <main className="antialiased font-medium min-h-screen flex items-center justify-center bg-purple-600">
      <form
        onSubmit={onHandleSubmit}
        className="w-[450px] h-[525px] bg-white rounded-md shadow-2xl py-16 flex flex-col items-center  gap-y-8  "
      >
        <div className="flex flex-col ">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            name="email"
            onChange={onHandleChange}
            className="border border-gray-500 rounded w-96 px-4 py-3 shadow-lg"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            name="password"
            onChange={onHandleChange}
            className="border border-gray-500 rounded w-96 px-4 py-3 shadow-lg"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="confirmPassword" className="mb-1">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={onHandleChange}
            className="border border-gray-500 rounded w-96 px-4 py-3 shadow-lg"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            name="isClick"
            id="isClick"
            onChange={onHandleChange}
            className="w-4 h-4 cursor-pointer bg-purple-600"
          />
          <label htmlFor="isFriendly">I want to join the newsletter</label>
        </div>

        <button className="py-2 px-6 bg-purple-600  text-white font-semibold tracking-wide rounded-md shadow-lg cursor-pointer ">
          Sign up
        </button>
      </form>
    </main>
  );
};

export default SampleProblem;
