"use client";

import React from "react";
import Link from "next/link";

interface Order {
  id: number;
  customer: string;
  total: number;
  status: string;
  date: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-200 text-yellow-800";
    case "Shipped":
      return "bg-purple-200 text-purple-800";
    case "Delivered":
      return "bg-green-200 text-green-800";
    case "Processing":
      return "bg-blue-200 text-blue-800";
    case "Canceled":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const OrderTable: React.FC<{ orders: Order[]; scrollable?: boolean }> = ({ orders, scrollable }) => {
  return (
    <div className={`overflow-y-auto ${scrollable ? "max-h-64" : ""}`}>
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Total ($)</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="py-2 px-4">{order.id}</td>
              <td className="py-2 px-4">{order.customer}</td>
              <td className="py-2 px-4">${order.total}</td>
              <td className="py-2 px-4">
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-4">{order.date}</td>
              <td className="py-2 px-4">
                <Link  href={`/dashboard/orders/${order.id}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
