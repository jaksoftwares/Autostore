"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "📊 Dashboard" },
    { href: "/dashboard/products", label: "🛒 Products" },
    { href: "/dashboard/categories", label: "📂 Categories" },
    { href: "/dashboard/orders", label: "📦 Orders" },
    { href: "/dashboard/users", label: "👥 Users" },
    { href: "/dashboard/reports", label: "📈 Reports" },
    { href: "/dashboard/settings", label: "⚙️ Settings" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <nav>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`block py-2 px-4 rounded ${pathname === link.href ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
