// src/app/layout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
