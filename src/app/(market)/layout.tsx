import "../../styles/global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "AutoStore - The Best Auto Parts Marketplace",
  description: "Find and buy high-quality car spare parts at AutoStore.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          {/* Centered Header */}
          <div className="max-w-[1430px] mx-auto px-4 md:px-6 lg:px-8">
            <Header />
          </div>

          {/* Main Content */}
          <main className="max-w-[1430px] mx-auto px-4 md:px-6 lg:px-8 py-6 min-h-screen">
            {children}
          </main>

          {/* Centered Footer */}
          <div className="max-w-[1430px] mx-auto px-4 md:px-6 lg:px-8">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
