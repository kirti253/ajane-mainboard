"use client";

import type { ReactNode } from "react";
import { CartProvider } from "./CartProvider";

export function AppShell({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

