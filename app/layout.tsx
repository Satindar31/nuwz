import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Header from "@/components/page/Header";

export const metadata: Metadata = {
  title: "Nuwz - A personalized news web-app",
  description:
    "Nuwz is a personalized news web-app that allows you to read news personalised to your interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontFamily: "Inter, sans-serif",
          fontWeight: {
            bold: 500,
            normal: 400,
          },
        },
      }}
    >
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
