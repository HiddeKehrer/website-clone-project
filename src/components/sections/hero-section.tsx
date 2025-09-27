"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['experiments', 'conversions', 'growth'];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = words[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <section className="relative py-20 lg:py-24 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px), linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 60%, transparent 100%)',
          opacity: 0.3,
        }}
      />
      <div className="container mx-auto px-4 max-w-[1200px] relative">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          <div className="flex flex-col items-center text-center space-y-6 z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No engineers needed</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-[56px] font-normal leading-tight text-balance">
              Speed up in-app growth experiments
            </h1>
            <p className="font-['Inter'] text-lg max-w-2xl text-balance">
            Launch AI powered onboarding flows, in-app messages, and A/B tests without new app releases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/free-audit/"
                className="bg-black text-white px-7 py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 w-[240px]"
              >
                More {currentText}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;