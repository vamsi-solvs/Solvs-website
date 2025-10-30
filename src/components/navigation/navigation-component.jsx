"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const navItems = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname(); // ✅ Built-in Next.js hook
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8", {
      "bg-transparent": isHome,
      "bg-white dark:bg-black": !isHome,
    })}>
      <nav className="flex items-center justify-between">
        {/* ✅ Correct use of Link for Next.js */}
        <Link
          href="/"
          className="text-black dark:text-white text-4xl md:text-5xl font-light tracking-wider hover:opacity-80 transition-opacity z-50"
        >
          OFA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-black dark:text-white text-xl font-light tracking-wide hover:opacity-80 transition-opacity",
                    pathname === item.href && "opacity-80"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="text-black dark:text-white z-50"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 dark:bg-black/95 border-white/10 backdrop-blur-sm w-[300px] sm:w-[400px] [&>button]:hidden"
            >
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-white text-3xl font-light tracking-wide hover:opacity-80 transition-opacity",
                      pathname === item.href && "opacity-80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
