"use client";

import React from 'react';

const DemoVideoSection = () => {
  return (
    <section className="py-12 lg:py-20 xl:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
            Product Demo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance] mb-4">
            See Pipeguru in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how forward-thinking companies build and optimize their in-app user funnels without engineering bottlenecks.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-[500px] object-cover"
              controls
              preload="metadata"
            >
              <source src="/FINAL_DEMO_HIDDE.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Optional: Add some decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-green rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-green rounded-full opacity-30"></div>
        </div>

        {/* Optional: Add a CTA below the video */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">
            Ready to reduce your CAC by 25%?
          </p>
          <a
            href="/book-call"
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
          >
            Talk to a founder
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
