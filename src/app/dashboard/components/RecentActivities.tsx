"use client";

import { JSX, useEffect, useState } from "react";
import { FaShoppingCart, FaUserPlus, FaBoxOpen, FaEdit, FaStore, FaCheckCircle } from "react-icons/fa";

// Define a type for activities
type Activity = {
  id: number;
  type: "order" | "user" | "product" | "stock" | "vendor" | "admin";
  message: string;
  time: string;
  icon: JSX.Element;
  color: string;
};

const RecentActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulated API call (Replace with real API)
    setTimeout(() => {
      setActivities([
        { id: 1, type: "order", message: "New order placed by John Doe", time: "2 mins ago", icon: <FaShoppingCart />, color: "bg-blue-500" },
        { id: 2, type: "user", message: "New user registered: Sarah Smith", time: "10 mins ago", icon: <FaUserPlus />, color: "bg-green-500" },
        { id: 3, type: "product", message: "New product added: Tesla Model S Battery", time: "30 mins ago", icon: <FaBoxOpen />, color: "bg-yellow-500" },
        { id: 4, type: "stock", message: "Stock updated: Brake Pads (+50 units)", time: "1 hour ago", icon: <FaEdit />, color: "bg-purple-500" },
        { id: 5, type: "vendor", message: "New vendor approved: AutoParts Ltd", time: "3 hours ago", icon: <FaStore />, color: "bg-red-500" },
        { id: 6, type: "admin", message: "Admin updated discount on tires", time: "5 hours ago", icon: <FaCheckCircle />, color: "bg-indigo-500" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">📌 Recent Activities</h2>
      
      <div className="h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {loading ? (
          <p className="text-gray-600 animate-pulse">Loading activities...</p>
        ) : (
          activities.map((activity: Activity) => (
            <div key={activity.id} className="flex items-center p-3 border-b last:border-none hover:bg-gray-100 transition">
              <div className={`${activity.color} text-white p-3 rounded-lg text-lg`}>{activity.icon}</div>
              <div className="ml-4">
                <p className="text-gray-800 text-sm">{activity.message}</p>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
