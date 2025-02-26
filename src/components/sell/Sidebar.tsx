"use client";

import { FaTimes } from "react-icons/fa";
// import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50 mt-20`}
    >
      <div className="p-6">
        {/* Close Button (Mobile Only) */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-red-600"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Sidebar Header */}
        <h2 className="text-xl font-bold mb-6">Sell on AutoStore</h2>

        {/* Seller Dashboard Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">📊 Seller Dashboard</h3>
          <div className="space-y-4">
            <Link
              href="/seller/dashboard"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Overview
            </Link>
            <Link
              href="/seller/performance"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Performance
            </Link>
            <Link
              href="/seller/earnings"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Earnings
            </Link>
          </div>
        </div>

        {/* Listings Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">📦 Listings</h3>
          <div className="space-y-4">
            <Link
              href="/seller/listings"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Manage Listings
            </Link>
            <Link
              href="/seller/listings/new"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Add New Listing
            </Link>
            <Link
              href="/seller/listings/drafts"
              className="block text-sm text-gray-700 hover:text-red-600"
            >
              Drafts
            </Link>
          </div>
        </div>

        {/* Sales Analytics Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">📈 Sales Analytics</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Total Sales</p>
              <p className="text-sm text-red-600">$5,430</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Orders This Month</p>
              <p className="text-sm text-red-600">42</p>
            </div>
          </div>
        </div>

        {/* Promotions Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">🔥 Seller Promotions</h3>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Boost Your Listings!</p>
              <Link
                href="/seller/promotions"
                className="text-red-600 text-sm hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Discount Campaigns</p>
              <Link
                href="/seller/promotions"
                className="text-red-600 text-sm hover:underline"
              >
                Create Now
              </Link>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">🛠️ Support</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">Need Help?</p>
            <Link
              href="/seller/support"
              className="text-red-600 text-sm hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;