"use client";
import Image from "next/image";
import Link from "next/link";

export default function SellOnAutoStore() {
  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/sell-hero.jpg" 
          alt="Sell on AutoStore" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Start Selling on AutoStore Today!</h1>
          <p className="mt-4 text-lg">Reach thousands of customers and grow your business effortlessly.</p>
          <Link href="/register">
            <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* 📌 Why Sell on AutoStore? */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Why Sell on AutoStore?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">🚀 Reach More Customers</h3>
            <p className="mt-2 text-gray-700">Expand your market by showcasing your products to thousands of buyers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">💰 Low Selling Fees</h3>
            <p className="mt-2 text-gray-700">Enjoy competitive commission rates and affordable listing fees.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">📦 Hassle-Free Logistics</h3>
            <p className="mt-2 text-gray-700">Use our integrated shipping solutions to fulfill orders with ease.</p>
          </div>
        </div>
      </section>

      {/* 🛠 How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">📋 1. Register</h3>
              <p className="mt-2 text-gray-700">Sign up for a seller account and verify your business details.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">📸 2. List Your Products</h3>
              <p className="mt-2 text-gray-700">Upload product details, pricing, and images.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">🛒 3. Start Selling</h3>
              <p className="mt-2 text-gray-700">Customers browse, order, and make payments via AutoStore.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">🚚 4. Fulfill Orders</h3>
              <p className="mt-2 text-gray-700">Ship products and get paid securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔧 Vendor Features & Tools */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Vendor Features & Tools</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">📊 Sales Dashboard</h3>
            <p className="mt-2 text-gray-700">Track orders, sales, and customer trends.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">💬 Customer Engagement</h3>
            <p className="mt-2 text-gray-700">Manage inquiries and improve customer relationships.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">🔄 Automated Payouts</h3>
            <p className="mt-2 text-gray-700">Receive payments directly to your preferred bank or mobile wallet.</p>
          </div>
        </div>
      </section>

      {/* 💵 Pricing & Fees */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Pricing & Fees</h2>
          <p className="mt-4 text-lg">AutoStore offers transparent and affordable pricing for all sellers.</p>
          <div className="mt-8">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4">Plan</th>
                  <th className="py-3 px-4">Monthly Fee</th>
                  <th className="py-3 px-4">Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4">Basic Seller</td>
                  <td className="py-3 px-4">KSH 1,000</td>
                  <td className="py-3 px-4">5%</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Premium Seller</td>
                  <td className="py-3 px-4">KSH 3,000</td>
                  <td className="py-3 px-4">3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔥 Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Start Selling?</h2>
        <p className="mt-4 text-lg">Join AutoStore today and grow your business.</p>
        <Link href="/auth/register">
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
            Become a Seller
          </button>
        </Link>
      </section>
    </div>
  );
}
