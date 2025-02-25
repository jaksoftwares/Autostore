"use client";

import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [notifications] = useState(3); // Dynamic Notifications Count
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Dashboard Logo */}
      <div className="flex items-center gap-3">
        <Image src="/logo2.png" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Center - Search Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 pl-10 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 text-gray-400" size={18} />
      </div>

      {/* Right - Notifications & Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <FiBell size={22} className="text-gray-600" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2"
          >
            <Image
              src="/profile.jpg"
              alt="Admin"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <span className="font-semibold">Admin</span>
            <FiChevronDown />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
              <a href="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
