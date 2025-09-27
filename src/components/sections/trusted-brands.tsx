import React from 'react';

const logos = [
  { src: "/antler.svg", alt: "Antler" },
  { src: "/wafrow.svg", alt: "wafrow.com" },
  { src: "/eve.webp", alt: "witheve.ai" },
  { src: "/lumi.svg", alt: "lumi.education" },
];

const LogoCarouselContent = () => (
  <>
    {logos.map((logo) => (
      <div key={logo.alt} className="px-10 lg:px-14">
        <img src={logo.src} alt={logo.alt} title={logo.alt} className="h-6 w-auto max-w-none md:h-7" />
      </div>
    ))}
  </>
);

const TrustedBrands = () => {
    return (
        <section className="bg-emphasis">
            <div className="mx-auto flex max-w-[1200px] items-center gap-x-2 px-4 lg:gap-x-4">
                <h2 className="flex-shrink-0 pb-0 text-sm font-heading text-black">
                    Trusted by
                </h2>
                <div className="relative flex-1 overflow-hidden bg-white py-6 md:py-8">
                    <div className="flex">
                        <div className="flex min-w-full flex-shrink-0 items-center justify-center">
                            <LogoCarouselContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;