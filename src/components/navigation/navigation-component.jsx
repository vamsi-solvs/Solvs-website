"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname(); // ✅ Built-in Next.js hook
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-2", {
      "bg-transparent": isHome,
      "bg-white dark:bg-black": !isHome,
    })}>
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-medium text-[48px] tracking-wider hover:opacity-80 transition-opacity z-50",
            isHome ? "text-white" : "text-gray-900 dark:text-white"
          )}
        >
          <img src="/logo.png" alt="Office of Architecture Logo" className="w-32" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
                <ul className="flex items-center gap-12">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "font-normal text-[24px] tracking-wide transition-opacity",
                            isHome
                              ? "text-white hover:opacity-80"
                              : pathname.startsWith(item.href)
                              ? "text-gray-900 dark:text-white"
                              : "text-[#888888] hover:text-gray-900 dark:hover:text-white"
                          )}>
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
                className={cn(
                  "z-50",
                  isHome ? "text-white" : "text-gray-900 dark:text-white"
                )}
                aria-label="Toggle menu"
              >
                <Menu className="h-10 w-10" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 dark:bg-black/95 border-none w-full h-full flex flex-col"
            >
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex items-center justify-between p-6">
                <Link
                  href="/"
                  className="text-white text-4xl tracking-wider"
                  onClick={() => setOpen(false)}
                >
                  OFA
                </Link>
                <button
                  className="text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-8 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-white text-3xl tracking-wide transition-opacity",
                      pathname === item.href
                        ? "opacity-100 font-bold"
                        : "opacity-80 hover:opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="p-6 text-center text-white/50">
                <p>&copy; {new Date().getFullYear()} OFA</p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Link href="#" className="hover:text-white">
                    IG
                  </Link>
                  <Link href="#" className="hover:text-white">
                    TW
                  </Link>
                  <Link href="#" className="hover:text-white">
                    LI
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
