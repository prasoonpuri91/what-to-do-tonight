import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "What to do tonight",
  description: "Discover what to do tonight in your city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-gray-100" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <AppShell>
          <TopBar />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <BottomNav />
        </AppShell>
      </body>
    </html>
  );
}
