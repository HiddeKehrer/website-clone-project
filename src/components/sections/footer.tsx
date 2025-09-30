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
    <footer className="bg-gray-50 border-t border-gray-200">
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
              href="/book-call"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 py-2 bg-black text-white hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200"
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
                href="/book-call"
                onClick={handleLinkClick}
                className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 bg-black text-white hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200"
              >
                Talk to a founder
              </Link>
            </nav>
          </div>
        )}

        <div className="border-t border-gray-200 pt-8 mt-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left side - Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Pipeguru. All rights reserved.
              </p>
            </div>
            
            {/* Right side - Legal Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2">
              <Link 
                href="/legal/terms" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/legal/privacy" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/legal/imprint" 
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}