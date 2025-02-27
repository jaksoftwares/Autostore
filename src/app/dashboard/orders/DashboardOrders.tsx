"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const sampleOrders = [
  { id: 201, customer: "John Doe", total: 250, status: "Pending", date: "2025-02-23" },
  { id: 202, customer: "Jane Smith", total: 120, status: "Shipped", date: "2025-02-22" },
  { id: 203, customer: "Mike Johnson", total: 80, status: "Delivered", date: "2025-02-21" },
  { id: 204, customer: "Sarah Connor", total: 150, status: "Processing", date: "2025-02-20" },
  { id: 205, customer: "Alex Carter", total: 300, status: "Pending", date: "2025-02-19" },
];

const DashboardOrders = () => {
  const router = useRouter();
  const [orders] = useState(sampleOrders);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">📦 Recent Orders</h2>

      {/* Scrollable Order List */}
      <div className="max-h-64 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-2">Order ID</th>
              <th className="text-left p-2">Customer</th>
              <th className="text-left p-2">Total</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Date</th>
              <th className="text-center p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 4).map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="p-2">#{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">${order.total}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      order.status === "Pending" ? "bg-yellow-200 text-yellow-700" :
                      order.status === "Processing" ? "bg-blue-200 text-blue-700" :
                      order.status === "Shipped" ? "bg-purple-200 text-purple-700" :
                      "bg-green-200 text-green-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-2 text-gray-500">{order.date}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => router.push(`/admin/orders/${order.id}`)}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Orders CTA */}
      <div className="mt-4 text-right">
        <button
          onClick={() => router.push("/admin/orders")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          View All Orders →
        </button>
      </div>
    </div>
  );
};

export default DashboardOrders;
