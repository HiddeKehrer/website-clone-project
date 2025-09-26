import React from 'react';

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-brewlander-5-5.svg?", alt: "Brewlander" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-bta-6-6.svg?", alt: "BTA" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-cheeky-bonsai-7-7.svg?", alt: "Cheeky Bonsai" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-sundae-9-8.svg?", alt: "Sundae" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-morreale-paris-9-9.svg?", alt: "Morreale Paris" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-just-enough-10-10.svg?", alt: "Just Enough" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-the-fox-tan-11-11.svg?", alt: "The Fox Tan" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/logo-omorfie-12-12.svg?", alt: "Omorfie" },
];

const LogoCarouselContent = () => (
  <>
    {logos.map((logo) => (
      <div key={logo.alt} className="px-10 lg:px-14">
        <img src={logo.src} alt={logo.alt} className="h-6 w-auto max-w-none md:h-7" />
      </div>
    ))}
  </>
);

const TrustedBrands = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-[1200px] items-center gap-x-2 px-4 lg:gap-x-4">
                <h2 className="flex-shrink-0 pb-0 text-sm font-heading text-black">
                    Trusted by <br /> top brands
                </h2>
                <div className="relative flex-1 overflow-hidden bg-white py-6 md:py-8">
                    <div className="flex">
                        <div className="animate-marquee flex min-w-full flex-shrink-0 items-center">
                            <LogoCarouselContent />
                        </div>
                        <div className="animate-marquee flex min-w-full flex-shrink-0 items-center" aria-hidden="true">
                            <LogoCarouselContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;