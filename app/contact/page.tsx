"use client";

import { Button } from "@/components/ui/button";
import {
  Linkedin,
  GithubIcon,
  FigmaIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl p-10 shadow-lg">
        {/* Left Side */}
        <div className="flex-1 w-full space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Information
          </h1>

          <div className="space-y-4 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">Email: example@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">Phone: +1 (555) 123-4567</span>
            </div>
          </div>

          <div className="pt-6">
            <p className="font-semibold text-gray-800 mb-3">Find Me Online</p>
            <div className="flex gap-3">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <GithubIcon className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <FigmaIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form Card */}
        <div className="flex-1 w-full max-w-md">
          <Card className="w-full p-6 rounded-xl shadow-md bg-white">
            <CardHeader className="mb-4">
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              <CardDescription>
                I&apos;d love to hear from you. Fill out the form below!
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6">
                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                  <p className="text-xs text-gray-500">Let me know who you are</p>
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                  <p className="text-xs text-gray-500">I’ll use this to get back to you</p>
                </div>

                {/* Message */}
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    What would you like to talk about?
                  </p>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
