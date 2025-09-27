"use client";

import { Check, X, Sparkles } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    { 
      category: 'Experimentation speed', 
      inhouse: { text: 'Months to quarters', color: 'bg-red-400' }, 
      agency: { text: 'Weeks', color: 'bg-orange-400' }, 
      tools: { text: 'Weeks', color: 'bg-yellow-400' }, 
      pipeguru: { text: 'Minutes', color: 'bg-green-500' } 
    },
    { 
      category: 'Engineering Cost', 
      inhouse: { text: 'Very High', color: 'bg-red-500' }, 
      agency: { text: 'Medium', color: 'bg-orange-400' }, 
      tools: { text: 'High', color: 'bg-red-300' }, 
      pipeguru: { text: 'One-time', color: 'bg-green-500' } 
    },
    { 
      category: 'Personalization capability', 
      inhouse: { text: 'Complex', color: 'bg-red-400' }, 
      agency: { text: 'Basic', color: 'bg-red-300' }, 
      tools: { text: 'Basic', color: 'bg-red-300' }, 
      pipeguru: { text: 'Deep, Dynamic', color: 'bg-green-500' } 
    },
    { 
      category: 'Strategic Control', 
      inhouse: { text: 'Very High', color: 'bg-green-400' }, 
      agency: { text: 'High', color: 'bg-green-300' }, 
      tools: { text: 'Medium', color: 'bg-yellow-400' }, 
      pipeguru: { text: 'Very High', color: 'bg-green-500' } 
    },
    { 
      category: 'Experimentation culture', 
      inhouse: { text: 'Slow', color: 'bg-red-400' }, 
      agency: { text: 'Minimal', color: 'bg-red-500' }, 
      tools: { text: 'Medium', color: 'bg-yellow-400' }, 
      pipeguru: { text: 'Fast, controlled', color: 'bg-green-500' } 
    },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-[120px] px-4 space-y-10">
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full">
          <Sparkles className="w-4 h-4" />
          Comparison
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance]">
          Why choose us over <br className="hidden sm:block" />
        <span className="italic">competition</span> or <span className="font-bold">alternatives</span>?
        </h2>
      </div>

      <div className="container mx-auto space-y-4 max-w-6xl">

        {/* Comparison Card */}
        <div className="border-2 border-gray-200 bg-emphasis rounded-xl shadow-sm relative mt-6 overflow-visible">
          {/* Badge positioned outside the table */}
          <div className="absolute -top-3 right-0 w-1/5 flex justify-center z-30 whitespace-nowrap">
            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              BEST CHOICE
            </span>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-white border-b border-border overflow-visible rounded-t-xl">
            <div className="p-3 lg:p-5 text-center rounded-tl-xl flex items-center justify-center min-h-[60px]">
              <h3 className="font-heading text-base font-semibold text-black">Category</h3>
            </div>
            <div className="p-3 lg:p-5 text-center border-l border-border flex items-center justify-center min-h-[60px]">
              <h3 className="font-heading text-base font-semibold text-black">Inhouse/Manual</h3>
            </div>
            <div className="p-3 lg:p-5 text-center border-l border-border flex items-center justify-center min-h-[60px]">
              <h3 className="font-heading text-base font-semibold text-black">CRO Agency</h3>
            </div>
            <div className="p-3 lg:p-5 text-center border-l border-border flex items-center justify-center min-h-[60px]">
              <h3 className="font-heading text-base font-semibold text-black">A/B testing tools</h3>
            </div>
             <div className="p-3 lg:p-5 text-center border-l border-border bg-green-50/50 rounded-tr-xl flex items-center justify-center min-h-[60px]">
               <h3 className="font-heading text-base font-semibold text-black">Pipeguru</h3>
             </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} ${index !== comparisons.length - 1 ? 'border-b border-border' : ''} ${index === comparisons.length - 1 ? 'rounded-b-xl overflow-hidden' : ''}`}
            >
              <div className={`p-3 lg:p-5 flex items-center ${index === comparisons.length - 1 ? 'rounded-bl-xl' : ''}`}>
                <span className="text-gray-700 font-medium text-xs leading-relaxed">{item.category}</span>
              </div>
              <div className="p-3 lg:p-5 border-l border-border flex items-center justify-center text-center">
                <div className="flex items-center gap-1.5 w-full justify-center bg-gray-50/50 rounded-md py-1.5 px-2">
                  <div className={`w-2 h-2 ${item.inhouse.color} rounded-full flex-shrink-0`}></div>
                  <span className="text-gray-600 text-xs leading-relaxed">{item.inhouse.text}</span>
                </div>
              </div>
              <div className="p-3 lg:p-5 border-l border-border flex items-center justify-center text-center">
                <div className="flex items-center gap-1.5 w-full justify-center bg-gray-50/50 rounded-md py-1.5 px-2">
                  <div className={`w-2 h-2 ${item.agency.color} rounded-full flex-shrink-0`}></div>
                  <span className="text-gray-600 text-xs leading-relaxed">{item.agency.text}</span>
                </div>
              </div>
              <div className="p-3 lg:p-5 border-l border-border flex items-center justify-center text-center">
                <div className="flex items-center gap-1.5 w-full justify-center bg-gray-50/50 rounded-md py-1.5 px-2">
                  <div className={`w-2 h-2 ${item.tools.color} rounded-full flex-shrink-0`}></div>
                  <span className="text-gray-600 text-xs leading-relaxed">{item.tools.text}</span>
                </div>
              </div>
               <div className={`p-3 lg:p-5 border-l border-border flex items-center justify-center text-center bg-green-50/50 ${index === comparisons.length - 1 ? 'rounded-br-xl' : ''}`}>
                 <div className="flex items-center gap-1.5 w-full justify-center">
                   <div className={`w-2 h-2 ${item.pipeguru.color} rounded-full flex-shrink-0`}></div>
                   <span className="text-black font-medium text-xs leading-relaxed">{item.pipeguru.text}</span>
                 </div>
               </div>
            </div>
          ))}

        </div>
        
        {/* Centered CTA */}
        <div className="flex justify-center pt-6">
          <a
            href="/free-audit"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-lg font-medium text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 shadow-sm"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
