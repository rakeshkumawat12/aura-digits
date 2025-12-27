import { Navbar } from '@/components/layout/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 cosmic-bg">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              About <span className="text-gradient">Aura Digits</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Unlock the ancient wisdom of numerology and discover the hidden meanings in your name and birth date
            </p>
          </div>
        </section>

        {/* What is Numerology */}
        <section className="px-4 py-16 bg-bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
              <h2 className="text-4xl font-bold text-white text-center mb-8">
                What is Numerology?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    Numerology is an ancient metaphysical science that studies the mystical relationship between numbers and life events. It reveals patterns and insights about your personality, destiny, and life path through the analysis of numbers derived from your name and birth date.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Dating back thousands of years to ancient civilizations including Babylon, Egypt, and Greece, numerology has been used by scholars, mystics, and spiritual seekers to gain deeper understanding of themselves and the universe.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    The practice gained significant recognition through the work of Greek mathematician Pythagoras, who believed that numbers are the building blocks of the universe and that each number carries a unique vibration and meaning.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Today, numerology continues to help millions of people worldwide discover their strengths, overcome challenges, and align with their true purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Numbers Explained */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-white text-center">
              Understanding Your Numbers
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mulank */}
              <div className="glass-strong rounded-3xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center text-3xl mb-4">
                  🔢
                </div>
                <h3 className="text-2xl font-bold text-white">Mulank (Driver Number)</h3>
                <p className="text-white/70">
                  Your Mulank is calculated from your birth date and represents your core personality, natural talents, and the energy that drives you through life. It reveals how you approach challenges and interact with the world.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Reveals your core traits</li>
                  <li>• Shows natural abilities</li>
                  <li>• Indicates life approach</li>
                </ul>
              </div>

              {/* Destiny Number */}
              <div className="glass-strong rounded-3xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl flex items-center justify-center text-3xl mb-4">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-white">Destiny Number</h3>
                <p className="text-white/70">
                  Calculated from your full name, your Destiny Number reveals your life purpose, ultimate goals, and the path you are meant to follow. It shows what you are meant to achieve in this lifetime.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Your life mission</li>
                  <li>• Career guidance</li>
                  <li>• Long-term goals</li>
                </ul>
              </div>

              {/* Lu Shu Grid */}
              <div className="glass-strong rounded-3xl p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-gold to-accent-rose rounded-2xl flex items-center justify-center text-3xl mb-4">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white">Lu Shu Grid</h3>
                <p className="text-white/70">
                  An ancient Chinese numerology system that creates a 3x3 grid from your birth date. It provides a comprehensive analysis of your strengths, weaknesses, and areas for personal development.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Identifies strengths</li>
                  <li>• Highlights growth areas</li>
                  <li>• Balances energies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Can Help */}
        <section className="px-4 py-16 bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white text-center">
              How Numerology Can Help You
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Self-Discovery & Awareness</h3>
                <p className="text-white/70">
                  Gain deeper insights into your personality, motivations, and behavior patterns. Understand why you react certain ways and what drives your decisions.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Career & Life Path Guidance</h3>
                <p className="text-white/70">
                  Discover your natural talents and ideal career paths. Align your professional choices with your life purpose for greater fulfillment and success.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Relationship Compatibility</h3>
                <p className="text-white/70">
                  Understand relationship dynamics better by comparing numerology profiles. Learn how to communicate more effectively with partners, friends, and family.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Personal Growth & Development</h3>
                <p className="text-white/70">
                  Identify areas for improvement and personal growth. Use numerology insights to overcome challenges and develop your full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="glass-strong rounded-2xl p-6 group">
                <summary className="text-xl font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  Is numerology scientifically proven?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Numerology is a metaphysical practice, not a hard science. While it is not scientifically proven in the traditional sense, it has been practiced for thousands of years and many people find value in its insights for self-reflection and personal growth.
                </p>
              </details>

              <details className="glass-strong rounded-2xl p-6 group">
                <summary className="text-xl font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  How accurate is numerology?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">
                  The accuracy of numerology is subjective and depends on personal interpretation. Many users report that numerology readings resonate deeply with their experiences. It is best used as a tool for self-reflection rather than absolute prediction.
                </p>
              </details>

              <details className="glass-strong rounded-2xl p-6 group">
                <summary className="text-xl font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  What information do I need for a reading?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">
                  You need your full legal name as it appears on official documents and your complete birth date including day, month, and year. This information is used to calculate your core numbers.
                </p>
              </details>

              <details className="glass-strong rounded-2xl p-6 group">
                <summary className="text-xl font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  Can my numbers change over time?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Your core numbers based on your birth name and date remain constant. However, if you legally change your name, this can introduce new energies into your numerology profile. Additionally, different cycles in numerology may be more prominent at different life stages.
                </p>
              </details>

              <details className="glass-strong rounded-2xl p-6 group">
                <summary className="text-xl font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  Is my data secure?
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Yes, we take your privacy seriously. Your personal information is encrypted and never shared with third parties. We only use it to calculate your numerology numbers and provide you with personalized insights.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-3xl p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-white/70">
                Discover the power of numerology and unlock insights about your life path
              </p>
              <a href="/calculator" className="btn-secondary inline-block">
                Get Your Free Reading ✨
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
