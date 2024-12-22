"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

interface GothicHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GothicHeader({ className, children, ...props }: GothicHeaderProps) {
  return (
    <motion.div
      className={cn("gothic-header", className)}
      {...slideUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}