"use client";

import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-1/3"
      />

      {/* Admin Profile */}
      <div className="flex items-center gap-4">
        <span className="font-bold">Admin</span>
        <img src="/profile.jpg" alt="Admin" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;
