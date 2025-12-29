'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Hero() {
  const [particles, setParticles] = useState<
    Array<{
      left: string;
      top: string;
      delay: string;
      duration: string;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    // Generate particles on client-side only to avoid hydration mismatch
    const generatedParticles = [...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      opacity: 0.2 + Math.random() * 0.5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        {/* Subtle depth effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Rotating Sign Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
          {/* SignCircle.png with rotation animation */}
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] animate-spin-slow opacity-30">
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
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up mb-8">
          Unlock Your Life's
          <br />
          <span className="text-gradient inline-block mt-2">
            Hidden Numbers
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up mb-12"
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
          <Link
            href="/calculator"
            className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-10 py-4 shadow-[0_0_30px_rgba(13,148,136,0.3)] hover:shadow-[0_0_40px_rgba(13,148,136,0.5)] transition-all duration-300"
          >
            Reveal
            {/* <span className="text-2xl">✨</span> */}
          </Link>
        </div>
      </div>

      {/* Background ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </section>
  );
}
