"use client";

import { useParams } from "next/navigation";
import CategoryForm from "@/components/dashboard/CategoryForm";

const EditCategoryPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Category {id}</h2>
      <CategoryForm categoryId={id} />
    </div>
  );
};

export default EditCategoryPage;
