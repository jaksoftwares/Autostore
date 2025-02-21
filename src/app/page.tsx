import React from "react";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
            <h1 className="text-5xl font-bold text-gray-900">Welcome to AutoStore</h1>
            <p className="text-lg text-gray-700 mt-4 text-center">
                Your #1 Marketplace for Auto Parts. Find quality spare parts, accessories, and car essentials at the best prices.
            </p>

            <div className="mt-6 flex space-x-4">
                <a href="/shop" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                    Shop Now
                </a>
                <a href="/contact" className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition">
                    Contact Us
                </a>
            </div>
        </main>
    );
}
