"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Grid } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative min-h-[550px] sm:min-h-[600px] flex items-center justify-center text-white overflow-hidden my-6">
      {/* Background Image Container using Unsplash reliable URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Exact Green Tint Overlay like Original Site */}
        <div className="absolute inset-0 bg-[#2b4c12]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#1e340d]/45" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center py-12 flex flex-col items-center">
        {/* BOOK NOW Badge */}
        <div className="inline-flex items-center gap-2 border border-white/50 bg-black/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
          <Grid className="w-4 h-4 text-white" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            BOOK NOW
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.15] max-w-[1000px] text-white mb-6">
          Stop Paying Oversized Electricity Bills. Switch To Solar Today
        </h2>

        {/* Subtitle */}
        <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-[750px] font-normal leading-relaxed mb-10">
          Free consultation. No obligation. Our expert visits your site and
          gives you a complete cost-savings analysis.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Outlined Green Button */}
          <Link
            href="/free-quote"
            className="w-full sm:w-auto border border-[#79B900] bg-black/20 hover:bg-[#79B900] text-white hover:text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Solid Green Button */}
          <a
            href="https://wa.me/923141349717"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#88cb00] hover:bg-[#76b300] text-[#172217] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group"
          >
            <span>WhatsApp Us Now</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
