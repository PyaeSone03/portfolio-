"use client";

import { Button } from "@/components/ui/button";
import {
  FileIcon,
  FilesIcon,
  GithubIcon,
  LibraryIcon,
  Linkedin,
  MapPin,
  NotebookPenIcon,
  ViewIcon,
} from "lucide-react";
import { useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Page = () => {
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

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const education = [
    {
      name: "Gusto University",
      description: "Higher Diploma in Software Engineering.",
      time: "2021 – 2023",
    },

    {
      name: "Online Courses (Bootcamps)",
      description:
        "Various professional development courses. (ReactJs, Next.Js, NodeJs,)",
      time: "2022 – Present",
    },
  ];
  const certifications = [
    {
      name: "Professional Frontend Developer",
      time: "2023 – 2024",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10 ">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 rounded-lg px-6 py-10 glass-surface shadow-lg border border-white/35 dark:border-white/15">
        {/* Left - Avatar */}
        <div className="flex-1 basis-2/5 flex justify-center">
          <Avatar className="h-48 w-48 avatar-round overflow-hidden flex items-center justify-center">
            <AvatarImage
              src="/ps_face.svg"
              alt="Pyae Sone"
              className="object-cover mx-auto scale-105"
            />

            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>

        {/* Right - Info */}
        <div className="flex-1 basis-3/5 space-y-5 ink-strong">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
              Pyae Sone, ikoL
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="border-white/40 dark:border-white/20 ink-strong"
              >
                <Linkedin />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/40 dark:border-white/20 ink-strong"
              >
                <GithubIcon />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className="border-white/40 dark:border-white/20 ink-strong"
            >
              Software Developer
            </Button>
            <Button
              variant="outline"
              className="border-white/40 dark:border-white/20 ink-strong"
            >
              UX Designer
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm ink-soft">
            <MapPin className="w-4 h-4" />
            <span>Chiang Mai, Thailand</span>
          </div>

          <p className="text-base leading-relaxed ink-soft">
            I create user-centered digital experiences that solve real problems.
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className="border border-white/35 dark:border-white/15 rounded-lg p-6 shadow-sm space-y-6 glass-surface ink-strong">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
          <Button
            variant="outline"
            size="icon"
            className="border-white/40 dark:border-white/20 ink-strong"
          >
            <NotebookPenIcon />
          </Button>
        </div>

        <div className="space-y-4 text-sm ink-soft">
          <div>
            <h4 className="text-xl font-semibold mb-1">Background</h4>
            <p className="leading-relaxed">
              Originally from Myanmar and currently based in Chiang Mai,
              Thailand, I work as a freelance junior software engineer and UI/UX
              designer.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Experience</h4>
            <p className="leading-relaxed">
              I have nearly two years of experience in software development and
              UI/UX design. As a UI/UX intern at a bank, I worked on ATM
              interface design and improved the internal chat system. Later, at
              Dai-ichi Life, I joined the app team as a junior developer to
              build a Call Management System using .NET and React.js, where I
              also guided the frontend development and timeline.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Vision</h4>
            <p className="leading-relaxed">
              My mission is to craft accessible, efficient, and beautiful user
              experiences that create real impact — whether for startups or
              enterprise-level solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        <Card className="flex-1 glass-surface border border-white/35 dark:border-white/15 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
              <LibraryIcon className="w-8 h-8" />
              Education
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="w-full glass-soft p-4 rounded-lg shadow-sm flex flex-col gap-2 ink-strong"
              >
                <p className="font-medium text-lg">{edu.name}</p>
                <p className="text-sm">{edu.description}</p>
                <p className="text-sm">{edu.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1 glass-surface border border-white/35 dark:border-white/15 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight ink-strong">
              <LibraryIcon className="w-8 h-8" />
              Certifications
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="w-full glass-soft p-4 rounded-lg shadow-sm flex flex-col gap-2 ink-strong"
              >
                <p className="font-medium text-lg">{cert.name}</p>
                <p className="text-sm">{cert.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Resume Section */}
      <div className="border border-white/35 dark:border-white/15 rounded-lg p-6 shadow-sm glass-surface space-y-6 ink-strong">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight">Resume</h3>
          <Button
            variant="outline"
            size="icon"
            className="border-white/40 dark:border-white/20 ink-strong"
          >
            <NotebookPenIcon />
          </Button>
        </div>

        <Card className="flex flex-col items-center text-center p-6 border border-dashed border-white/30 dark:border-white/15 space-y-4 glass-soft rounded-lg">
          <CardContent className="flex flex-col items-center justify-center space-y-2 ink-strong">
            <FilesIcon className="w-12 h-12" />
            <p>PDF</p>
          </CardContent>

          <p className="text-sm font-medium">Pyae_Sone_Resume_2025.pdf</p>

          <div className="flex gap-2">
            {/* Preview Button */}
            <a
              href="/file/pyaesone_ikoL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm border border-white/40 dark:border-white/20 ink-strong rounded-md hover:bg-white/25 dark:hover:bg-white/10"
            >
              <ViewIcon className="w-4 h-4 mr-2" />
              Preview
            </a>

            {/* Download Button */}
            <a
               href="/file/pyaesone_ikoL.pdf"
              download="PyaeSone_Resume.pdf"
              className="inline-flex items-center px-3 py-2 text-sm border border-white/40 dark:border-white/20 ink-strong rounded-md hover:bg-white/25 dark:hover:bg-white/10"
            >
              <FileIcon className="w-4 h-4 mr-2" />
              Download
            </a>
          </div>

          <p className="text-xs ink-soft">
            Last updated: June 15, 2025
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Page;
