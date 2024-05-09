import * as React from "react";
import { Inter } from "next/font/google";

// import "@/app/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yet Another React Lightbox | Next.js Dynamic",
  description: "Yet Another React Lightbox example with Next.js",
};

export default function LightboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Yet Another React Lightbox | Next.js Dynamic</h1>
      {children}
    </div>
  );
}
