import { cn } from "@/lib/utils";

interface CowSpotDividerProps {
  className?: string;
  color?: string;
}

export function CowSpotDivider({
  className,
  color = "#C4854A",
}: CowSpotDividerProps) {
  return (
    <div className={cn("relative overflow-hidden h-8", className)}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.12 }}
      >
        <defs>
          <pattern
            id="cow-spots-divider"
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
        <rect width="100%" height="100%" fill="url(#cow-spots-divider)" />
      </svg>
    </div>
  );
}
