"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingMain = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="h-4/5 content-center">
    <div className="text-emerald-100 font-bold py-48 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Your All-in-One Destination for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
          <TypewriterComponent
            options={{
              strings: [
                "Weather Conditions",
                "Where to Go",
                "Image Search",
                "Local News",
                "Directions",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
        Plan your next trip seamlessly.
      </div>

      <div className="pt-6 pb-12">
        <Button
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-green-500 via-green-600 to-green-700"
          asChild
        >
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            Start Generating For Free
          </Link>
        </Button>
      </div>

      <br></br>
    </div>
    </div>
  );
};