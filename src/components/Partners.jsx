import React from "react";

const Partners = () => {
  const logos = [
    "/our-partners-img-1.svg",
    "/our-partners-img-2.svg",
    "/our-partners-img-3.svg",
    "/our-partners-img-4.svg",
    "/our-partners-img-5.svg",
  ];

  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          gap: 4rem;
          animation: scroll-left 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
              Our Partners
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Trusted partnerships for <br /> smart innovation!
            </h1>
            <div className="flex items-center gap-2 text-lg text-black">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
              <p className="font-semibold text-gray-900 ml-2">4.5 Our Product Review</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start text-left">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              We collaborate with leading technology and industry partners to bring you innovative, high-quality smartwatches that enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.157.44l-1.416 2.12a1.5 1.5 0 01-1.41 1.05c-1.871-.24-3.674-1.066-5.183-2.575S4.384 10.966 4.144 9.095a1.5 1.5 0 011.05-1.416l2.12-1.416c.385-.255.55-.717.44-1.157L8.91 4.492c-.125-.509-.575-.86-1.091-.852h-1.372A2.25 2.25 0 003 4.875v2.25z" />
                </svg>
                <span className="text-xs">Need Help!</span>
                <p className="text-xs">+91- 123 592 357</p>
              </div>
              <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-sm transition-transform transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Partners Logos */}
        <div className="w-full overflow-hidden">
          <div className="animate-scroll">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="h-12 w-32 flex items-center justify-center grayscale opacity-80 flex-shrink-0">
                <img src={logo} alt={`Partner Logo ${idx + 1}`} className="h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
