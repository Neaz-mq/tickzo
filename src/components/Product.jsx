import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    name: "Neowrist AI Sync",
    price: "69.00",
    oldPrice: "90.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449003/product-1_auvnwo.png",
  },
  {
    name: "Zenvia Smart Fusion",
    price: "49.00",
    oldPrice: "70.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449027/product-2_ftcgt8.png",
  },
  {
    name: "Chroniq Elite Pro",
    price: "39.00",
    oldPrice: "60.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449038/product-3_c4yxcb.png",
  },
  {
    name: "Zenvia Smart Fusion",
    price: "49.00",
    oldPrice: "70.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449052/product-4_umhwn1.png",
  },
  {
    name: "Aura Smart Watch",
    price: "55.00",
    oldPrice: "85.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449063/product-5_hiuehl.png",
  },
  {
    name: "Vortex Pro Series",
    price: "79.00",
    oldPrice: "119.00",
    image:
      "https://res.cloudinary.com/dxohwanal/image/upload/v1758449073/product-6_lv6y8s.png",
  },
];

const ProductCard = ({ product, swiperRef }) => (
  <div
    className="bg-white p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
    onMouseEnter={() => swiperRef.current?.autoplay.stop()} // pause autoplay
    onMouseLeave={() => swiperRef.current?.autoplay.start()} // resume autoplay
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full max-w-[200px] h-auto object-contain mb-4"
    />
    <h3 className="text-lg font-semibold text-center mb-1">
      {product.name}
    </h3>
    <div className="flex items-center space-x-2">
      <span className="text-xl font-bold text-gray-800">
        ${product.price}
      </span>
      <span className="text-sm line-through text-gray-400">
        ${product.oldPrice}
      </span>
    </div>
  </div>
);

const ProductCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div id="product" className="flex flex-col items-center justify-center  bg-[#D6E3E1] p-28">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
          Our Product
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 leading-tight">
          Revolutionizing time with
          <br />
          smart innovation
        </h1>
      </div>

      {/* Swiper Carousel */}
      <div className="relative w-full max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={800}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // save swiper instance
          className="pb-12"
          breakpoints={{
            320: { slidesPerView: 1 },   // Mobile
            640: { slidesPerView: 2 },   // Small tablets
            1024: { slidesPerView: 3 },  // Tablets / small desktops
            1280: { slidesPerView: 4 },  // Large desktops
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} swiperRef={swiperRef} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination placed below */}
        <div className="custom-pagination flex justify-center pt-12"></div>
      </div>
    </div>
  );
};

export default ProductCarousel;
