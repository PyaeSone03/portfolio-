import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* HEADER */}
        <header className="sticky top-0 z-[100] w-full bg-white border-b shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-semibold">My Portfolio</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-4">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/aboutme", label: "About Me" },
                    { href: "/skill", label: "Skills" },
                    { href: "/projects", label: "Projects" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        href={item.href}
                        className="hover:text-blue-600 transition"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Nav (Sheet) */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-md border border-gray-300">
                    <MenuIcon className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-4 px-2">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/aboutme", label: "About Me" },
                      { href: "/skill", label: "Skills" },
                      { href: "/projects", label: "Projects" },
                      { href: "/contact", label: "Contact" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base text-gray-800 hover:text-blue-600 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="pt-4">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center py-4 mt-8 block">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
