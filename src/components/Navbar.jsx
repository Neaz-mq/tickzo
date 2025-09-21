import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#D6E3E1] flex flex-col items-center p-4 sm:p-8 -mb-2">
      <nav className="w-full max-w-7xl flex items-center justify-between p-4 bg-white shadow-lg rounded-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Tickzo Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-2xl font-bold">Tickzo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <Link
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="product"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Product
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Purchase & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
            Purchase Now
          </button>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`w-full max-w-7xl flex-col items-center bg-white shadow-lg rounded-xl mt-4 p-4 md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          to="home"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="product"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          Product
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          Contact Us
        </Link>

        <button className="w-full mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
