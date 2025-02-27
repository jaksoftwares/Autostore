"use client";

import { useEffect, useState } from "react";
import { FaBoxOpen, FaUsers, FaDollarSign, FaShoppingCart, FaStore, FaStar } from "react-icons/fa";

const OverviewStats = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    totalVendors: 0,
    avgRating: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call (Replace with actual API)
    setTimeout(() => {
      setStats({
        totalProducts: 1245,
        activeOrders: 267,
        totalUsers: 3240,
        totalRevenue: 89250,
        totalVendors: 78,
        avgRating: 4.5,
      });
      setLoading(false);
    }, 1500);
  }, []);

  const statItems = [
    { label: "Total Products", value: stats.totalProducts, icon: <FaBoxOpen />, bg: "bg-blue-500" },
    { label: "Active Orders", value: stats.activeOrders, icon: <FaShoppingCart />, bg: "bg-green-500" },
    { label: "Total Users", value: stats.totalUsers, icon: <FaUsers />, bg: "bg-purple-500" },
    { label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, icon: <FaDollarSign />, bg: "bg-yellow-500" },
    { label: "Total Vendors", value: stats.totalVendors, icon: <FaStore />, bg: "bg-red-500" },
    { label: "Avg Rating", value: `${stats.avgRating} ⭐`, icon: <FaStar />, bg: "bg-indigo-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
        >
          <div className={`${item.bg} text-white p-4 rounded-lg text-2xl`}>{item.icon}</div>
          <div className="ml-4">
            <p className="text-gray-600 text-sm font-semibold">{item.label}</p>
            {loading ? (
              <p className="text-lg font-bold text-gray-800 animate-pulse">Loading...</p>
            ) : (
              <p className="text-lg font-bold text-gray-900">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewStats;
