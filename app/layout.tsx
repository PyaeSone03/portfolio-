import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ReactBitsBackground } from "@/components/react-bits-background";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pyae Sone ikoL — Portfolio",
  description:
    "Software developer and UI/UX designer based in Chiang Mai, Thailand.",
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ReactBitsBackground />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            {/* Pages fill the space between header and footer, so a short
                page (like Home) can center itself without overflowing. */}
            <main className="flex flex-1 flex-col [&>*]:w-full">{children}</main>
            <SiteFooter />
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
