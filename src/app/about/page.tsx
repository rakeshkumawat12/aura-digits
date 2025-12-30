import { Navbar } from '@/components/layout/Navbar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 mystical-bg">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white animate-fade-in-up tracking-tight">
              About <span className="text-gradient">Aura Digits</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up reveal-2">
              Unlock the ancient wisdom of numerology and discover the hidden
              meanings in your name and birth date
            </p>
          </div>
        </section>

        {/* What is Numerology */}
        <section className="px-4 py-16 bg-bg-secondary/30 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 md:p-12 space-y-8 card-glow">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center mb-6 tracking-tight">
                What is Numerology?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p className="text-white/75 leading-[1.7] text-sm md:text-base">
                    Numerology is an ancient metaphysical science that studies
                    the mystical relationship between numbers and life events.
                    It reveals patterns and insights about your personality,
                    destiny, and life path through the analysis of numbers
                    derived from your name and birth date.
                  </p>
                  <p className="text-white/75 leading-[1.7] text-sm md:text-base">
                    Dating back thousands of years to ancient civilizations
                    including Babylon, Egypt, and Greece, numerology has been
                    used by scholars, mystics, and spiritual seekers to gain
                    deeper understanding of themselves and the universe.
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-white/75 leading-[1.7] text-sm md:text-base">
                    The practice gained significant recognition through the work
                    of Greek mathematician Pythagoras, who believed that numbers
                    are the building blocks of the universe and that each number
                    carries a unique vibration and meaning.
                  </p>
                  <p className="text-white/75 leading-[1.7] text-sm md:text-base">
                    Today, numerology continues to help millions of people
                    worldwide discover their strengths, overcome challenges, and
                    align with their true purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Can Help */}
        <section className="px-4 py-16 bg-bg-secondary/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center tracking-tight">
              How Numerology Can Help You
            </h2>

            <div className="space-y-5">
              <div className="glass rounded-xl p-6 hover:-translate-y-1 transition-all duration-500 group border-l-4 border-primary/40">
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all">
                  Self-Discovery & Awareness
                </h3>
                <p className="text-white/70 leading-[1.7] text-sm md:text-base">
                  Gain deeper insights into your personality, motivations, and
                  behavior patterns. Understand why you react certain ways and
                  what drives your decisions.
                </p>
              </div>

              <div className="glass rounded-xl p-6 hover:-translate-y-1 transition-all duration-500 group border-l-4 border-secondary/40">
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-gradient-bronze transition-all">
                  Career & Life Path Guidance
                </h3>
                <p className="text-white/70 leading-[1.7] text-sm md:text-base">
                  Discover your natural talents and ideal career paths. Align
                  your professional choices with your life purpose for greater
                  fulfillment and success.
                </p>
              </div>

              <div className="glass rounded-xl p-6 hover:-translate-y-1 transition-all duration-500 group border-l-4 border-accent-emerald/40">
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all">
                  Relationship Compatibility
                </h3>
                <p className="text-white/70 leading-[1.7] text-sm md:text-base">
                  Understand relationship dynamics better by comparing
                  numerology profiles. Learn how to communicate more effectively
                  with partners, friends, and family.
                </p>
              </div>

              <div className="glass rounded-xl p-6 hover:-translate-y-1 transition-all duration-500 group border-l-4 border-accent-violet/40">
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all">
                  Personal Growth & Development
                </h3>
                <p className="text-white/70 leading-[1.7] text-sm md:text-base">
                  Identify areas for improvement and personal growth. Use
                  numerology insights to overcome challenges and develop your
                  full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white text-center tracking-tight">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              className="-mx-2 sm:mx-0"
            >
              <div className="group">
                <AccordionItem
                  value="item-1"
                  className="data-[state=open]:bg-white/5 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-display font-medium text-white hover:no-underline">
                    Is numerology scientifically proven?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-white/70 leading-[1.7]">
                      Numerology is a metaphysical practice, not a hard science.
                      While it is not scientifically proven in the traditional
                      sense, it has been practiced for thousands of years and many
                      people find value in its insights for self-reflection and
                      personal growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-white/10" />
              </div>

              <div className="group">
                <AccordionItem
                  value="item-2"
                  className="data-[state=open]:bg-white/5 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-display font-medium text-white hover:no-underline">
                    How accurate is numerology?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-white/70 leading-[1.7]">
                      The accuracy of numerology is subjective and depends on
                      personal interpretation. Many users report that numerology
                      readings resonate deeply with their experiences. It is best
                      used as a tool for self-reflection rather than absolute
                      prediction.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-white/10" />
              </div>

              <div className="group">
                <AccordionItem
                  value="item-3"
                  className="data-[state=open]:bg-white/5 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-display font-medium text-white hover:no-underline">
                    What information do I need for a reading?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-white/70 leading-[1.7]">
                      You need your full legal name as it appears on official
                      documents and your complete birth date including day, month,
                      and year. This information is used to calculate your core
                      numbers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-white/10" />
              </div>

              <div className="group">
                <AccordionItem
                  value="item-4"
                  className="data-[state=open]:bg-white/5 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-display font-medium text-white hover:no-underline">
                    Can my numbers change over time?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-white/70 leading-[1.7]">
                      Your core numbers based on your birth name and date remain
                      constant. However, if you legally change your name, this can
                      introduce new energies into your numerology profile.
                      Additionally, different cycles in numerology may be more
                      prominent at different life stages.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-white/10" />
              </div>

              <div className="group">
                <AccordionItem
                  value="item-5"
                  className="data-[state=open]:bg-white/5 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-display font-medium text-white hover:no-underline">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-white/70 leading-[1.7]">
                      Yes, we take your privacy seriously. Your personal information
                      is encrypted and never shared with third parties. We only use
                      it to calculate your numerology numbers and provide you with
                      personalized insights.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-white/10" />
              </div>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 md:p-12 text-center space-y-6 card-glow relative overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-accent-violet/20 to-accent-emerald/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light mb-6 leading-[1.7]">
                  Discover the power of numerology and unlock insights about
                  your life path
                </p>
                <a
                  href="/calculator"
                  className="btn-secondary inline-block text-base"
                >
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
