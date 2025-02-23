"use client";

const topProducts = [
  { id: 1, name: "Brake Pads", sales: 150 },
  { id: 2, name: "Engine Oil", sales: 120 },
  { id: 3, name: "Car Battery", sales: 100 },
  { id: 4, name: "Tires", sales: 90 },
];

const TopProducts = () => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Product</th>
          <th className="p-3 text-left">Units Sold</th>
        </tr>
      </thead>
      <tbody>
        {topProducts.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopProducts;
