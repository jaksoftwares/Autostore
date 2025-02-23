"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample Blog Data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Maintaining Your Car",
    category: "Car Maintenance",
    image: "/blog1.jpg",
    snippet: "Learn how to keep your car in top shape with these essential maintenance tips...",
    date: "Feb 20, 2025",
  },
  {
    id: 2,
    title: "Top 10 Spare Parts Every Car Owner Should Have",
    category: "Auto Parts",
    image: "/blog2.jpg",
    snippet: "Don't get stranded! Here are the must-have spare parts for every driver...",
    date: "Feb 18, 2025",
  },
  {
    id: 3,
    title: "How to Save Money on Car Repairs",
    category: "Money Saving Tips",
    image: "/blog3.jpg",
    snippet: "Car repairs can be costly. Here’s how to reduce your expenses and keep your vehicle running...",
    date: "Feb 15, 2025",
  },
];

export default function BlogsPage() {
  const [category, setCategory] = useState("All");

  // Filter Blogs by Category
  const filteredBlogs = category === "All" ? blogPosts : blogPosts.filter((blog) => blog.category === category);

  return (
    <div className="bg-gray-50">
      {/* 🔥 Hero Section */}
      <section className="relative bg-black text-white text-center py-20">
        <Image 
          src="/blogs-hero.jpg" 
          alt="AutoStore Blog" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">AutoStore Blog</h1>
          <p className="mt-4 text-lg">Latest insights, car maintenance tips, and auto news</p>
        </div>
      </section>

      {/* ✅ Categories Filter */}
      <div className="max-w-6xl mx-auto text-center py-10">
        {["All", "Car Maintenance", "Auto Parts", "Money Saving Tips"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 mx-2 text-lg font-medium rounded-lg transition ${
              category === cat ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📜 Blog List */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-16">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.date} | {blog.category}</p>
              <p className="text-gray-700 mt-4">{blog.snippet}</p>
              <Link href={`/blogs/${blog.id}`} className="mt-4 inline-block text-red-600 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
