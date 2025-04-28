"use client"

import Link from "next/link";
import * as React from "react";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site-config";
import {Infinity} from "lucide-react";
import {NavConfig} from "@/config/nav-config";
import {usePathname} from "next/navigation";
import {ThemeToggle} from "@/components/theme/theme-toggle";

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-screen-xl flex h-14 items-center justify-between max-md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Infinity className="size-5"/>
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="max-lg:hidden flex items-center gap-4 text-sm font-medium lg:gap-6">
            {NavConfig.map((item) =>
              item.href ? (
                <Link
                  key={item.href} href={item.href}
                  className={cn("transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              ) : null
            )}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}