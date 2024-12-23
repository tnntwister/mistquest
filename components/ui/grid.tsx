interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Grid({ children, className, ...props }: GridProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
} 