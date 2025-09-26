import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ValueProposition() {
  return (
    <section id="cro-intro" className="relative z-[1] py-12 lg:py-20 xl:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2">
          <div className="bg-accent p-6 pt-10 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
            <div className="mb-4 lg:mb-6">
              <Image
                alt="Magnifying glass illustration"
                width={90}
                height={90}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f0fd0230-87af-4e85-a01e-87798d9c0878-peekinsights-clone-vercel-app/assets/svgs/magnifying-glass-13-13.svg?"
              />
            </div>
            <h2 className="font-heading text-[32px] md:text-[36px] xl:text-[40px] leading-tight text-accent-foreground [text-wrap:balance]">
              Get valuable insights to increase your conversions, average order
              value and build brand trust.
            </h2>
          </div>

          <div className="p-6 pt-10 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Turn your website visitors into happy customers. We analyze your
              store, identify friction points, and craft a plan to improve
              conversions tailor made for your brand.
            </p>
            <div className="pt-2">
              <Link
                href="/free-audit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-primary-foreground font-medium rounded-lg px-6 py-4 text-base transition-colors hover:bg-neutral-800"
              >
                Get your FREE Audit
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}