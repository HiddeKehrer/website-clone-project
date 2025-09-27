import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const BenefitsSection = () => {
  const diagonalStripes =
    'bg-[repeating-linear-gradient(-45deg,theme(colors.border),theme(colors.border)_1px,transparent_1px,transparent_16px)]';

  return (
    <section id="benefits" className="py-20 lg:py-[120px] px-4 space-y-10">
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full">
          <Sparkles className="w-4 h-4" />
          Benefits
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight [text-wrap:balance]">
          Transform your e-commerce <br className="hidden sm:block" />
          site with a CRO audit.
        </h2>
      </div>

      <div className="container mx-auto space-y-4 max-w-6xl">
        {/* Card 1: Uncover hidden conversion killers */}
        <div className=" border border-border bg-emphasis rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
          <div className="space-y-4 p-2 md:p-4">
            <h3 className="font-heading text-2xl md:text-3xl font-normal leading-tight [text-wrap:balance]">
              No more
              <br />
              <span className="relative inline-block">
                engineering effort
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-black -mb-1"></span>
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Become independent, start experimenting and get insights in the blink of an eye.
            </p>
          </div>
          <div className={`relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden ${diagonalStripes}`}>
            <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
              <Image
                alt="CRO Uplift Chart"
                width={202}
                height={102}
                className="absolute top-1/2 -translate-y-[calc(50%_+_50px)] right-4 z-10 w-36 md:w-44 lg:w-48"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/cro-uplift-14-14.svg?"
              />
              <div className="relative p-2 md:p-3 w-full max-w-md mx-auto">
                <div className="bg-gray-800 p-2 rounded-2xl shadow-lg w-full aspect-[4/3]">
                  <div className="w-full h-full  rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Increase AOV and boosting brand trust */}
        <div className=" border border-border rounded-xl bg-emphasis flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
          <div className={`relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden ${diagonalStripes}`}>
            <div className="relative h-full flex items-center justify-center p-3 md:p-4">
              <Image
                alt="AOV Chart"
                width={197}
                height={116}
                className="absolute bottom-6 left-4 z-10 w-36 md:w-44 lg:w-48"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/aov-chart-15-15.svg?"
              />
              <div className="absolute top-6 right-6 z-20">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-[#C5F29B] transform translate-x-1 translate-y-1"></div>
                  <Image
                    alt="Profile"
                    width={80}
                    height={80}
                    className="relative rounded-full border border-border "
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/images/next-664726-profile-image-16.jpg?"
                  />
                </div>
              </div>
              <div className="overflow-hidden border border-border rounded-lg w-full max-w-sm aspect-square">
                 {/* Placeholder for missing image */}
                 <div className="w-full h-full bg-muted object-cover"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4 p-2 md:p-4 lg:pl-10">
            <h3 className="font-heading text-2xl md:text-3xl text-primary font-normal leading-tight [text-wrap:balance]">
              Increase AOV and boosting brand trust
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Optimize product recommendations to help boost average order value (AOV). Enhance user experience, streamline checkout, and build trust to foster customer loyalty and repeat business.
            </p>
          </div>
        </div>

        {/* Card 3: Reduce acquisition costs */}
        <div className=" border border-border bg-emphasis rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
          <div className="space-y-4 p-2 md:p-4">
            <h3 className="font-heading text-2xl md:text-3xl text-primary font-normal leading-tight [text-wrap:balance]">
              Reduce
              <br />
              <span className="relative inline-block">
                acquisition costs
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-accent -mb-1"></span>
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Maximize the value of existing traffic and ad spend. We’ll help streamline the customer journey, leading to higher conversion rates and lower acquisition costs per customer.
            </p>
          </div>
          <div className={`relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden ${diagonalStripes}`}>
            <div className="relative h-full flex items-center justify-end p-3 md:p-4 pr-8">
              <Image
                alt="ROAS Chart"
                width={191}
                height={150}
                className="absolute top-8 left-4 z-10 w-36 md:w-44 lg:w-48"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/roas-chart-16-16.svg?"
              />
              <div className="relative w-[150px] md:w-[180px]">
                <div className="bg-gray-800 p-1.5 rounded-3xl shadow-lg w-full aspect-[9/19.5]">
                  <div className="w-full h-full  rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;