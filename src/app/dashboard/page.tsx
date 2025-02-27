"use client";

import OverviewStats from "./components/Overviewstats";
import DashboardOrders from "./orders/DashboardOrders";
// import SalesChart from "./reports/SalesChart";
import RecentUsers from "./components/RecentUsers";
import RecentActivities from "./components/RecentActivities";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">📊 Admin Dashboard</h1>

      {/* Overview Stats */}
      <OverviewStats />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {/* Recent Orders */}
        <DashboardOrders  />

        {/* Recent Users */}
        <RecentUsers />

        {/* Recent Activities */}
        <RecentActivities />
      </div>

      {/* Sales Performance Chart */}
      {/* <SalesChart /> */}
    </div>
  );
};

export default DashboardPage;
