"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  image: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Stock</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3 flex items-center space-x-3">
                <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-md" />
                <span>{product.name}</span>
              </td>
              <td className="p-3">{product.category}</td>
              <td className="p-3 text-center">${product.price}</td>
              <td className="p-3 text-center">{product.stock}</td>
              <td className={`p-3 text-center font-semibold ${product.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                {product.status}
              </td>
              <td className="p-3 text-center flex justify-center space-x-3">
                <Link href={`/dashboard/products/manage/${product.id}/view`}>
                  <FaEye className="text-blue-500 cursor-pointer hover:text-blue-700" title="View Product" />
                </Link>
                <Link href={`/dashboard/products/manage//edit/${product.id}`}>
                  <FaEdit className="text-yellow-500 cursor-pointer hover:text-yellow-700" title="Edit Product" />
                </Link>
                <button onClick={() => alert("Delete product feature coming soon!")}>
                  <FaTrash className="text-red-500 cursor-pointer hover:text-red-700" title="Delete Product" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end p-3">
        <button
          className={`px-4 py-2 mx-1 text-sm font-medium text-white bg-blue-500 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 mx-1 text-sm font-medium text-white bg-blue-500 rounded-md ${indexOfLastProduct >= products.length ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => setCurrentPage((prev) => (indexOfLastProduct < products.length ? prev + 1 : prev))}
          disabled={indexOfLastProduct >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
