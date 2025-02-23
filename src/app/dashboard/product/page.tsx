"use client";

import { useState } from "react";
import Link from "next/link";
import ProductTable from "./ProductTable";

const sampleProducts = [
  { id: 1, name: "Engine Oil", price: 50, stock: 100 },
  { id: 2, name: "Brake Pads", price: 30, stock: 50 },
  { id: 3, name: "Car Battery", price: 120, stock: 20 },
];

const ProductsPage = () => {
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
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
