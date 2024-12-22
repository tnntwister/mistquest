"use client";

import { cn } from "@/lib/utils";

interface GothicDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GothicDivider({ className, ...props }: GothicDividerProps) {
  return <div className={cn("ornamental-divider", className)} {...props} />;
}