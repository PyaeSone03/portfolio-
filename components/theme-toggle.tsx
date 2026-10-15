"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Light/dark switch animated as a sunrise (to light) or sunset (to dark).
// The page animation lives in globals.css under "Theme switch".
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Render as dark until mounted so server and client markup match.
  const dark = !mounted || resolvedTheme !== "light";

  const toggle = () => {
    const next = dark ? "light" : "dark";
    const root = document.documentElement;

    const apply = () => {
      // Switch the class directly so the view transition captures the new
      // theme in this frame; next-themes then stores the choice.
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    root.dataset.themeSwitch = next === "light" ? "sunrise" : "sunset";
    document
      .startViewTransition(apply)
      .finished.finally(() => delete root.dataset.themeSwitch);
  };

  const icon =
    "absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 transition-transform duration-[1200ms] ease-in-out";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Sunrise: light mode" : "Sunset: dark mode"}
      className="relative size-9 shrink-0 overflow-hidden rounded-full transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      {/* Sun sits up in light mode and sets below the horizon in dark. */}
      <Sun
        className={cn(
          icon,
          dark ? "translate-y-[140%] rotate-90" : "-translate-y-[60%] rotate-0"
        )}
      />
      {/* Moon does the opposite. */}
      <Moon
        className={cn(
          icon,
          dark ? "-translate-y-[60%] rotate-0" : "translate-y-[140%] -rotate-45"
        )}
      />
      {/* Horizon line. */}
      <span className="absolute inset-x-2 bottom-[9px] h-px bg-foreground/30" />
    </button>
  );
}
