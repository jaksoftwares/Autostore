"use client";

import Link from "next/link";

// Define the User type
interface User {
  id: string | number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive"; // Explicitly define possible status values
}

// Define the props for the UserTable component
interface UserTableProps {
  users: User[]; // users is an array of User objects
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">User ID</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Role</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="p-3">{user.id}</td>
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">
              <span
                className={`px-2 py-1 rounded ${
                  user.status === "Active"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="p-3">
              <Link
                href={`/dashboard/users/view/${user.id}`}
                className="text-blue-500 mr-2"
              >
                View
              </Link>
              <button className="text-red-500">Deactivate</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;