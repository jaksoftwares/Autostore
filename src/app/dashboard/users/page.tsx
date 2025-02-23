"use client";

import { useState } from "react";
import Link from "next/link";
import UserTable from "@/components/dashboard/UserTable";

const sampleUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seller", status: "Active" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Customer", status: "Inactive" },
];

const UsersPage = () => {
  const [users, setUsers] = useState(sampleUsers);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;
