"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const courses = [
  { name: "GCSE and IGCSE", slug: "gcse" },
  { name: "11+", slug: "11+" , description: "coming soon" },
  { name: "A-level", slug: "a-level", description: "coming soon" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight shrink-0">
          Maths with <span className="text-blue-600">Madison</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">

              {/* Courses dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-gray-500 hover:text-gray-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2 flex flex-col">
                    {courses.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/courses/${t.slug}`}
                        className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{t.description}</p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-4 py-2 inline-block">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-4 py-2 inline-block">
                  Pricing
                </Link>
              </NavigationMenuItem>


            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Start free →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-1 text-sm bg-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-3 py-2">Courses</p>
          {courses.map((t) => (
            <Link
              key={t.slug}
              href={`/courses/${t.slug}`}
              className="flex flex-col px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              <span className="font-medium">{t.name}</span>
              <span className="text-xs text-gray-400">{t.description}</span>
            </Link>
          ))}
          <div className="border-t border-gray-100 my-2" />
          <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/pricing" className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <div className="border-t border-gray-100 my-2" />
          <Link href="/login" className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Log in</Link>
          <Link
            href="/signup"
            className="mx-3 mt-1 font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Start free →
          </Link>
        </div>
      )}
    </header>
  );
}