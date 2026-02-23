"use client";

import Link from "next/link";
import { Info, Target, Users, Landmark, Home, Menu, X } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "About Us", href: "/about", icon: Info },
        { name: "Our Mission", href: "/mission", icon: Target },
        { name: "Our Leadership", href: "/leadership", icon: Users },
        { name: "Our Financials", href: "/financials", icon: Landmark },
    ];

    return (
        <>
            {/* Mobile hamburger button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed top-4 left-4 z-[60] md:hidden w-12 h-12 bg-dark-teal rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                aria-label="Open navigation"
            >
                <Menu size={24} className="text-white" />
            </button>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden animate-reveal"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-full w-[260px] bg-dark-teal text-white flex flex-col shadow-xl z-[70]
                transition-transform duration-300 ease-out
                ${open ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
            `}>
                {/* Mobile close button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Close navigation"
                >
                    <X size={20} className="text-white" />
                </button>

                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <Home className="text-white group-hover:text-primary transition-colors duration-300" size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight">CityConnect</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-200 group"
                        >
                            <item.icon size={20} className="text-gray-400 group-hover:text-primary" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/10">
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">Contact</div>
                    <p className="text-sm text-gray-300">support@cityconnect.org</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
