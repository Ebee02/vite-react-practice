function Header() {
  return (
    <header className="w-screen py-6 px-8 border-b shadow-lg mb-8 flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <img
          className="h-14 w-35"
          src="../images/troll-face.png"
          alt="troll-face"
        />
        <h2 className="text-4xl text-[#FCFCFC] font-semibold">
          Meme Generator
        </h2>
      </div>
      <h2 className=" text-white text-2xl tracking-wider">
        React Course - Project 3
      </h2>
    </header>
  );
}

export default Header;
