"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ImageUploader from "@/app/dashboard/products/components/ImageUploader";
import Variations from "../../../components/ProductVariations";
import SEOSettings from "../../../components/SEOSettings";
// import DeleteProduct from "../../../components/DeleteProduct";

// Define types
interface Variation {
  name: string;
  value: string;
}

interface SEOData {
  metaTitle: string;
  metaDescription: string;
  tags: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  description: string;
  images: string[];
  variations: Variation[];
  seo: SEOData;
}

// Mock function to fetch product details (Replace with API call)
const fetchProductDetails = async (productId: string): Promise<Product> => {
  return {
    id: productId,
    name: "Car Engine Oil",
    category: "Engine Parts",
    price: "45",
    stock: "100",
    description: "Premium engine oil for high-performance vehicles.",
    images: ["/images/sample-product.jpg"],
    variations: [{ name: "Size", value: "1L" }],
    seo: {
      metaTitle: "Buy Car Engine Oil",
      metaDescription: "High-quality engine oil for superior performance.",
      tags: "engine, oil, car",
    },
  };
};

const EditProductPage = () => {
  const router = useRouter();
  const { productId } = useParams();
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductDetails(productId as string);
      setProductData(data);
    };
    loadProduct();
  }, [productId]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setProductData((prev) =>
      prev ? { ...prev, [e.target.name]: e.target.value } : prev
    );
  };

  // Handle image upload
  const handleImageUpload = (images: string[]) => {
    setProductData((prev) => (prev ? { ...prev, images } : prev));
  };

  // Handle variations update
  const handleVariationsUpdate = (variations: Variation[]) => {
    setProductData((prev) => (prev ? { ...prev, variations } : prev));
  };

  // Handle SEO update
  const handleSEOUpdate = (seoData: SEOData) => {
    setProductData((prev) => (prev ? { ...prev, seo: seoData } : prev));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Product Data:", productData);
    alert("Product updated successfully! (Mock)");
    router.push("/dashboard/products");
  };

  if (!productData) return <p>Loading product details...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <button onClick={() => router.back()} className="mb-4 text-blue-500">
        ← Back to Products
      </button>

      <h2 className="text-2xl font-bold mb-4">✏️ Edit Product #{productData.id}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            className="border rounded-md p-2 w-full"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold">Category</label>
          <select
            name="category"
            className="border rounded-md p-2 w-full"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="Batteries">Batteries</option>
            <option value="Brakes">Brakes</option>
            <option value="Engines">Engines</option>
          </select>
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              className="border rounded-md p-2 w-full"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              className="border rounded-md p-2 w-full"
              value={productData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            rows={3}
            className="border rounded-md p-2 w-full"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Image Upload Component */}
        <ImageUploader onUpload={handleImageUpload} />

        {/* Variations Component */}
        <Variations onUpdate={handleVariationsUpdate} />

        {/* SEO Settings Component */}
        <SEOSettings onUpdate={handleSEOUpdate} />

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
          Save Changes
        </button>
        {/* <DeleteProduct productId={productData.id} onDeleteSuccess={() => router.push("/dashboard/products")} /> */}
      </form>
    </div>
  );
};

export default EditProductPage;
