// "use client";

// import Image from "next/image";

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       {/* Background Image (Optional) */}
//       <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/auth-bg.jpg')" }}></div>

//       {/* Authentication Container */}
//       <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         {/* Branding Logo */}
//         <div className="flex justify-center mb-6">
//           <Image src="/logo.png" alt="AutoStore Logo" width={150} height={50} />
//         </div>

//         {/* Auth Page Content */}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;


import "../../styles/global.css"; // Adjust path if needed
import { AuthProvider } from "@/context/AuthContext";
import AuthCard from "./components/AuthCard";

export const metadata = {
  title: "AutoStore - Secure Login & Signup",
  description: "Login or register to AutoStore and manage your account securely.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        <AuthProvider>
          <div className="w-full max-w-md">
            <AuthCard title="Authentication">{children}</AuthCard>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}


