function Navbar() {
  return (
    <header className="w-full border-b border-[#DAD6D1]">
      <div className="container">
        <div id="logo-header" className="flex items-center gap-2">
          <img src="/assets/images/thedogdev_logo.svg" className="w-10 md:w-auto" alt="The Dog Dev Logo" />
          <span className="luckiest-guy-regular text-lg">The Dog Dev</span>
        </div>
        <nav></nav>
      </div>
    </header>
  );
}

export default Navbar;
