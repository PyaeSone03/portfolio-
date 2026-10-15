import React, { useId } from "react";

type CircularProgressProps = {
  value: number;
  name?: string;
  size?: number;
  stroke?: number;
  icon?: React.ReactNode;
};

export const CircularProgress = ({
  value,
  name,
  size = 88,
  stroke = 8,
  icon,
}: CircularProgressProps) => {
  const gradientId = useId();
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-xl border bg-background/40 p-4">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="var(--brand-2)" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--muted)"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {name && <p className="text-sm font-medium">{name}</p>}
    </div>
  );
};
