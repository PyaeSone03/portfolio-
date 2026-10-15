"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  GithubIcon,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

const inputClass = "h-11 rounded-xl bg-background/50";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const encodedSubject = encodeURIComponent(`${subject} - from ${email}`);
      const encodedBody = encodeURIComponent(`Name - ${name}\n${message}`);

      // window.open() returns null for mailto: links even when the mail
      // client opens, so navigate to the link instead.
      window.location.href = `mailto:${site.email}?subject=${encodedSubject}&body=${encodedBody}`;
      toast.success("Opening your mail client so you can send the message.");
    } catch (error) {
      console.error("Failed to open mail client:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy. Please copy the address manually.");
    }
  };

  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
    { icon: MapPin, label: "Location", value: site.location },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Contact details */}
        <aside className="glass flex flex-col gap-6 rounded-2xl p-6">
          <div className="space-y-2">
            <span className="eyebrow">
              <span className="status-dot" />
              Available for freelance work
            </span>
            <p className="text-sm text-muted-foreground">
              Prefer email? Write to me directly or copy my address.
            </p>
          </div>

          <ul className="space-y-2">
            {details.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="metal-chip size-11 shrink-0 rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="block break-all font-medium">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-accent"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <Button
            type="button"
            variant="outline"
            className="rounded-full bg-background/40"
            onClick={copyEmail}
          >
            {copied ? <Check /> : <Copy />}
            {copied ? "Email copied" : "Copy email address"}
          </Button>

          <div className="mt-auto space-y-3 border-t pt-6">
            <p className="text-sm font-medium">Find me online</p>
            <div className="flex gap-2">
              {[
                { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: site.github, label: "GitHub", icon: GithubIcon },
              ].map(({ href, label, icon: Icon }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-background/40"
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
        </aside>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="glass space-y-5 rounded-2xl p-6 sm:p-8"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">
              Send a message
            </h2>
            <p className="text-sm text-muted-foreground">
              This opens your email app with the message ready to send.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={6}
              placeholder="Type your message here..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-input bg-background/50 px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full">
            <Send /> Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
