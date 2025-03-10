"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaChevronRight, FaClock, FaTag } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const DealsSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timer, setTimer] = useState(3600); // Countdown timer for flash deals (1 hour)

  // Automatically rotate deals every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const deals = [
    {
      id: 1,
      name: "Alloy Wheels",
      price: "$200",
      image: "/product1.png",
      description: "Durable and stylish alloy wheels to upgrade your ride.",
    },
    {
      id: 2,
      name: "LED Headlights",
      price: "$120",
      image: "/product2.png",
      description: "Bright and energy-efficient LED headlights for clear vision.",
    },
    {
      id: 3,
      name: "Car Engine Oil",
      price: "$50",
      image: "/product3.png",
      description: "Premium engine oil for better performance and protection.",
    },
    {
      id: 4,
      name: "Brake Pads Set",
      price: "$80",
      image: "/product4.png",
      description: "High-quality brake pads for enhanced safety and durability.",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50 mt-15 h-screen overflow-y-auto p-4 pt-1 border-l border-gray-300`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-red-600">🔥 Hot Deals</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-red-600"
        >
          <FaTimes className="text-2xl" />
        </button>
      </div>

      {/* 🔥 Flash Deal Section */}
      <div className="bg-red-100 p-4 rounded-lg shadow-md mb-6 relative">
        <h3 className="text-lg font-semibold text-red-700 flex items-center">
          <FaTag className="mr-2" /> Flash Deal
        </h3>
        <p className="text-sm text-gray-700">{deals[currentDeal].description}</p>
        <p className="text-xl font-bold text-red-600">{deals[currentDeal].price}</p>
        <div className="flex justify-between items-center mt-3">
          <Image
            src={deals[currentDeal].image}
            alt={deals[currentDeal].name}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <Link href="/deals" className="text-red-600 font-semibold hover:underline">
            View Deal <FaChevronRight />
          </Link>
        </div>
        {/* Countdown Timer */}
        <div className="absolute top-2 right-2 text-sm text-white bg-red-600 px-3 py-1 rounded-lg flex items-center">
          <FaClock className="mr-1" /> {formatTime(timer)}
        </div>
      </div>

      {/* ⭐ Best-Selling Deals */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">🌟 Best-Selling Deals</h3>
        <div className="space-y-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-gray-100 p-3 rounded-lg flex items-center space-x-4 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={deal.image}
                alt={deal.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold">{deal.name}</p>
                <p className="text-sm text-red-600">{deal.price}</p>
              </div>
              <Link
                href="/deals"
                className="text-red-600 text-sm flex items-center hover:underline"
              >
                Buy <FaChevronRight className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 Limited-Time Offers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-red-600 mb-3">🎯 Limited-Time Offers</h3>
        <div className="space-y-3">
          <div className="bg-yellow-100 p-3 rounded-lg shadow-md text-center">
            <p className="text-sm font-semibold text-gray-800">💥 Buy 2 Tires, Get 1 Free!</p>
            <Link href="/offers" className="text-red-600 text-sm hover:underline">
              Claim Now
            </Link>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg shadow-md text-center">
            <p className="text-sm font-semibold text-gray-800">🚗 50% Off on Car Batteries!</p>
            <Link href="/offers" className="text-red-600 text-sm hover:underline">
              Grab Deal
            </Link>
          </div>
        </div>
      </div>

      {/* 📢 Advertisements */}
      <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md">
        <h3 className="text-lg font-semibold">📢 Special Offer</h3>
        <p className="text-sm text-gray-800">Upgrade your car parts with the best discounts!</p>
        <Link href="/shop" className="text-red-600 text-sm hover:underline mt-2 inline-block">
          Shop Now
        </Link>
      </div>

      {/* Expand Button (if closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-3 py-2 rounded-l-md shadow-lg"
        >
          Deals
        </button>
      )}
    </div>
  );
};

export default DealsSidebar;
