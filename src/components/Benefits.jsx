import React from "react";

const Benefits = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase mb-4">
              Benefits
            </h3>
            <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 leading-tight mb-6">
              Discover the Smartwatch <br /> Built to Enhance Your Life
            </h1>
          </div>

          {/* Right Paragraph */}
          <div className="flex-1 flex items-center">
            <p className="text-gray-600 text-lg">
              Revolutionizing time with smart innovation, we integrate
              cutting-edge technology to enhance efficiency, productivity, and
              seamless time management. Our innovative solutions redefine the
              way you track.
            </p>
          </div>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Review Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex-1 flex flex-col justify-between">
            {/* Avatars */}
            <div className="flex -space-x-2 mb-4">
              <img
                src="/author-1.jpg"
                alt="User 1"
                className="w-12 h-12 rounded-full ring-2 ring-white"
              />
              <img
                src="/author-2.jpg"
                alt="User 2"
                className="w-12 h-12 rounded-full ring-2 ring-white"
              />
              <img
                src="/author-3.jpg"
                alt="User 3"
                className="w-12 h-12 rounded-full ring-2 ring-white"
              />
              <img
                src="/author-4.jpg"
                alt="User 4"
                className="w-12 h-12 rounded-full ring-2 ring-white"
              />
            </div>

            {/* Stars */}
            <div className="flex text-black text-lg mb-4">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>

            {/* Review Text (bottom of avatars & stars) */}
            <p className="text-base font-semibold text-gray-900 mb-4">
              <span className="font-bold">4.5</span> Our Product Review
            </p>

            {/* Divider */}
            <hr className="my-4 border-gray-200" />

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Smart, Innovative, Worth It!
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A smart and innovative product that delivers great value,
              efficiency, and reliability—definitely worth it!
            </p>
          </div>

          {/* Main Image with Hover Animation */}
          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-md group">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1758521309/product-collection-image_wc0zki.jpg"
              alt="Smartwatch special edition"
              className="w-full h-full object-cover"
            />

            {/* White side overlay animation */}
            <div className="absolute inset-0 flex justify-between overflow-hidden pointer-events-none">
              <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
              <div className="w-0 bg-white/30 h-full transition-all duration-500 group-hover:w-1/2"></div>
            </div>

            {/* Black Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <span className="text-xs font-semibold text-gray-200 uppercase mb-1">
                Special Collection
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Smartwatch Special Edition Collection
              </h3>
            </div>
          </div>

          {/* Health Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex-1 flex flex-col">
            {/* Text Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Health Insights for days and nights
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A smart & innovative product that delivers great value.
              </p>
            </div>

            {/* Image anchored at bottom */}
            <div className="mt-auto">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1758521331/product-benefit-image_lfmzeq.png"
                alt="Smartwatch apps"
                className="w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-700 mt-12 font-semibold">
          More than a watch - it's your health coach, assistant, and style icon.
        </div>
      </div>
    </section>
  );
};

export default Benefits;
