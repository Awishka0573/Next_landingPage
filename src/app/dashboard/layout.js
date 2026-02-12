
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Fixed width */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header - Sticky */}
                <DashboardHeader />

                {/* Dynamic Content - Scrollable */}
                <main className="flex-1 p-8 ml-64 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
