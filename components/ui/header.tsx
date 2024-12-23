import { cn } from "@/lib/utils";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Header({ 
  children, 
  className, 
  centered = false 
}: HeaderProps) {
  return (
    <header className={cn(
      "container mx-auto px-4 py-8",
      centered && "text-center",
      "space-y-4",
      className
    )}>
      {children}
    </header>
  );
} 