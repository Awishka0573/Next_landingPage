"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Navbar() {
  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact";
    }
  }, []);
  const handleAboutClick = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#about";
    }
  }, []);
  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <img
              src="/logo.png"
              alt="AI-NEXT Logo"
              className="w-10 h-10 object-contain rounded-md"
            />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 leading-none">AI<span className="text-pink-600"> - Awishka</span></h1>
            <p className="text-xs text-gray-500 -mt-0.5">Designer • Developer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition">Home</Link>
          <a href="#about" onClick={handleAboutClick} className="text-sm font-medium text-gray-600 hover:text-pink-600 transition">About</a>
          <a href="#contact" onClick={handleContactClick} className="text-sm font-medium text-gray-600 hover:text-pink-600 transition">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm font-medium hover:shadow-md transition">Projects</button>

          <button aria-label="Profile" className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-gray-200 hover:ring-pink-400 transition">
            <img src="/ai_1.jpg" alt="Awishka" className="w-full h-full object-cover" />
          </button>

          <Link href="/login" className="hidden md:inline-flex px-4 py-2 rounded-full bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700 transition">Sign In</Link>

          {/* mobile menu placeholder */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
