import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-pink-100 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/logo.png"
              alt="AI-NEXT Logo"
              className="relative w-12 h-12 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight uppercase">
            AI<span className="text-pink-600">-NEXT</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-500 hover:text-pink-600 transition-all font-medium text-sm"
          >
            Home
          </Link>

          <Link
            href="/contact"
            className="text-gray-500 hover:text-pink-600 transition-all font-medium text-sm"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="px-6 py-2.5 rounded-full bg-pink-600 text-white text-sm font-semibold hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 active:scale-95"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
