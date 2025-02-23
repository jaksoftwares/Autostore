import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaCar } from "react-icons/fa";

export default function HomePage() {
    return (
            <main className="bg-gray-100 w-full overflow-x-hidden">
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
            <section className="py-12 bg-white text-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
                    <div className="flex flex-col items-center">
                        <FaShippingFast className="text-red-600 text-4xl" />
                        <h3 className="text-lg font-semibold mt-2">Fast Shipping</h3>
                        <p className="text-sm text-gray-600">Get your parts delivered quickly and securely.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHeadset className="text-red-600 text-4xl" />
                        <h3 className="text-lg font-semibold mt-2">24/7 Support</h3>
                        <p className="text-sm text-gray-600">Our team is ready to assist you anytime.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaShieldAlt className="text-red-600 text-4xl" />
                        <h3 className="text-lg font-semibold mt-2">Secure Payments</h3>
                        <p className="text-sm text-gray-600">Safe transactions with trusted gateways.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaCar className="text-red-600 text-4xl" />
                        <h3 className="text-lg font-semibold mt-2">Wide Selection</h3>
                        <p className="text-sm text-gray-600">Thousands of parts for all car models.</p>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-12 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-6">
                    {[
                        { name: "Engine Parts", image: "/product3.png" },
                        { name: "Brakes & Suspension", image: "/product2.png" },
                        { name: "Exterior Accessories", image: "/product4.png" },
                        { name: "Interior Accessories", image: "/product5.png" },
                    ].map((category, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                            <Image 
                                src={category.image} 
                                alt={category.name} 
                                width={300} 
                                height={200} 
                                className="w-full h-32 object-cover rounded-lg mb-4"
                                priority // Loads images faster for better performance
                            />
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products (Trending Items) */}
            <section className="py-12 bg-white text-center">
                <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-6">
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
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                width={300} 
                                height={200} 
                                className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-red-600 font-bold">{product.price}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <Link href="/shop" className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition">
                        View All Products
                    </Link>
                </div>
            </section>

            {/* Customer Testimonials */}
            <section className="py-12 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                <div className="max-w-4xl mx-auto mt-6 px-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <p className="text-gray-700 italic">
                            `AutoStore has the best selection of auto parts! Their customer service is amazing, and my order arrived quickly!`
                        </p>
                        <p className="text-red-600 font-semibold mt-4">- John Doe</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md mt-4">
                        <p className="text-gray-700 italic">
                            `Great experience shopping at AutoStore. The quality of the parts exceeded my expectations!`
                        </p>
                        <p className="text-red-600 font-semibold mt-4">- Sarah Williams</p>
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-12 bg-white text-center">
                <h2 className="text-3xl font-bold text-gray-900">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-700 mt-2">
                    Stay updated with the latest deals and offers on auto parts.
                </p>
                <div className="mt-6 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <button className="px-6 py-2 bg-red-600 text-white rounded-r-lg font-semibold hover:bg-red-700 transition">
                        Subscribe
                    </button>
                </div>
            </section>
        </main>
    );
}
