import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/shared/Hero';
import { FeatureCard } from '@/components/shared/FeatureCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Explore Your Numerology Profile
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Discover the power of numbers and unlock insights about your
                personality, destiny, and life path
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="🔢"
                title="Mulank Number"
                description="Your driver number reveals your core personality traits, natural talents, and how you approach life's challenges."
                color="purple"
              />
              <FeatureCard
                icon="⭐"
                title="Destiny Number"
                description="Understand your life purpose, goals, and the path you're meant to follow based on your full name."
                color="blue"
              />
              <FeatureCard
                icon="🎯"
                title="Lu Shu Grid"
                description="A powerful 3x3 grid analysis revealing your strengths, weaknesses, and areas of development."
                color="gold"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">How It Works</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Get your personalized numerology reading in 3 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white">Enter Your Details</h3>
                <p className="text-white/70">
                  Provide your full name and date of birth in our secure
                  calculator
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white">Calculate Your Numbers</h3>
                <p className="text-white/70">
                  Our algorithm instantly calculates your Mulank, Destiny, and
                  Lu Shu Grid
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-gold to-accent-rose rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white">Get Your Reading</h3>
                <p className="text-white/70">
                  Receive detailed insights, interpretations, and guidance for
                  your life path
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-3xl p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Discover Your Numbers?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Start your numerology journey today and unlock the wisdom hidden
                in your name and birth date
              </p>
              <a href="/calculator" className="btn-secondary inline-block">
                Calculate Now ✨
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
