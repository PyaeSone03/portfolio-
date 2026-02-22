"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, GithubIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { toast } from "sonner";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("🚧 The portfolio is still under development! 🚧", {
        style: {
          borderRadius: "8px",
          background: "rgba(255,255,255,0.78)",
          color: "#0f172a",
          fontWeight: "bold",
        },
      });
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg py-8">
        {/* Left Side */}
        <div className="flex-1 w-full space-y-4">
          <h1 className="text-4xl font-bold tracking-tight ink-strong">
            Hello!
          </h1>
          <h2 className="text-4xl font-bold tracking-tight ink-strong">
            I&apos;m Pyae Sone ikoL
          </h2>
          <p className="text-base ink-strong">
            Software Developer &amp; UI/UX Designer
          </p>

          <div className="flex gap-4 text-sm ink-soft flex-wrap">
            <div>🔥 Passionate about clean UI</div>
            <div>🎯 Focused on performance</div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Link href="/contact" passHref>
              <Button
                variant="outline"
                className="ink-strong border-white/40 dark:border-white/20 glass-soft hover:bg-white/25 dark:hover:bg-white/10"
              >
                Contact Me
              </Button>
            </Link>
            <Button
              variant="outline"
              className="ink-strong border-white/40 dark:border-white/20 glass-soft hover:bg-white/25 dark:hover:bg-white/10"
              onClick={() =>
                toast("🎉 Gotcha! You clicked it 😎", {
                  style: {
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.78)",
                    color: "#0f172a",
                    fontWeight: "bold",
                  },
                })
              }
            >
              Click to know more
            </Button>
          </div>

          <div className="flex gap-2">
            <Link
              href="https://github.com/PyaeSone03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="icon"
                className="size-8 ink-strong border-white/40 dark:border-white/20 glass-soft hover:bg-white/25 dark:hover:bg-white/10"
              >
                <GithubIcon />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pyae-sone-ikol-4145a22a4/" // ← replace with your real LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="icon"
                className="size-8 ink-strong border-white/40 dark:border-white/20 glass-soft hover:bg-white/25 dark:hover:bg-white/10"
              >
                <Linkedin />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Avatar className="h-100 w-100 avatar-panel">
            <AvatarImage
              src="/ps.svg"
              alt="Pyae Sone"
              className="object-contain p-2"
            />
            <AvatarFallback className="ink-strong">
              PS
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
