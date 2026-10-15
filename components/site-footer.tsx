import Link from "next/link";
import { GithubIcon, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-5xl px-4 pb-8">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          {[
            { href: site.github, label: "GitHub", icon: GithubIcon },
            { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
            { href: `mailto:${site.email}`, label: "Email", icon: Mail },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
