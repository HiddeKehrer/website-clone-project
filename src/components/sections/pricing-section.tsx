"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

type Currency = 'usd' | 'aud';

interface Feature {
  title: string;
  description: string;
}

const pricingData = [
  {
    tier: "Free Bite-sized Audit",
    cardStyle: "bg-gray-100",
    headerContent: <p className="text-sm text-gray-500">No credit card required</p>,
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/package-1-icon-20-20.svg?",
    description: "Get a quick win. We'll redesign 1 section of your site and provide three insights to improve conversions.",
    price: { usd: 0, aud: 0 },
    priceSubtitle: <p className="font-semibold text-gray-700">No Obligations</p>,
    delivery: "Delivered in 2 days",
    ctaPrimary: { text: "Get Your FREE Audit", href: "https://peekinsights.co/free-audit/" },
    ctaSecondary: { text: "Book a call", href: "https://calendly.com/hello-peekinsights/30min" },
    features: [
      "1x conversion-focused redesign of a section on your website",
      "3x quick improvements to enhance your site's UX",
      "Completely Free - No obligations",
    ],
  },
  {
    tier: "Basic CRO Audit",
    cardStyle: "bg-white",
    headerContent: <span className="text-xs font-semibold uppercase tracking-wider bg-black text-white px-2.5 py-1 rounded-full">NEW</span>,
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/package-2-icon-21-21.svg?",
    description: "Choose 2x pages on your website and we'll provide insights to help improve conversions.",
    price: { usd: 295, aud: 445 },
    delivery: "Delivered in 3-4 days",
    ctaPrimary: { text: "Order Basic CRO", href: "https://peekinsights.co/basic-cro-audit-order/" },
    ctaSecondary: { text: "Book a call", href: "https://calendly.com/hello-peekinsights/30min" },
    features: [
      {
        title: "2x page audit",
        description: "Choose two pages on your website and we'll identifying strengths, weaknesses, and opportunities for improvement."
      },
      {
        title: "4x Section redesigns, optimized to boost conversions",
        description: "We'll redesign 4x essential areas of your website..."
      },
      {
        title: "15+ actionable checklist",
        description: "You'll receive a comprehensive checklist of actionable steps..."
      }
    ]
  },
  {
    tier: "Essential CRO Audit",
    cardStyle: "border-2 border-primary-green bg-white",
    headerContent: <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-primary-green text-black text-sm font-medium px-4 py-1.5 rounded-full">Best Value</span>,
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/package-3-icon-22-22.svg?",
    description: "Receive a comprehensive audit with actionable insights to transform your website's performance.",
    price: { usd: 975, aud: 1475 },
    originalPrice: { usd: 1450, aud: 2150 },
    delivery: "Limited time pricing - Delivered in 2 weeks",
    ctaPrimary: { text: "Order Essential CRO", href: "https://peekinsights.co/cro-audit-order/" },
    ctaSecondary: { text: "Book a call", href: "https://calendly.com/hello-peekinsights/30min" },
    features: [
      {
        title: "In-depth website review",
        description: "We'll analyze the customer journey on your home, collection, product, and cart pages..."
      },
      {
        title: "10x Section redesigns, optimized to boost conversions",
        description: "We'll redesign ten essential areas of your website..."
      },
      {
        title: "40+ Actionable fixes checklist",
        description: "You'll receive a comprehensive checklist of 40+ actionable steps..."
      }
    ]
  }
];

const PricingSection = () => {
  const [currency, setCurrency] = useState<Currency>('usd');

  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-primary-black [text-wrap:balance]">
            CRO audits to unlock growth
          </h2>
          <p className="mt-4 text-text-gray">
            30-Day money-back guarantee.
          </p>
          <p className="mt-1 text-text-gray">
            Exposes common pain points and unlock hidden conversion killers.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-200 p-1">
            <button
              onClick={() => setCurrency('usd')}
              className={`px-6 py-1.5 rounded-md text-sm font-medium transition-colors ${currency === 'usd' ? 'bg-white shadow-sm text-primary-black' : 'text-text-gray hover:bg-gray-100'}`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('aud')}
              className={`px-6 py-1.5 rounded-md text-sm font-medium transition-colors ${currency === 'aud' ? 'bg-white shadow-sm text-primary-black' : 'text-text-gray hover:bg-gray-100'}`}
            >
              AUD
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-6">
          {pricingData.map((plan, index) => (
            <div key={index} className={`rounded-2xl border p-8 flex flex-col h-full relative ${plan.cardStyle} ${index === 2 ? 'lg:mt-[-20px]' : ''}`}>
              <div className="h-8 flex items-center">{plan.headerContent}</div>

              <div className="mt-6 flex-grow">
                <div className="flex justify-center h-[56px] items-center">
                  <Image src={plan.icon} alt={`${plan.tier} icon`} width={56} height={56} unoptimized />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-center text-primary-black h-16">{plan.tier}</h3>
                <p className="mt-4 text-center text-text-gray min-h-[80px]">{plan.description}</p>
                
                <div className="mt-8 text-center min-h-[120px]">
                  {plan.priceSubtitle && <div className="mb-2">{plan.priceSubtitle}</div>}
                  {plan.originalPrice && (
                    <p className="text-xl text-gray-400 line-through">
                      ${plan.originalPrice[currency].toLocaleString()}
                    </p>
                  )}
                  <p className="font-heading text-5xl text-primary-black">
                    {plan.price[currency] === 0 ? '$0' : `$${plan.price[currency].toLocaleString()}`}
                    {plan.price.usd > 0 && <span className="text-lg ml-2 uppercase font-sans font-medium text-gray-500">{currency}</span>}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{plan.delivery}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a href={plan.ctaPrimary.href} className="w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  {plan.ctaPrimary.text}
                </a>
                <a href={plan.ctaSecondary.href} className="w-full text-center bg-white text-black border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  {plan.ctaSecondary.text}
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <ul className="space-y-4">
                  {(plan.features as Array<string | Feature>).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-green flex-shrink-0 mt-1" />
                      <div>
                        {typeof feature === 'string' ? (
                          <span className="text-text-gray">{feature}</span>
                        ) : (
                          <>
                            <strong className="font-semibold text-primary-black">{feature.title}</strong>
                            <p className="text-sm text-text-gray mt-1">{feature.description}</p>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-text-gray">
          Need a custom quote? Or like to discuss before making up your mind, please{' '}
          <a href="https://peekinsights.co/contact-us/" className="underline hover:text-primary-black transition-colors">
            contact us
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;