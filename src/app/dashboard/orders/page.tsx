"use client";

import { useState } from "react";
import OrderTable from "./OrderTable";
import OrderFilters from "./OrdersFilters";

const allOrders = [
  { id: 106, customer: "Sophia Martinez", total: 400, status: "Pending", date: "2025-02-23" },
  { id: 105, customer: "David Wilson", total: 60, status: "Canceled", date: "2025-02-22" },
  { id: 104, customer: "Emily Brown", total: 300, status: "Processing", date: "2025-02-21" },
  { id: 103, customer: "Mike Johnson", total: 80, status: "Delivered", date: "2025-02-20" },
  { id: 102, customer: "Jane Smith", total: 120, status: "Shipped", date: "2025-02-19" },
  { id: 101, customer: "John Doe", total: 250, status: "Pending", date: "2025-02-18" },
];

const OrdersPage = () => {
  const [filteredOrders, setFilteredOrders] = useState(allOrders);

  // Function to handle filtering
  const handleFilter = (searchTerm: string, status: string) => {
    let filtered = allOrders;

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toString().includes(searchTerm)
      );
    }

    if (status && status !== "All") {
      filtered = filtered.filter(order => order.status === status);
    }

    setFilteredOrders(filtered);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📦 All Orders</h2>

      {/* Filters Section */}
      <OrderFilters onFilter={handleFilter} />

      {/* Orders Table */}
      <OrderTable orders={filteredOrders} />
    </div>
  );
};

export default OrdersPage;
