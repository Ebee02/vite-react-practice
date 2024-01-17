import { useState } from "react";
import memesData from "./memesData";

function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

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

  return (
    <main className=" text-slate-800 w-screen h-screen p-8">
      <div
        action="
    "
        className="grid grid-rows-2 grid-cols-2 gap-4 "
      >
        <input
          type="text"
          placeholder="Shut up"
          className="border border-gray-500 rounded-md shadow-md shadow-gray-400 px-4 py-2 text-lg"
        />
        <input
          type="text"
          placeholder="Take the money"
          className="border border-gray-500 rounded-md shadow-md px-4 py-2 text-lg"
        />
        <button
          onClick={getMemeImage}
          className="bg-[#711F8D] shadow-[#711F8D] shadow-sm text-white border-none col-span-2 w-full rounded-md  px-4 py-3 text-xl"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="mt-6 h-[400px] px-8 py-2 flex items-center justify-center shadow-gray-600 shadow-lg rounded-lg">
        <img className="w-500   h-full" src={meme.randomImage} alt="" />
      </div>
    </main>
  );
}

export default Form;
