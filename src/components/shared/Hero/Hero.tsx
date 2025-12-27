import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 cosmic-bg">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover Your Life Path
              <br />
              <span className="text-gradient">Through Numerology</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
              Unlock the secrets hidden in your name and birth date. Explore your
              Mulank, Destiny Number, and Lu Shu Grid to understand your true
              potential and life purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/calculator" className="btn-primary inline-flex items-center justify-center gap-2">
                Calculate Your Numbers
                <span>✨</span>
              </Link>
              <Link href="/about" className="btn-outline inline-flex items-center justify-center gap-2">
                Learn How It Works
                <span>→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">10K+</div>
                <div className="text-sm text-white/60 mt-1">Readings Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">98%</div>
                <div className="text-sm text-white/60 mt-1">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient">5K+</div>
                <div className="text-sm text-white/60 mt-1">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-56 h-56 bg-accent-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
