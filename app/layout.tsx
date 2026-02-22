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
import { ReactBitsBackground } from "@/components/react-bits-background";
import { ScrollGlitchController } from "@/components/scroll-glitch-controller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PyaeSone's Portfolio",
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
          <ReactBitsBackground />
          <ScrollGlitchController />

          {/* HEADER */}
          <header className="sticky top-0 z-[100] w-full glass-surface border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center text-xl font-semibold ink-strong"
              >
                <Avatar className="h-10 w-10 avatar-round overflow-hidden logo-spin">
                  <AvatarFallback>PS</AvatarFallback>
                  <AvatarImage src="/eye.svg" className="h-10 w-10" />
                </Avatar>
              </Link>

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
                          className="transition ink-strong hover:opacity-70"
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
                    <button className="p-2 rounded-md glass-soft">
                      <MenuIcon className="w-5 h-5 ink-strong" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="glass-surface ink-strong"
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
                          className="text-base transition ink-strong hover:opacity-70"
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
          <main className="relative glitch-shell">
            {children}
            <Toaster />
            {/* Floating Theme Toggle Button */}
            <div className="fixed bottom-20 right-6 z-[999]">
              <ModeToggle />
            </div>
          </main>

          {/* FOOTER */}
          <Separator />
          <footer className="glass-surface text-center py-4 ink-strong">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
