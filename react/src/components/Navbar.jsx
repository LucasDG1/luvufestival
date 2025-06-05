function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <nav className="flex justify-center items-center w-82 h-16 fixed bottom-5 gap-6 rounded-full shadow backdrop-blur-xs">
        <div className="rounded-full pl-4 pr-4 p-1 shadow-xl text-3xl border border-white">
          <a href="/">
            <i className="fa-solid fa-house text-vermilion"></i>
          </a>
        </div>
        <div className="rounded-sm p-2 text-3xl">
          <a href="/map">
            <i className="fa-solid fa-map text-vermilion"></i>
          </a>
        </div>
        <div className="rounded-sm p-2 text-3xl">
          <a href="/agenda">
            <i className="fa-solid fa-calendar text-vermilion"></i>
          </a>
        </div>
        <div className="rounded-sm p-2 text-3xl">
          <a href="/info">
            <i className="fa-solid fa-circle-info text-vermilion pr-3"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
