import { cn } from "@/lib/utils";

interface CowSpotPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export function CowSpotPattern({
  className,
  color = "#C4854A",
  opacity = 0.06,
}: CowSpotPatternProps) {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="cow-spots"
          x="0"
          y="0"
          width="300"
          height="300"
          patternUnits="userSpaceOnUse"
        >
          <ellipse cx="45" cy="55" rx="35" ry="28" fill={color} />
          <ellipse cx="180" cy="35" rx="25" ry="20" fill={color} />
          <ellipse cx="260" cy="90" rx="30" ry="22" fill={color} />
          <ellipse cx="120" cy="140" rx="40" ry="25" fill={color} />
          <ellipse cx="50" cy="200" rx="22" ry="18" fill={color} />
          <ellipse cx="220" cy="190" rx="35" ry="30" fill={color} />
          <ellipse cx="290" cy="250" rx="20" ry="25" fill={color} />
          <ellipse cx="140" cy="270" rx="28" ry="22" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cow-spots)" />
    </svg>
  );
}
