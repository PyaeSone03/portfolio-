import React from "react";

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
  size = 80,
  stroke = 8,
  icon,
}: CircularProgressProps) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Circle with icon */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#171717"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Name and percentage */}
      {name && (
        <div className="text-center">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{value}%</p>
        </div>
      )}
    </div>
  );
};
