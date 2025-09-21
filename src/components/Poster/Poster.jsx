import React from "react";
import "./Poster.css"; // custom CSS for marquee

const Poster = () => {
  return (
    <div className="bg-black overflow-hidden whitespace-nowrap flex h-20 md:h-24">
      <div className="scrolling-content flex items-center text-white text-2xl md:text-4xl font-bold">
        <span className="mx-6 flex items-center">✶ free delivery</span>
        <span className="mx-6 flex items-center">✶ 100% secure payment</span>
        <span className="mx-6 flex items-center">✶ 30 Days free Returns</span>
        <span className="mx-6 flex items-center">✶ Dedicated 24/7 Supports</span>
        <span className="mx-6 flex items-center">✶ Premium Quality Products</span>

        {/* Duplicate for seamless scrolling */}
        <span className="mx-6 flex items-center">✶ free delivery</span>
        <span className="mx-6 flex items-center">✶ 100% secure payment</span>
        <span className="mx-6 flex items-center">✶ 30 Days free Returns</span>
        <span className="mx-6 flex items-center">✶ Dedicated 24/7 Supports</span>
        <span className="mx-6 flex items-center">✶ Premium Quality Products</span>
      </div>
    </div>
  );
};

export default Poster;
