"use client";

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the props for the EditProductPage component
interface EditProductPageProps {
  params: {
    id: string;
  };
}

// Define the Product type
interface Product {
  name: string;
  price: number;
  stock: number;
}

const EditProductPage = ({ params }: EditProductPageProps) => {
  const router = useRouter();
  const { id } = params; // Extract id from params
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    stock: 0,
  });

  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Update the product using the id
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log("Product updated successfully");
        router.push("/dashboard/products");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "name" ? value : Number(value), // Convert price and stock to numbers
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border rounded mb-4"
          value={product.name}
          onChange={handleChange}
        />

        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          className="w-full p-2 border rounded mb-4"
          value={product.price}
          onChange={handleChange}
        />

        <label className="block mb-2">Stock</label>
        <input
          type="number"
          name="stock"
          className="w-full p-2 border rounded mb-4"
          value={product.stock}
          onChange={handleChange}
        />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;