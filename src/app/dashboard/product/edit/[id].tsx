"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditProductPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [product, setProduct] = useState({ name: "Example Product", price: 50, stock: 100 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    router.push("/dashboard/products");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <label className="block mb-2">Price</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <label className="block mb-2">Stock</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
