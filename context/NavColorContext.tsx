// context/NavColorContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavColor = "white" | "black";

interface NavColorContextType {
  navColor: NavColor;
  setNavColor: (color: NavColor) => void;
}

const NavColorContext = createContext<NavColorContextType | undefined>(undefined);

export function NavColorProvider({ children }: { children: ReactNode }) {
  const [navColor, setNavColor] = useState<NavColor>("white");
  return (
    <NavColorContext.Provider value={{ navColor, setNavColor }}>
      {children}
    </NavColorContext.Provider>
  );
}

export function useNavColor() {
  const ctx = useContext(NavColorContext);
  if (!ctx) throw new Error("useNavColor must be used inside NavColorProvider");
  return ctx;
}
