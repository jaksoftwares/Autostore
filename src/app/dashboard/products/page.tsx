"use client";

import { useState } from "react";
import Link from "next/link";
import ProductTable from "./ProductTable";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const sampleProducts: Product[] = [
  { id: 1, name: "Engine Oil", price: 50, stock: 100 },
  { id: 2, name: "Brake Pads", price: 30, stock: 50 },
  { id: 3, name: "Car Battery", price: 120, stock: 20 },
];

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    stock: 0,
  });

  const handleAddProduct = () => {
    if (newProduct.name.trim() && newProduct.price >= 0 && newProduct.stock >= 0) {
      const productToAdd: Product = {
        id: products.length + 1, // Generate a new ID
        ...newProduct,
      };
      setProducts([...products, productToAdd]);
      setNewProduct({ name: "", price: 0, stock: 0 }); // Reset the form
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "name" ? value : Number(value), // Convert price and stock to numbers
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      {/* Add Product Form */}
      <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="mb-4">
        <Link href="/dashboard/products/add" className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add New Product
        </Link>
      </div>
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;