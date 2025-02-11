"use client";
import Storage from "@/lib/storage";
import React, { createContext, useState, useEffect } from "react";
import useAmplitude from "@/hooks/useAmplitude";
import { isUnprotectedRoute } from "@/lib/routes";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { trackAmplitudeEvent, reset } = useAmplitude();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUserId = Storage.getItem("userId");
    if (storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    } else if (!isUnprotectedRoute(pathname)) {
      router.push("/login");
    }
  }, [pathname, router]);

  const login = async (email: string, password: string) => {
    // Simulate authentication
    if (email && password) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const newUserId = Math.random().toString(36).substring(2, 9);
      Storage.setItem("userId", newUserId);
      setIsLoggedIn(true);
      setUserId(newUserId);
      return newUserId;
    }
    return null;
  };

  const logout = () => {
    const userId = Storage.getItem("userId");
    Storage.removeItem("userId");
    setIsLoggedIn(false);
    setUserId(null);
    reset();
    trackAmplitudeEvent({ event_type: `User ${userId} Logged out` }, {});
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
