"use client";
import { toast } from "sonner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

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
      image: "https://github.com/shadcn.png",
      title: "MenuMate (Frontend)",
      subTitle: "POS + Dashboard",
      description: "",
      tags: ["NextJs(approuter)", "chadcn"],
    },
  ];
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
      <div className="flex mt-8 items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          My Projects
        </h1>
      </div>

      <div className="mt-6 flex flex-wrap justify-center sm:justify-between gap-6">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black p-4 rounded-lg shadow-sm flex flex-col gap-3 w-full max-w-xs"
          >
            <div className="relative w-full">
              <img
                src={skill.image}
                alt={skill.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <p className="absolute bottom-2 left-2 z-10 bg-black text-white text-sm font-medium px-2 py-1 rounded">
                {skill.title}
              </p>
            </div>
            <h3 className="text-base font-semibold text-black dark:text-white">
              {skill.subTitle}
            </h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="outline"
                  size="sm"
                  className="border-black/50 text-black dark:border-white/50 dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
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
