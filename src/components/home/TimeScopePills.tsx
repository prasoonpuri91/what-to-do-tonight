"use client";

import { useState } from "react";

const scopes = ["Tonight", "Weekend"];

export default function TimeScopePills() {
  const [active, setActive] = useState("Tonight");

  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
      {scopes.map((scope) => (
        <button
          key={scope}
          onClick={() => setActive(scope)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
            active === scope
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
          }`}
        >
          {scope}
        </button>
      ))}
    </div>
  );
}
