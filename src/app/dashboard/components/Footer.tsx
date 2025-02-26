"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md p-4 mt-6 text-center text-gray-600 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright Section */}
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} AutoStore Admin Panel. All Rights Reserved.</p>

        {/* Footer Links */}
        <div className="flex space-x-4">
          <Link href="/dashboard/settings" className="hover:text-blue-500">Settings</Link>
          <Link href="/dashboard/help" className="hover:text-blue-500">Help</Link>
          <Link href="/dashboard/reports" className="hover:text-blue-500">Reports</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
