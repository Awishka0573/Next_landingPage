"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("user", "Awishka");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-pink-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-rose-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-4xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-10 border border-white/50">

        {/* Title */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-600 shadow-pink-200 shadow-xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-500 font-medium mt-2">
            Secure access to your AI workspace
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Username</label>
            <input
              placeholder="Enter your username"
              className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="mt-10 w-full py-4 rounded-2xl bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-all shadow-[0_20px_40px_-10px_rgba(236,72,153,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(236,72,153,0.5)] active:scale-[0.98]"
        >
          Sign In
        </button>

        {/* Extra */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-medium">
            New to AI-NEXT?{" "}
            <a href="/signup" className="text-pink-600 hover:text-pink-700 font-bold transition">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
