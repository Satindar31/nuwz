import { cn } from "@/lib/utils";

export default function Heading({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={cn('md:text-7xl text-5xl first-letter:text-primary font-bold w-full text-center my-4', className)}>{children}</h1>
  );
}