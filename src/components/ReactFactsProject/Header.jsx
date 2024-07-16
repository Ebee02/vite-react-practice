function Header() {
  return (
    <header className="p-7 mb-12 shadow-lg">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img
            src="images/reactjs-icon.png"
            alt="text-logo"
            className="h-10 w-10"
          />
          <h2 className="text-[#61DAFB] text-4xl font-bold ">ReactFacts</h2>
        </div>
        <h2 className="text-white text-2xl font-medium">
          React Course - Project 1
        </h2>
      </nav>
    </header>
  );
}

export default Header;
