import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-10">
            {/* Main Heading */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-in-up">
              Discover Your Life Path
              <br />
              <span className="text-gradient inline-block mt-2">Through Numerology</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up reveal-2">
              Unlock the secrets hidden in your name and birth date. Explore your
              Mulank, Destiny Number, and Lu Shu Grid to understand your true
              potential and life purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 animate-fade-in-up reveal-3">
              <Link href="/calculator" className="btn-primary inline-flex items-center justify-center gap-3 text-lg">
                Calculate Your Numbers
                <span className="text-2xl">✨</span>
              </Link>
              <Link href="/about" className="btn-outline inline-flex items-center justify-center gap-3 text-lg">
                Learn How It Works
                <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up reveal-4">
              <div className="text-center lg:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">10K+</div>
                <div className="text-sm text-white/60 tracking-wide">Readings Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">98%</div>
                <div className="text-sm text-white/60 tracking-wide">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">5K+</div>
                <div className="text-sm text-white/60 tracking-wide">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Atmospheric Orbs */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            <div className="absolute w-96 h-96 bg-gradient-to-br from-primary/30 via-accent-emerald/20 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute w-80 h-80 bg-gradient-to-br from-secondary/30 via-accent-amber/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-72 h-72 bg-gradient-to-br from-accent-violet/25 via-accent-rose/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

            {/* Geometric overlay */}
            <div className="relative glass-strong rounded-[3rem] p-16 w-[400px] h-[400px] flex items-center justify-center animate-scale-in">
              <div className="text-center space-y-4">
                <div className="font-display text-8xl font-bold text-gradient">108</div>
                <p className="text-white/60 text-sm tracking-widest uppercase">Sacred Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
