"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { glowPulse } from "@/lib/animations";

interface GothicGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export function GothicGlow({ className, color = "from-blue-500/20 to-blue-900/10", ...props }: GothicGlowProps) {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0",
        color,
        className
      )}
      {...glowPulse}
      {...props}
    />
  );
}