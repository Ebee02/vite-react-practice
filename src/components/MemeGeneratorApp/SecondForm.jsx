import React, { useState } from "react";

function SecondForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favoriteColor: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onHandleSubmit(e) {
    console.log(formData);
    console.log("form submitted");
    e.preventDefault();
  }
  return (
    <div className="font-medium min-h-screen flex items-center justify-center">
      <form onSubmit={onHandleSubmit} className="flex flex-col gap-4 my-6">
        <input
          type="text"
          className="border border-black py-2 px-3 rounded-md shadow-md text-lg w-80 tracking-wide"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          className="border border-black py-2 px-3 rounded-md shadow-md text-lg w-80 tracking-wide"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          className="border border-black py-2 px-3 rounded-md shadow-md text-lg w-80 tracking-wide"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

        <textarea
          placeholder="Comment section"
          value={formData.comment}
          name="comment"
          onChange={handleChange}
          cols="20"
          rows="4"
          className="border border-black p-4  rounded-md shadow-md text-lg w-80 tracking-wide text-black"
        />

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            name="isFriendly"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="isFriendly">Are you friendly?</label>
        </div>

        <fieldset className="mt-4 border-2 border-gray-400 p-4">
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="umemployed"
            checked={formData.employment === "umemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Umemployed</label> <br />
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="partime">Part-time</label> <br />
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="fullTime">Full-time</label>
        </fieldset>

        <label htmlFor="favoriteColor">
          What is your favorite color?
          <br />
          <select
            id="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            name="favoriteColor"
            className="border-2 border-gray-400 mt-2"
          >
            <option value="">--Choose your favorite color--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="indigo">Indigo</option>
            <option value="gold">Gold</option>
          </select>
        </label>
        <br />
        <button className="border border-gray-400  py-2 shadow-md rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default SecondForm;
