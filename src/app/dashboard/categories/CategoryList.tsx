"use client";

import { useState } from "react";
import Link from "next/link";

const mockCategories = [
  { id: 1, name: "Engine Parts", products: 25 },
  { id: 2, name: "Brakes & Suspension", products: 18 },
  { id: 3, name: "Car Electronics", products: 30 },
];

const CategoryList = () => {
  const [categories, setCategories] = useState(mockCategories);

  const deleteCategory = (id: number) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Category Name</th>
            <th className="p-3 text-left">Products</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t">
              <td className="p-3">{category.name}</td>
              <td className="p-3">{category.products}</td>
              <td className="p-3 text-center">
                <Link href={`/dashboard/categories/edit/${category.id}`} className="text-blue-500 mx-2">
                  ✏️ Edit
                </Link>
                <button onClick={() => deleteCategory(category.id)} className="text-red-500">
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
