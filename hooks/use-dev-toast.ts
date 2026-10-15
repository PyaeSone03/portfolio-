"use client";

import { useEffect } from "react";
import { toast } from "sonner";

// Shows the "still under development" notice shortly after a page mounts.
export function useDevToast() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("🚧 The portfolio is still under development! 🚧");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
}
