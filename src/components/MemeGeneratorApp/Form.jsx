import { useState } from "react";
import memesData from "./memesData";

function Form() {
  const [meme, setMeme] = useState({
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...meme,
        randomImage: url,
      };
    });
  }

  function onHandleSubmit() {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <main className=" text-slate-800  min-h-screen  flex items-center justify-center">
      <form onSubmit={onHandleSubmit} className="w-[1000px]">
        <div className="grid grid-rows-2 grid-cols-2 gap-3">
          <input
            type="text"
            name="topText"
            onChange={onHandleChange}
            placeholder="Shut up"
            className="border border-gray-300 rounded-md shadow-lg px-4 py-2"
          />
          <input
            type="text"
            name="bottomText"
            onChange={onHandleChange}
            placeholder="Take the money"
            className="border border-gray-300 rounded-md shadow-lg px-4 py-2"
          />
          <button
            onClick={getMemeImage}
            className="bg-[#711F8D] shadow-lg text-white border-none col-span-2 w-full rounded-md  px-4 py-3 text-xl"
          >
            Get a new meme image 🖼
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative mt-4 h-[400px] w-[500px] px-8 py-2 flex items-center justify-center rounded-lg">
            <img className="w-full h-full" src={meme.randomImage} alt="" />
            <h2 className="absolute top-4 font-bold text-5xl text-white">
              {formData.topText}
            </h2>
            <h2 className="absolute bottom-7 font-bold text-5xl text-white">
              {formData.bottomText}
            </h2>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Form;
