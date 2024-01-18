import React, { useState } from "react";

function SecondForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
  });

  console.log(formData);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4">
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
      </form>
    </div>
  );
}

export default SecondForm;
