import { cn } from "@/lib/utils";

export default function Container({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("w-full h-full flex flex-col items-start justify-start gap-16 p-8", className)}>
      {children}
    </div>
  );
}