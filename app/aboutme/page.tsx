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
  Linkedin,
  MapPin,
  UserRound,
} from "lucide-react";
import { Monogram } from "@/components/monogram";
import { Button } from "@/components/ui/button";
import { useDevToast } from "@/hooks/use-dev-toast";
import { site } from "@/lib/site";

const story = [
  {
    title: "Background",
    icon: UserRound,
    text: "Originally from Myanmar and currently based in Chiang Mai, Thailand, I work as a freelance junior software engineer and UI/UX designer.",
  },
  {
    title: "Experience",
    icon: Briefcase,
    text: "I have nearly two years of experience in software development and UI/UX design. As a UI/UX intern at a bank, I worked on ATM interface design and improved the internal chat system. Later, at Dai-ichi Life, I joined the app team as a junior developer to build a Call Management System using .NET and React.js, where I also guided the frontend development and timeline.",
  },
  {
    title: "Vision",
    icon: Compass,
    text: "My mission is to craft accessible, efficient, and beautiful user experiences that create real impact — whether for startups or enterprise-level solutions.",
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
          <p className="text-xs font-medium text-primary">{item.time}</p>
          <p className="font-medium">{item.name}</p>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

const Page = () => {
  useDevToast();

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-16">
      {/* Profile */}
      <section className="glass fade-up flex flex-col items-center gap-8 rounded-3xl p-8 sm:flex-row sm:p-10">
        <Monogram className="size-32 shrink-0 text-5xl sm:size-40 sm:text-6xl" />

        <div className="flex-1 space-y-4 text-center sm:text-left">
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

          <p className="text-muted-foreground">
            I create user-centered digital experiences that solve real
            problems.
          </p>

          <div className="flex justify-center gap-2 sm:justify-start">
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
        </div>
      </section>

      {/* About */}
      <section className="grid gap-6 md:grid-cols-3">
        {story.map(({ title, icon: Icon, text }) => (
          <article
            key={title}
            className="glass glass-hover fade-up space-y-3 rounded-2xl p-6"
          >
            <span className="metal-chip size-10 rounded-xl">
              <Icon className="size-5" />
            </span>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </article>
        ))}
      </section>

      {/* Education & Certifications */}
      <section className="grid gap-6 md:grid-cols-2">
        <article className="glass space-y-5 rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <GraduationCap className="size-5 text-primary" /> Education
          </h2>
          <Timeline items={education} />
        </article>
        <article className="glass space-y-5 rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Award className="size-5 text-primary" /> Certifications
          </h2>
          <Timeline items={certifications} />
        </article>
      </section>

      {/* Resume */}
      <section className="glass flex flex-col items-center gap-6 rounded-2xl p-6 sm:flex-row">
        <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-background/50">
          <FileText className="size-7 text-primary" />
        </span>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg font-semibold">Resume</h2>
          <p className="text-sm text-muted-foreground">
            Pyae_Sone_Resume.pdf · Last updated August 23, 2025
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="rounded-full bg-background/40">
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              <Eye /> Preview
            </a>
          </Button>
          <Button asChild className="rounded-full">
            <a href={site.resume} download="PyaeSone_Resume.pdf">
              <Download /> Download
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
