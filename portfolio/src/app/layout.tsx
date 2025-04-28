import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import SiteFooter from "@/components/navigation/site-footer";
import SiteHeader from "@/components/navigation/site-header";
import {siteConfig} from "@/config/site-config";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: `${siteConfig.name} • Website`,
  description: siteConfig.description,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
