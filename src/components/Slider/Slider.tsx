"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Slider = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const sliderImages = [
    { src: "/slider/slider1.jpg" },
    { src: "/slider/slider2.jpg" },
    { src: "/slider/slider3.jpg" },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Scroll Down Button */}
      {showScrollButton && (
        <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 transition animate-bounce"
          >
            ↓
          </button>
        </div>
      )}

      <Swiper
        spaceBetween={0}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="w-full aspect-[16/9] md:aspect-[21/9]"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
