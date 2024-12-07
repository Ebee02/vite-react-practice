import { useEffect, useState, useId } from "react";
import memesData from "./memesData";

function Form() {
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const formId = useId();

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemes, setAllMemes] = useState(memesData);

  function onHandleGetMemeUrl() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imageUrl = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imageUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main className="min-h-screen text-slate-800  flex justify-center">
      <div className="w-[950px]">
        <div className="font-medium">
          <div className="w-full flex items-center gap-5 mb-2">
            <div className="w-1/2">
              <label htmlFor={formId + "-topText"} className="text-slate-800">
                Top text
              </label>
              <input
                id={formId + "-topText"}
                type="text"
                name="topText"
                placeholder="Top Text"
                className="w-full border border-gray-400 rounded-md shadow-lg px-5 py-3"
                value={meme.topText}
                onChange={handleChange}
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor={formId + "-bottomText"}
                className="text-slate-800"
              >
                Bottom text
              </label>
              <input
                id={formId + "-bottomText"}
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                className="w-full border border-gray-400 rounded-md shadow-lg px-5 py-3"
                value={meme.bottomText}
                onChange={handleChange}
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
        <div className="mt-4 relative">
          <img
            src={meme.randomImage}
            alt="meme image"
            className="w-full  border border-gray-500 rounded-md shadow-lg"
          />
          <h1 className="absolute top-1 left-1/2 -translate-x-1/2 text-green-500 text-4xl font-bold text-center tracking-wide">
            {meme.topText}
          </h1>

          <h1 className="absolute bottom-1 left-1/2 -translate-x-1/2 text-green-500 text-4xl font-bold text-center tracking-wide">
            {meme.bottomText}
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Form;
