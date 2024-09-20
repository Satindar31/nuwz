"use client";

import Container from "@/components/page/Container";
import Link from "@/components/ui/link";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function Settings() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <Container className="items-center justify-center pt-20">
        <Loader className="animate-spin" />
      </Container>
    );
  }

  if (!isSignedIn) {
    return (
      <Container>
        <header className="self-center flex flex-col items-center justify-center gap-4">
          <h1 className="md:text-6xl text-4xl font-bold">Unauthorized</h1>
          <p className="md:text-lg text-sm">
            You need to be signed in to access your settings.
          </p>

          <Link href="/" className="bg-primary outline-offset-2 outline rounded-md outline-transparent focus:outline-primary px-4 py-2 text-white focus:!no-underline">Back Home</Link>
        </header>
      </Container>
    );
  }

  return (
    <Container>
      <header className="self-center flex flex-col items-center justify-center gap-4">
        <h1 className="md:text-6xl text-4xl font-bold">Settings</h1>
        <p className="md:text-lg text-sm">
          Manage your articles and account settings here.
        </p>
      </header>
    </Container>
  );
}
