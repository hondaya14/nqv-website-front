"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function MainNav() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <span className="hidden pl-5 font-bold sm:inline-block">hondaya</span>
        </Link>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );
}