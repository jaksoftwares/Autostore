"use client";

import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`  fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-50 mt-20`}>
      <div className="p-6 ">
        {/* Close Button (Mobile Only) */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-red-600"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Sidebar Header */}
        <h2 className="text-xl font-bold mb-6">AutoStore</h2>

        {/* Promotions Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">🔥 Hot Promotions</h3>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Get 20% off on Engine Parts!</p>
              <Link href="/promotions" className="text-red-600 text-sm hover:underline">
                Learn More
              </Link>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm font-semibold">Free Shipping on Orders Over $100</p>
              <Link href="/promotions" className="text-red-600 text-sm hover:underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">⭐ Customer Reviews</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm italic">&quot;Great quality parts and fast delivery!&quot;</p>
              <p className="text-sm text-red-600 font-semibold mt-2">- John Doe</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm italic">&quot;Excellent customer service. Highly recommend!&quot;</p>
              <p className="text-sm text-red-600 font-semibold mt-2">- Sarah Williams</p>
            </div>
          </div>
        </div>

        {/* Featured Deals Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">💡 Featured Deals</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/product1.png"
                alt="Alloy Wheels"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold">Alloy Wheels</p>
                <p className="text-sm text-red-600">$200</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/product2.png"
                alt="LED Headlights"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold">LED Headlights</p>
                <p className="text-sm text-red-600">$120</p>
              </div>
            </div>
          </div>
        </div>

        {/* Adverts Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">📢 Adverts</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm font-semibold">Upgrade Your Car Today!</p>
            <Link href="/shop" className="text-red-600 text-sm hover:underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;