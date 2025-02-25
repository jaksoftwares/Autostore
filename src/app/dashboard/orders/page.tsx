"use client";

import { useState } from "react";
import OrderTable from "./OrderTable";

const sampleOrders = [
  { id: 101, customer: "John Doe", total: 250, status: "Pending", date: "2025-02-23" },
  { id: 102, customer: "Jane Smith", total: 120, status: "Shipped", date: "2025-02-22" },
  { id: 103, customer: "Mike Johnson", total: 80, status: "Delivered", date: "2025-02-21" },
];

const OrdersPage = () => {
   
  const [orders] = useState(sampleOrders);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
