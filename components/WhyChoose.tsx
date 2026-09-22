"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Users2,
  Cpu,
  MapPin,
  LayoutGrid,
} from "lucide-react";

export default function WhyChoose() {
  const steps = [
    {
      num: "01",
      title: "Certified Solar",
      desc: "Certified solar installation team with years of field experience",
      icon: <Award className="w-6 h-6 text-[#79B900]" />,
    },
    {
      num: "02",
      title: "Premium Grade",
      desc: "Premium-grade solar panels from globally trusted manufacturers",
      icon: <ShieldCheck className="w-6 h-6 text-[#79B900]" />,
    },
    {
      num: "03",
      title: "Full Project Management",
      desc: "Full project management from design to installation to after-sales support",
      icon: <Users2 className="w-6 h-6 text-[#79B900]" />,
    },
    {
      num: "04",
      title: "5-Year Installation Warranty",
      desc: "5-year installation warranty on all residential and commercial projects",
      icon: <Cpu className="w-6 h-6 text-[#79B900]" />,
    },
    {
      num: "05",
      title: "Free Site Assessment",
      desc: "Free site assessment and zero-obligation consultation",
      icon: <MapPin className="w-6 h-6 text-[#79B900]" />,
    },
  ];

  return (
    <section className="py-20 bg-[#f4f7ee]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* 3 Columns Grid (Original Website Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 0: Dark Green Title Banner */}
          <div className="bg-[#1c3b1a] text-white p-8 rounded-2xl flex flex-col justify-center min-h-[260px] shadow-sm">
            <div className="inline-flex items-center gap-2 border border-[#3b5d38] bg-[#274825] px-3 py-1 rounded-full w-fit mb-6">
              <LayoutGrid className="w-3.5 h-3.5 text-[#79B900]" />
              <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
                WORKING PROCESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Why Choose <br />
              <span className="text-[#79B900]">Solamo Energy</span>
            </h2>
          </div>

          {/* Boxes 1 to 5: White Cards */}
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between relative shadow-sm hover:shadow-md transition min-h-[260px]"
            >
              {/* Outlined Green Number Top Right */}
              <span className="absolute top-6 right-8 text-4xl font-extrabold text-transparent stroke-text select-none">
                {item.num}
              </span>

              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border border-[#79B900] flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-[#172217] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outlined text CSS stroke */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #79b900;
        }
      `}</style>
    </section>
  );
}
