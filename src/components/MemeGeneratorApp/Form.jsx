import { useEffect, useState } from "react";

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

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...meme,
        randomImage: url,
      };
    });
  }

  return (
    <main className=" antialiased text-slate-800  min-h-screen  flex items-center justify-center">
      <div className="w-[1000px]">
        <div className="grid grid-rows-2 grid-cols-2 gap-3 font-medium">
          <input
            type="text"
            name="topText"
            onChange={onHandleChange}
            placeholder="Top Text"
            className="border border-gray-300 rounded-lg shadow-lg px-2 py-[5px]"
          />
          <input
            type="text"
            name="bottomText"
            onChange={onHandleChange}
            placeholder="Bottom Text"
            className="border border-gray-300 rounded-lg shadow-lg px-2 py-[5px]"
          />
          <button
            onClick={getMemeImage}
            className="transition-all duration-100 bg-[#711F8D] hover:bg-[#9539b4]  shadow-lg text-white border-none col-span-2 w-full rounded-md py-3"
          >
            Get a new meme image 🖼
          </button>
        </div>
        <div className="h-[500px] flex items-center justify-center mt-2">
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
        </div>
      </div>
    </main>
  );
}

export default Form;
