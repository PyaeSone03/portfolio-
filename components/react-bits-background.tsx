"use client";

import { useTheme } from "next-themes";
import Aurora from "@/components/react-bits/Aurora";

// Site-wide animated background: a dim grayscale React Bits Aurora
// (reactbits.dev) kept to a thin band along the top edge, so the page behind
// the text stays a plain background color in both themes.
export function ReactBitsBackground() {
  const { resolvedTheme } = useTheme();
  const light = resolvedTheme === "light";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-background"
    >
      <Aurora
        colorStops={
          light
            ? ["#a1a1aa", "#52525b", "#a1a1aa"]
            : ["#18181b", "#71717a", "#27272a"]
        }
        amplitude={0.8}
        blend={0.6}
        speed={0.5}
        height={0.22}
        glow={0.4}
        layers={2}
        lightMode={light}
        mouseInteraction={false}
        opacity={light ? 0.35 : 0.6}
      />
    </div>
  );
}
