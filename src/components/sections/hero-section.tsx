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
    <section className="relative py-20 lg:py-24 overflow-x-clip hero-section">
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
      {/* Top blur overlay - only affects the grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(248, 249, 250, 0.8) 0%, rgba(248, 249, 250, 0.4) 25%, transparent 50%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 25%, transparent 50%)',
        }}
      />
      
      {/* Animated growth chart arrow */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Define the path for the arrow to follow */}
          <path id="arrowPath" d="M 80 720 L 160 680 L 240 640 L 320 620 L 400 600 L 480 580 L 560 520 L 640 480 L 720 500 L 800 460 L 880 420 L 960 380 L 1040 320 L 1120 120" />
        </defs>
        
        {/* Trail line */}
        <path
          d="M 80 720 L 160 680 L 240 640 L 320 620 L 400 600 L 480 580 L 560 520 L 640 480 L 720 500 L 800 460 L 880 420 L 960 380 L 1040 320 L 1120 120"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeDasharray="1500"
          strokeDashoffset="1500"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: 'drawTrail 4s ease-in-out 1s forwards',
          }}
        />
        
        {/* Anchor points */}
        <circle cx="80" cy="720" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 1.2s forwards' }} />
        <circle cx="160" cy="680" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 1.4s forwards' }} />
        <circle cx="240" cy="640" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 1.6s forwards' }} />
        <circle cx="320" cy="620" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 1.8s forwards' }} />
        <circle cx="400" cy="600" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 2.0s forwards' }} />
        <circle cx="480" cy="580" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 2.2s forwards' }} />
        <circle cx="560" cy="520" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 2.4s forwards' }} />
        <circle cx="640" cy="480" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 2.6s forwards' }} />
        <circle cx="720" cy="500" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 2.8s forwards' }} />
        <circle cx="800" cy="460" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 3.0s forwards' }} />
        <circle cx="880" cy="420" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 3.2s forwards' }} />
        <circle cx="960" cy="380" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 3.4s forwards' }} />
        <circle cx="1040" cy="320" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 3.6s forwards' }} />
        <circle cx="1120" cy="120" r="4" fill="#10b981" opacity="0" style={{ animation: 'dotAppear 0.3s ease-in-out 3.8s forwards' }} />
        
      </svg>
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
                href="/book-call"
                className="bg-black text-white px-7 py-3.5 rounded-lg font-medium text-base flex items-center justify-center gap-2 w-[240px] hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
              >
                More {currentText}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;