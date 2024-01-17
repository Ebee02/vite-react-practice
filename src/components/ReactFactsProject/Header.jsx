function Header() {
  return (
    <header className="bg-[#21222A] p-8 mb-12 shadow-lg border-none">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img
            src="../images/reactjs-icon.png"
            alt="text-logo"
            width={45}
            height={45}
          />
          <h2 className="text-[#61DAFB] text-4xl font-semibold">ReactFacts</h2>
        </div>
        <h2 className="text-white text-2xl">React Course - Project 1</h2>
      </nav>
    </header>
  );
}

export default Header;
