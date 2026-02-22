"use client";

import { useEffect } from "react";

export function ScrollGlitchController() {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const triggerGlitch = () => {
      document.body.classList.add("scroll-glitch");

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        document.body.classList.remove("scroll-glitch");
      }, 180);
    };

    window.addEventListener("scroll", triggerGlitch, { passive: true });

    return () => {
      window.removeEventListener("scroll", triggerGlitch);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.body.classList.remove("scroll-glitch");
    };
  }, []);

  return null;
}
