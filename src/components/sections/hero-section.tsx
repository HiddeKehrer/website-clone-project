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
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col items-center text-center space-y-6 z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No engineers needed</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-[56px] font-normal leading-tight text-balance">
              Speed up your growth experiments
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
          <div className="relative w-full max-w-[600px] aspect-[4/3] mx-auto mt-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gray-100 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center z-[1]">
              <Image
                alt="Phone mockup showing e-commerce store design"
                width={380}
                height={600}
                className="w-auto h-auto max-w-[70%] max-h-[110%] object-contain drop-shadow-lg"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-074268-peek-insights-hero-5.jpg?"
              />
            </div>
            <Image
              alt="Conversion Rate Increase Metric: +18%"
              width={177}
              height={152}
              className="absolute -top-2 right-0 sm:right-4 w-[140px] h-auto sm:w-[177px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/cro-increase-3-2.svg?"
            />
            <Image
              alt="Add to Cart Metric: +21%"
              width={155}
              height={140}
              className="absolute top-[35%] -left-6 sm:left-4 w-[120px] h-auto sm:w-[155px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/add-to-cart-4-3.svg?"
            />
            <Image
              alt="Brandgrowth metric"
              width={206}
              height={55}
              className="absolute bottom-12 -right-2 sm:right-4 w-[160px] h-auto sm:w-[206px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/brandgrowth-2-4.svg?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;