"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import OrderStatusUpdater from "./OrderStatusUpdater";
import OrderTimeline from "./OrderTimeline";
import ShippingTracker from "./ShippingTracker";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customer: {
    name: string;
    email: string;
    address: string;
  };
  items: OrderItem[];
  total: number;
  status: string;
  shippingLocation: string;
  date: string;
}

const OrderDetailsPage = () => {
  const router = useRouter();
  const { orderId } = useParams(); // Get orderId from the URL
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching order details from backend
    const fetchOrder = async () => {
      try {
        // Dummy data (Replace with actual API call)
        const fetchedOrder: Order = {
          id: Number(orderId),
          customer: {
            name: "Sophia Martinez",
            email: "sophia@example.com",
            address: "123 Main St, Los Angeles, CA",
          },
          items: [
            { name: "Car Battery", quantity: 1, price: 200 },
            { name: "Brake Pads", quantity: 2, price: 100 },
          ],
          total: 400,
          status: "Pending",
          shippingLocation: "Warehouse",
          date: "2025-02-23",
        };

        setOrder(fetchedOrder);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  // Function to update order status
  const updateStatus = (newStatus: string) => {
    setOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
  };

  // Function to update shipping location
  const updateShippingLocation = (newLocation: string) => {
    setOrder((prev) => (prev ? { ...prev, shippingLocation: newLocation } : null));
  };

  if (loading) return <p className="text-center">Loading order details...</p>;
  if (!order) return <p className="text-center text-red-500">Order not found.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button onClick={() => router.back()} className="mb-4 text-blue-500">
        ← Back to Orders
      </button>

      <h2 className="text-2xl font-bold mb-4">📦 Order #{order.id}</h2>

      {/* Customer Details */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">👤 Customer Info</h3>
        <p><strong>Name:</strong> {order.customer.name}</p>
        <p><strong>Email:</strong> {order.customer.email}</p>
        <p><strong>Address:</strong> {order.customer.address}</p>
      </div>

      {/* Order Items */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold">🛒 Order Items</h3>
        <ul className="list-disc pl-5">
          {order.items.map((item, index) => (
            <li key={index}>{item.name} - {item.quantity} x ${item.price}</li>
          ))}
        </ul>
        <p className="font-bold mt-2">Total: ${order.total}</p>
      </div>

      {/* Order Status Updater */}
      <OrderStatusUpdater currentStatus={order.status} onUpdate={updateStatus} />

      {/* Order Timeline */}
      <OrderTimeline currentStatus={order.status} />

      {/* Shipping Tracker */}
      <ShippingTracker location={order.shippingLocation} onUpdate={updateShippingLocation} />
    </div>
  );
};

export default OrderDetailsPage;
