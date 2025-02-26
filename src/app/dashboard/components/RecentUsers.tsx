"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joined: string;
}

const RecentUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch recent users (Replace this with actual API request)
    const fetchUsers = async () => {
      // Dummy Data - Replace with backend API call
      const data: User[] = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          avatar: "/profile.jpg",
          joined: "2025-02-20",
        },
        {
          id: 2,
          name: "Alice Johnson",
          email: "alice@example.com",
          avatar: "/profile.jpg",
          joined: "2025-02-18",
        },
        {
          id: 3,
          name: "Michael Smith",
          email: "michael@example.com",
          avatar: "/profile.jpg",
          joined: "2025-02-15",
        },
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">🆕 Recent Users</h2>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="flex items-center py-3">
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <p className="ml-auto text-sm text-gray-400">{user.joined}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUsers;
