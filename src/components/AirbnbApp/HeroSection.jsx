function HeroSection() {
  return (
    <main className="antialiased text-slate-800 mb-6">
      <div className="flex items-center justify-center mb-6">
        <img
          className="h-[300px] w-[500px]"
          src="../images/group.png"
          alt=""
          srcSet=""
        />
      </div>
      <div className="p-4 px-6 mx-7">
        <h1 className="text-4xl font-semibold mb-6 ml-3">Online Experiences</h1>
        <p className="text-xl w-[32%]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}

export default HeroSection;
