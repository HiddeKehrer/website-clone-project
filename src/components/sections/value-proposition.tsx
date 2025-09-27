"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ValueProposition() {
  const [activeTab, setActiveTab] = useState('connect');

  const tabs = [
    { id: 'connect', label: 'Connect', number: '1', subtitle: 'Connect your application without engineering effort, import all flows from your existing application and start experimenting.', videoSrc: '/connect.mp4' },
    { id: 'create', label: 'Create', number: '2', subtitle: 'Launch experiments at scale, create flows, A/n tests and optimize for everything.', videoSrc: '/video_create.mp4' },
    { id: 'monitor', label: 'Monitor', number: '3', subtitle: 'Track performance, monitor outcomes and reach maximum impact for every feature and every flow.', videoSrc: '/monitor.mp4' }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="cro-intro" className="relative z-[1] py-12 lg:py-20 xl:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance] mb-4">
            Understand your users
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We enable all non-technical teams to experiment in the blink of an eye.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Tabs */}
          <div className="flex flex-col justify-start space-y-4">
            {tabs.map((tab) => (
              <div key={tab.id}>
                <button
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
                      <h3 className="font-heading text-xl font-normal leading-tight">{tab.label}</h3>
                      <p className={`text-sm mt-1 ${
                        activeTab === tab.id ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {tab.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right side - Content (Desktop only) */}
          {activeTabData && (
            <div className="hidden lg:block bg-emphasis border border-gray-200 rounded-xl overflow-hidden">
              <video key={activeTab} className="w-full h-auto" autoPlay loop muted playsInline>
                <source src={activeTabData.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}