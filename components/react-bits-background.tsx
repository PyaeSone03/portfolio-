"use client";

import type { CSSProperties } from "react";

const bits = [
  { size: 180, left: "8%", top: "14%", delay: "0s", duration: "16s" },
  { size: 140, left: "22%", top: "62%", delay: "-4s", duration: "14s" },
  { size: 240, left: "38%", top: "28%", delay: "-2s", duration: "18s" },
  { size: 120, left: "56%", top: "76%", delay: "-6s", duration: "13s" },
  { size: 220, left: "72%", top: "16%", delay: "-3s", duration: "17s" },
  { size: 160, left: "84%", top: "58%", delay: "-7s", duration: "15s" },
];

export function ReactBitsBackground() {
  return (
    <div aria-hidden className="react-bits-bg">
      {bits.map((bit, index) => (
        <span
          key={index}
          className="react-bit"
          style={
            {
              "--bit-size": `${bit.size}px`,
              "--bit-left": bit.left,
              "--bit-top": bit.top,
              "--bit-delay": bit.delay,
              "--bit-duration": bit.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
