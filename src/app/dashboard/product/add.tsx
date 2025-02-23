"use client";

import { useState } from "react";

const AddProductPage = () => {
  const [product, setProduct] = useState({ name: "", price: "", stock: "" });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("New Product:", product);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
