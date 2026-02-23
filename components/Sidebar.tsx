import Link from "next/link";
import { Info, Target, Users, Landmark, Home } from "lucide-react";

const Sidebar = () => {
    const menuItems = [
        { name: "About Us", href: "/about", icon: Info },
        { name: "Our Mission", href: "/mission", icon: Target },
        { name: "Our Leadership", href: "/leadership", icon: Users },
        { name: "Our Financials", href: "/financials", icon: Landmark },
    ];

    return (
        <div className="fixed top-0 left-0 h-full w-[260px] bg-dark-teal text-white flex flex-col shadow-xl z-50">
            <div className="p-8">
                <Link href="/" className="flex items-center gap-3 group">
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
    );
};

export default Sidebar;
