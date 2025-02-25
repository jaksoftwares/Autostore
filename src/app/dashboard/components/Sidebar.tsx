"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiBox, FiList, FiShoppingCart, FiUsers, FiBarChart2, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <FiHome /> },
    { href: "/dashboard/products", label: "Products", icon: <FiBox /> },
    { href: "/dashboard/categories", label: "Categories", icon: <FiList /> },
    { href: "/dashboard/orders", label: "Orders", icon: <FiShoppingCart /> },
    { href: "/dashboard/users", label: "Users", icon: <FiUsers /> },
    { href: "/dashboard/reports", label: "Reports", icon: <FiBarChart2 /> },
    { href: "/dashboard/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside
      className={`h-screen bg-gray-900 text-white transition-all duration-300 fixed ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col items-center md:items-start p-5`}
    >
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="mb-6 text-white focus:outline-none flex items-center self-start">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Title */}
      {isOpen && <h1 className="text-xl font-bold mb-6 w-full text-left">Admin Dashboard</h1>}

      {/* Navigation Links */}
      <nav className="w-full">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center space-x-2 py-3 px-4 rounded-md transition ${
              pathname === link.href ? "bg-blue-500" : "hover:bg-gray-700"
            } ${isOpen ? "justify-start" : "justify-center"}`}
          >
            <span className="text-lg">{link.icon}</span>
            {isOpen && <span className="whitespace-nowrap">{link.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;