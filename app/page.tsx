"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, GithubIcon, FigmaIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-8 rounded-lg py-8">
        {/* Left Side */}
        <div className="flex-1 w-full basis-3/5 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
           Name
          </h1>
          <p className="text-muted-foreground text-base">
            Frontend Developer & UI/UX Designer
          </p>

          <div className="flex gap-4 text-sm text-gray-700">
            <div>🔥 Passionate about clean UI</div>
            <div>🎯 Focused on performance</div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Hire Me</Button>
            <Button variant="outline">Resume</Button>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" size="icon" className="size-8">
              <Linkedin />
            </Button>
            <Button variant="secondary" size="icon" className="size-8">
              <GithubIcon />
            </Button>
            <Button variant="secondary" size="icon" className="size-8">
              <GithubIcon />
            </Button>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex-1 basis-2/5 flex justify-center">
          <Avatar className="h-48 w-48 border shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
