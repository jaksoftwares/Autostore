"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/about-hero.jpg" 
          alt="About AutoStore" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30" 
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">About AutoStore</h1>
          <p className="mt-4 text-lg">Your Trusted Marketplace for Quality Auto Parts</p>
        </div>
      </section>

      {/* ✅ Who We Are */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        <p className="mt-4 text-gray-700">
          AutoStore is a premium online marketplace connecting vehicle owners with top-quality spare parts and accessories. 
          We simplify the process of finding reliable auto parts by providing a seamless, efficient, and trusted platform.
        </p>
      </section>

      {/* 🎯 Our Mission & Vision */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              To revolutionize the auto parts industry by offering an easy-to-use marketplace where quality meets convenience.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-red-600">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              To become the leading online auto spare parts marketplace, trusted by millions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 Why Choose Us */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose AutoStore?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "Wide Selection", desc: "Access thousands of auto parts and accessories.", icon: "/selection.png" },
            { title: "Trusted Suppliers", desc: "We work with verified vendors only.", icon: "/trust.png" },
            { title: "Secure Payments", desc: "Safe transactions with multiple payment options.", icon: "/secure.png" },
            { title: "Fast Delivery", desc: "Quick and reliable shipping options available.", icon: "/fast-delivery.png" },
            { title: "24/7 Support", desc: "Dedicated customer service for your needs.", icon: "/support.png" },
            { title: "Best Prices", desc: "Competitive pricing with amazing deals.", icon: "/prices.png" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <Image src={item.icon} alt={item.title} width={50} height={50} className="mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Customer Testimonials */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "John Doe", review: "AutoStore made finding quality parts so easy. Highly recommended!", image: "/user1.jpg" },
            { name: "Sarah Williams", review: "Fast shipping and excellent customer support!", image: "/user2.jpg" },
            { name: "James Smith", review: "Great selection and affordable prices. Will shop again!", image: "/user3.jpg" },
          ].map((customer, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
              <Image src={customer.image} alt={customer.name} width={80} height={80} className="rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{customer.name}</h3>
              <p className="text-gray-700 mt-2">{customer.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA Section */}
      <section className="text-center bg-red-600 text-white py-16">
        <h2 className="text-3xl font-bold">Get the Best Auto Parts Now</h2>
        <p className="mt-4 text-lg">Find top-quality auto spare parts and accessories at unbeatable prices.</p>
        <Link href="/shop" className="mt-6 inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </Link>
      </section>
    </div>
  );
}
