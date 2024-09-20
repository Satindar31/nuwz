"use client";

import TodayGrid from "@/components/news/TodayGrid";
import Container from "@/components/page/Container";
import HomePage from "@/components/page/home-page-components/HomePage";

import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if(!isLoaded) {

    return (
      <Container className="items-center justify-center pt-20">
        <Loader className="animate-spin" />
      </Container>
    );

  }

  if(!isSignedIn) {
    return (
      <HomePage />
    )
  }

  if (isSignedIn) {
    return (
      <Container>
        <TodayGrid />
      </Container>
    );
  }
}
