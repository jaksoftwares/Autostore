"use client";

import OverviewStats from "./Overviewstats";
import OrdersPage from "./orders/page";
import SalesChart from "./reports/SalesChart";
import RecentUsers from "./RecentUsers";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* Dashboard Stats */}
      <OverviewStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Recent Orders */}
        <OrdersPage />

        {/* Recent Users */}
        <RecentUsers />
      </div>

      {/* Sales Performance Chart */}
      <SalesChart />
    </div>
  );
};

export default DashboardPage;
