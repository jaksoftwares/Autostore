"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UserDetailsPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const [user, setUser] = useState({
    id: id,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    joined: "2024-05-12",
    orders: [
      { id: 101, total: 250, status: "Pending" },
      { id: 102, total: 120, status: "Shipped" },
    ],
  });

  const updateRole = (newRole) => {
    setUser({ ...user, role: newRole });
  };

  const updateStatus = (newStatus) => {
    setUser({ ...user, status: newStatus });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="bg-white p-6 shadow-md rounded-md">
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Joined:</strong> {user.joined}</p>

        <h3 className="text-lg font-bold mt-4">Orders:</h3>
        <ul className="list-disc pl-6">
          {user.orders.map((order, index) => (
            <li key={index}>
              Order #{order.id} - ${order.total} ({order.status})
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <button onClick={() => updateRole("Seller")} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Make Seller
          </button>
          <button onClick={() => updateRole("Customer")} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
            Make Customer
          </button>
          <button onClick={() => updateStatus("Inactive")} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
            Deactivate
          </button>
          <button onClick={() => router.push("/dashboard/users")} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back to Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
