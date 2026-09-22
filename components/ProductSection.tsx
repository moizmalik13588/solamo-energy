"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import "swiper/css";

export default function ShopSection() {
  const panelRef = useRef<SwiperRef>(null);
  const inverterRef = useRef<SwiperRef>(null);
  const batteryRef = useRef<SwiperRef>(null);

  // 1. Solar Panels Data
  const solarPanels = [
    {
      name: "Jesko 620W",
      price: "24,400",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-18-2.webp",
      link: "#",
    },
    {
      name: "Risen HJT BF 740W Bifacial Solar Panel",
      price: "30,850",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-8-1.webp",
      link: "#",
    },
    {
      name: "TCL 620W N-Type Bifacial Solar Panel",
      price: "25,300",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-21.webp",
      link: "#",
    },
    {
      name: "TCL 615W N-Type Bifacial Solar Panel",
      price: "25,100",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-19-2.webp",
      link: "#",
    },
    {
      name: "Ronma 620W N-Type Bifacial Solar Panel",
      price: "24,700",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-22.webp",
      link: "#",
    },
  ];

  // 2. Inverters Data
  const inverters = [
    {
      name: "Sunsynk LifeLynk Lynx Pro 6kW IP65 Hybrid Inverter",
      price: "210,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-1-1.webp",
      link: "#",
    },
    {
      name: "Sunsynk LifeLynk Lynks 6kW Hybrid Inverter (IP41)",
      price: "175,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-1-1.webp",
      link: "#",
    },
    {
      name: "VFD KING PRO PLUS IP-65 75KW",
      price: "496,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-3.webp",
      link: "#",
    },
    {
      name: "VFD KING PRO PLUS IP-65 55KW",
      price: "350,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-3.webp",
      link: "#",
    },
  ];

  // 3. Batteries Data
  const batteries = [
    {
      name: "CN GREEN 16kW",
      price: "555,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-12.webp",
      link: "#",
    },
    {
      name: "VOLNEX IP65 51.2V 100Ah",
      price: "261,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-14.webp",
      link: "#",
    },
    {
      name: "Sunwoda 51.2V 100Ah",
      price: "221,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-15.webp",
      link: "#",
    },
    {
      name: "Sunsynk X Series 10.24kWh 8000 Cycles IP65 Lithium Battery",
      price: "555,000",
      image:
        "https://solamoenergy.com/wp-content/uploads/2026/08/Website-Listing-16.webp",
      link: "#",
    },
  ];

  const renderCategorySlider = (
    title: string,
    items: typeof solarPanels,
    ref: React.RefObject<SwiperRef | null>,
    viewAllLink: string,
  ) => (
    <div className="mb-14">
      <h3 className="font-josefin text-2xl font-bold mb-6 text-[#172217]">
        {title}
      </h3>

      {/* Relative wrapper with padding so arrows stay outside cards */}
      <div className="relative px-6 sm:px-10">
        {/* Left Arrow */}
        <button
          onClick={() => ref.current?.swiper?.slidePrev()}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 text-[#79B900] hover:scale-110 transition bg-white rounded-full p-2 shadow-md border border-gray-200"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => ref.current?.swiper?.slideNext()}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 text-[#79B900] hover:scale-110 transition bg-white rounded-full p-2 shadow-md border border-gray-200"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>

        <Swiper
          ref={ref}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="py-2"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between bg-white h-[380px]">
                <div>
                  <div className="h-36 relative mb-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2 h-10">
                    {item.name}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 mb-3">
                    <span className="text-xs font-bold text-gray-700">
                      Price
                    </span>
                    <span className="text-base font-bold text-[#79B900]">
                      Rs{item.price}
                    </span>
                  </div>
                  <Link
                    href={item.link}
                    className="block w-full text-center bg-[#79B900] text-white font-semibold py-2.5 rounded-lg text-xs hover:bg-[#5f9200] transition"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-6">
        <Link
          href={viewAllLink}
          className="inline-flex items-center gap-2 bg-[#79B900] text-white font-bold px-8 py-3 rounded-lg text-sm hover:bg-[#5f9200] transition shadow-md"
        >
          View All Products <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* TOP ABOUT & STRIP HEADER */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#d8e3c5] bg-[#f7f9f2] text-[#172217] text-xs font-semibold uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider">
            <svg
              className="w-4 h-4 text-[#79B900]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
            <span>ABOUT US</span>
          </div>

          <h2 className="font-josefin text-3xl sm:text-5xl font-bold tracking-tight text-[#172217] uppercase">
            WHY SOLAR NOW <span className="text-[#79B900]">STATS STRIP</span>
          </h2>
        </div>

        {/* ALL CATEGORY SLIDERS */}
        {renderCategorySlider(
          "Solar Panels",
          solarPanels,
          panelRef,
          "/solar-panels",
        )}
        {renderCategorySlider(
          "Inverters",
          inverters,
          inverterRef,
          "/inverters",
        )}
        {renderCategorySlider("Batteries", batteries, batteryRef, "/batteries")}
      </div>
    </section>
  );
}
