'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/footer';
import { ArrowUpRight } from 'lucide-react';

export default function MarketingTeamsPage() {
  return (
    <>
      <div className="min-h-screen frame-layout pt-20">
        {/* Header */}
        <div className="section-frame no-border">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="section-frame">
          <section className="relative py-20 lg:py-24 overflow-x-clip hero-section">
            {/* Background grid pattern */}
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
            
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <span className="inline-flex items-center gap-2 bg-white border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full">
                    <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    Marketing Teams
                  </span>
                  
                  <div>
                    <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-tight text-balance mb-6">
                     Move faster, learn more
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                      For CMOs who need to hit CAC and conversion targets fast. Run independent experiments without waiting for engineering sprints.
                    </p>
                    
                    {/* Action Button */}
                    <a 
                      href="/book-call"
                      className="inline-flex items-center gap-2 font-body bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
                    >
                      Talk to a founder
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                {/* Right Column - Simple Card */}
                <div className="lg:pl-8">
                  <div className="bg-[#F1F8FA] rounded-2xl border border-gray-200 shadow-sm min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-6">
                     <Image
                       src="/product-teams.png"
                       alt="Product Teams Dashboard"
                       width={400}
                       height={300}
                       className="w-full h-auto max-w-sm object-contain shadow-lg"
                     />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Benefits Cards */}
        <div className="section-frame">
          <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4 max-w-6xl space-y-4">
              
              {/* Card 1: CAC Reduction */}
              <div className="border border-gray-200 bg-white rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-5 p-3 lg:p-4">
                <div className="space-y-3 sm:space-y-4 p-2 md:p-4">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal leading-tight">
                    Hit Your CAC Targets
                    <br />
                    <span className="relative inline-block">
                      Faster
                      <span className="absolute left-0 bottom-0 h-[3px] w-full bg-gray-200 -mb-1"></span>
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stop waiting on dev teams to optimize your funnel. As a CMO, you need direct control over conversion optimization to meet your P&L commitments.
                  </p>
                </div>
                <div className="relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden bg-[repeating-linear-gradient(-45deg,theme(colors.border),theme(colors.border)_1px,transparent_1px,transparent_16px)]">
                  <div className="relative h-full flex items-center justify-center p-3 md:p-4">
                       <div className="overflow-hidden border border-border rounded-lg w-full max-w-xs aspect-square">
                         <video
                           className="w-full h-full object-cover"
                           autoPlay
                           loop
                           muted
                           playsInline
                         >
                           <source src="/lower_CAC.mp4" type="video/mp4" />
                           Your browser does not support the video tag.
                         </video>
                       </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Increase Conversion */}
              <div className="border border-gray-200 bg-white rounded-xl flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
                <div className="relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden bg-[repeating-linear-gradient(-45deg,theme(colors.border),theme(colors.border)_1px,transparent_1px,transparent_16px)]">
                  <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
                    <div className="relative w-full max-w-md mx-auto">
                      <div className="rounded-2xl w-full aspect-[4/3] overflow-hidden">
                        <video
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/conversion.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-2 md:p-4 lg:pl-10">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal leading-tight">
                    Increase
                    <br />
                    <span className="relative inline-block">
                      Conversion
                      <span className="absolute left-0 bottom-0 h-[3px] w-full bg-gray-200 -mb-1"></span>
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Optimize every step of your funnel with rapid A/B testing. Drive higher conversion rates through data-driven experiments that deliver measurable results.
                  </p>
                </div>
              </div>

              {/* Card 3: No Dev Dependencies */}
              <div className="border border-gray-200 bg-white rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-4 sm:gap-5 p-3 lg:p-4">
                <div className="space-y-3 sm:space-y-4 p-2 md:p-4">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-normal leading-tight">
                    No More Dev
                    <br />
                    <span className="relative inline-block">
                      Dependencies
                      <span className="absolute left-0 bottom-0 h-[3px] w-full bg-gray-200 -mb-1"></span>
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Break free from engineering bottlenecks. CMOs get complete autonomy to test, iterate, and optimize without sprint planning or dev resources.
                  </p>
                </div>
                <div className="relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden bg-[repeating-linear-gradient(-45deg,theme(colors.border),theme(colors.border)_1px,transparent_1px,transparent_16px)]">
                  <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
                    <div className="relative w-full max-w-md mx-auto">
                      <div className="rounded-2xl w-full aspect-[4/3] overflow-hidden">
                        <video
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/Experimentation_time_bold.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="section-frame">
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-normal mb-6">
                Ready to accelerate your marketing growth?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join marketing teams who've reduced their CAC by 25% while increasing experiment velocity.
              </p>
              <a 
                href="/book-call"
                className="inline-flex items-center gap-2 font-body bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
              >
                Talk to a founder
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="section-frame">
          <Footer />
        </div>
      </div>
    </>
  );
}
