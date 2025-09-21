import React from "react";

const features = [
  {
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758445045/about-us-image-1_msbcpi.jpg",
    text: "Tough And Firm",
  },
  {
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758445052/about-us-image-2_wwtjus.jpg",
    text: "HD Large Screen",
  },
  {
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758445062/about-us-image-3_gcokh8.jpg",
    text: "Magnetic Charging",
  },
  {
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758445072/about-us-image-4_qsnmij.jpg",
    text: "Health Management",
  },
];

const About = () => {
  return (
    <div id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
          About Us
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center leading-snug sm:leading-tight">
          Built with precision and passion, our
          <br className="hidden sm:block" />
          smartwatches combine advanced
          <br className="hidden md:block" />
          feature
        </h1>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-64 relative overflow-hidden rounded-xl shadow-lg group">
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.text}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

                {/* White side overlays animation */}
                <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
                  <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
                  <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
                </div>

                {/* Text at bottom */}
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <p className="text-xl font-medium text-white text-center z-10">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-lg font-light">
          <p className="text-gray-800">
            Discover the smart life you deserve -{" "}
            <a href="#" className="font-semibold text-gray-900">
              shop your perfect watch today!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
