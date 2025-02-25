"use client";

import Link from "next/link";

// Define the Product type
interface Product {
  id: string | number;
  name: string;
  price: number;
  stock: number;
}

// Define the props for the ProductTable component
interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Stock</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="p-3">{product.id}</td>
            <td className="p-3">{product.name}</td>
            <td className="p-3">${product.price}</td>
            <td className="p-3">{product.stock}</td>
            <td className="p-3">
              <Link
                href={`/dashboard/products/edit/${product.id}`}
                className="text-blue-500 mr-2"
              >
                Edit
              </Link>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;