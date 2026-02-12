
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, User } from "lucide-react";

export default function DashboardHeader() {
    const router = useRouter();
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
                // If it's not valid JSON, assume it's a plain string (like "Awishka")
                setUserName(userData);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/login");
    };

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 ml-64">
            <div className="text-gray-500 text-sm font-medium">
                Welcome back, <span className="text-gray-900">{userName}</span>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-right mr-2 hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900 leading-none capitalize">{userName}</p>
                        <p className="text-xs text-gray-500 mt-1">Administrator</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
                        <User size={24} />
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm group"
                >
                    <LogOut size={18} className="transition-transform group-hover:-translate-x-1" />
                    Logout
                </button>
            </div>
        </header>
    );
}
