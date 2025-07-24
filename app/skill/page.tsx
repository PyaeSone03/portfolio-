"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CodeXmlIcon,
  LibraryIcon,
  AppleIcon,
  ArrowRightIcon,
  FigmaIcon,
  LucidePanelsRightBottom,
  UsersIcon,
  MessageCircle,
  LightbulbIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";
import { CircularProgress } from "@/components/ui/CircularProgress";
import Link from "next/link";
import { toast } from "sonner";
import React from "react";

const Page: React.FC = () => {
  const languages = [
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 70 },
    { name: "Python", value: 60 },
    { name: ".Net", value: 50 },
  ];

  const techSkills = [
    { name: "ReactJs", progress: 87, icon: AppleIcon },
    { name: "NextJS", progress: 65, icon: AppleIcon },
    { name: "Tailwindcss", progress: 78, icon: AppleIcon },
    { name: "MUI", progress: 45, icon: AppleIcon },
    { name: "shadcn", progress: 75, icon: AppleIcon },
    { name: "Express", progress: 60, icon: AppleIcon },
  ];

  const designTools = [
    { name: "Figma", progress: 75, icon: FigmaIcon },
    { name: "Photoshop", progress: 60, icon: LucidePanelsRightBottom },
  ];

  const softSkills = [
    {
      name: "Teamwork",
      description: "Collaborates effectively with cross-functional teams.",
      icon: LibraryIcon,
    },
    {
      name: "Communication",
      description: "Communicates clearly and listens actively.",
      icon: MessageCircle,
    },
    {
      name: "Problem Solving",
      description: "Finds solutions efficiently and creatively.",
      icon: LightbulbIcon,
    },
    {
      name: "Leadership",
      description: "Guides teams with clarity, support, and vision.",
      icon: UsersIcon,
    },
  ];

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

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-semibold tracking-tight">
          My Technical Skills
        </h3>
        <p className="text-black/70 dark:text-white/70 text-sm mt-2">
          A comprehensive overview of my programming languages, frameworks,
          tools, and soft skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 py-6">
        {/* Programming Languages */}
        <Card className="bg-white dark:bg-black border border-black/10 dark:border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
              <CodeXmlIcon className="w-8 h-8" />
              Programming Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            {languages.map((lang, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-black dark:text-white">
                    {lang.name}
                  </p>
                  {/* <span className="text-sm text-muted-foreground">
                    {lang.value}%
                  </span> */}
                </div>
                <Progress
                  value={lang.value}
                  className="mt-2 h-2 rounded-full"
                  style={
                    {
                      "--progress-bg": "rgba(0,0,0,0.05)",
                      "--progress-fill": "#8b5cf6", // violet-500
                    } as React.CSSProperties
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Frameworks & Libraries */}
        <Card className="bg-white dark:bg-black border border-black/10 dark:border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
              <LibraryIcon className="w-8 h-8" />
              Frameworks &amp; Libraries
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-black/5 dark:bg-white/10 p-4 rounded-lg flex gap-4 items-start"
              >
                {/* {React.createElement(skill.icon, {
                  className: "w-6 h-6 mt-1 text-black dark:text-white",
                })} */}
                <div className="flex-1">
                  <p className="font-medium text-black dark:text-white">
                    {skill.name}
                  </p>
                  <Progress
                    value={skill.progress}
                    className="mt-2"
                    style={
                      {
                        "--progress-bg": "rgba(0,0,0,0.1)",
                        "--progress-fill": "black",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Design Tools */}
        <Card className="bg-white dark:bg-black border border-black/10 dark:border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
              <LibraryIcon className="w-8 h-8" />
              Design Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center bg">
            {designTools.map((tool, index) => (
              <CircularProgress
                key={index}
                value={tool.progress}
                name={tool.name}
                icon={React.createElement(tool.icon, {
                  className: "w-5 h-5 text-black dark:text-white",
                })}
              />
            ))}
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="bg-white dark:bg-black border border-black/10 dark:border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
              <LibraryIcon className="w-8 h-8" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="w-full bg-black/5 dark:bg-white/10 p-4 rounded-lg shadow-sm flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  {React.createElement(skill.icon, {
                    className: "w-5 h-5 text-black dark:text-white",
                  })}
                  <p className="font-medium text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">
                  {skill.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Projects Section */}
      <div className="flex mt-8 items-center justify-between">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          My Projects
        </h1>
        <div className="flex items-center gap-1 text-sm font-medium text-black/70 dark:text-white/70 cursor-pointer hover:underline">
          <Link href={"/projects"} className="flex items-center gap-1">
            <span>View all projects</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
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
