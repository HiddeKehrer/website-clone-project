import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 lg:py-24 overflow-x-clip">
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
      <div className="container mx-auto px-4 max-w-[1200px] relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 z-10 order-2 lg:order-1">
            <h1 className="font-['Playfair_Display'] text-[#1A1A1A] text-5xl md:text-[56px] font-normal leading-tight text-balance">
              Actionable insights to help your store convert more
            </h1>
            <p className="font-['Inter'] text-lg text-[#666666] max-w-lg text-balance">
              Get a clear action plan to boost your website conversions through smarter UX, design, and messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/free-audit/"
                className="bg-black text-white px-7 py-3.5 rounded-lg font-medium text-base hover:opacity-90 transition-opacity block text-center"
              >
                Get your FREE Audit
              </Link>
              <Link
                href="#pricing"
                className="bg-white text-black border border-gray-300 px-7 py-3.5 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors block text-center"
              >
                View Audit Pricing
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-[550px] aspect-square mx-auto order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#f5f5f5] rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center z-[1]">
              <Image
                alt="Phone mockup showing e-commerce store design"
                width={380}
                height={600}
                className="w-auto h-auto max-w-[70%] max-h-[110%] object-contain drop-shadow-lg"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-074268-peek-insights-hero-5.jpg?"
              />
            </div>
            <Image
              alt="Conversion Rate Increase Metric: +18%"
              width={177}
              height={152}
              className="absolute -top-2 right-0 sm:right-4 w-[140px] h-auto sm:w-[177px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/cro-increase-3-2.svg?"
            />
            <Image
              alt="Add to Cart Metric: +21%"
              width={155}
              height={140}
              className="absolute top-[35%] -left-6 sm:left-4 w-[120px] h-auto sm:w-[155px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/add-to-cart-4-3.svg?"
            />
            <Image
              alt="Brandgrowth metric"
              width={206}
              height={55}
              className="absolute bottom-12 -right-2 sm:right-4 w-[160px] h-auto sm:w-[206px] z-[2]"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/brandgrowth-2-4.svg?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;