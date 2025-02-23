"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CategoryForm = ({ categoryId }: { categoryId?: string }) => {
  const [name, setName] = useState(categoryId ? "Sample Category" : "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(categoryId ? "Category Updated!" : "Category Added!");
    router.push("/dashboard/categories");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
      <label className="block text-sm font-medium">Category Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        {categoryId ? "Update" : "Add"} Category
      </button>
    </form>
  );
};

export default CategoryForm;
