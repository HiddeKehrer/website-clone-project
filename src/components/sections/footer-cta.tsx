import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const FooterCta = () => {
  return (
    <section className="relative bg-emphasis text-center py-20 px-4 overflow-hidden">
      {/* Grid background pattern - same as hero section */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(229, 231, 235) 1px, transparent 1px), linear-gradient(to bottom, rgb(229, 231, 235) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 60%, transparent 100%)',
          opacity: 0.3,
        }}
      />
      
      <div className="relative space-y-6 z-10">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-normal">Ready to reduce your CAC by 25%?</h2>
          <p className="text-gray-600 text-lg">
            Join forward-thinking companies that run 10x more experiments without engineering bottlenecks.
          </p>
        </div>
        <Link
          href="/book-call"
          className="inline-flex items-center justify-center gap-2 bg-black text-white text-base font-medium py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
        >
          Get started
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <p className="text-sm text-gray-500">
          Founder-led onboarding • First experiment live in 30 mins • No engineering required
        </p>
      </div>
    </section>
  );
};

export default FooterCta;