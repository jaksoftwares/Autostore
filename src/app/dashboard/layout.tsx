"use client";

import { useState } from "react";
import "../../styles/global.css";
import { AuthProvider } from "@/context/AuthContext";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          <div className="flex h-screen">
            {/* Sidebar with Toggle */}
            <Sidebar onToggle={setIsSidebarOpen} />

            {/* Main Content Wrapper */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
              {/* Top Navbar */}
              <Navbar />

              {/* Main Content */}
              <main className="p-6 overflow-auto flex-grow">{children}</main>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
