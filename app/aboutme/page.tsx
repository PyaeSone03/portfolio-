"use client";

import Link from "next/link";
import {
  Award,
  Briefcase,
  Compass,
  Download,
  Eye,
  FileText,
  GithubIcon,
  GraduationCap,
  Hourglass,
  Laptop,
  Linkedin,
  MapPin,
  UserRound,
} from "lucide-react";
import { Monogram } from "@/components/monogram";
import { Tile } from "@/components/tile";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const facts = [
  { value: "~2 yrs", label: "Experience", icon: Hourglass },
  { value: "Freelance", label: "Currently", icon: Laptop },
];

// Most recent first.
const experience = [
  {
    time: "Now",
    name: "Freelance Software Engineer & UI/UX Designer",
    description:
      "Designing and building web products for clients from Chiang Mai, Thailand.",
  },
  {
    time: "Dai-ichi Life",
    name: "Junior Developer, App Team",
    description:
      "Built a Call Management System with .NET and React.js, and guided the frontend development and timeline.",
  },
  {
    time: "Bank",
    name: "UI/UX Intern",
    description:
      "Worked on ATM interface design and improved the internal chat system.",
  },
];

const education = [
  {
    name: "Gusto University",
    description: "Higher Diploma in Software Engineering.",
    time: "2021 – 2023",
  },
  {
    name: "Online Courses (Bootcamps)",
    description:
      "Various professional development courses (React.js, Next.js, Node.js).",
    time: "2022 – Present",
  },
];

const certifications = [
  {
    name: "Professional Frontend Developer",
    time: "2023 – 2024",
  },
];

function Timeline({
  items,
}: {
  items: { name: string; description?: string; time: string }[];
}) {
  return (
    <ol className="relative space-y-6 border-l pl-6">
      {items.map((item) => (
        <li key={item.name} className="relative">
          <span className="bg-gradient-brand absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-background" />
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {item.time}
          </p>
          <p className="mt-0.5 font-medium">{item.name}</p>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

const Page = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {/* Row 1: profile + facts */}
        <Tile className="col-span-2 justify-center md:col-span-4 md:row-span-2 md:p-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <Monogram className="size-24 shrink-0 text-3xl sm:size-28 sm:text-4xl" />
            <div className="space-y-3">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {site.name}
                </h1>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start">
                  <MapPin className="size-4" />
                  {site.location}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {["Software Developer", "UX Designer"].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border bg-background/50 px-3 py-1 text-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="border-t pt-5 text-muted-foreground">
            I create user-centered digital experiences that solve real
            problems.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <Button asChild className="rounded-full">
              <a href={site.resume} download="resume.pdf">
                <Download /> Download resume
              </a>
            </Button>
            {[
              { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: site.github, label: "GitHub", icon: GithubIcon },
            ].map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                className="rounded-full bg-background/40"
              >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Icon /> {label}
                </Link>
              </Button>
            ))}
          </div>
        </Tile>

        {facts.map(({ value, label, icon: Icon }) => (
          <Tile
            key={label}
            className="col-span-1 justify-between gap-6 md:col-span-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {label}
              </p>
              <Icon className="size-4 text-muted-foreground" />
            </div>
            <p className="text-gradient text-2xl font-semibold tracking-tight sm:text-4xl">
              {value}
            </p>
          </Tile>
        ))}

        {/* Row 2: about + experience */}
        <Tile title="About Me" icon={UserRound} className="col-span-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Originally from Myanmar and now based in Chiang Mai, Thailand, I
            work as a freelance junior software engineer and UI/UX designer.
          </p>
          <div className="mt-auto flex gap-3 rounded-2xl border bg-background/40 p-4 text-sm">
            <Compass className="mt-0.5 size-4 shrink-0" />
            <p className="leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Vision. </span>
              Craft accessible, efficient, and beautiful user experiences that
              create real impact — for startups or enterprise.
            </p>
          </div>
        </Tile>

        <Tile
          title="Experience"
          icon={Briefcase}
          className="col-span-2 md:col-span-4"
        >
          <Timeline items={experience} />
        </Tile>

        {/* Row 3: education & certifications + resume */}
        <Tile
          title="Education & Certifications"
          icon={GraduationCap}
          className="col-span-2 md:col-span-4"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Timeline items={education} />
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Award className="size-4" /> Certifications
              </p>
              <Timeline items={certifications} />
            </div>
          </div>
        </Tile>

        <Tile title="Resume" icon={FileText} className="col-span-2">
          <div className="flex items-center gap-3 rounded-2xl border bg-background/40 p-3">
            <FileText className="size-8 shrink-0 text-muted-foreground" />
            <div className="min-w-0 text-sm">
              <p className="truncate font-medium">resume.pdf</p>
              <p className="text-xs text-muted-foreground">
                Updated October 15, 2026
              </p>
            </div>
          </div>
          <div className="mt-auto flex gap-2">
            <Button
              asChild
              variant="outline"
              className="flex-1 rounded-full bg-background/40"
            >
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                <Eye /> Preview
              </a>
            </Button>
            <Button asChild className="flex-1 rounded-full">
              <a href={site.resume} download="resume.pdf">
                <Download /> Download
              </a>
            </Button>
          </div>
        </Tile>
      </div>
    </div>
  );
};

export default Page;
