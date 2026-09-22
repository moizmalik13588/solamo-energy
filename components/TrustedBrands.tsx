"use client";

import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

export default function TrustedBrands() {
  const swiperRef = useRef<SwiperRef>(null);

  const brands = [
    {
      name: "Yingli",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/31.png",
      link: "https://solamoenergy.com/brand/yingli/",
    },
    {
      name: "Volnex",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/29.png",
      link: "https://solamoenergy.com/brand/volnex/",
    },
    {
      name: "Trina Solar",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/17.png",
      link: "https://solamoenergy.com/brand/trina-solar/",
    },
    {
      name: "Sunwoda",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/28.png",
      link: "https://solamoenergy.com/brand/sunwoda/",
    },
    {
      name: "Sunsynk",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/Solamo-Ecommerce-Brands-logo.png",
      link: "https://solamoenergy.com/brand/sunsynk/",
    },
    {
      name: "Sungrow",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/13.png",
      link: "https://solamoenergy.com/brand/sungrow/",
    },
    {
      name: "Solis",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/10.png",
      link: "https://solamoenergy.com/brand/solis/",
    },
    {
      name: "Resin",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/30.png",
      link: "https://solamoenergy.com/brand/resin/",
    },
    {
      name: "PylonTech",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/8-1.png",
      link: "https://solamoenergy.com/brand/pylontech/",
    },
    {
      name: "Osda",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/23.png",
      link: "https://solamoenergy.com/brand/osda/",
    },
    {
      name: "Osaka",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/1-1.png",
      link: "https://solamoenergy.com/brand/osaka/",
    },
    {
      name: "Longi",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/20.png",
      link: "https://solamoenergy.com/brand/longi/",
    },
    {
      name: "Jinko Solar",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/21.png",
      link: "https://solamoenergy.com/brand/jinko-solar/",
    },
    {
      name: "Jesko",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/27.png",
      link: "https://solamoenergy.com/brand/jesko/",
    },
    {
      name: "JA Solar",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/18.png",
      link: "https://solamoenergy.com/brand/ja-solar/",
    },
    {
      name: "Itel",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/26.png",
      link: "https://solamoenergy.com/brand/itel/",
    },
    {
      name: "Inverex",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/9.png",
      link: "https://solamoenergy.com/brand/inverex/",
    },
    {
      name: "Huawei",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/14-1.png",
      link: "https://solamoenergy.com/brand/huawei/",
    },
    {
      name: "Grow Watt",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/12.png",
      link: "https://solamoenergy.com/brand/grow-watt/",
    },
    {
      name: "Goodwe",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/11.png",
      link: "https://solamoenergy.com/brand/goodwe/",
    },
    {
      name: "Genix Green",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/6.png",
      link: "https://solamoenergy.com/brand/genix-green/",
    },
    {
      name: "Dynees",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/7.png",
      link: "https://solamoenergy.com/brand/dynees/",
    },
    {
      name: "Dongjing",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/3.png",
      link: "https://solamoenergy.com/brand/dongjing/",
    },
    {
      name: "Cora Dawn",
      img: "https://solamoenergy.com/wp-content/uploads/2026/08/24.png",
      link: "https://solamoenergy.com/brand/cora-dawn/",
    },
    {
      name: "Canadian Solar",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/19.png",
      link: "https://solamoenergy.com/brand/canadian-solar/",
    },
    {
      name: "Astronergy",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/15-1.png",
      link: "https://solamoenergy.com/brand/astronergy/",
    },
    {
      name: "Aiko",
      img: "https://solamoenergy.com/wp-content/uploads/2026/07/16.png",
      link: "https://solamoenergy.com/brand/aiko/",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Title */}
        <h2 className="font-josefin text-3xl sm:text-4xl font-bold text-center text-[#172217] mb-12">
          Trusted Brands We Carry
        </h2>

        {/* Carousel Container */}
        <div className="relative px-8 sm:px-12 flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            aria-label="Previous slide"
            className="absolute left-0 z-20 text-[#79B900] hover:scale-110 transition p-1"
          >
            <ChevronLeft className="w-8 h-8 stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            aria-label="Next slide"
            className="absolute right-0 z-20 text-[#79B900] hover:scale-110 transition p-1"
          >
            <ChevronRight className="w-8 h-8 stroke-[3]" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 60 },
            }}
            className="w-full flex items-center"
          >
            {brands.map((brand, idx) => (
              <SwiperSlide
                key={idx}
                className="flex items-center justify-center py-4"
              >
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-20 w-full flex items-center justify-center filter grayscale hover:grayscale-0 transition duration-300 group"
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-h-full max-w-[140px] object-contain group-hover:scale-105 transition"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
