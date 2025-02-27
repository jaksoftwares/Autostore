"use client";

import { useState } from "react";

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex justify-between items-center mb-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="border px-3 py-2 rounded-md w-1/3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="border px-3 py-2 rounded-md"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Batteries">Batteries</option>
        <option value="Brakes">Brakes</option>
      </select>
    </div>
  );
};

export default SearchFilter;
