import React, { useState } from "react";

function SecondForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
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
        />
        <input
          type="text"
          className="border border-black py-2 px-3 rounded-md shadow-md text-lg w-80 tracking-wide"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        />
        <input
          type="email"
          className="border border-black py-2 px-3 rounded-md shadow-md text-lg w-80 tracking-wide"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </form>
    </div>
  );
}

export default SecondForm;
