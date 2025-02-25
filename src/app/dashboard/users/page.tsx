"use client";

import { useState } from "react";
import UserTable from "./UserTable";

// Define the User type (should match the one in UserTable)
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive"; // Explicitly define possible status values
}

// Explicitly type the sampleUsers array
const sampleUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seller", status: "Active" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Customer", status: "Inactive" },
];

const UsersPage = () => {
  const [users] = useState(sampleUsers);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;