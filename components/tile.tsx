import { cn } from "@/lib/utils";

// One cell of a bento grid. Pass column/row spans through `className`.
export function Tile({
  title,
  icon: Icon,
  aside,
  className,
  children,
}: {
  title?: string;
  icon?: React.ElementType;
  // Small element shown at the right of the title row.
  aside?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "glass flex flex-col gap-5 rounded-3xl p-6 transition-colors hover-border",
        className
      )}
    >
      {title && Icon && (
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-3 text-lg font-semibold">
            <span className="metal-chip size-9 rounded-lg">
              <Icon className="size-5" />
            </span>
            {title}
          </h2>
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}
