import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CodeXmlIcon,
  LibraryIcon,
  AppleIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { CircularProgress } from "@/components/ui/CircularProgress";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { title } from "process";

const page = () => {
  const languages = [
    { name: "JavaScript", percentage: "95%", value: 95 },
    { name: "TypeScript", percentage: "90%", value: 90 },
    { name: "Python", percentage: "85%", value: 85 },
    { name: "C#", percentage: "75%", value: 75 },
  ];

  const techSkills = [
    { name: "Apple", progress: 12, icon: AppleIcon },
    { name: "Chrome", progress: 65, icon: AppleIcon },
    { name: "Apple", progress: 80, icon: AppleIcon },
    { name: "Apple", progress: 45, icon: AppleIcon },
    { name: "Apple", progress: 90, icon: AppleIcon },
    { name: "Apple", progress: 25, icon: AppleIcon },
  ];

  const designTools = [
    { name: "Figma", progress: 75, icon: AppleIcon },
    { name: "Adobe XD", progress: 60, icon: AppleIcon },
    { name: "Sketch", progress: 50, icon: AppleIcon },
    { name: "InVision", progress: 40, icon: AppleIcon },
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
      icon: LibraryIcon,
    },
    {
      name: "Problem Solving",
      description: "Finds solutions efficiently and creatively.",
      icon: LibraryIcon,
    },
    {
      name: "Problem Solving",
      description: "Finds solutions efficiently and creatively.",
      icon: LibraryIcon,
    },
  ];

  const technicalSkills = [
    {
      image: "https://github.com/shadcn.png",
      title: "E-commerce Platform",
      subTitle: "Online Store Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Mobile App Design",
      subTitle: "Fitness Tracker App",
      description:
        "UI/UX design and frontend development for a fitness tracking application",
      tags: ["Figma", "React Native", "Firebase"],
    },
    {
      image: "https://github.com/shadcn.png",
      title: "Data Dashboard",
      subTitle: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard using Python and D3.js",
      tags: ["Python", "D3.js", "Flask"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between h-auto">
      <h1 className="text-lg font-semibold">My Technical Skills</h1>
      <p className="text-muted-foreground text-sm mb-4">
        A comprehensive overview of my programming languages, frameworks, tools,
        and soft skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <CodeXmlIcon className="w-8 h-8" />
              Programming Languages
            </CardTitle>
          </CardHeader>

          <CardContent>
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex tems-center justify-between">
                  <p className="text-lg font-semibold">{lang.name}</p>
                  <p className="text-lg font-semibold text-muted-foreground ">
                    {lang.percentage}
                  </p>
                </div>
                <Progress value={lang.value} className="mt-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LibraryIcon className="w-8 h-8" />
              Frameworks & Libraries
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex gap-4 items-start"
              >
                {React.createElement(skill.icon, {
                  className: "w-6 h-6 mt-1 text-gray-600",
                })}
                <div className="flex-1">
                  <p className="font-medium">{skill.name}</p>
                  <Progress value={skill.progress} className="mt-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LibraryIcon className="w-8 h-8" />
              Design Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {designTools.map((tool, index) => (
              <CircularProgress
                value={tool.progress}
                name={tool.name}
                icon={React.createElement(tool.icon, {
                  className: "w-5 h-5 text-gray-700",
                })}
                key={index}
              />
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LibraryIcon className="w-8 h-8" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="w-full bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col gap-1"
              >
                <div className="flex items-center gap-2">
                  {React.createElement(skill.icon, {
                    className: "w-5 h-5 text-gray-700",
                  })}
                  <p className="font-medium text-lg">{skill.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="flex mt-4 items-center justify-between">
        <h1 className="text-lg font-semibold">My Technical Skills</h1>

        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground cursor-pointer hover:underline">
          <span>View all projects</span>
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-3 w-full max-w-sm"
          >
            <div className="relative w-full">
              <img
                src={skill.image}
                alt={skill.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <p className="absolute bottom-2 left-2 z-10 bg-black/60 text-white text-sm font-medium px-2 py-1 rounded">
                {skill.title}
              </p>
            </div>

            <h3 className="text-lg font-semibold">{skill.subTitle}</h3>

            <p className="text-sm text-muted-foreground">{skill.description}</p>

            <div className="flex gap-2 flex-wrap">
              {skill.tags.map((tag, tagIndex) => (
                <Button key={tagIndex} variant="outline" size="sm">
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

export default page;
