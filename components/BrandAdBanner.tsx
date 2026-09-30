"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Megaphone, MessageCircle } from "lucide-react";
import { brandsData } from "@/lib/brand-data";

interface BrandAdBannerProps {
  brand?: string;
  image?: string;
  video?: string;
  href?: string;
  alt?: string;
}

export default function BrandAdBanner({
  brand,
  image,
  video,
  href,
  alt = "Brand advertisement",
}: BrandAdBannerProps) {
  const [videoError, setVideoError] = useState(false);
  let finalImage = image;
  let finalHref = href;
  let finalAlt = alt;

  if (brand && brandsData[brand]) {
    const brandObj = brandsData[brand];
    if (brandObj.bannerImage) {
      finalImage = brandObj.bannerImage;
    }
    if (!finalHref) {
      finalHref = `/brand/${brandObj.slug}`;
    }
    finalAlt = `${brandObj.name} advertisement`;
  }

  const isExternalLink =
    finalHref?.startsWith("http") || finalHref?.startsWith("//");
  const showVideo = !!video && !videoError;

  const renderContent = () => {
    if (showVideo) {
      const videoElement = (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="object-cover w-full h-full"
          onError={() => setVideoError(true)}
        />
      );

      if (finalHref) {
        return isExternalLink ? (
          <a
            href={finalHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative block w-full h-full"
          >
            {videoElement}
          </a>
        ) : (
          <Link href={finalHref} className="relative block w-full h-full">
            {videoElement}
          </Link>
        );
      }
      return <div className="relative block w-full h-full">{videoElement}</div>;
    }

    if (finalImage) {
      return finalHref ? (
        isExternalLink ? (
          <a
            href={finalHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative block w-full h-full"
          >
            <img
              src={finalImage}
              alt={finalAlt}
              className="object-cover w-full h-full transition duration-300 hover:opacity-95"
            />
          </a>
        ) : (
          <Link href={finalHref} className="relative block w-full h-full">
            <img
              src={finalImage}
              alt={finalAlt}
              className="object-cover w-full h-full transition duration-300 hover:opacity-95"
            />
          </Link>
        )
      ) : (
        <div className="relative block w-full h-full">
          <img
            src={finalImage}
            alt={finalAlt}
            className="object-cover w-full h-full"
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-2 w-full h-full">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <Megaphone className="w-4 h-4 text-gray-400" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Advertise here — Brand banner space
          </span>
        </div>
        <a
          href="https://wa.me/923141349717"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84CC16] hover:text-[#65A30D] transition mt-1 underline underline-offset-2"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Contact us to advertise
        </a>
      </div>
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 my-6">
      <div className="relative w-full h-[100px] md:h-[140px] lg:h-[180px] bg-[#F9FAFB] border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
        {/* Small Advertisement Label in the corner */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-gray-200/90 text-gray-600 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded tracking-wide uppercase shadow-xs">
          Advertisement
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
