"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState('connect');

  const tabs = [
    { id: 'connect', label: 'Connect', number: '1' },
    { id: 'create', label: 'Create', number: '2' },
    { id: 'monitor', label: 'Monitor', number: '3' }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'connect':
        return {
          title: 'Connect to Your Data',
          description: 'Seamlessly integrate with your existing systems and data sources.',
          features: [
            'API integrations',
            'Database connections',
            'Third-party services'
          ]
        };
      case 'create':
        return {
          title: 'Create Dynamic Flows',
          description: 'Build intelligent workflows that adapt to user behavior and data.',
          features: [
            'Conditional logic',
            'Multi-step processes',
            'Custom workflows'
          ]
        };
      case 'monitor':
        return {
          title: 'Monitor Performance',
          description: 'Track and analyze the effectiveness of your flows in real-time.',
          features: [
            'Real-time analytics',
            'Performance metrics',
            'Optimization insights'
          ]
        };
      default:
        return {
          title: 'Connect to Your Data',
          description: 'Seamlessly integrate with your existing systems and data sources.',
          features: [
            'API integrations',
            'Database connections',
            'Third-party services'
          ]
        };
    }
  };

  const content = getContent();

  return (
    <section id="cro-intro" className="relative z-[1] py-12 lg:py-20 xl:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            How it works
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Tabs */}
          <div className="flex flex-col justify-center space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-lg border transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-emphasis border-black text-black'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">{tab.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{tab.label}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="bg-emphasis border border-gray-200 rounded-xl p-8">
            <h2 className="font-heading text-3xl md:text-4xl leading-tight text-black mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {content.description}
            </p>
            <ul className="space-y-3 mb-8">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold rounded-lg px-6 py-3 text-base transition-colors hover:bg-gray-800"
            >
              Learn more
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}