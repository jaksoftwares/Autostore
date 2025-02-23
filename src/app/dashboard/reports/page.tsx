"use client";

import SalesChart from "@/components/dashboard/SalesChart";
import TopProducts from "@/components/dashboard/TopProducts";
import UserActivity from "@/components/dashboard/UserActivity";

const ReportsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sales Reports & Analytics</h2>

      {/* Sales Performance Chart */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sales Performance</h3>
        <SalesChart />
      </div>

      {/* Top Selling Products */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Top Selling Products</h3>
        <TopProducts />
      </div>

      {/* User Activity */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">User Activity</h3>
        <UserActivity />
      </div>
    </div>
  );
};

export default ReportsPage;
