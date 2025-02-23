"use client";

const OverviewStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-bold">🛒 Total Sales</h2>
        <p className="text-2xl font-bold text-green-500">KSH 2.4M</p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-bold">📦 Orders</h2>
        <p className="text-2xl font-bold text-blue-500">342</p>
      </div>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-bold">👥 Users</h2>
        <p className="text-2xl font-bold text-purple-500">1,532</p>
      </div>
    </div>
  );
};

export default OverviewStats;
