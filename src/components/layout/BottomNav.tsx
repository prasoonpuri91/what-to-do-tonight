"use client";

import { Home, Map, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "plans", label: "Plans", icon: Map, href: "/plans" },
  { id: "for-you", label: "For You", icon: Sparkles, href: "/for-you" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex items-center justify-around px-2 py-2 pb-safe">
      {tabs.map(({ id, label, icon: Icon, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors"
          >
            <Icon
              className={`w-5 h-5 transition-colors ${active ? "text-gray-900" : "text-gray-400"}`}
              strokeWidth={active ? 2.5 : 1.8}
            />
            <span className={`text-[10px] font-medium transition-colors ${active ? "text-gray-900" : "text-gray-400"}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
