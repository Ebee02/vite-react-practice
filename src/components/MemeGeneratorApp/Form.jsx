import { useEffect, useState } from "react";
import memesData from "./memesData";

function Form() {
  function onHandleGetMemeUrl() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log("urls:", url);
  }
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
        {/* <div className="h-[500px] flex items-center justify-center mt-2">
          <div className="relative h-full w-[600px] ">
            <img
              className="w-full h-full"
              src={meme.randomImage}
              alt="meme pic"
            />
            <h2 className="absolute top-4 font-bold text-5xl text-slate-800">
              {formData.topText}
            </h2>
            <h2 className="absolute bottom-7 font-bold text-5xl text-slate-800">
              {formData.bottomText}
            </h2>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default Form;
