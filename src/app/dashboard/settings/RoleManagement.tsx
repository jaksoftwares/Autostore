"use client";

import { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { role: "Super Admin", permissions: "All Access" },
    { role: "Manager", permissions: "Manage Products & Orders" },
    { role: "Support", permissions: "Respond to User Queries" },
  ]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Admin Roles</h3>
      <ul className="mb-4">
        {roles.map((role, index) => (
          <li key={index} className="p-2 border-b">
            <strong>{role.role}</strong>: {role.permissions}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white p-2 rounded">Add Role</button>
    </div>
  );
};

export default RoleManagement;
