"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Github,
  } from "lucide-react";

export const FOOTER_LINKS = [
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/harini-1597",
    },
  ];

export const LandingFooter = () => {
  return (
    <nav className="p-8 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image src="/logo.png" alt="Logo" fill />
        </div>
      </Link>
      <div className="text-white text-[15px]">
        &copy; <span className="font-bold">Trip Plan</span>{" "}
        {new Date().getFullYear()}. All rights reserved.
      </div>

      <div className="flex items-center gap-x-4 text-white">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            target="_blank"
            rel="noreferrer noopener"
            title={link.name}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </nav>
  );
};