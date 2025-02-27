"use client";

const BulkActions = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">❌ Delete Selected</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">✔️ Activate Selected</button>
    </div>
  );
};

export default BulkActions;
