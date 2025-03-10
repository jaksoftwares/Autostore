"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  top-0 fixed z-50 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-bold text-red-600 cursor-pointer">
            AutoStore
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <div className="relative">
            {/* Categories Dropdown */}
            <button
              className="hover:text-red-600 flex items-center gap-1 "
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Categories <FaAngleDown />
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-48">
                <Link href="/categories/car-parts" className="block px-4 py-2 hover:bg-gray-100">
                  Car Parts
                </Link>
                <Link href="/categories/accessories" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </Link>
                <Link href="/categories/tires-wheels" className="block px-4 py-2 hover:bg-gray-100">
                  Tires & Wheels
                </Link>
                <Link href="/categories/engine" className="block px-4 py-2 hover:bg-gray-100">
                  Engine Components
                </Link>
                <Link href="/categories/electronics" className="block px-4 py-2 hover:bg-gray-100">
                  Electronics
                </Link>
              </div>
            )}
          </div>

          <Link href="/shop" className="hover:text-red-600">Shop</Link>
          <Link href="/deals" className="hover:text-red-600">Deals</Link>
          <Link href="/about" className="hover:text-red-600">About</Link>
          <Link href="/contact" className="hover:text-red-600">Contact</Link>
          <Link href="/blog" className="hover:text-red-600">Blog</Link>
          <Link href="/help" className="hover:text-red-600">Help</Link>
          <Link href="/sell" className="hover:text-red-600">Sell on AutoStore</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="hidden lg:block px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          {/* Wishlist */}
          <Link href="/wishlist">
            <FiHeart className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>

          {/* User Account */}
          <Link href="/account">
            <FiUser className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>

          {/* Shopping Cart */}
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
          <Link href="/shop" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/deals" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Deals</Link>
          <Link href="/about" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/blog" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/help" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Help</Link>
          <Link href="/sell" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Sell on AutoStore</Link>
          <Link href="/wishlist" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Wishlist</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
