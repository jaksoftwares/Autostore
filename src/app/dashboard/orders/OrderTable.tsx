"use client";

import Link from "next/link";

// Define the Order type
interface Order {
  id: string | number;
  customer: string;
  total: number;
  status: string;
  date: string;
}

// Define the props for the OrderTable component
interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Order ID</th>
          <th className="p-3 text-left">Customer</th>
          <th className="p-3 text-left">Total</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-b">
            <td className="p-3">{order.id}</td>
            <td className="p-3">{order.customer}</td>
            <td className="p-3">${order.total}</td>
            <td className="p-3">{order.status}</td>
            <td className="p-3">{order.date}</td>
            <td className="p-3">
              <Link
                href={`/dashboard/orders/view/${order.id}`}
                className="text-blue-500 mr-2"
              >
                View
              </Link>
              <button className="text-red-500">Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;