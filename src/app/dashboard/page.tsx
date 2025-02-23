"use client";

import OverviewStats from "@/components/dashboard/OverviewStats";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RecentUsers from "@/components/dashboard/RecentUsers";
import SalesChart from "@/components/dashboard/SalesChart";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* Dashboard Stats */}
      <OverviewStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Recent Orders */}
        <RecentOrders />

        {/* Recent Users */}
        <RecentUsers />
      </div>

      {/* Sales Performance Chart */}
      <SalesChart />
    </div>
  );
};

export default DashboardPage;
