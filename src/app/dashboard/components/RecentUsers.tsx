"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

// Define the User Type
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joined: string;
}

const RecentUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call (Replace with real backend request)
    const fetchUsers = async () => {
      const data: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "/profile.jpg", joined: "2025-02-20" },
        { id: 2, name: "Alice Johnson", email: "alice@example.com", avatar: "/profile.jpg", joined: "2025-02-18" },
        { id: 3, name: "Michael Smith", email: "michael@example.com", avatar: "/profile.jpg", joined: "2025-02-15" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", avatar: "/profile.jpg", joined: "2025-02-10" },
      ];
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">🆕 Recent Users</h2>

      {loading ? (
        <p className="text-gray-600 animate-pulse">Loading recent users...</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="flex items-center py-3">
              {/* User Avatar */}
              <Image src={user.avatar} alt={user.name} width={45} height={45} className="rounded-full" />

              {/* User Info */}
              <div className="ml-4 flex-1">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              {/* Join Date */}
              <p className="text-sm text-gray-400">
                {format(new Date(user.joined), "'Joined' MMM dd, yyyy")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentUsers;
