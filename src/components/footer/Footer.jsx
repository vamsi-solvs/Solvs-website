"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white mt-20">
      <div className="flex flex-col items-center justify-center py-10 px-6 text-center space-y-6">
        {/* Copyright + Policy */}
        <p className="text-sm md:text-base tracking-wide">
          Copyright © {new Date().getFullYear()} All rights reserved{" "}
          <span className="mx-2">|</span>
          <Link
            href="/privacy"
            className="hover:underline hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6">
          <Link
            href="#"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/officeofarchitecture/"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            aria-label="X"
            className="hover:opacity-80 transition-opacity"
          >
            <X className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            aria-label="YouTube"
            className="hover:opacity-80 transition-opacity"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        {/* Separator */}
        <div className="w-32">
          <Separator />
        </div>

        {/* Design credit */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Designed and developed by{" "}
          <Link
            href="https://www.solvs.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Solvs
          </Link>
        </p>
      </div>
    </footer>
  );
}