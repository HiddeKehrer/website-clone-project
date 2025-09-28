"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = ["Spicehack", "Product cards", "Re-Fresh", "Sundae", "Cart"];

const portfolioContent = {
  Spicehack: {
    beforeImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-362158-spicehack-before-26.jpg?",
    afterImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-768815-spicehack-after-27.jpg?",
    annotations: [
      { id: 1, top: "22%", left: "30%" },
      { id: 2, top: "45%", left: "18%" },
      { id: 3, top: "68%", left: "50%" },
      { id: 4, top: "82%", left: "42%" },
    ],
    insights: [
      {
        id: 1,
        text: "Announcement bar creates immediate awareness of promotions, incentivizing purchases.",
      },
      {
        id: 2,
        text: "New headline shifts focus from product to benefits.",
      },
      {
        id: 3,
        text: "Lifestyle image provides context, appeals to emotions, and showcases potential uses of the product.",
      },
      {
        id: 4,
        text: "Star rating adds immediate social proof, building trust and credibility.",
      },
    ],
  },
  "Product cards": null,
  "Re-Fresh": null,
  Sundae: null,
  Cart: null,
};

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("Spicehack");
  const activeContent = portfolioContent[activeTab as keyof typeof portfolioContent];

  return (
    <section className="bg-[#F7F7F7] py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-200 border border-green-400/30">
            Visualized CRO
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-black font-normal leading-tight [text-wrap:balance]">
            See the full picture with conversion-focused designs
          </h2>
          <p className="text-text-gray text-lg mt-4 max-w-2xl mx-auto">
            Your audit includes redesigns for 10 key areas on your site, aimed to improve user engagement.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-primary-black text-white"
                  : " text-primary-black border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeContent && (
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] lg:gap-12 gap-8 items-start">
            <div className="relative">
              <div className="grid grid-cols-2 gap-px  border border-gray-300 rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                  <Image
                    src={activeContent.beforeImage}
                    alt={`${activeTab} Before`}
                    width={550}
                    height={1085}
                    className="w-full h-auto object-cover"
                  />
                  <span className="absolute top-4 left-4 /90 text-black text-xs font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={activeContent.afterImage}
                    alt={`${activeTab} After`}
                    width={550}
                    height={1085}
                    className="w-full h-auto object-cover"
                  />
                  <span className="absolute top-4 left-4 /90 text-black text-xs font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
                    After
                  </span>
                  {activeContent.annotations.map((ann) => (
                    <div
                      key={ann.id}
                      style={{ top: ann.top, left: ann.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7  border-2 border-black rounded-full flex items-center justify-center font-bold text-sm text-black"
                    >
                      {ann.id}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pt-4">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-primary-black">Sample insights</h3>
              <div className="space-y-5">
                {activeContent.insights.map((insight) => (
                  <div key={insight.id} className="flex items-start gap-4">
                    <span className="flex-shrink-0 font-semibold text-text-gray w-6 text-left">
                      - {insight.id}
                    </span>
                    <p className="text-text-gray flex-1">
                      {insight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;