"use client";
import { toast } from "sonner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const technicalSkills = [
    {
      image: "https://github.com/shadcn.png",
      title: "Call Manahement System",
      subTitle: "CMS",
      description:
        "Call Management System helps you make calls and easily record customer information and call notes in one place.",
      tags: ["React", ".net", "SSMS", "MUI"],
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Foodie-App",
      subTitle: "Pos",
      description: "Order App",
      tags: ["ReactJs", "ExpressJs", "PostgreSql", "MUI"],
    },
    {
      image: "/MenuMate.png",
      title: "MenuMate (Frontend)",
      subTitle: "POS + Dashboard",
      description: "",
      tags: ["ReactJs","TanStackRouter","Axios", "chadcn"],
    },
    {
      image: "/WeatherApp.png",
      title: "Weather-app",
      subTitle: "Wearher checker",
      description: "",
      tags: ["NextJs(AppRouter)","Axios", "Framer-motion", "chadcn", ""],
    },
  ];
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

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10 ">
      <div className="flex items-center justify-between">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          My Projects
        </h3>
      </div>

      <div className="mt-6 flex flex-wrap justify-center sm:justify-between gap-6">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="glass-surface p-4 rounded-lg shadow-sm flex flex-col gap-3 w-full max-w-xs"
          >
            <div className="relative w-full">
              <img
                src={skill.image}
                alt={skill.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <p className="absolute bottom-2 left-2 z-10 glass-soft text-slate-900 dark:text-slate-100 text-sm font-medium px-2 py-1 rounded">
                {skill.title}
              </p>
            </div>
            <h3 className="text-base font-semibold ink-strong">
              {skill.subTitle}
            </h3>
            <p className="text-sm ink-soft">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="outline"
                  size="sm"
                  className="border-white/40 dark:border-white/20 ink-strong hover:bg-white/25 dark:hover:bg-white/10"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
