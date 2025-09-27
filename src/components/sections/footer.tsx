"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Benefits", href: "/#benefits" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Comparison", href: "/#comparison" },
];

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <footer className="bg-emphasis border-t border-gray-200">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-6">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Pipeguru Home">
              <Image
                src="/logo.svg"
                alt="Pipeguru Logo"
                width={121}
                height={26}
                className="h-auto"
              />
            </Link>
          </div>

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-zinc-800 hover:text-zinc-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link
              href="/free-audit"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Talk to a founder
            </Link>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col items-center gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block w-full text-center py-2 text-base text-zinc-800 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/free-audit"
                onClick={handleLinkClick}
                className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Talk to a founder
              </Link>
            </nav>
          </div>
        )}

        <div className="text-center py-6 lg:py-0 lg:pb-8 border-t border-gray-200 lg:border-none">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pipeguru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}