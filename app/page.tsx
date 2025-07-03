"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, GithubIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg py-8">
        {/* Left Side */}
        <div className="flex-1 w-full space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Name
          </h1>
          <p className="text-base text-black dark:text-white">
            Frontend Developer &amp; UI/UX Designer
          </p>

          <div className="flex gap-4 text-sm text-gray-800 dark:text-gray-300 flex-wrap">
            <div>🔥 Passionate about clean UI</div>
            <div>🎯 Focused on performance</div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              className="text-black dark:text-white border-black dark:border-white"
            >
              Hire Me
            </Button>
            <Button
              variant="outline"
              className="text-black dark:text-white border-black dark:border-white"
            >
              Resume
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="size-8 text-black dark:text-white border-black dark:border-white"
            >
              <Linkedin />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-8 text-black dark:text-white border-black dark:border-white"
            >
              <GithubIcon />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-8 text-black dark:text-white border-black dark:border-white"
            >
              <GithubIcon />
            </Button>
          </div>
        </div>

        {/* Right Side - Avatar */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Avatar className="h-48 w-48 border border-black dark:border-white shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-black dark:text-white">
              PS
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
