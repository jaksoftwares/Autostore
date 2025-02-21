import React from "react";
import "../styles/global.css"; // Ensure Tailwind is imported
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "AutoStore - The Best Auto Parts Marketplace",
  description: "Find and buy high-quality car spare parts at AutoStore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-6 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
