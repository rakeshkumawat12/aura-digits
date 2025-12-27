'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'User';
  const dob = searchParams.get('dob') || '';

  // Mock calculations (replace with real logic later)
  const mulank = 7;
  const destiny = 5;
  const luShuGrid = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];

  return (
    <main className="min-h-screen pt-20 px-4 py-12 cosmic-bg">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your Numerology Reading
          </h1>
          <div className="glass rounded-2xl p-4 inline-block">
            <p className="text-white/80"><strong className="text-white">Name:</strong> {name}</p>
            <p className="text-white/80"><strong className="text-white">Date of Birth:</strong> {new Date(dob).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-strong rounded-3xl p-8 space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-primary/30">
              {mulank}
            </div>
            <h2 className="text-2xl font-bold text-white text-center">Mulank Number</h2>
            <p className="text-white/70 text-center">
              Your driver number reveals your core personality, natural talents, and how you approach life challenges.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-secondary/30">
              {destiny}
            </div>
            <h2 className="text-2xl font-bold text-white text-center">Destiny Number</h2>
            <p className="text-white/70 text-center">
              Your life purpose number shows your ultimate goals and the path you're meant to follow.
            </p>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white text-center">Lu Shu Grid</h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {luShuGrid.map((row, i) => (
                row.map((num, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="aspect-square bg-gradient-to-br from-accent-gold/20 to-accent-rose/20 border border-accent-gold/30 rounded-xl flex items-center justify-center text-3xl font-bold text-white hover:scale-105 transition-transform"
                  >
                    {num}
                  </div>
                ))
              ))}
            </div>
          </div>
          <p className="text-white/70 text-center max-w-2xl mx-auto">
            The 3x3 grid analysis reveals your strengths, weaknesses, and areas for personal development.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary">
            Save Report
          </button>
          <button className="btn-secondary">
            Download PDF
          </button>
          <button
            onClick={() => router.push('/calculator')}
            className="btn-outline"
          >
            New Calculation
          </button>
        </div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center cosmic-bg">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </>
  );
}
