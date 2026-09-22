"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Search,
  Sun,
  Zap,
  Battery,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Topbar */}
      <div className="bg-[#79B900] text-white">
        <div className="max-w-[1300px] mx-auto px-6 py-2.5 flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>
                <b>Email:</b>{" "}
                <a
                  href="mailto:info@solamoenergy.com"
                  className="hover:underline"
                >
                  info@solamoenergy.com
                </a>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>
                <b>Customer Support:</b>{" "}
                <a href="tel:+923141349717" className="hover:underline">
                  +92 314 1349717
                </a>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-normal">Follow Us –</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/SolamoEnergy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.7-1.6h1.6V3.3C16.5 3.2 15.4 3 14.2 3c-2.4 0-4.1 1.5-4.1 4.2v2.6H7.5V13H10v8h3.5z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/solamoenergy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@solamoenergy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M16.6 3c.3 2 1.7 3.6 3.7 3.9v2.6c-1.4 0-2.7-.4-3.8-1.2v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.07v2.7a3 3 0 1 0 2.1 2.86V3h2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="https://solamoenergy.com" className="flex items-center">
          <Image
            src="https://solamoenergy.com/wp-content/uploads/2026/05/Logo-2-1-1536x517.png"
            alt="Solamo Energy"
            width={200}
            height={66}
            className="h-[66px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="px-4 py-2.5 text-lg font-medium text-[#172217] hover:text-[#5f9200] transition"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="px-4 py-2.5 text-lg font-medium text-[#172217] hover:text-[#5f9200] transition"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="px-4 py-2.5 text-lg font-medium text-[#172217] hover:text-[#5f9200] flex items-center gap-1.5 transition">
              Services{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl p-2 border border-gray-100 py-3">
                <Link
                  href="/residential-solar"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Residential Solar
                </Link>
                <Link
                  href="/commercial-solar"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Commercial Solar
                </Link>
                <Link
                  href="/industrial-solar"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Industrial Solar
                </Link>
                <Link
                  href="/agricultural-solar"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Agricultural Solar
                </Link>
                <Link
                  href="/net-metering"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Net Metering
                </Link>
                <Link
                  href="/ev-charging-station"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  EV Charging Station
                </Link>
                <Link
                  href="/solar-battery-storage"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Solar Battery Storage
                </Link>
                <Link
                  href="/franchise"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#172217] hover:bg-[#f2f9e6] hover:text-[#5f9200]"
                >
                  Franchise
                </Link>
              </div>
            )}
          </div>

          {/* Shop Mega Menu */}
          <div
            className="relative group"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="px-4 py-2.5 text-lg font-medium text-[#172217] hover:text-[#5f9200] flex items-center gap-1.5 transition">
              Shop{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${shopOpen ? "rotate-180" : ""}`}
              />
            </button>
            {shopOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-white shadow-2xl rounded-2xl p-7 border border-gray-100 z-50">
                <div className="grid grid-cols-[1.85fr_auto_1fr] gap-7 items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5f9200] mb-3">
                      Brands
                    </p>
                    <div className="grid grid-cols-3 gap-x-3 gap-y-1">
                      {[
                        "AIKO",
                        "Astronergy",
                        "Canadian Solar",
                        "Dynees",
                        "Genix Green",
                        "Goodwe",
                        "Grow Watt",
                        "Huawei",
                        "Inverex",
                        "JA Solar",
                        "Jinko Solar",
                        "Longi",
                        "Osaka",
                        "PylonTech",
                        "Solis",
                        "Sungrow",
                        "Trina Solar",
                      ].map((brand) => (
                        <Link
                          key={brand}
                          href={`/brand/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block py-1.5 px-2 text-sm font-semibold text-[#172217] hover:text-[#5f9200] hover:bg-[#f2f9e6] rounded-md transition"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="w-[1px] bg-gray-200 self-stretch" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5f9200] mb-3">
                      Category
                    </p>
                    <div className="flex flex-col gap-1">
                      <Link
                        href="/solar-panels"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f2f9e6] transition group/cat"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#f2f9e6] text-[#5f9200] flex items-center justify-center">
                          <Sun className="w-4 h-4" />
                        </span>
                        <span className="font-semibold text-sm group-hover/cat:text-[#5f9200]">
                          Solar Panels
                        </span>
                      </Link>
                      <Link
                        href="/inverters"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f2f9e6] transition group/cat"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#f2f9e6] text-[#5f9200] flex items-center justify-center">
                          <Zap className="w-4 h-4" />
                        </span>
                        <span className="font-semibold text-sm group-hover/cat:text-[#5f9200]">
                          Inverters
                        </span>
                      </Link>
                      <Link
                        href="/batteries"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f2f9e6] transition group/cat"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#f2f9e6] text-[#5f9200] flex items-center justify-center">
                          <Battery className="w-4 h-4" />
                        </span>
                        <span className="font-semibold text-sm group-hover/cat:text-[#5f9200]">
                          Batteries
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#5f9200] border border-[#79B900] font-semibold py-2.5 px-4 rounded-full hover:bg-[#79B900] hover:text-white transition"
                  >
                    Show All Products <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/brand"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#5f9200] border border-[#79B900] font-semibold py-2.5 px-4 rounded-full hover:bg-[#79B900] hover:text-white transition"
                  >
                    Shop By Brand <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className="px-4 py-2.5 text-lg font-medium text-[#172217] hover:text-[#5f9200] transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <Link
            href="/free-quote"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-[#5f9200] border-2 border-[#79B900] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#79B900] hover:text-white transition text-base"
          >
            Book A Call <ArrowUpRight className="w-5 h-5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 border border-gray-200 rounded-lg text-[#172217]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="py-2 text-lg font-medium text-[#172217]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="py-2 text-lg font-medium text-[#172217]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="py-2 font-medium text-lg text-[#172217]">
              Services
            </div>
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#79B900]">
              <Link
                href="/residential-solar"
                onClick={() => setMobileMenuOpen(false)}
              >
                Residential Solar
              </Link>
              <Link
                href="/commercial-solar"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commercial Solar
              </Link>
              <Link
                href="/industrial-solar"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industrial Solar
              </Link>
              <Link
                href="/agricultural-solar"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agricultural Solar
              </Link>
              <Link
                href="/net-metering"
                onClick={() => setMobileMenuOpen(false)}
              >
                Net Metering
              </Link>
              <Link
                href="/ev-charging-station"
                onClick={() => setMobileMenuOpen(false)}
              >
                EV Charging Station
              </Link>
              <Link
                href="/solar-battery-storage"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solar Battery Storage
              </Link>
              <Link href="/franchise" onClick={() => setMobileMenuOpen(false)}>
                Franchise
              </Link>
            </div>
            <Link
              href="/contact-us"
              className="py-2 text-lg font-medium text-[#172217]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/free-quote"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#79B900] text-white font-semibold py-3 px-6 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book A Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
