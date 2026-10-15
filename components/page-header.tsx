export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="fade-up space-y-3">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
