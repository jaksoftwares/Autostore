"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-100 mt-16">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col ml-20 md:ml-64 transition-all duration-300">
          {/* Top Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default DashboardLayout;