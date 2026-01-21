"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const IMAGES = [
  "/ai_1.jpg",
  "/ai_2.jpg",
  "/ai_3.jpg",
  "/ai_4.jpg",
  "/ai_5.jpg",
  "/ai_6.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Right Side: Image Slider */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0">
        <div className="relative h-full w-full">
          {IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={img}
                alt={`Hero visual ${index + 1}`}
                className="w-full h-full object-cover object-center lg:object-right"
              />
            </div>
          ))}

          {/* Gradient masking for smooth transition */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent hidden lg:block z-10"></div>
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/30 to-transparent lg:hidden z-10"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-16 ">
        <div className="lg:w-1/2 pt-32 pb-20 lg:py-0">

          {/* Content Wrapper with subtle background for mobile readability */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50/80 backdrop-blur-sm border border-pink-100/50 text-pink-600 text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Built with Next.js 16 • Powered by Turbopack
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Hey, I’m <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-pink-600 to-rose-600">
                Awishka
              </span> 👋
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mb-12 leading-relaxed font-medium">
              Designing and developing fast, scalable, and user-focused web applications using modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Link
                href="/login"
                className="group relative px-8 py-4 rounded-2xl bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-all shadow-[0_20px_50px_rgba(236,72,153,0.2)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.4)] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                <span className="relative">Dashboard</span>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-2xl bg-white text-gray-700 font-bold text-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95 backdrop-blur-sm"
              >
                See Features
              </Link>
            </div>

            {/* Social / Trust Badges */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Available for Projects</span>
            </div>

            {/* Floating Status Card - repositioned for this layout */}
            <div className="mt-12 inline-block bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Status</p>
                  <p className="text-sm font-bold text-gray-900">Ready to Ship</p>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-8">
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-pink-600" : "w-4 bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
