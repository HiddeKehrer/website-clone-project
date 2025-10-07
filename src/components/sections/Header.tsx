"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa] transition-all duration-300 ${isScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="w-full px-8 py-5">
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

            {/* Centered Navigation */}
            <nav className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-body text-base font-normal hover:text-gray-600 transition-colors flex items-center gap-1 py-2">
                  Solutions
                  <svg 
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      href="/solutions/marketing-teams"
                      className="flex items-center gap-3 px-4 py-3 font-body text-sm font-normal text-gray-700 hover:bg-gray-50 hover:text-black transition-colors group"
                    >
                      <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center group-hover:border-black transition-colors">
                        <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></div>
                      </div>
                      For Marketing Teams
                    </Link>
                    <Link
                      href="/solutions/product-teams"
                      className="flex items-center gap-3 px-4 py-3 font-body text-sm font-normal text-gray-700 hover:bg-gray-50 hover:text-black transition-colors group"
                    >
                      <div className="w-5 h-5 border border-gray-300 rounded-sm flex items-center justify-center group-hover:border-black transition-colors">
                        <div className="w-2 h-2 border border-gray-400 group-hover:border-black transition-colors"></div>
                      </div>
                      For Product Teams
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="#benefits"
                className="font-body text-base font-normal hover:text-gray-600 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="font-body text-base font-normal hover:text-gray-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#comparison"
                className="font-body text-base font-normal hover:text-gray-600 transition-colors"
              >
                Comparison
              </a>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/docs"
                className="font-body text-base font-normal hover:text-gray-600 transition-colors"
              >
                Docs
              </Link>
              <Link 
                href="/book-call"
                className="font-body bg-black text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 items-center gap-2 group inline-flex"
              >
                Talk to a founder
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Solutions Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="flex items-center justify-between w-full py-2 font-body text-base font-normal text-gray-700 hover:text-black transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileSolutionsOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    href="/solutions/marketing-teams"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 py-2 font-body text-sm font-normal text-gray-600 hover:text-black transition-colors"
                  >
                    <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>
                    For Marketing Teams
                  </Link>
                  <Link
                    href="/solutions/product-teams"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 py-2 font-body text-sm font-normal text-gray-600 hover:text-black transition-colors"
                  >
                    <div className="w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 border border-gray-400"></div>
                    </div>
                    For Product Teams
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/docs"
              onClick={closeMobileMenu}
              className="block py-2 font-body text-base font-normal text-gray-700 hover:text-black transition-colors"
            >
              Docs
            </Link>
            <a
              href="#benefits"
              onClick={closeMobileMenu}
              className="block py-2 font-body text-base font-normal text-gray-700 hover:text-black transition-colors"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              onClick={closeMobileMenu}
              className="block py-2 font-body text-base font-normal text-gray-700 hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#comparison"
              onClick={closeMobileMenu}
              className="block py-2 font-body text-base font-normal text-gray-700 hover:text-black transition-colors"
            >
              Comparison
            </a>

            {/* Mobile CTA Button */}
            <Link
              href="/book-call"
              onClick={closeMobileMenu}
              className="inline-flex items-center gap-2 font-body bg-black text-white px-6 py-3 rounded-lg font-medium text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group mt-4"
            >
              Talk to a founder
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 