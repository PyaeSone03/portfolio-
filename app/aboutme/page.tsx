import { Button } from "@/components/ui/button";
import {
  AppleIcon,
  CodeXmlIcon,
  FileIcon,
  FilesIcon,
  GithubIcon,
  LibraryIcon,
  Linkedin,
  MapPin,
  NotebookPenIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

const page = () => {
  const education = [
    {
      name: "Massachusetts Institute of Technology",
      description: "Master's in Human-Computer Interaction.",
      time: "2018 – 2020",
    },
    {
      name: "Boston University",
      description: "Master's in Human-Computer Interaction.",
      time: "2018 – 2020",
    },
    {
      name: "Massachusetts Institute of Technology",
      description: "Master's in Human-Computer Interaction.",
      time: "2018 – 2020",
    },
  ];
  const certifications = [
    {
      name: "Google UX Design Professional Certificate",
      time: "2018 – 2020",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 bg-green-50 rounded-lg px-6 py-10">
        {/* Left - Avatar */}
        <div className="flex-1 basis-2/5 flex justify-center">
          <Avatar className="h-48 w-48 border shadow-lg rounded-full overflow-hidden">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>

        {/* Right - Info */}
        <div className="flex-1 basis-3/5 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
               Name
            </h3>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon" className="size-8">
                <Linkedin />
              </Button>
              <Button variant="secondary" size="icon" className="size-8">
                <GithubIcon />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline">UX Designer</Button>
            <Button variant="outline">Frontend Developer</Button>
            <Button variant="outline">Digital Illustrator</Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, California</span>
          </div>

          <p className="text-muted-foreground text-base">
            I create user-centered digital experiences that solve real problems.
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
          <Button variant="secondary" size="icon" className="size-8">
            <NotebookPenIcon />
          </Button>
        </div>

        <div className="space-y-4 text-gray-700 text-sm">
          <div>
            <h4 className="text-xl font-semibold mb-1">Background</h4>
            <p className="leading-relaxed">
              Originally from Boston, I moved to San Francisco 5 years ago to
              pursue my passion for technology and design. I'm currently working
              as a Senior UX Designer at TechVision, where I help create
              intuitive digital products that enhance user experiences across
              various platforms.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1">Experience</h4>
            <p className="leading-relaxed">
              Over the last 7 years, I’ve worked with cross-functional teams to
              build web and mobile apps, design systems, and improve user flows.
              I specialize in bridging the gap between design and development.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LibraryIcon className="w-8 h-8 text-gray-700" />
              Education
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-4">
            {education.map((edu, index) => (
              <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col gap-2">
                <p className="font-medium text-lg text-gray-900">{edu.name}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.description}
                </p>
                <p className="text-sm text-muted-foreground">{edu.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <LibraryIcon className="w-8 h-8 text-gray-700" />
              Certifications
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col gap-2">
                <p className="font-medium text-lg text-gray-900">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight">Resume</h3>
          <Button variant="secondary" size="icon" className="size-8">
            <NotebookPenIcon />
          </Button>
        </div>

        <Card className="flex flex-col items-center text-center p-6 border border-dashed border-gray-300 space-y-4">
          <CardContent className="bg-gray-700 p-6 rounded-lg shadow-sm text-white flex flex-col items-center justify-center space-y-2">
            <FilesIcon className="w-12 h-12" />
            <p>PDF</p>
          </CardContent>

          <p className="text-sm font-medium">Alex_Johnson_Resume_2025.pdf</p>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4 mr-2" /> Preview
            </Button>
            <Button variant="outline" size="sm">
              <FileIcon className="w-4 h-4 mr-2" /> Download
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Last updated: June 15, 2025
          </p>
        </Card>
      </div>
    </div>
  );
};

export default page;
