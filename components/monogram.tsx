import { cn } from "@/lib/utils";

// Brushed-steel "PS" mark used in place of a photo or illustration.
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "metal-chip select-none rounded-full font-semibold tracking-tight",
        className
      )}
    >
      <span className="text-gradient">PS</span>
    </span>
  );
}
