"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  Atom,
  Blocks,
  CodeXmlIcon,
  FigmaIcon,
  FileCode2,
  HeartHandshake,
  LibraryIcon,
  LightbulbIcon,
  LucidePanelsRightBottom,
  MessageCircle,
  Palette,
  PanelsTopLeft,
  Server,
  UsersIcon,
  Wind,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Tile } from "@/components/tile";
import { projects } from "@/lib/projects";

const languages = [
  { name: "JavaScript", value: 90 },
  { name: "TypeScript", value: 70 },
  { name: "Python", value: 50 },
  { name: ".Net", value: 85 },
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
    icon: HeartHandshake,
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

// Turns a 0–100 score into a word, which reads better than a raw percentage.
function level(value: number) {
  if (value >= 80) return "Advanced";
  if (value >= 60) return "Proficient";
  return "Familiar";
}

function LevelBadge({ value }: { value: number }) {
  return (
    <span className="rounded-full border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground">
      {level(value)}
    </span>
  );
}

function Count({ n, label }: { n: number; label: string }) {
  return (
    <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline">
      {n} {label}
    </span>
  );
}

const Page: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <PageHeader
        eyebrow="Skills"
        title="My Technical Skills"
        description="A comprehensive overview of my programming languages, frameworks, tools, and soft skills."
      />

      <div className="grid gap-4 md:grid-cols-6">
        {/* Row 1: languages + design tools */}
        <Tile
          title="Programming Languages"
          icon={CodeXmlIcon}
          aside={<Count n={languages.length} label="languages" />}
          className="md:col-span-4"
        >
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium">{lang.name}</p>
                  <LevelBadge value={lang.value} />
                </div>
                <Progress value={lang.value} className="h-2" />
              </div>
            ))}
          </div>
        </Tile>

        <Tile title="Design Tools" icon={Palette} className="md:col-span-2">
          <div className="grid flex-1 grid-cols-2 gap-3">
            {designTools.map((tool) => (
              <CircularProgress
                key={tool.name}
                value={tool.progress}
                size={72}
                stroke={7}
                name={tool.name}
                icon={<tool.icon className="size-5" />}
              />
            ))}
          </div>
        </Tile>

        {/* Row 2: frameworks + soft skills */}
        <Tile
          title="Frameworks & Libraries"
          icon={LibraryIcon}
          aside={<Count n={techSkills.length} label="tools" />}
          className="md:col-span-4"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techSkills.map((skill) => (
              <div
                key={skill.name}
                className="space-y-3 rounded-2xl border bg-background/40 p-4 transition-colors hover-border"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="metal-chip size-8 rounded-lg">
                    <skill.icon className="size-4" />
                  </span>
                  <LevelBadge value={skill.progress} />
                </div>
                <p className="truncate text-sm font-medium">{skill.name}</p>
                <Progress value={skill.progress} className="h-1.5" />
              </div>
            ))}
          </div>
        </Tile>

        <Tile title="Soft Skills" icon={UsersIcon} className="md:col-span-2">
          <ul className="flex flex-1 flex-col justify-between gap-4">
            {softSkills.map((skill) => (
              <li key={skill.name} className="flex gap-3">
                <skill.icon className="mt-0.5 size-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Tile>
      </div>

      {/* Projects preview */}
      <section className="space-y-6 pt-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">My Projects</h2>
          <Link
            href="/projects"
            className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View all projects
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
