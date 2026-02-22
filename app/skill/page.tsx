"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CodeXmlIcon,
  LibraryIcon,
  ArrowRightIcon,
  FigmaIcon,
  LucidePanelsRightBottom,
  UsersIcon,
  MessageCircle,
  LightbulbIcon,
  Atom,
  FileCode2,
  Wind,
  PanelsTopLeft,
  Blocks,
  Server,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@/components/ui/CircularProgress";
import Link from "next/link";
import { toast } from "sonner";
import React from "react";

const Page: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const frameworkRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetEnergyRef = useRef(0);
  const currentEnergyRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const activeTechTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);
  const [glitchSeed, setGlitchSeed] = useState(0);

  const languages = [
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 70 },
    { name: "Python", value: 60 },
    { name: ".Net", value: 50 },
  ];

  const techSkills = [
    { name: "ReactJs", progress: 87, icon: Atom },
    { name: "NextJS", progress: 65, icon: FileCode2 },
    { name: "Tailwindcss", progress: 78, icon: Wind },
    { name: "MUI", progress: 45, icon: PanelsTopLeft },
    { name: "shadcn", progress: 75, icon: Blocks },
    { name: "Express", progress: 60, icon: Server },
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
          background: "rgba(255,255,255,0.78)",
          color: "#0f172a",
          fontWeight: "bold",
        },
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pageNode = pageRef.current;
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollYRef.current);
      lastScrollYRef.current = window.scrollY;

      targetEnergyRef.current = Math.min(
        1,
        targetEnergyRef.current + delta / 220 + 0.08
      );
      setGlitchSeed((prev) => prev + 1);

      const frameworkRect = frameworkRef.current?.getBoundingClientRect();
      const inFrameworkViewport =
        frameworkRect &&
        frameworkRect.top < window.innerHeight * 0.86 &&
        frameworkRect.bottom > window.innerHeight * 0.2;

      if (inFrameworkViewport) {
        const nextIndex = Math.floor(Math.random() * techSkills.length);
        setActiveTechIndex(nextIndex);

        if (activeTechTimeoutRef.current) {
          clearTimeout(activeTechTimeoutRef.current);
        }

        activeTechTimeoutRef.current = setTimeout(() => {
          setActiveTechIndex(null);
        }, 260 + Math.floor(Math.random() * 220));
      }
    };

    const frame = () => {
      targetEnergyRef.current *= 0.9;
      currentEnergyRef.current +=
        (targetEnergyRef.current - currentEnergyRef.current) * 0.18;

      const energy = currentEnergyRef.current;
      const node = pageNode;

      if (node) {
        node.style.setProperty("--scroll-energy", energy.toFixed(3));
        node.style.setProperty("--scroll-shift", `${(energy * 8).toFixed(2)}px`);

        if (energy > 0.02) {
          node.classList.add("skill-scroll-glitch");
        } else {
          node.classList.remove("skill-scroll-glitch");
        }
      }

      rafRef.current = window.requestAnimationFrame(frame);
    };

    rafRef.current = window.requestAnimationFrame(frame);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      if (activeTechTimeoutRef.current) {
        clearTimeout(activeTechTimeoutRef.current);
      }
      pageNode?.classList.remove("skill-scroll-glitch");
    };
  }, [techSkills.length]);

  const glitchStyle = (key: string): React.CSSProperties => {
    const raw = [...`${key}-${glitchSeed}`].reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );

    const hue = ((raw % 40) - 20) * 1.2;
    const sat = 1.15 + (raw % 10) / 30;
    const contrast = 1.2 + (raw % 8) / 20;
    const shift = ((raw % 9) - 4) * 0.5;

    return {
      "--pg-hue": `${hue}deg`,
      "--pg-sat": `${sat}`,
      "--pg-contrast": `${contrast}`,
      "--pg-shift": `${shift}px`,
    } as React.CSSProperties;
  };

  return (
    <div
      ref={pageRef}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-semibold tracking-tight">
          My Technical Skills
        </h3>
        <p className="ink-soft text-sm mt-2">
          A comprehensive overview of my programming languages, frameworks,
          tools, and soft skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8 py-6">
        {/* Programming Languages */}
        <Card className="glass-surface border border-white/35 dark:border-white/15">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
              <CodeXmlIcon className="w-8 h-8" />
              Programming Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            {languages.map((lang, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold ink-strong">
                    {lang.name}
                  </p>
                  {/* <span className="text-sm text-muted-foreground">
                    {lang.value}%
                  </span> */}
                </div>
                <Progress
                  value={lang.value}
                  className="mt-2 h-2 rounded-full"
                  style={glitchStyle(`lang-${lang.name}`)}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Frameworks & Libraries */}
        <Card className="glass-surface border border-white/35 dark:border-white/15">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
              <LibraryIcon className="w-8 h-8" />
              Frameworks &amp; Libraries
            </CardTitle>
          </CardHeader>
          <CardContent
            ref={frameworkRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className={`glass-soft p-4 rounded-lg flex gap-4 items-start skill-tech-card ${
                  activeTechIndex === index ? "tech-glitch-active" : ""
                }`}
              >
                <div className="tech-icon-wrap">
                  {React.createElement(skill.icon, {
                    className: "w-8 h-8",
                  })}
                </div>
                <div className="flex-1 tech-label-wrap">
                  <p className="font-medium ink-strong">
                    {skill.name}
                  </p>
                  <Progress
                    value={skill.progress}
                    className="mt-2"
                    style={glitchStyle(`tech-${skill.name}`)}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Design Tools */}
        <Card className="glass-surface border border-white/35 dark:border-white/15">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
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
                  className: "w-5 h-5 ink-strong",
                })}
              />
            ))}
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="glass-surface border border-white/35 dark:border-white/15">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
              <LibraryIcon className="w-8 h-8" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="w-full glass-soft p-4 rounded-lg shadow-sm flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  {React.createElement(skill.icon, {
                    className: "w-5 h-5 ink-strong",
                  })}
                  <p className="font-medium text-lg ink-strong">
                    {skill.name}
                  </p>
                </div>
                <p className="text-sm ink-soft">
                  {skill.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Projects Section */}
      <div className="flex mt-8 items-center justify-between">
        <h1 className="text-lg font-semibold ink-strong">
          My Projects
        </h1>
        <div className="flex items-center gap-1 text-sm font-medium ink-soft cursor-pointer hover:underline">
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
