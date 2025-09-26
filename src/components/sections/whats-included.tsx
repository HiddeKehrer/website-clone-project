import Image from 'next/image';
import { Check } from 'lucide-react';

const includedData = [
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/icon-magnifying-glass-17-17.svg?',
    alt: 'In-depth website analysis icon',
    title: 'In-depth website analysis',
    description: 'A deep dive into your customer journey, pinpointing the strengths and weaknesses of your home, collection, product, and cart pages. Uncover hidden obstacles and untapped opportunities for maximizing conversions.',
    features: [
      'Navigation and menu audit',
      'Home page audit',
      'Collection page audit',
      'Product page audit',
      'Cart & checkout process audit',
    ],
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/icon-opacity-18-18.svg?',
    alt: 'Conversion-focused redesigns icon',
    title: 'Conversion-focused redesigns',
    description: 'Visualise the impact of conversion-focused design with before-and-after mockups of 10 key sections of your site. Get expert recommendations on how to optimize each element for higher engagement.',
    features: [
      'Redesign of 10x key sections',
      'Before-and-After Mockups',
      'Access to developer-friendly design files',
    ],
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/icon-checklist-19-19.svg?',
    alt: 'Actionable checklist icon',
    title: 'Actionable checklist',
    description: 'Get a comprehensive list of practical steps you can take right now to start improving your website\'s conversion rates. Prioritized recommendations to help you focus on the most impactful changes.',
    features: [
      'Up to 40+ actionable fixes',
      'Top 5 priority fixes list',
      'Insights for CRO, AOV and UX improvements',
    ],
  },
];

const WhatsIncluded = () => {
  return (
    <section id="whats-included" className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12 lg:mb-16">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-gray-100 text-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                What's included
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] leading-tight" style={{ textWrap: 'balance' }}>
                A personalized action plan for growth
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed lg:pt-2">
              Get a clear plan with actionable recommendations that prioritise user experience and lead to sustainable growth for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedData.map((item, index) => (
              <div key={index} className="p-8 rounded-xl border border-border">
                <Image
                  src={item.iconUrl}
                  alt={item.alt}
                  width={72}
                  height={72}
                  className="mb-6"
                />
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mt-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;