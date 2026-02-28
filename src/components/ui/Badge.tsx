import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "organic" | "new";
  className?: string;
}

const variants = {
  default: "bg-terracotta-100 text-terracotta-700",
  organic: "bg-green-100 text-green-800",
  new: "bg-amber-100 text-amber-800",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
