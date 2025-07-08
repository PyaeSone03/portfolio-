"use client";

import React from "react";
import { toast } from "sonner";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("🚧 The portfolio is still under development! 🚧", {
        style: {
          borderRadius: "8px",
          background: "#1a1a1a",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10 ">
      Projects
    </div>
  );
};

export default page;
