"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Page Content */}
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
