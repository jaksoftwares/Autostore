"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All Deals",
  "Engine Parts",
  "Brakes & Suspension",
  "Exterior Accessories",
  "Interior Accessories",
  "Lighting & Electronics",
  "Tires & Wheels",
  "Fluids & Maintenance",
  "Performance Parts",
];

const deals = [
  { id: 1, name: "Car Battery", oldPrice: "$200", newPrice: "$150", category: "Engine Parts", discount: "25%", image: "/product6.png", reviews: 34, rating: 4.5, expires: "2025-02-28T23:59:59" },
  { id: 2, name: "Brake Pads", oldPrice: "$70", newPrice: "$50", category: "Brakes & Suspension", discount: "28%", image: "/product7.png", reviews: 21, rating: 4.2, expires: "2025-03-01T23:59:59" },
  { id: 3, name: "LED Headlights", oldPrice: "$150", newPrice: "$120", category: "Lighting & Electronics", discount: "20%", image: "/product2.png", reviews: 42, rating: 4.7, expires: "2025-03-05T23:59:59" },
  { id: 4, name: "Oil Filter", oldPrice: "$40", newPrice: "$30", category: "Fluids & Maintenance", discount: "25%", image: "/product3.png", reviews: 18, rating: 4.1, expires: "2025-02-29T23:59:59" },
  { id: 5, name: "Alloy Wheels", oldPrice: "$250", newPrice: "$200", category: "Tires & Wheels", discount: "20%", image: "/product1.png", reviews: 56, rating: 4.8, expires: "2025-03-10T23:59:59" },
  { id: 6, name: "Car Floor Mats", oldPrice: "$50", newPrice: "$40", category: "Interior Accessories", discount: "20%", image: "/product4.png", reviews: 27, rating: 4.6, expires: "2025-03-03T23:59:59" },
];

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [countdownTimers, setCountdownTimers] = useState({});
  const [countdownTimers, setCountdownTimers] = useState<Record<number, string>>({});

  // Function to update countdown timers
  useEffect(() => {
    if (!deals || deals.length === 0) return; // ✅ Prevent running when there are no deals
  
    const updateTimers = () => {
      const newTimers: Record<number, string> = {};
  
      deals.forEach((deal) => {
        const now = Date.now();
        const expiryTime = new Date(deal.expires).getTime();
        const timeLeft = expiryTime - now;
  
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
          newTimers[deal.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          newTimers[deal.id] = "Expired";
        }
      });
  
      setCountdownTimers(newTimers);
    };
  
    // Run the timer update every second
    const interval = setInterval(updateTimers, 1000);
  
    // Initial update
    updateTimers();
  
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(deals)]); // ✅ Stable dependency, prevents Next.js warnin


  const filteredDeals =
    selectedCategory === "all"
      ? deals
      : deals.filter((deal) => deal.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
      {/* Sidebar with Categories */}
      <aside className="bg-white shadow-lg rounded-lg p-6 md:col-span-1">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-lg ${selectedCategory === cat.toLowerCase() ? "bg-red-600 text-white" : "hover:bg-gray-200 text-gray-800"}`}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Deals Section */}
      <div className="md:col-span-3">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Exclusive Deals & Discounts</h1>

        {filteredDeals.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No deals available in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDeals.map((deal) => (
              <div key={deal.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 relative">
                <Link href={`/product/${deal.id}`}>
                  <div className="relative w-full h-48 cursor-pointer">
                    <Image src={deal.image} alt={deal.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                  </div>
                </Link>
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-lg text-sm">
                  -{deal.discount}
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold">{deal.name}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500 line-through">{deal.oldPrice}</span>
                    <span className="text-lg font-bold text-red-600 ml-2">{deal.newPrice}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">
                      {"★".repeat(Math.floor(deal.rating))}
                      {"☆".repeat(5 - Math.floor(deal.rating))}
                    </span>
                    <span className="text-gray-600 text-sm">({deal.reviews})</span>
                  </div>
                  <div className="mt-3">
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${countdownTimers[deal.id] === "Expired" ? "bg-gray-300 text-gray-600" : "bg-red-200 text-red-700"}`}>
                      {countdownTimers[deal.id]}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Add to Cart</button>
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Wishlist</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
