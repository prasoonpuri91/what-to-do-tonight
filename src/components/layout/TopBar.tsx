"use client";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3 flex items-center">
      <button className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors">
        Seattle
        <span className="text-gray-400 text-xs">▾</span>
      </button>
    </header>
  );
}
