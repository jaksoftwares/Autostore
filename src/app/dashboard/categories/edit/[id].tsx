"use client";

import { useParams } from "next/navigation";
import CategoryForm from "../CategoryForm";

const EditCategoryPage = () => {
  const params = useParams();
  const id = params.id;

  // Ensure id is a string
  if (typeof id !== "string") {
    return <div>Invalid category ID</div>; // Or redirect to an error page
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Category {id}</h2>
      <CategoryForm categoryId={id} />
    </div>
  );
};

export default EditCategoryPage;