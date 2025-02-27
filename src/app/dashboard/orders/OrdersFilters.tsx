"use client";

import { useState } from "react";

interface Props {
  onFilter: (searchTerm: string, status: string) => void;
}

const OrderFilters: React.FC<Props> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");

  const handleSearch = () => {
    onFilter(searchTerm, status);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      {/* Search by Order ID or Customer */}
      <input
        type="text"
        placeholder="🔍 Search by Order ID or Customer"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/3"
      />

      {/* Filter by Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/3"
      >
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Canceled">Canceled</option>
      </select>

      {/* Apply Filters Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default OrderFilters;
