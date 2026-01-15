"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-blue-100 rounded">Users: 120</div>
        <div className="p-4 bg-green-100 rounded">Sales: 45</div>
        <div className="p-4 bg-yellow-100 rounded">Messages: 8</div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
