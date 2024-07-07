"use client";

import { useAuth } from "@clerk/nextjs";
import { Github } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image src="/logo.png" alt="Logo" fill />
        </div>

        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          TripPlan
        </h1>
      </Link>

      <div className="flex items-center gap-x-4">
        <Button variant="ghost" className="rounded-full font-semibold bg-emerald-100" asChild>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>Sign Up</Link>
        </Button>
        <Button variant="outline" className="rounded-full font-semibold bg-emerald-100" asChild>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};