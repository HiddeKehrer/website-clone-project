import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

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
          Transform the way <br className="hidden sm:block" />
          you run experiments
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
              Become independent, start experimenting and get insights in the blink of an eye. No more new app releases. Just reduced time to experimentation.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
            >
              Start experimenting
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className={`relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden ${diagonalStripes}`}>
            <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
              <Image
                alt="More Experiments"
                width={202}
                height={102}
                className="absolute top-1/2 -translate-y-[calc(100%_+_80px)] right-2 z-10 w-36 md:w-44 lg:w-48"
                src="/more_experiments.png"
              />
              <div className="relative p-2 md:p-3 w-full max-w-md mx-auto">
                <div className="p-2 rounded-2xl w-full aspect-[4/3] overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/Experimentation_time_bold.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
                alt="Minus 25%"
                width={197}
                height={116}
                className="absolute bottom-1 left-3 z-10 w-36 md:w-44 lg:w-48"
                src="/minus_25.png"
              />
              <div className="overflow-hidden border border-border rounded-lg w-full max-w-sm aspect-square">
                 <video
                   className="w-full h-full object-cover"
                   autoPlay
                   loop
                   muted
                   playsInline
                 >
                   <source src="/lower_CAC.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
              </div>
            </div>
          </div>
          <div className="space-y-4 p-2 md:p-4 lg:pl-10">
            <h3 className="font-heading text-2xl md:text-3xl text-primary font-normal leading-tight [text-wrap:balance]">
             Build a culture of experimentation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Get unique user insights. Enable non-technical to launch experiments at scale that reduce CAC and increase conversion rates.
            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
            >
              Reduce CAC
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Card 3: Reduce acquisition costs */}
        <div className=" border border-border bg-emphasis rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-3 lg:p-4">
          <div className="space-y-4 p-2 md:p-4">
            <h3 className="font-heading text-2xl md:text-3xl text-primary font-normal leading-tight [text-wrap:balance]">
            Design 1:1
              <br />
              <span className="relative inline-block">
              personalized user funnels
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-accent -mb-1"></span>
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            Match your user's journey to your advertising spend and create personalized user funnels that reduce CAC and increase conversion rates.            </p>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium rounded-lg px-6 py-3 text-base hover:shadow-lg hover:shadow-black/25 hover:scale-105 transition-all duration-200 group"
            >
              Get started
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className={`relative w-full aspect-square lg:aspect-auto self-stretch rounded-lg overflow-hidden ${diagonalStripes}`}>
            <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
              <Image
                alt="Opportunity"
                width={180}
                height={140}
                className="absolute top-1 left-0 z-10 w-32 md:w-44 lg:w-48"
                src="/opportunity.png"
              />
              <div className="relative p-2 md:p-3 w-full max-w-md mx-auto">
                <div className="p-2 rounded-2xl w-full aspect-[4/3] overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/last_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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