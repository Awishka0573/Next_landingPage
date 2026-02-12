"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user && user.email) {
          setUserName(user.email.split("@")[0]);
        } else if (typeof user === "string") {
          setUserName(user);
        }
      } catch (e) {
        setUserName(userData);
      }
    }
  }, []);

  const stats = [
    { name: "Active Projects", value: "12", color: "bg-blue-50 text-blue-700 border-blue-100" },
    { name: "Completed Tasks", value: "45", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "New Messages", value: "8", color: "bg-purple-50 text-purple-700 border-purple-100" },
    { name: "Support Tickets", value: "2", color: "bg-red-50 text-red-700 border-red-100" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">System Overview</h1>
        <p className="text-gray-500 mt-1 italic">Showing latest metrics for your workspace.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className={`p-6 rounded-2xl border ${stat.color} shadow-sm transition-transform hover:scale-[1.02]`}>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">{stat.name}</p>
            <p className="text-4xl font-black mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0 text-red-100">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">New system update successfully deployed.</p>
                <p className="text-xs text-gray-400 mt-0.5">{i} hour{i > 1 ? 's' : ''} ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
