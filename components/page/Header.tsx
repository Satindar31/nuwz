"use client";

import Image from "next/image";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

import { Badge } from "../ui/badge";
import Link from "../ui/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { isSignedIn } = useAuth();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if(!isSignedIn) return;
    fetch('/api/saved-article/amount').then(res => res.json()).then(d => {
      setAmount(d.amount);
    });
  });

  return (
    <div className="sticky z-[100] top-0 left-0 w-screen border-b-2 py-8 px-4 flex justify-between items-center [background:repeating-linear-gradient(to_right,#FFDBC2,white,white)]">
      <div className="flex items-center justify-start gap-6">
        <Link href="/">
          <Image src="/logo.svg" alt="Nuwz Logo" width={100} height={100} />
        </Link>
        {isSignedIn && (
          <Link href="/saved-articles" className="flex items-end gap-1">
            Saved{" "}
            <Badge variant={"secondary"} className="font-medium">
              {amount}
            </Badge>
          </Link>
        )}
        <Link href="/pricing">Pricing</Link>
        {isSignedIn && <Link href="/settings">Settings</Link>}{" "}
      </div>
      {isSignedIn ? <UserButton /> : <SignInButton />}
    </div>
  );
}
