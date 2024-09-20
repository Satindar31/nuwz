/* NOT a shadcn component. */

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}

import { cn } from "@/lib/utils";
import NextLink from "next/link";

export default function Link({ href, children, className, inverse }: LinkProps) {
  if(inverse) {
    return (
      <NextLink href={href} className={cn('outline-none text-primary underline focus:outline-primary focus:no-underline', className)}>{children}</NextLink>
    )  
  }

  return (
    <NextLink href={href} className={cn('text-black focus-visible:underline hover:text-primary outline-none', className)}>{children}</NextLink>
  )
}