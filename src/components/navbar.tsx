"use client";

import { Menu, Search, Bell, Circle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/50 backdrop-blur-md bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] p-4 flex items-center justify-between text-black border-b border-gray-200/50">
      {/* Left Side: Hamburger Menu */}
      <button className="p-2">
        <Menu size={24} />
      </button>

      {/* Center: Logo */}
      <h1 className="text-lg font-semibold">Traf</h1>

      {/* Right Side: Icons */}
      <div className="flex items-center gap-4">
        <Search size={22} className="cursor-pointer" />
        <div className="relative">
          <Bell size={22} className="cursor-pointer" />
          <span className="absolute top-0 right-0 bg-blue-500 h-3 w-3 rounded-full"></span>
        </div>
      </div>
    </nav>
  );
}