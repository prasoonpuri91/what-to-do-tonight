"use client";

import { Home, Map, Sparkles, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "plans", label: "Plans", icon: Map },
  { id: "for-you", label: "For You", icon: Sparkles },
  { id: "profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex items-center justify-around px-2 py-2 pb-safe">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors"
        >
          <Icon
            className={`w-5 h-5 transition-colors ${active === id ? "text-gray-900" : "text-gray-400"}`}
            strokeWidth={active === id ? 2.5 : 1.8}
          />
          <span className={`text-[10px] font-medium transition-colors ${active === id ? "text-gray-900" : "text-gray-400"}`}>
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
