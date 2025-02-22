"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { verifyUser } from "@/services/auth"; // Import verifyUser

// Define User type (update as needed)
interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

// Define AuthContext type
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Create context with default null value
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function checkUser() {
      try {
        const verifiedUser = verifyUser() as unknown as User | null; // Ensure correct type
        setUser(verifiedUser);
      } catch (error) {
        console.error("Auth error:", error);
        setUser(null);
      }
    }

    checkUser();
  }, []);

  // Logout function
  const logout = () => {
    setUser(null);
    document.cookie = "token=; Max-Age=0"; // Clear token
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
