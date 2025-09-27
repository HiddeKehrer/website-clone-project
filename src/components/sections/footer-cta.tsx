import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const FooterCta = () => {
  return (
    <section className="relative bg-emphasis text-center py-20 px-4 overflow-hidden">
      {/* Blurred logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ mixBlendMode: 'multiply' }}>
        <Image
          src="/logo.svg"
          alt=""
          width={1000}
          height={220}
          className="opacity-[0.12]"
          style={{ filter: 'blur(8px) grayscale(100%)', transform: 'scale(1.5)' }}
          aria-hidden="true"
        />
      </div>
      
      <div className="relative space-y-6 z-10">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-normal">Ready to reduce your CAC by 25%?</h2>
          <p className="text-gray-600 text-lg">
            Join forward-thinking companies that run 10x more experiments without engineering bottlenecks.
          </p>
        </div>
        <Link
          href="/free-audit"
          className="inline-flex items-center justify-center gap-2 bg-black text-white text-base font-medium py-4 px-8 rounded-lg transition-colors hover:bg-gray-800 group"
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