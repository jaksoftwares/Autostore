"use client";  // ✅ Important for state management

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All Products",
  "Engine Parts",
  "Brakes & Suspension",
  "Exterior Accessories",
  "Interior Accessories",
  "Lighting & Electronics",
  "Tires & Wheels",
  "Fluids & Maintenance",
  "Performance Parts",
];

const products = [
  { id: 1, name: "Car Battery", price: "$150", category: "Engine Parts", rating: 4.5, image: "/product6.png", reviews: 34, description: "Reliable, long-lasting power source for your car." },
  { id: 2, name: "Brake Pads", price: "$50", category: "Brakes & Suspension", rating: 4.2, image: "/product7.png", reviews: 21, description: "Durable brake pads ensuring smooth stopping power." },
  { id: 3, name: "Alloy Wheels", price: "$200", category: "Tires & Wheels", rating: 4.8, image: "/product1.png", reviews: 56, description: "Stylish, high-quality alloy wheels for your vehicle." },
  { id: 4, name: "LED Headlights", price: "$120", category: "Lighting & Electronics", rating: 4.7, image: "/product2.png", reviews: 42, description: "Super bright LED headlights for night driving safety." },
  { id: 5, name: "Oil Filter", price: "$30", category: "Fluids & Maintenance", rating: 4.1, image: "/product3.png", reviews: 18, description: "High-performance oil filter for extended engine life." },
  { id: 6, name: "Car Floor Mats", price: "$40", category: "Interior Accessories", rating: 4.6, image: "/product4.png", reviews: 27, description: "Durable, waterproof, anti-slip mats for all cars." },
  { id: 7, name: "Air Filter", price: "$25", category: "Fluids & Maintenance", rating: 4.0, image: "/product5.png", reviews: 15, description: "Premium air filter for cleaner, more efficient airflow." },
  { id: 8, name: "Steering Cover", price: "$35", category: "Interior Accessories", rating: 4.4, image: "/product6.png", reviews: 23, description: "Stylish, anti-slip steering wheel cover for comfort." },
  { id: 9, name: "Exhaust System", price: "$350", category: "Performance Parts", rating: 4.9, image: "/product1.png", reviews: 78, description: "Enhance performance with a high-quality exhaust system." },
  { id: 10, name: "LED Fog Lights", price: "$80", category: "Lighting & Electronics", rating: 4.6, image: "/product2.png", reviews: 31, description: "High-visibility fog lights for better safety." },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
      {/* Sidebar with Filters */}
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

      {/* Products Grid */}
      <div className="md:col-span-3">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Shop Our Products</h1>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products available in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
                <Link href={`/product/${product.id}`}>
                  <div className="relative w-full h-48 cursor-pointer">
                    <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                  </div>
                </Link>
                <div className="mt-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-700 text-sm mt-1">{product.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-bold text-red-600">{product.price}</span>
                    <div className="ml-auto flex items-center">
                      <span className="text-yellow-500 mr-1">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="text-gray-600 text-sm">({product.reviews})</span>
                    </div>
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
