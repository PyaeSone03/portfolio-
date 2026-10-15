"use client";

import Aurora from "@/components/react-bits/Aurora";

// Site-wide animated background: a grayscale React Bits Aurora
// (reactbits.dev) that reads as light glancing off brushed metal, over a
// faint dot grid.
export function ReactBitsBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Aurora
        colorStops={["#3f3f46", "#e4e4e7", "#52525b"]}
        amplitude={1}
        blend={0.7}
        speed={0.5}
        height={0.65}
        glow={0.7}
        layers={2}
        opacity={0.8}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 22%) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at 50% 35%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 35%, black 10%, transparent 70%)",
        }}
      />
    </div>
  );
}
