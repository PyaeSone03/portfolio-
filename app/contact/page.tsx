"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  GithubIcon,
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
import { toast } from "sonner";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("🚧 The portfolio is still under development! 🚧", {
        style: {
          borderRadius: "8px",
          background: "#1a1a1a",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const encodedSubject = encodeURIComponent(`${subject} - from ${email}`);
      const encodedBody = encodeURIComponent(`Name - ${name}\n${message}`);

      const mailtoLink = `mailto:xamer11285@decodewp.com?subject=${encodedSubject}&body=${encodedBody}`;

      if (typeof window !== "undefined") {
        const newWindow = window.open(mailtoLink);

        if (newWindow) {
          toast.success("Mail client opened. You can now send your message.");
          newWindow.focus();
        } else {
          toast.info(
            "The system was unable to open the mail client. Please use your email to contact us."
          );
        }
      }
    } catch (error) {
      console.error("Failed to open mail client:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 py-8">
      <div className="mx-auto max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl p-10 shadow-lg bg-white dark:bg-black">
        {/* Left Side */}
        <div className="flex-1 w-full space-y-6">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Contact Information
          </h1>

          <div className="space-y-4 text-black/80 dark:text-white/80 text-base">
            <div className="flex items-center gap-3">
              <ChevronRightIcon className="w-5 h-5 text-black/50 dark:text-white/50" />
              <span className="text-black dark:text-white">
                Email: peterpyaesone03@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ChevronRightIcon className="w-5 h-5 text-black/50 dark:text-white/50" />
              <span className="text-black dark:text-white">
                Phone: 09966073746
              </span>
            </div>
          </div>

          <div className="pt-6">
            <p className="font-semibold text-black dark:text-white mb-3">
              Find Me Online
            </p>
            <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com/in/pyae-sone-ikol-4145a22a4/" // ← replace with your real LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="icon"
                className="size-8 text-black dark:text-white border-black dark:border-white"
              >
                <Linkedin />
              </Button>
            </Link>
            <Link
              href="https://github.com/PyaeSone03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="icon"
                className="size-8 text-black dark:text-white border-black dark:border-white"
              >
                <GithubIcon />
              </Button>
            </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 w-full max-w-md">
          <Card className="w-full p-6 rounded-xl shadow-md bg-white dark:bg-black border border-black/10 dark:border-white/10">
            <CardHeader className="mb-4">
              <CardTitle className="text-2xl font-bold text-black dark:text-white">
                Send a Message
              </CardTitle>
              <CardDescription className="text-black/70 dark:text-white/70">
                I&apos;d love to hear from you. Fill out the form below!
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-black dark:text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-black/30 dark:border-white/30 text-black dark:text-white"
                  />
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-black dark:text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-black/30 dark:border-white/30 text-black dark:text-white"
                  />
                </div>

                {/* Subject */}
                <div className="grid gap-2">
                  <Label
                    htmlFor="subject"
                    className="text-black dark:text-white"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject of your message"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-black/30 dark:border-white/30 text-black dark:text-white"
                  />
                </div>

                {/* Message */}
                <div className="grid gap-2">
                  <Label
                    htmlFor="message"
                    className="text-black dark:text-white"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-md border border-black/30 dark:border-white/30 px-3 py-2 text-sm text-black dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
