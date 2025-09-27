"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa] transition-all duration-300 ${isScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="w-full px-6 py-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="Pipeguru Home">
              <Image
                src="/logo.svg"
                alt="Pipeguru Logo"
                width={121}
                height={26}
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#benefits"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#comparison"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Comparison
              </a>
              {/* <a
                href="#testimonials"
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Testimonials
              </a> */}
            </nav>

            {/* Action Button */}
            <a 
              href="https://peekinsights.co/free-audit/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200"
            >
              Talk to a founder
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 