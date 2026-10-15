"use client";

import React, { useEffect, useRef } from "react";
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
import { useDevToast } from "@/hooks/use-dev-toast";
import { projects } from "@/lib/projects";

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

// Writes per-bar glitch variables for progressBarGlitch, derived from a
// string so each bar glitches differently on each scroll tick.
function applyGlitchVars(node: HTMLElement, key: string) {
  const raw = [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  node.style.setProperty("--pg-hue", `${((raw % 40) - 20) * 1.2}deg`);
  node.style.setProperty("--pg-sat", `${1.15 + (raw % 10) / 30}`);
  node.style.setProperty("--pg-contrast", `${1.2 + (raw % 8) / 20}`);
  node.style.setProperty("--pg-shift", `${((raw % 9) - 4) * 0.5}px`);
}

function SectionCard({
  title,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="glass space-y-5 rounded-2xl p-6">
      <h2 className="flex items-center gap-3 text-lg font-semibold">
        <span className="metal-chip size-9 rounded-lg">
          <Icon className="size-5" />
        </span>
        {title}
      </h2>
      <div className={className}>{children}</div>
    </section>
  );
}

const Page: React.FC = () => {
  useDevToast();

  const pageRef = useRef<HTMLDivElement | null>(null);
  const frameworkRef = useRef<HTMLDivElement | null>(null);

  // The scroll effect mutates classes and CSS variables directly instead of
  // going through React state, so scrolling never re-renders the page.
  useEffect(() => {
    const pageNode = pageRef.current;
    const frameworkNode = frameworkRef.current;
    if (!pageNode || !frameworkNode) return;

    const bars = pageNode.querySelectorAll<HTMLElement>("[data-glitch-key]");
    const cards = frameworkNode.querySelectorAll<HTMLElement>(".skill-tech-card");

    let lastScrollY = window.scrollY;
    let targetEnergy = 0;
    let currentEnergy = 0;
    let seed = 0;
    let raf = 0;
    let activeCard: HTMLElement | null = null;
    let activeTimeout: ReturnType<typeof setTimeout> | null = null;

    const clearActiveCard = () => {
      activeCard?.classList.remove("tech-glitch-active");
      activeCard = null;
    };

    const frame = () => {
      targetEnergy *= 0.9;
      currentEnergy += (targetEnergy - currentEnergy) * 0.18;

      pageNode.style.setProperty("--scroll-energy", currentEnergy.toFixed(3));
      pageNode.style.setProperty(
        "--scroll-shift",
        `${(currentEnergy * 8).toFixed(2)}px`
      );

      if (currentEnergy > 0.02) {
        pageNode.classList.add("skill-scroll-glitch");
        raf = window.requestAnimationFrame(frame);
      } else {
        // Settled: stop the loop until the next scroll.
        pageNode.classList.remove("skill-scroll-glitch");
        raf = 0;
      }
    };

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      targetEnergy = Math.min(1, targetEnergy + delta / 220 + 0.08);
      seed += 1;
      bars.forEach((bar) =>
        applyGlitchVars(bar, `${bar.dataset.glitchKey}-${seed}`)
      );

      const rect = frameworkNode.getBoundingClientRect();
      const inViewport =
        rect.top < window.innerHeight * 0.86 &&
        rect.bottom > window.innerHeight * 0.2;

      if (inViewport && cards.length > 0) {
        clearActiveCard();
        activeCard = cards[Math.floor(Math.random() * cards.length)];
        activeCard.classList.add("tech-glitch-active");

        if (activeTimeout) clearTimeout(activeTimeout);
        activeTimeout = setTimeout(
          clearActiveCard,
          260 + Math.floor(Math.random() * 220)
        );
      }

      if (!raf) raf = window.requestAnimationFrame(frame);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      if (activeTimeout) clearTimeout(activeTimeout);
      clearActiveCard();
      pageNode.classList.remove("skill-scroll-glitch");
    };
  }, []);

  return (
    <div ref={pageRef} className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <PageHeader
        eyebrow="Skills"
        title="My Technical Skills"
        description="A comprehensive overview of my programming languages, frameworks, tools, and soft skills."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <SectionCard title="Programming Languages" icon={CodeXmlIcon} className="space-y-5">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <p className="font-medium">{lang.name}</p>
              </div>
              <Progress
                value={lang.value}
                className="h-2"
                data-glitch-key={`lang-${lang.name}`}
              />
            </div>
          ))}
        </SectionCard>

        <SectionCard title="Frameworks & Libraries" icon={LibraryIcon}>
          <div ref={frameworkRef} className="grid grid-cols-2 gap-3">
            {techSkills.map((skill) => (
              <div
                key={skill.name}
                className="skill-tech-card flex items-start gap-4 rounded-xl border bg-background/40 p-3"
              >
                <div className="tech-icon-wrap">
                  <skill.icon className="size-8" />
                </div>
                <div className="tech-label-wrap flex-1">
                  <p className="text-sm font-medium">{skill.name}</p>
                  <Progress
                    value={skill.progress}
                    className="mt-2 h-1.5"
                    data-glitch-key={`tech-${skill.name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Design Tools" icon={Palette} className="grid grid-cols-2 gap-3">
          {designTools.map((tool) => (
            <CircularProgress
              key={tool.name}
              value={tool.progress}
              name={tool.name}
              icon={<tool.icon className="size-5" />}
            />
          ))}
        </SectionCard>

        <SectionCard title="Soft Skills" icon={UsersIcon} className="grid grid-cols-2 gap-3">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="space-y-1.5 rounded-xl border bg-background/40 p-3"
            >
              <div className="flex items-center gap-2">
                <skill.icon className="size-4 text-primary" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </SectionCard>
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
