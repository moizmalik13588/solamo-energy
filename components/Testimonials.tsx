"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Noor Noreen",
      initial: "N",
      bgGradient: "bg-purple-600",
      time: "2 months ago",
      text: "I installed a 10 kW solar system from Solamo Energy, and my experience has been excellent. The system is working perfectly, the pricing was very reasonable compared to the market, and their customer service was outstanding. The team was professional, cooperative, and provided great support throughout the process. Highly recommended!",
    },
    {
      name: "Irrum Shakeel",
      initial: "I",
      bgGradient: "bg-green-700",
      time: "2 months ago",
      text: "Really impressive service.",
    },
    {
      name: "Usmankhan Usmankhan",
      initial: "U",
      bgGradient: "bg-blue-700",
      time: "2 months ago",
      text: "This project has been successfully completed by Solamo Energy with the highest level of professionalism and quality. We are truly satisfied with the outcome, and it is a pleasure to see such outstanding workmanship.",
    },
    {
      name: "MUHAMMED HASNAIN",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWW2S4JRpAbG7_sWMzcYl_WmViHFnlfT7MH15Q46yW3TiAnT1PP=w40-h40-c-rp-mo-br100",
      time: "2 months ago",
      text: "Me and my clients are very happy with the services specially after sales services. Matlab itna costumer Ka khayal rakhne Ka tareeka bhut Acha hai. Ab main bagair Kisi problem ke inko clients de deta hn apne",
    },
    {
      name: "raheem ali",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjXBFttdWKZ_qsRFBtSXWVMF3yjpX6IruhkXrGkZUzJsyLoMLY1B=w40-h40-c-rp-mo-br100",
      time: "2 months ago",
      text: "I had a great experience with Solamo Energy. From consultation to installation, everything was smooth. The engineers were experts and answered all my questions patiently. System is working perfectly even in Karachi heat.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Top Header section matching original site */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 mb-6 text-sm text-[#172217] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#79B900]"></span>
            OUR TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#172217] tracking-tight">
            See What Our <span className="text-[#79B900]">Clients Say</span>
          </h2>
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative">
          <div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out"
          >
            {[0, 1, 2, 3].map((offset) => {
              const review = reviews[(currentIndex + offset) % reviews.length];
              return (
                <div
                  key={offset}
                  className="bg-gray-50 border border-gray-200/80 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div>
                    {/* User header with avatar & Google G icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {review.img ? (
                          <img
                            src={review.img}
                            alt={review.name}
                            className="w-11 h-11 rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className={`w-11 h-11 rounded-full ${review.bgGradient} text-white flex items-center justify-center font-bold text-lg`}
                          >
                            {review.initial}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-1">
                            <h3 className="font-bold text-sm text-[#172217] line-clamp-1">
                              {review.name}
                            </h3>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10 shrink-0" />
                          </div>
                          <p className="text-xs text-gray-500">{review.time}</p>
                        </div>
                      </div>

                      {/* Google colored G symbol */}
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                        />
                        <path
                          fill="#34A853"
                          d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                        />
                      </svg>
                    </div>

                    {/* Star ratings */}
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                  </div>

                  {review.text.length > 100 && (
                    <span className="text-xs text-gray-400 font-medium mt-3 block">
                      Read more
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 active:scale-95 transition text-[#172217]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 active:scale-95 transition text-[#172217]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
