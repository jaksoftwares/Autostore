"use client";

import React from "react";

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

const OrderStatusBadge: React.FC<{ status: string }> = ({ status }) => {
  return (
    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default OrderStatusBadge;
