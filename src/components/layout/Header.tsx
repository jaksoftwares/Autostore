"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-red-600 cursor-pointer">
            AutoStore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="hover:text-red-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-red-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-600">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="hidden lg:block px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* User & Cart Icons */}
          <Link href="/account">
            <FiUser className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 flex flex-col items-center space-y-4 py-4">
          <Link href="/shop" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/about" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/blog" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
