"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductTable from "./components/ProductTable";
import SearchFilter from "./components/ProductFilters";
import BulkActions from "./components/BulkActions";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API (Replace with actual API call)
    const fetchProducts = async () => {
      const data = [
        {
          id: "1",
          name: "Car Battery",
          category: "Batteries",
          price: 150,
          stock: 20,
          status: "Active",
          image: "/product1.png",
        },
        {
          id: "2",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "3",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "4",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "5",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "2",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "3",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "4",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
        {
          id: "5",
          name: "Brake Pads",
          category: "Brakes",
          price: 40,
          stock: 50,
          status: "Active",
          image: "/product2.png",
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">🛍️ Products</h2>
        <Link href="/dashboard/products/manage/add" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          ➕ Add Product
        </Link>
      </div>

      {/* Search and Filtering */}
      <SearchFilter />

      {/* Bulk Actions */}
      <BulkActions />

      {/* Product Table */}
      <ProductTable products={products} />
    </div>
  );
};

export default ProductsPage;
