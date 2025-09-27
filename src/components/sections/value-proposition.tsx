"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState('connect');

  const tabs = [
    { id: 'connect', label: 'Seamless integration', number: '1', subtitle: 'Connect your application without engineering effort, import all flows from your existing application and start experimenting.' },
    { id: 'create', label: 'Endless customization', number: '2', subtitle: 'Luanch experiments at scale, create flows, A/n tests and optimize for everything.' },
    { id: 'monitor', label: 'Effortless monitoring', number: '3', subtitle: 'Track performance, monitor outcomes and reach maximum impact for every feature and every flow.' }
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
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">{tab.label}</h3>
                    <p className={`text-sm mt-1 ${
                      activeTab === tab.id ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {tab.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Content */}
          {activeTab === 'create' ? (
            <div className="bg-emphasis border border-gray-200 rounded-xl overflow-hidden">
              <video
                key={activeTab}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video_create.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : activeTab === 'connect' ? (
            <div className="bg-emphasis border border-gray-200 rounded-xl overflow-hidden">
              <video
                key={activeTab}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/connect.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="bg-emphasis border border-gray-200 rounded-xl overflow-hidden">
              <video
                key={activeTab}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/monitor.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}