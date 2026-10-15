import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {project.subTitle}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        {project.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border bg-background/50 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
