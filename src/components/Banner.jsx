import React from "react";

const Banner = () => {
  const bgImage =
    "https://res.cloudinary.com/dxohwanal/image/upload/v1758363949/hero-bg_ku0dnq.png";
  const watchImage =
    "https://res.cloudinary.com/dxohwanal/image/upload/v1758363963/hero-image_u2bkiy.png";

  return (
    <div
      className="relative w-full  bg-cover bg-center flex flex-col items-center justify-center text-center overflow-hidden bg-[#D6E3E1] pt-10 md:pt-20"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-wide max-w-4xl">
          Smarter time smarter life
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-800 mb-12">
          "Stay connected, track your health."
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mb-16 max-w-4xl w-full">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-900 text-white rounded-full p-3 shadow-lg">
              {/* battery icon */}
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Long Battery Life
              </h3>
              <p className="text-gray-700 text-sm max-w-xs">
                Enjoy up to 14 days of uninterrupted usage on a single charge.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-gray-900 text-white rounded-full p-3 shadow-lg">
              {/* water & dust icon */}
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
                  d="M11 5.82a.5.5 0 01.447-.282l5.777 2.21a.5.5 0 01.353.64l-3.23 8.44a.5.5 0 01-.97.02l-1.28-3.56-2.583 1.34-1.281 3.56a.5.5 0 01-.97-.02l-3.23-8.44a.5.5 0 01.353-.64L11 5.82zM12 21a9 9 0 100-18 9 9 0 000 18z"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Water & Dust Resistant
              </h3>
              <p className="text-gray-700 text-sm max-w-xs">
                Built to withstand the elements, smartwatch is water and dust
                resistant.
              </p>
            </div>
          </div>
        </div>

        <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200">
          More About Us
        </button>
      </div>

      {/* watch image */}
      <img
        src={watchImage}
        alt="Smartwatch"
        className="relative z-0 mt-8 md:mt-16 w-full max-w-5xl"
      />
    </div>
  );
};

export default Banner;
