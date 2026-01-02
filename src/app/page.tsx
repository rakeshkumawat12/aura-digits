import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/shared/Hero';
import { Features } from '@/components/ui/features-10';
import { HowItWorks } from '@/components/ui/how-it-works';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mystical-bg">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="glass-strong rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center space-y-4 sm:space-y-6 card-glow relative overflow-hidden">
              {/* Decorative gradient orbs */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-gradient-to-br from-accent-violet/25 to-accent-emerald/25 rounded-full blur-3xl animate-pulse-glow"></div>

              <div className="relative z-10 space-y-5">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Ready to Discover Your Numbers?
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                  Start your numerology journey today and unlock the wisdom hidden
                  in your name and birth date
                </p>
                <div className="pt-2">
                  <a href="/calculator" className="btn-secondary inline-block text-base">
                    Calculate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
