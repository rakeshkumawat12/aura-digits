"use client";

import { cn } from "@/lib/utils";
import { Calendar, FileText, Sparkles } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
type HowItWorksProps = React.HTMLAttributes<HTMLElement>

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-white/10 bg-bg-tertiary/50 backdrop-blur-sm p-5 text-white transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:bg-bg-tertiary"
    )}
  >
    {/* Icon */}
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <p className="mb-4 text-sm text-white/70">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
          </div>
          <span className="text-xs text-white/60">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * Customized for numerology readings with mystical theme.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Enter Your Details",
      description:
        "Provide your full name and date of birth in our secure calculator.",
      benefits: [
        "Simple and intuitive interface",
        "Secure data handling",
        "Quick input validation",
      ],
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Calculate Your Numbers",
      description:
        "Our algorithm instantly calculates your Mulank, Destiny, and Lu Shu Grid.",
      benefits: [
        "Ancient numerology formulas",
        "Accurate calculations",
        "Comprehensive analysis",
      ],
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Get Your Reading",
      description:
        "Receive detailed insights, interpretations, and guidance for your life path.",
      benefits: [
        "Personalized interpretations",
        "Life path guidance",
        "Downloadable PDF report",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-bg-secondary/30 backdrop-blur-sm py-12 sm:py-20", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Get your personalized numerology reading in 3 simple steps
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-6 w-full max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-primary/30"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                // Center the number within its grid column
                className="flex h-7 w-7 items-center justify-center justify-self-center rounded-full bg-primary font-semibold text-white text-sm ring-4 ring-bg-primary shadow-lg shadow-primary/30"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
