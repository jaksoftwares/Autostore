"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Define the params type
interface OrderDetailsPageProps {
  params: {
    id: string;
  };
}

// Define the Item type
interface Item {
  name: string;
  quantity: number;
  price: number;
}

// Define the Order type
interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
  date: string;
  items: Item[];
}

const OrderDetailsPage = ({ params }: OrderDetailsPageProps) => {
  const router = useRouter();
  const { id } = params;

  const [order, setOrder] = useState<Order>({
    id: id,
    customer: "John Doe",
    total: 250,
    status: "Pending",
    date: "2025-02-23",
    items: [
      { name: "Engine Oil", quantity: 2, price: 50 },
      { name: "Brake Pads", quantity: 1, price: 30 },
    ],
  });

  const updateStatus = (newStatus: string) => {
    setOrder({ ...order, status: newStatus });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <div className="bg-white p-6 shadow-md rounded-md">
        <p>
          <strong>Order ID:</strong> {order.id}
        </p>
        <p>
          <strong>Customer:</strong> {order.customer}
        </p>
        <p>
          <strong>Total:</strong> ${order.total}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Date:</strong> {order.date}
        </p>

        <h3 className="text-lg font-bold mt-4">Items:</h3>
        <ul className="list-disc pl-6">
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <button
            onClick={() => updateStatus("Shipped")}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Mark as Shipped
          </button>
          <button
            onClick={() => updateStatus("Delivered")}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Mark as Delivered
          </button>
          <button
            onClick={() => router.push("/dashboard/orders")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back to Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;