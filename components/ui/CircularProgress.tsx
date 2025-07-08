import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="w-full max-w-[160px] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      {name && (
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-sm font-semibold text-center bg-gradient-to-r text-foreground px-3 py-1 rounded-full shadow-sm">
            {name}
          </CardTitle>
        </CardHeader>
      )}

      <CardContent className="flex flex-col items-center gap-2">
        <div
          className="relative flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <svg width={size} height={size} className="-rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#2e2e2e"
              strokeWidth={stroke}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#e5e5e5"
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* <p className="text-xs text-muted-foreground">{value}%</p> */}
      </CardContent>
    </Card>
  );
};
