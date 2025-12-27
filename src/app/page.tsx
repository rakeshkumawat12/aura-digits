import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/shared/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mystical-bg">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6 animate-fade-in-up">
              <h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight">
                Explore Your Numerology Profile
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                Discover the power of numbers and unlock insights about your
                personality, destiny, and life path
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mulank Card */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-3 transition-all duration-500 group animate-fade-in-up reveal-1">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary-light to-accent-emerald rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-xl shadow-primary/30">
                  🔢
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Mulank Number</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Your driver number reveals your core personality traits, natural talents, and how you approach life's challenges.
                </p>
              </div>

              {/* Destiny Card */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-3 transition-all duration-500 group animate-fade-in-up reveal-2">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary via-accent-amber to-secondary-light rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-xl shadow-secondary/30">
                  ⭐
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Destiny Number</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Understand your life purpose, goals, and the path you're meant to follow based on your full name.
                </p>
              </div>

              {/* Lu Shu Grid Card */}
              <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-3 transition-all duration-500 group animate-fade-in-up reveal-3">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-violet via-accent-rose to-accent-amber rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:animate-float shadow-xl shadow-accent-violet/30">
                  🎯
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Lu Shu Grid</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  A powerful 3x3 grid analysis revealing your strengths, weaknesses, and areas of development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-28 px-4 bg-bg-secondary/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight">
                How It Works
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                Get your personalized numerology reading in 3 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6 group">
                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary via-primary-light to-accent-emerald rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-4xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-emerald rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Enter Your Details</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Provide your full name and date of birth in our secure
                  calculator
                </p>
              </div>

              <div className="text-center space-y-6 group">
                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary via-accent-amber to-secondary-light rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-secondary/40 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-4xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent-amber rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Calculate Your Numbers</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Our algorithm instantly calculates your Mulank, Destiny, and
                  Lu Shu Grid
                </p>
              </div>

              <div className="text-center space-y-6 group">
                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-violet via-accent-rose to-accent-amber rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-accent-violet/40 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-4xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-violet to-accent-amber rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <h3 className="font-display text-3xl font-semibold text-white">Get Your Reading</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Receive detailed insights, interpretations, and guidance for
                  your life path
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong rounded-[2rem] p-12 md:p-20 text-center space-y-8 card-glow relative overflow-hidden">
              {/* Decorative gradient orbs */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-accent-violet/25 to-accent-emerald/25 rounded-full blur-3xl animate-pulse-glow"></div>

              <div className="relative z-10 space-y-8">
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
                  Ready to Discover Your Numbers?
                </h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                  Start your numerology journey today and unlock the wisdom hidden
                  in your name and birth date
                </p>
                <div className="pt-4">
                  <a href="/calculator" className="btn-secondary inline-block text-lg">
                    Calculate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
