import "@/styles/globals.css";

import "@/styles/embla.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import {
  inter,
  roboto_mono,
  rakkas,
  merriweather,
  bungee_shade,
} from "@/config/fonts";
// import { Roboto, Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar/navbar";
import clsx from "clsx";
import Footer2 from "@/components/Footer2";
import NavbarV2 from "@/components/Navbar/NavbarV2";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    //icon: "/favicon.ico",
    icon: "/custom-favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          merriweather.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen max-w-screen-2xl mx-auto">
            <Navbar />
            {/* <NavbarV2 /> */}
            <main className="container mx-auto max-w-screen-2xl flex-grow">
              {children}
            </main>
            <footer className="relative z-10 w-full flex items-center justify-center py-3">
              <Footer2 />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
