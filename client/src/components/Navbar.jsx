import { toggleMobileMenu } from "../utils/navbarUtils";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full border-b border-[#DAD6D1]">
      <div className="container flex py-[10px] bg-[#f9f8f6] md:py-4 relative z-[9999]">
        <div id="logo-header" className=" w-2/3 md:w-1/2">
          <Link to="/" className="flex items-center gap-2 md:gap-4">
            <img src="/assets/images/thedogdev_logo.svg" className="w-8 md:w-11" alt="The Dog Dev Logo" />
            <span className="luckiest-guy-regular text-2xl md:text-3xl">The Dog Dev</span>
          </Link>
        </div>
        <div id="nav-container" className="w-1/3 md:w-1/2 flex justify-end">
          <nav id="nav-desktop" className="hidden md:flex gap-3">
            <button className="black-outline-btn">Login</button>
            <button className="black-btn">Sign Up</button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMobileMenu}
          >
            <svg
              id="hamburger-ic"
              xmlns="http://www.w3.org/2000/svg"
              fill="#26231e"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>

            <svg
              id="hamburger-close-ic"
              xmlns="http://www.w3.org/2000/svg"
              fill="#26231e"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 hidden"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      {/* /.container */}
      <nav
        id="nav-mobile"
        className="container bg-[#f9f8f6] flex-col px-6 py-10 gap-6 shadow-[2px_2px_16px_0px_rgba(0,0,0,0.10)] top-[63px] left-0 absolute z-[1000] hidden"
      >
        <button className="black-outline-btn">Login</button>
        <button className="black-btn">Sign Up</button>
      </nav>
    </header>
  );
}

export default Navbar;
