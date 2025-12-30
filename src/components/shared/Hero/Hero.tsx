'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GradientButton } from '@/components/ui/gradient-button';

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        {/* Subtle depth effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Rotating Sign Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-3xl mx-auto flex items-center justify-center">
          {/* SignCircle.png with rotation animation */}
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] animate-spin-slow opacity-25">
            <Image
              src="/images/SignCircle.png"
              alt="Zodiac Circle"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-20 text-center">
        {/* Main Heading */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up mb-6">
          Unlock Your Life's
          <br />
          <span className="text-gradient inline-block mt-1">
            Hidden Numbers
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed font-light animate-fade-in-up mb-10"
          style={{ animationDelay: '0.2s' }}
        >
          Discover the ancient wisdom of numerology through your date of birth.
          Unveil your Mulank, Destiny Number, and Lu Shu Grid to understand your
          true potential and life purpose.
        </p>

        {/* CTA Button */}
        <div
          className="flex justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <GradientButton asChild>
            <Link href="/calculator">
              Reveal
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
