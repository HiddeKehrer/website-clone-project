import { Wrench } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Kickstart your optimization",
    description: "Order your CRO audit and complete a brief onboarding form. This helps us understand your brand, goals, and target audience, ensuring a tailored approach to your audit.",
  },
  {
    number: "2",
    title: "Uncover hidden opportunities",
    description: "Our team will create your audit by analysing your website's user journey to pinpoint pain points and reveal strategies for boosting conversions.",
  },
  {
    number: "3",
    title: "Receive your actionable CRO audit",
    description: "In two weeks, you'll receive a personalized audit filled with insights and recommendations to optimize your website.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-emphasis border border-gray-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          <Wrench className="w-4 h-4" />
          How it works
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-primary font-normal leading-tight text-balance">
          3 steps to better conversions
        </h2>
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-emphasis border border-border rounded-xl p-6 lg:p-8 text-center lg:text-left space-y-5 h-full">
              <p className="font-heading text-8xl text-[#DFEDCC] font-normal">
                {step.number}
              </p>
              <h3 className="font-heading text-2xl text-primary font-normal leading-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;