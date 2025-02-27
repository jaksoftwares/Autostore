"use client";

import { useState } from "react";

interface DeleteProductProps {
  productId: string;
  onDeleteSuccess: () => void;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ onDeleteSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Simulated API call (replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Product deleted successfully!");
      onDeleteSuccess();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to delete product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        disabled={loading}
      >
        {loading ? "Deleting..." : "🗑️ Delete Product"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default DeleteProduct;
