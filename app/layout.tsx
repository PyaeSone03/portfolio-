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
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio built with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* HEADER */}
          <header className="sticky top-0 z-[100] w-full border-b shadow-sm bg-white dark:bg-black dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              {/* Logo */}
              <div className="text-xl font-semibold text-black dark:text-white">
                <Avatar>
                  <AvatarImage src="eye.svg"  className="h-12 w-12"/>
                </Avatar>
              </div>

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
                          className="hover:text-black/70 dark:hover:text-white/70 transition text-black dark:text-white"
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
                    <button className="p-2 rounded-md border border-gray-300 dark:border-gray-700">
                      <MenuIcon className="w-5 h-5 text-black dark:text-white" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-white dark:bg-black text-black dark:text-white"
                  >
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
                          className="text-base hover:text-black/70 dark:hover:text-white/70 transition text-black dark:text-white"
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
          <main className="relative">
            {children}
            <Toaster />
            {/* Floating Theme Toggle Button */}
            <div className="fixed bottom-20 right-6 z-[999]">
              <ModeToggle />
            </div>
          </main>

          {/* FOOTER */}
          <Separator />
          <footer className="bg-gray-100 dark:bg-black text-center py-4 text-black dark:text-white">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
