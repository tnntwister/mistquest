"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

interface GothicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  glowColor?: string;
}

export function GothicCard({ className, title, glowColor, children, ...props }: GothicCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg border border-slate-800 bg-black/40 backdrop-blur transition-all hover:border-slate-600",
        className
      )}
      {...slideUp}
      {...props}
    >
      {glowColor && (
        <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 transition-opacity group-hover:opacity-100`} />
      )}
      
      {title && (
        <div className="relative border-b border-slate-800 bg-slate-900/50 p-4">
          <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
        </div>
      )}

      <div className="relative p-6">{children}</div>
    </motion.div>
  );
}