
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, MinusCircle, Settings } from "lucide-react";

const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Plus", href: "/dashboard/plus", icon: PlusCircle },
    { name: "Minus", href: "/dashboard/minus", icon: MinusCircle },
    { name: "Setting", href: "/dashboard/setting", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-gray-900 h-screen text-white flex flex-col fixed left-0 top-0 border-r border-gray-800">
            <div className="p-6 text-2xl font-bold border-b border-gray-800 flex items-center gap-2">
                <span className="text-blue-500 font-extrabold italic">AI</span>
                <span>WEB</span>
            </div>

            <nav className="flex-1 mt-6 px-4 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
                &copy; 2026 AI WEB Dashboard
            </div>
        </div>
    );
}
