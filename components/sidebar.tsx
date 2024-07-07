"use client"; //client component; ssr
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { CloudSunIcon, Landmark, LayoutDashboard, Utensils, MapPinIcon, Newspaper, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const poppins = Poppins({ weight: "600", subsets: ["latin"]});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-emerald-300",
    },
    {
        label: "Weather",
        icon: CloudSunIcon,
        href: "https://trip-plan-weather.netlify.app/",
        color: "text-cyan-300",
    },
    {
        label: "News",
        icon: Newspaper,
        href: "https://trip-plan-news.netlify.app/",
        color: "text-rose-300",
    },
    {
        label: "Directions",
        icon: MapPinIcon,
        href: "https://trip-plan-maps.netlify.app/",
        color: "text-blue-300",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings ",
        color: "text-slate-300",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
      <div className="space-y-4 py-4 flex flex-col h-full bg-emerald-600 text-white">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-10 h-10 mr-4">
                    <Image fill alt="Logo" src="/logo.png" />
                </div>
                <h1 className={cn("text-2xl font-bold", poppins.className)}>
                    Trip Plan
                </h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route) => (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover: text-white hover:bg-white/10 rounded-lg transition",
                            pathname === route.href ? "text-white bg-white/10" : "text-gray-300"
                        )}>
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    );
}
  
export default Sidebar;
