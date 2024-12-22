"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface GothicFrameProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GothicFrame({ className, children, ...props }: GothicFrameProps) {
  return (
    <motion.div
      className={cn("gothic-frame", className)}
      {...props}
      {...fadeIn}
    >
      {children}
    </motion.div>
  );
}