import { Navbar } from '@/components/layout/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 mystical-bg">
        {/* Hero Section */}
        <section className="px-4 py-24 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white animate-fade-in-up tracking-tight">
              About <span className="text-gradient">Aura Digits</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up reveal-2">
              Unlock the ancient wisdom of numerology and discover the hidden meanings in your name and birth date
            </p>
          </div>
        </section>

        {/* What is Numerology */}
        <section className="px-4 py-20 bg-bg-secondary/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="glass-strong rounded-[2rem] p-10 md:p-16 space-y-10 card-glow">
              <h2 className="font-display text-5xl md:text-6xl font-semibold text-white text-center mb-8 tracking-tight">
                What is Numerology?
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-white/75 leading-relaxed text-lg">
                    Numerology is an ancient metaphysical science that studies the mystical relationship between numbers and life events. It reveals patterns and insights about your personality, destiny, and life path through the analysis of numbers derived from your name and birth date.
                  </p>
                  <p className="text-white/75 leading-relaxed text-lg">
                    Dating back thousands of years to ancient civilizations including Babylon, Egypt, and Greece, numerology has been used by scholars, mystics, and spiritual seekers to gain deeper understanding of themselves and the universe.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-white/75 leading-relaxed text-lg">
                    The practice gained significant recognition through the work of Greek mathematician Pythagoras, who believed that numbers are the building blocks of the universe and that each number carries a unique vibration and meaning.
                  </p>
                  <p className="text-white/75 leading-relaxed text-lg">
                    Today, numerology continues to help millions of people worldwide discover their strengths, overcome challenges, and align with their true purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Numbers Explained */}
        <section className="px-4 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white text-center tracking-tight">
              Understanding Your Numbers
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mulank */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary-light to-accent-emerald rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-lg shadow-primary/20">
                  🔢
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Mulank</h3>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase">Driver Number</p>
                <p className="text-white/70 leading-relaxed">
                  Your Mulank is calculated from your birth date and represents your core personality, natural talents, and the energy that drives you through life.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Reveals your core traits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Shows natural abilities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Indicates life approach
                  </li>
                </ul>
              </div>

              {/* Destiny Number */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary via-accent-amber to-secondary-light rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-lg shadow-secondary/20">
                  ⭐
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Destiny Number</h3>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase">Life Purpose</p>
                <p className="text-white/70 leading-relaxed">
                  Calculated from your full name, your Destiny Number reveals your life purpose, ultimate goals, and the path you are meant to follow.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Your life mission
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Career guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Long-term goals
                  </li>
                </ul>
              </div>

              {/* Lu Shu Grid */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-violet via-accent-rose to-accent-amber rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-lg shadow-accent-violet/20">
                  🎯
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Lu Shu Grid</h3>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase">Energy Matrix</p>
                <p className="text-white/70 leading-relaxed">
                  An ancient Chinese numerology system that creates a 3x3 grid from your birth date, revealing your strengths and growth areas.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                    Identifies strengths
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                    Highlights growth areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                    Balances energies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Can Help */}
        <section className="px-4 py-24 bg-bg-secondary/30 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white text-center tracking-tight">
              How Numerology Can Help You
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-[1.75rem] p-8 hover:-translate-y-2 transition-all duration-500 group border-l-4 border-primary/40">
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-gradient transition-all">
                  Self-Discovery & Awareness
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Gain deeper insights into your personality, motivations, and behavior patterns. Understand why you react certain ways and what drives your decisions.
                </p>
              </div>

              <div className="glass rounded-[1.75rem] p-8 hover:-translate-y-2 transition-all duration-500 group border-l-4 border-secondary/40">
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-gradient-bronze transition-all">
                  Career & Life Path Guidance
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Discover your natural talents and ideal career paths. Align your professional choices with your life purpose for greater fulfillment and success.
                </p>
              </div>

              <div className="glass rounded-[1.75rem] p-8 hover:-translate-y-2 transition-all duration-500 group border-l-4 border-accent-emerald/40">
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-gradient transition-all">
                  Relationship Compatibility
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Understand relationship dynamics better by comparing numerology profiles. Learn how to communicate more effectively with partners, friends, and family.
                </p>
              </div>

              <div className="glass rounded-[1.75rem] p-8 hover:-translate-y-2 transition-all duration-500 group border-l-4 border-accent-violet/40">
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-gradient transition-all">
                  Personal Growth & Development
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Identify areas for improvement and personal growth. Use numerology insights to overcome challenges and develop your full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white text-center mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              <details className="glass-strong rounded-[1.5rem] p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <summary className="font-display text-xl md:text-2xl font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  Is numerology scientifically proven?
                  <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-primary">+</span>
                </summary>
                <p className="text-white/70 mt-6 leading-relaxed text-lg">
                  Numerology is a metaphysical practice, not a hard science. While it is not scientifically proven in the traditional sense, it has been practiced for thousands of years and many people find value in its insights for self-reflection and personal growth.
                </p>
              </details>

              <details className="glass-strong rounded-[1.5rem] p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <summary className="font-display text-xl md:text-2xl font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  How accurate is numerology?
                  <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-primary">+</span>
                </summary>
                <p className="text-white/70 mt-6 leading-relaxed text-lg">
                  The accuracy of numerology is subjective and depends on personal interpretation. Many users report that numerology readings resonate deeply with their experiences. It is best used as a tool for self-reflection rather than absolute prediction.
                </p>
              </details>

              <details className="glass-strong rounded-[1.5rem] p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <summary className="font-display text-xl md:text-2xl font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  What information do I need for a reading?
                  <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-primary">+</span>
                </summary>
                <p className="text-white/70 mt-6 leading-relaxed text-lg">
                  You need your full legal name as it appears on official documents and your complete birth date including day, month, and year. This information is used to calculate your core numbers.
                </p>
              </details>

              <details className="glass-strong rounded-[1.5rem] p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <summary className="font-display text-xl md:text-2xl font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  Can my numbers change over time?
                  <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-primary">+</span>
                </summary>
                <p className="text-white/70 mt-6 leading-relaxed text-lg">
                  Your core numbers based on your birth name and date remain constant. However, if you legally change your name, this can introduce new energies into your numerology profile. Additionally, different cycles in numerology may be more prominent at different life stages.
                </p>
              </details>

              <details className="glass-strong rounded-[1.5rem] p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <summary className="font-display text-xl md:text-2xl font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  Is my data secure?
                  <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-primary">+</span>
                </summary>
                <p className="text-white/70 mt-6 leading-relaxed text-lg">
                  Yes, we take your privacy seriously. Your personal information is encrypted and never shared with third parties. We only use it to calculate your numerology numbers and provide you with personalized insights.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong rounded-[2rem] p-12 md:p-16 text-center space-y-8 card-glow relative overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-accent-violet/20 to-accent-emerald/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="font-display text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light mb-8">
                  Discover the power of numerology and unlock insights about your life path
                </p>
                <a href="/calculator" className="btn-secondary inline-block text-lg">
                  Get Your Free Reading
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
