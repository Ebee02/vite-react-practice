import { useEffect, useState } from "react";
import memesData from "./memesData";

function Form() {
  const [memeImage, setMemeImage] = useState("");

  function onHandleGetMemeUrl() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  console.log("memeImage", memeImage);
  return (
    <main className="min-h-screen text-slate-800  flex justify-center">
      <div className="w-[950px]">
        <div className="font-medium">
          <div className="w-full flex items-center gap-5 mb-2">
            <div className="w-1/2">
              <label htmlFor="topText" className="text-sm text-slate-800">
                Top text
              </label>
              <input
                id="topText"
                type="text"
                name="topText"
                placeholder="Top Text"
                className="w-full border border-gray-400 rounded-md shadow-lg px-2 py-3"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="bottomText" className="text-sm text-slate-800">
                Bottom text
              </label>
              <input
                id="bottomText"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                className="w-full border border-gray-400 rounded-md shadow-lg px-2 py-3"
              />
            </div>
          </div>
          <button
            onClick={onHandleGetMemeUrl}
            className="transition-all duration-100 bg-[#711F8D] hover:bg-[#9539b4]  shadow-lg text-white border-none col-span-2 w-full rounded-md py-3"
          >
            Get a new meme image 🖼
          </button>
        </div>
        <div className="mt-4  flex items-center justify-center ">
          <img
            src={memeImage}
            alt="meme image"
            className="h-[400px] w-[500px] border border-gray-500 rounded-md shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}

export default Form;
