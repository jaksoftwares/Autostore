"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaCar } from "react-icons/fa";
import Sidebar from "@/components/home/Sidebar";

export default function HomePage() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
            <main className="bg-gray-100 w-full overflow-x-hidden">
                    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            {/* Hero Section */}
            <section className="w-full h-[500px] flex flex-col items-center justify-center text-center bg-cover bg-center text-white px-6 relative"style={{ backgroundImage: "url('/bg1.png')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl w-full">
                <h1 className="text-5xl font-extrabold text-white">Welcome to AutoStore</h1>
                <p className="text-lg mt-4">
                    Your #1 Marketplace for Auto Parts. Find quality spare parts, accessories, and car essentials at the best prices.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link href="/shop"className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition">Shop Now</Link>
                    <Link href="/contact" className="px-6 py-3 border border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition" > Contact Us </Link>
                </div>
                </div>
            </section>

            {/* Benefits Section */}
            {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {[
            {
              icon: <FaShippingFast className="text-red-600 text-5xl" />,
              title: "Fast Shipping",
              description: "Get your parts delivered quickly and securely.",
            },
            {
              icon: <FaHeadset className="text-red-600 text-5xl" />,
              title: "24/7 Support",
              description: "Our team is ready to assist you anytime.",
            },
            {
              icon: <FaShieldAlt className="text-red-600 text-5xl" />,
              title: "Secure Payments",
              description: "Safe transactions with trusted gateways.",
            },
            {
              icon: <FaCar className="text-red-600 text-5xl" />,
              title: "Wide Selection",
              description: "Thousands of parts for all car models.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { name: "Engine Parts", image: "/product3.png" },
            { name: "Brakes & Suspension", image: "/product2.png" },
            { name: "Exterior Accessories", image: "/product4.png" },
            { name: "Interior Accessories", image: "/product5.png" },
          ].map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
                priority
              />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products (Trending Items) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Trending Products</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { name: "Car Battery", price: "$150", image: "/product6.png" },
            { name: "Brake Pads", price: "$50", image: "/product7.png" },
            { name: "Alloy Wheels", price: "$200", image: "/product1.png" },
            { name: "LED Headlights", price: "$120", image: "/product2.png" },
            { name: "Oil Filter", price: "$30", image: "/product3.png" },
            { name: "Car Floor Mats", price: "$40", image: "/product4.png" },
            { name: "Air Filter", price: "$25", image: "/product5.png" },
            { name: "Steering Cover", price: "$35", image: "/product6.png" },
          ].map((product, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-red-600 font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/shop"
            className="px-8 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {[
            {
              quote: `AutoStore has the best selection of auto parts! Their customer service is amazing, and my order arrived quickly!`,
              author: "John Doe",
            },
            {
              quote: `Great experience shopping at AutoStore. The quality of the parts exceeded my expectations!`,
              author: "Sarah Williams",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <p className="text-gray-700 italic text-lg">`{testimonial.quote}`</p>
              <p className="text-red-600 font-semibold mt-4">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay updated with the latest deals and offers on auto parts.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-400 w-64 md:w-96"
          />
          <button className="px-8 py-3 bg-red-600 text-white rounded-r-lg font-semibold hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
      </section>
        </main>
    );
}
