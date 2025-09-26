"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is a CRO audit?",
    answer:
      "A CRO (Conversion Rate Optimization) audit is a comprehensive analysis of your website to identify potential barriers that are preventing visitors from converting into customers. We look at user experience, design, messaging, and the overall customer journey to provide actionable recommendations.",
  },
  {
    question: "Why are CRO audits important?",
    answer:
      "CRO audits are crucial for maximizing the return on your existing traffic. Instead of spending more on ads to get new visitors, an audit helps you convert more of the visitors you already have. This leads to increased revenue, a better user experience, and lower customer acquisition costs.",
  },
  {
    question: "How long will it take to receive my audit?",
    answer:
      "The delivery time depends on the plan you choose. Our Free Bite-sized Audit is delivered in 2 days, the Basic CRO Audit in 3-4 days, and the comprehensive Essential CRO Audit takes approximately 2 weeks to complete.",
  },
  {
    question: "What is included in the audit?",
    answer:
      "Our audits include an in-depth analysis of key pages, conversion-focused redesign mockups, and a prioritized checklist of actionable fixes. The specifics, such as the number of pages reviewed and redesigns provided, vary depending on the audit package you select.",
  },
  {
    question: "Can you implement the recommendations mentioned in my CRO audit?",
    answer:
      "While our primary service is providing the audit and actionable recommendations, we do offer implementation services as a separate engagement. Please contact us to discuss your specific needs, and we can provide a custom quote.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We primarily work with e-commerce businesses of all sizes, from startups to established brands. Our expertise is in analyzing online stores (especially on platforms like Shopify) to improve their conversion funnels.",
  },
  {
    question: "Can you build my online store from scratch?",
    answer:
      "Our specialization is in conversion rate optimization for existing stores. While we don't typically build stores from the ground up, we can recommend trusted partners for development work or provide a CRO-focused consultation before you begin your build.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not satisfied with the quality and insights provided in your audit, you can request a full refund within 30 days of receiving your report.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-[#FDFBF8] py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-heading text-4xl text-primary-black md:text-[40px]">
            Have more questions?
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-6 text-left font-body text-lg font-normal text-primary-black hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0">
                  <p className="text-base leading-relaxed text-text-gray">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;