"use client";

import Link from "next/link";
import CategoryList from "./CategoryList";

const CategoriesPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📂 Manage Categories</h2>

      <Link href="/dashboard/categories/add" className="bg-blue-500 text-white px-4 py-2 rounded">
        ➕ Add New Category
      </Link>

      <CategoryList />
    </div>
  );
};

export default CategoriesPage;
