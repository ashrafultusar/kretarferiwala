"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

// Define categories and images together
const categories = [
  "Electronics",
  "Kitchen Accessories",
  "Home Decor",
  "Home Accessories",
  "Baby Products",
  "Safety Products",
  "Flash Sales",
  "Tea Store",
  "Sports Items",
  "Fashion Wear",
  "Toys",
  "Fitness Products",
];

const images = [
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
  "/logo_icon/logo.png",
];

const AllCategories: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className="container mx-auto my-12 px-4">
      {navigationReady && (
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          centeredSlides={false}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 8 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link href={`/products-category/${encodeURIComponent(category)}`}>
                <div className="flex flex-col items-center justify-center bg-[#f7f9fc] rounded-xl p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105 gap-">
                  <div className="w-16 h-16 mb-4 relative">
                    <Image
                      src={images[index] || "/logo_icon/logo.png"}
                      alt={category}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{category}</h3>
                  <p className="text-sm text-gray-500">Many items</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default AllCategories;
