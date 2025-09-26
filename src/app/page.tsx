import HeroSection from '@/components/sections/hero-section';
import TrustedBrands from '@/components/sections/trusted-brands';
import ValueProposition from '@/components/sections/value-proposition';
import BenefitsSection from '@/components/sections/benefits-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WhatsIncluded from '@/components/sections/whats-included';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';
import HowItWorks from '@/components/sections/how-it-works';
import PricingSection from '@/components/sections/pricing-section';
import FaqSection from '@/components/sections/faq-section';
import FooterCta from '@/components/sections/footer-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedBrands />
      <ValueProposition />
      <BenefitsSection />
      <TestimonialsSection />
      <WhatsIncluded />
      <PortfolioShowcase />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <FooterCta />
      <Footer />
    </main>
  );
}