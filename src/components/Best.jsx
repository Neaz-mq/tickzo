import React, { useState, useEffect } from 'react';

// Use a simple inline SVG for the checkmark icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-black mr-2 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.89a.75.75 0 0 0-1.06-1.06l-4.25 4.25-1.5-1.5a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.75-4.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const features = [
  'Hi-Res Studio-Grade Sound',
  'Music Control & Playback',
  'Bluetooth & Wi-Fi Connectivity',
  'NFC for Contactless Payments',
];

const products = [
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449003/product-1_auvnwo.png',
    model: 'Chronox Pro S5',
  },
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449027/product-2_ftcgt8.png',
    model: 'Aerowatch X9',
  },
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449038/product-3_c4yxcb.png',
    model: 'LuxSync Pro',
  },
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449052/product-4_umhwn1.png',
    model: 'PulseFit Z3',
  },
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449063/product-5_hiuehl.png',
    model: 'Neowrist AI Sync',
  },
  {
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1758449073/product-6_lv6y8s.png',
    model: 'Vortex Pro Series',
  },
];

const Best = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex justify-center items-center  bg-[#D6E3E1] py-24">
      <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row max-w-7xl w-full">
        {/* Left Side - Image Gallery */}
        <div className="p-8 lg:p-12 flex flex-col items-center lg:w-1/2">
          {/* Main Product Image */}
          <div className="w-full mb-8 relative">
            <img
              src={products[currentImageIndex].image}
              alt={products[currentImageIndex].model}
              className="w-full h-auto object-contain rounded-2xl transition-opacity duration-500"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className={`w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                  currentImageIndex === index ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={product.image}
                  alt={`Thumbnail of ${product.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-4">
            Best Sellers
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Top-Rated smartwatches you love!
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Discover our best-selling smartwatches, loved for their cutting-edge features, sleek designs, and unbeatable performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-800">
                <CheckIcon />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-widest mb-4">
              Available Color Options:
            </h3>
            <div className="flex flex-wrap gap-4">
              {products.slice(0, 3).map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={product.image}
                      alt={product.model}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="mt-4 px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      Model: {product.model}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-black text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Best;
