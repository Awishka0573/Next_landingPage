import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-50 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-50 rounded-full blur-[120px] opacity-60 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100/50 text-pink-600 text-sm font-semibold mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Next.js 16 • Turbopack Powered
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-[1.1]">
          Welcome <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">Awishka</span> 🚀
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium opacity-80">
          The next generation dashboard for AI creators.
          Manage your models, track performance, and scale your vision with AI-NEXT.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/login"
            className="group relative px-8 py-4 rounded-2xl bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-all shadow-[0_20px_50px_rgba(236,72,153,0.2)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.4)] active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            <span className="relative">Launch Dashboard</span>
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-2xl bg-white text-gray-700 font-bold text-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95"
          >
            See Features
          </Link>
        </div>

        {/* Floating elements concept */}
        <div className="mt-20 flex justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
