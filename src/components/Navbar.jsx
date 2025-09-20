import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#D6E3E1]  flex flex-col items-center p-4 sm:p-8 -mb-2 ">
      <nav className="w-full max-w-7xl flex items-center justify-between p-4 bg-white shadow-lg rounded-full">
        {/* Logo Section (Far Left) */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Tickzo Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-2xl font-bold">Tickzo</span>
        </div>

        {/* Desktop Menu Links (Centered) */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">About Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact Us</a>
        </div>

        {/* Purchase Button & Mobile Menu Toggle (Far Right) */}
        <div className="flex items-center space-x-4">
          {/* Desktop Purchase Button */}
          <button className="hidden md:block px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
            Purchase Now
          </button>
          
          {/* Mobile-only hamburger menu toggle */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                // Close icon (X)
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
                // Open icon (Hamburger)
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

      {/* Mobile Dropdown Menu */}
      <div className={`w-full max-w-7xl flex-col items-center bg-white shadow-lg rounded-xl mt-4 p-4 md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <a href="#" className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
        <a href="#" className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg">About Us</a>
        <a href="#" className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Blog</a>
        <a href="#" className="w-full text-center py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Contact Us</a>
        {/* The Purchase Now button is now inside the dropdown menu */}
        <button className="w-full mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;