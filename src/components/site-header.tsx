import Link from "next/link";
import { MainNav } from "@/src/components/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" >
      <div className="flex h-16 items-center justify-center mr-2">
        <MainNav />
      </div>
    </header>
  );
}