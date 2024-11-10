import { useState, useId } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScrimbaPractice = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  const id = useId();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };

  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center",
    });

    toast.error("Error Notification !", {
      position: "top-left",
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left",
    });

    toast.info("Info Notification !", {
      position: "bottom-center",
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prevState) => !prevState);
  }

  console.log("display", display);

  return (
    <div className="antialiased text-slate-800  flex items-center justify-center min-h-screen">
      {/* <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-5 w-[400px]"
      >
        <div className="flex flex-col">
          <label htmlFor={id + "-firstName"}>First Name</label>
          <input
            type="text"
            name="firstName"
            id={id + "-firstName"}
            className="border-2 border-grey-300 py-3 px-4 rounded-md shadow-md"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor={id + "-lastName"}>Last Name</label>
          <input
            type="text"
            name="lastName"
            id={id + "-lastName"}
            className="border-2 border-grey-300 py-3  px-4 rounded-md shadow-md"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor={id + "-email"}>Email</label>
          <input
            type="email"
            name="email"
            id={id + "-email"}
            className="border-2 border-grey-300 py-3  px-4 rounded-md shadow-md"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor={id + "-comment"}>Comments</label>
          <textarea
            name="comment"
            id={id + "-comment"}
            rows={3}
            className="border-2 border-grey-300 py-3  px-4 rounded-md shadow-md"
            onChange={handleChange}
            value={formData.comment}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            id={id + "-isFriendly"}
            name="isFriendly"
            type="checkbox"
            onChange={handleChange}
            checked={formData.isFriendly}
          />
          <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
        </div>

        <fieldset className="border-2 border-gray-300 text-sm font-medium">
          <legend>Current employment status</legend>

          <input
            type="radio"
            name="employment"
            id={id + "-unemployed"}
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor={id + "-unemployed"}>Unemployed</label>
          <br />

          <input
            type="radio"
            name="employment"
            id={id + "-part-time"}
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor={id + "-part-time"}>Part-time</label>
          <br />

          <input
            type="radio"
            name="employment"
            id={id + "-full-time"}
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor={id + "-full-time"}>Full-time</label>
          <br />
        </fieldset>

        <div>
          <label htmlFor={id + "-favColor"} className="mb-2">
            What is your favorite color?
          </label>
          <br />
          <select
            id={id + "-favColor"}
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </div>

        <button
          type="submit"
          className="py-3 border-2 border-black rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </form> */}

      <button
        onClick={handleDisplay}
        className="w-32 py-3 font-medium bg-red-500 text-white cursor-pointer rounded-md"
      ></button>

      <ToastContainer />
    </div>
  );
};

export default ScrimbaPractice;
