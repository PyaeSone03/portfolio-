"use client";

import Link from "next/link";
import { ArrowRight, GithubIcon, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDevToast } from "@/hooks/use-dev-toast";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const highlights = [
  { value: "~2 yrs", label: "Experience" },
  { value: String(projects.length), label: "Projects" },
  { value: "UI/UX", label: "Design-led" },
];

export default function Home() {
  useDevToast();

  return (
    <section className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl items-center px-4 py-16">
      <div className="w-full">
        <div className="fade-up max-w-3xl space-y-7">
          <span className="eyebrow">
            <span className="size-2 rounded-full bg-zinc-200 shadow-[0_0_8px] shadow-white/70" />
            Available for freelance work
          </span>

          <div className="space-y-3">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{site.name}</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              {site.role}. I build clean, fast interfaces that people enjoy
              using.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Contact me <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-background/40 backdrop-blur"
            >
              <Link href="/aboutme">
                <Sparkles /> Click to know more
              </Link>
            </Button>
            <div className="flex gap-1">
              {[
                { href: site.github, label: "GitHub", icon: GithubIcon },
                { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
              ].map(({ href, label, icon: Icon }) => (
                <Button
                  key={label}
                  asChild
                  size="icon"
                  variant="ghost"
                  className="size-10 rounded-full"
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-3 pt-2">
            {highlights.map((item) => (
              <div key={item.label} className="glass rounded-xl px-4 py-3">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-xl font-semibold tracking-tight">
                  {item.value}
                </dd>
                <dd className="text-xs text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
