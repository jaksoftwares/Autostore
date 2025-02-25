"use client";

import { useState } from "react";

interface Role {
  role: string;
  permissions: string;
}

const RoleManagement = () => {
  const [roles, setRoles] = useState<Role[]>([
    { role: "Super Admin", permissions: "All Access" },
    { role: "Manager", permissions: "Manage Products & Orders" },
    { role: "Support", permissions: "Respond to User Queries" },
  ]);
  const [newRole, setNewRole] = useState("");
  const [newPermissions, setNewPermissions] = useState("");

  const handleAddRole = () => {
    if (newRole.trim() && newPermissions.trim()) {
      setRoles([...roles, { role: newRole, permissions: newPermissions }]);
      setNewRole("");
      setNewPermissions("");
    }
  };

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

      <div className="space-y-4">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Enter a new role"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={newPermissions}
          onChange={(e) => setNewPermissions(e.target.value)}
          placeholder="Enter permissions"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddRole}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Role
        </button>
      </div>
    </div>
  );
};

export default RoleManagement;