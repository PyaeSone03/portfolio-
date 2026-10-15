"use client";

import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const Page = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <PageHeader
        eyebrow="Work"
        title="My Projects"
        description="A selection of products I've designed and built, from internal tools to consumer apps."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
