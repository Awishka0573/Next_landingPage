import Link from "next/link";


export default function Footer() {
  return (
  <footer className="py-12 border-t border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="AI-NEXT Logo" className="w-8 h-8 object-contain opacity-80" />
          <span className="text-sm font-bold text-gray-900 tracking-widest uppercase">
            Awishka Isuru<span className="text-pink-600"></span>
          </span>
        </div>

        <div className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} AI. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          {["Twitter", "GitHub", "Discord"].map((social) => (
            <a key={social} href="#" className="text-sm font-bold text-gray-400 hover:text-pink-600 transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
  );
}
