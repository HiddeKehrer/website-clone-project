"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What kind of in-app experiences can I create?",
    answer:
      "You can build a wide range of in-app experiences, such as multi-step interactive onboarding flows, user surveys, and feedback forms. You can also create in-app messages and embedded experiences that match your design system, as well as permission prompts for push notifications, camera, or location access.",
  },
  {
    question: "What platforms does pipeguru support?",
    answer:
      "We offer lightweight SDKs for easy integration with iOS (Swift), Android (Kotlin), React Native, and Flutter applications. Additionally, our founders integrate with your backend APIs and technical stack during the onboarding process to ensure a seamless setup.",
  },
  {
    question: "How can pipeguru help me improve my marketing ROI?",
    answer:
      "Pipeguru allows you to rapidly iterate and optimize your in-app messaging and user funnels. By A/B testing different approaches, you can identify the most effective strategies for converting and retaining users, directly impacting your ROI. All this without waiting on engineers or app releases.",
  },
  {
    question: "Is the pipeguru SDK difficult to integrate?",
    answer:
      "Not at all. We offer lightweight SDKs for all major mobile platforms (iOS, Android, React Native, and Flutter) that are designed for a quick and easy setup. We also provide founder-led onboarding and support to ensure a smooth integration process.",
  },
  {
    question: "How do you ensure that in-app experiences don't compromise our app's security?",
    answer:
      "Security is our top priority. All experiences built with pipeguru run in a securely sandboxed environment within our SDK. This means the code operates in a controlled, isolated container, completely separate from your app's core functionalities and sensitive user data. This architecture ensures that nothing you build can interfere with or compromise the integrity and security of your main application",
  },
  {
    question: "What happens if we launch an experiment with a negative impact?",
    answer:
      "You can instantly roll back. Every change you publish is versioned, and you have a complete history of all deployed experiences. If a new version isn't performing as expected, you can instantly roll back to any previous version with a single click from your dashboard—no app release required. This gives you full control and a safety net for all your experiments",
  },
  {
    question: "How does pipeguru impact app performance?",
    answer:
      "Our SDKs are designed to be extremely lightweight and have a minimal impact on your app's performance. Experiences are loaded dynamically, ensuring that your app remains fast and responsive",
  }, 
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-24">
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