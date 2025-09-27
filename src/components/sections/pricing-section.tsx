"use client";

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const pricingData = [
  {
    tier: "Early Access Plan",
    cardStyle: "border-2 border-primary-green",
    headerContent: <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-primary-green text-white text-sm font-medium px-4 py-1.5 rounded-full">7 spots left</span>,
    icon: "/laurel-wreath.svg",
    description: "Join our early access program and get founder-led support to build and optimize your in-app user funnels.",
    priceSubtitle: <p className="font-semibold text-gray-700">Custom Pricing</p>,
    delivery: "Get a personalized quote for your business needs.",
    ctaPrimary: { text: "Talk to a founder", href: "#contact" },
    features: [
      "AI Assistant to build funnels",
      "Unlimited funnels, A/B Tests and embedded experience",
      "Dynamic funnels & conditional logic",
      "All current & future integrations",
      "Unlimited team members",
      "Founder-led onboarding & support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-normal [text-wrap:balance]">
            Early Access Pricing
          </h2>
          <p className="mt-4 text-lg text-text-gray">
            Join us as an early partner and help shape the future of in-app experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:max-w-lg md:mx-auto">
          {pricingData.map((plan, index) => (
            <div key={index} className={`bg-emphasis rounded-2xl border border-gray-200 p-8 flex flex-col h-full relative ${plan.cardStyle}`}>
              <div className="h-8 flex items-center">{plan.headerContent}</div>

              <div className="mt-6 flex-grow">
                <div className="flex justify-center h-[56px] items-center">
                  <Image src={plan.icon} alt={`${plan.tier} icon`} width={56} height={56} unoptimized />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-center h-16 text-[#171717]">{plan.tier}</h3>
                <p className="mt-4 text-center min-h-[60px]">{plan.description}</p>
                
                <div className="mt-8 text-center min-h-[80px]">
                  {plan.priceSubtitle && <div className="mb-2">{plan.priceSubtitle}</div>}
                  <p className="mt-2 text-sm text-gray-500">{plan.delivery}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a href={plan.ctaPrimary.href} className="w-full text-center bg-black text-white px-6 py-3.5 rounded-lg font-bold text-base">
                  {plan.ctaPrimary.text}
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="font-semibold text-center mb-4">What's included:</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                      <div>
                        <span>{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;