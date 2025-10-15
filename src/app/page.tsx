import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/hero-section';
import TrustedBrands from '@/components/sections/trusted-brands';
import DemoVideoSection from '@/components/sections/demo-video-section';
import ValueProposition from '@/components/sections/value-proposition';
import DynamicInlineWidgets from '@/components/sections/dynamic-inline-widgets';
import BenefitsSection from '@/components/sections/benefits-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WhatsIncluded from '@/components/sections/whats-included';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import HowItWorks from '@/components/sections/how-it-works';
import PricingSection from '@/components/sections/pricing-section';
import ComparisonSection from '@/components/sections/comparison-section';
import FaqSection from '@/components/sections/faq-section';
import FooterCta from '@/components/sections/footer-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen frame-layout pt-20">
      <div className="section-frame no-border">
        <Header />
      </div>
      <div className="section-frame">
        <HeroSection />
      </div>
      <div className="section-frame">
        <TrustedBrands />
      </div>
      <div className="section-frame">
        <DemoVideoSection />
      </div>
      <div className="section-frame">
        <ValueProposition />
      </div>
      {/* <div className="section-frame">
        <DynamicInlineWidgets />
      </div> */}
      <div className="section-frame">
        <BenefitsSection />
      </div>
      {/* <div className="section-frame">
        <TestimonialsSection />
      </div>
      <div className="section-frame">
        <WhatsIncluded />
      </div> */}
      {/* <div className="section-frame">
        <PortfolioShowcase />
      </div> */}
      {/* <div className="section-frame">
        <HowItWorks />
      </div> */}
      <div className="section-frame">
        <PricingSection />
      </div>
      <div className="section-frame">
        <ComparisonSection />
      </div>
      <div className="section-frame">
        <FaqSection />
      </div>
      <div className="section-frame">
        <FooterCta />
      </div>
      <div className="section-frame">
        <Footer />
      </div>
    </main>
  );
}