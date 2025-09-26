import React from 'react';
import Image from 'next/image';
import { Star, TrendingUp, Lightbulb } from 'lucide-react';
import { Target } from 'lucide-react'; // Using Target as a substitute for Focus icon

const testimonials = [
  {
    name: "Olivia Zorzut",
    title: "Co-founder, The Fox Tan",
    quote: "Pipeguru has helped our startup tremendously. Thanks to their timely efforts, we've seen a successful increase in online sales and performance across our entire platform. Pipeguru truly is amazing at what they do!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-565755-olivia-20.jpeg?",
  },
  {
    name: "Grace Armstrong",
    title: "Founder, Begin to Arrive",
    quote: "Pipeguru team are fantastic eCommerce designers and CRO specialists. They has also gone above and beyond and have been an important part of my business's growth and success. It is great to have them in my corner.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-848252-grace-21.jpeg?",
  },
  {
    name: "Lizzie Waley",
    title: "Co-founder, Sundae Body",
    quote: "Pipeguru is incredibly accommodating and flexible and goes above and beyond to deliver on a brief. They are an asset as a business partner to any company!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-253059-lizzie-22.jpeg?",
  },
];

const bannerItems = [
  { text: "Optimize & Convert", icon: Target }, // Using Target as Focus icon is not in lucide
  { text: "Maximize ROI", icon: TrendingUp },
  { text: "Actionable Insights", icon: Lightbulb },
];

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials" className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center bg-emphasis border border-gray-200 rounded-full px-4 py-2 text-sm font-medium gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span>Trusted by Top Brands</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight [text-wrap:balance]">
              Helping brands like yours exceed conversion goals
            </h2>
          </div>
          <div className="mt-12 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-emphasis border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col justify-between h-full">
                  <p className="text-lg leading-relaxed font-light flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <Image
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      src={testimonial.image}
                      className="rounded-full object-cover w-14 h-14"
                    />
                    <div>
                      <p className="font-heading text-lg font-medium">{testimonial.name}</p>
                      <p className="text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 md:py-6">
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {bannerItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`first-${index}`} className="bg-emphasis flex items-center gap-x-3 rounded-full border border-gray-200 px-6 py-3 mx-4 flex-shrink-0">
                  <Icon className="h-5 w-5 " />
                  <span className="font-body text-lg font-medium ">{item.text}</span>
                </div>
              );
            })}
            {bannerItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`second-${index}`} className="bg-emphasis flex items-center gap-x-3 rounded-full border border-gray-200 px-6 py-3 mx-4 flex-shrink-0">
                  <Icon className="h-5 w-5 " />
                  <span className="font-body text-lg font-medium ">{item.text}</span>
                </div>
              );
            })}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;