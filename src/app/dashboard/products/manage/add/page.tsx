"use client";

import { useState } from "react";
import ImageUploader from "../../components/ImageUploader";
import Variations from "../../components/ProductVariations";
import SEOSettings from "../../components/SEOSettings";

// Define TypeScript interface for product data
interface SEOData {
  metaTitle: string;
  metaDescription: string;
  tags: string;
}

interface Variation {
  // Define variation properties based on actual usage
  option: string;
  value: string;
}

interface ProductData {
  name: string;
  category: string;
  price: string;
  stock: string;
  description: string;
  images: string[];
  variations: Variation[]; // Use a proper type instead of `any[]`
  seo: SEOData;
}

const AddProductPage = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    images: [], // Explicitly typed as a string array
    variations: [], // Explicitly typed as an array of Variation objects
    seo: {
      metaTitle: "",
      metaDescription: "",
      tags: "",
    },
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle image upload
  const handleImageUpload = (images: string[]) => {
    setProductData((prev) => ({ ...prev, images }));
  };

  // Handle variations update
  const handleVariationsUpdate = (variations: Variation[]) => {
    setProductData((prev) => ({ ...prev, variations }));
  };

  // Handle SEO update
  const handleSEOUpdate = (seoData: SEOData) => {
    setProductData((prev) => ({ ...prev, seo: seoData }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    alert("Product added successfully! (Mock)");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            className="border rounded-md p-2 w-full"
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
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
