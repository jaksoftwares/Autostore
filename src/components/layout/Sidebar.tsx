"use client";

import { useState } from "react";
import Link from "next/link";
import { FiX, FiMenu, FiShoppingCart, FiUser, FiHeart, FiBox, FiSettings } from "react-icons/fi";
import { FaCar, FaFilter, FaTags } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-50 p-2 bg-red-600 text-white rounded-md md:hidden"
      >
        {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:w-72 z-40`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
          <h2 className="text-xl font-bold text-red-600">AutoStore</h2>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 px-4 space-y-4">
          <Link href="/shop" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FaCar /> <span>All Products</span>
          </Link>
          <Link href="/categories" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FaTags /> <span>Categories</span>
          </Link>
          <Link href="/deals" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FaFilter /> <span>Deals & Offers</span>
          </Link>
          <Link href="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FiHeart /> <span>Wishlist</span>
          </Link>
          <Link href="/orders" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FiBox /> <span>My Orders</span>
          </Link>
          <Link href="/account" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FiUser /> <span>My Account</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FiSettings /> <span>Settings</span>
          </Link>
          <Link href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
            <FiShoppingCart /> <span>Shopping Cart</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile view */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
