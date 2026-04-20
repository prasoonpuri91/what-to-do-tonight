"use client";

import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen relative flex flex-col shadow-sm">
        {children}
      </div>
    </div>
  );
}
