'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import type { Reading } from '@/types/reading';
import { mulankNumbers } from '@/data/mulankNumbers';
import { getThemeColors, type AngelNumber } from '@/data/angelNumbers';

export default function ReadingDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [reading, setReading] = useState<Reading | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAngel, setSelectedAngel] = useState<AngelNumber | null>(null);

  useEffect(() => {
    if (id) {
      fetchReading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchReading = async () => {
    try {
      const response = await fetch(`/api/readings/${id}`);
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Reading not found');
      }

      setReading(result.reading);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load reading');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 px-4 py-12 mystical-bg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-white/70">Loading reading...</p>
          </div>
        </main>
      </>
    );
  }

  if (error || !reading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 px-4 py-12 mystical-bg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="glass-strong rounded-3xl p-12">
              <p className="text-white/70 text-xl mb-6">{error || 'Reading not found'}</p>
              <button
                onClick={() => router.push('/dashboard')}
                className="btn-primary"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  const mulankData = mulankNumbers[reading.mulank];
  const destinyData = mulankNumbers[reading.destiny];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 py-12 mystical-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-outline mb-4"
            >
              ← Back to Dashboard
            </button>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
              {reading.title || 'Numerology Reading'}
            </h1>
            <div className="glass rounded-2xl p-6 inline-block">
              <p className="text-white/80 text-lg">
                <strong className="text-white">Date of Birth:</strong>{' '}
                {new Date(reading.date_of_birth).toLocaleDateString()}
              </p>
              <p className="text-white/60 text-sm mt-2">
                Saved on {new Date(reading.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Core Numbers */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up reveal-1">
            {/* Mulank Number */}
            <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                  {reading.mulank}
                </div>
                <h2 className="text-3xl font-bold text-white">Mulank Number</h2>
                <p className="text-white/60">Your Driver Number</p>
              </div>
              <p className="text-white/80 leading-relaxed text-center">
                {mulankData.title}
              </p>
            </div>

            {/* Destiny Number */}
            <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary to-secondary-light rounded-3xl flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                  {reading.destiny}
                </div>
                <h2 className="text-3xl font-bold text-white">Destiny Number</h2>
                <p className="text-white/60">Your Life Path</p>
              </div>
              <p className="text-white/80 leading-relaxed text-center">
                {destinyData.title}
              </p>
            </div>
          </div>

          {/* Personality Analysis */}
          {reading.personality_analysis && (
            <div className="glass-strong rounded-[2rem] p-10 space-y-8 card-glow animate-fade-in-up reveal-2">
              <div className="text-center space-y-3">
                <span className="text-6xl">🎭</span>
                <h2 className="text-4xl font-bold text-white">Personality Analysis</h2>
                <p className="text-xl text-white/70">
                  {reading.personality_analysis.personalityType}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                  <p className="text-white/80 leading-relaxed">
                    {reading.personality_analysis.description}
                  </p>
                </div>

                {reading.personality_analysis.traits && reading.personality_analysis.traits.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Traits</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {reading.personality_analysis.traits.map((trait, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/80">
                          <span className="text-primary flex-shrink-0">✓</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Lucky Numbers */}
          {reading.lucky_numbers && (
            <div className="glass-strong rounded-[2rem] p-10 space-y-8 card-glow animate-fade-in-up reveal-3">
              <div className="text-center space-y-3">
                <span className="text-6xl">🍀</span>
                <h2 className="text-4xl font-bold text-white">Lucky Numbers</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Friends */}
                <div className="glass rounded-2xl p-6 space-y-4 border-2 border-emerald-500/30">
                  <h3 className="text-xl font-semibold text-emerald-400 text-center">
                    Friends
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {reading.lucky_numbers.friends.map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-lg font-bold text-emerald-400"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neutrals */}
                <div className="glass rounded-2xl p-6 space-y-4 border-2 border-yellow-500/30">
                  <h3 className="text-xl font-semibold text-yellow-400 text-center">
                    Neutrals
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {reading.lucky_numbers.neutrals.map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-lg font-bold text-yellow-400"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enemies */}
                <div className="glass rounded-2xl p-6 space-y-4 border-2 border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 text-center">
                    Enemies
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {reading.lucky_numbers.enemies.map((num) => (
                      <div
                        key={num}
                        className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-lg font-bold text-red-400"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lu Shu Grid */}
          {reading.lu_shu_grid && (
            <div className="glass-strong rounded-[2rem] p-10 space-y-8 card-glow animate-fade-in-up reveal-4">
              <div className="text-center space-y-3">
                <span className="text-6xl">🔢</span>
                <h2 className="text-4xl font-bold text-white">Lu Shu Grid</h2>
              </div>

              <div className="max-w-md mx-auto">
                <div className="grid grid-cols-3 gap-4">
                  {reading.lu_shu_grid.grid.map((row, rowIdx) =>
                    row.map((cell, colIdx) => (
                      <div
                        key={`${rowIdx}-${colIdx}`}
                        className={`aspect-square rounded-2xl ${
                          cell === 0
                            ? 'bg-white/5 border-2 border-white/10'
                            : 'glass border-2 border-primary/30'
                        } flex items-center justify-center text-4xl font-bold ${
                          cell === 0 ? 'text-white/20' : 'text-white'
                        } hover:scale-105 transition-all duration-300`}
                      >
                        {cell || ''}
                      </div>
                    ))
                  )}
                </div>

                {/* Frequencies */}
                {reading.lu_shu_grid.frequencies && Object.keys(reading.lu_shu_grid.frequencies).length > 0 && (
                  <div className="mt-6 glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                      Number Frequencies
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {Object.entries(reading.lu_shu_grid.frequencies).map(([num, count]) => (
                        <div
                          key={num}
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl"
                        >
                          <span className="text-2xl font-bold text-gradient">{num}</span>
                          <span className="text-white/60">×</span>
                          <span className="text-xl font-semibold text-white">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Active Planes */}
          {reading.active_planes && reading.active_planes.length > 0 && (
            <div className="glass-strong rounded-[2rem] p-10 space-y-8 card-glow animate-fade-in-up reveal-5">
              <div className="text-center space-y-3">
                <span className="text-6xl">⚡</span>
                <h2 className="text-4xl font-bold text-white">Active Planes</h2>
                <p className="text-white/70">Your Strongest Areas</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {reading.active_planes.map((plane, idx) => (
                  <div key={idx} className="glass rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{plane.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        plane.strength === 'very-strong' ? 'bg-emerald-500/20 text-emerald-400' :
                        plane.strength === 'strong' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {plane.fillPercentage}%
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">{plane.description}</p>
                    <ul className="space-y-2">
                      {plane.characteristics.slice(0, 3).map((char, charIdx) => (
                        <li key={charIdx} className="flex items-start gap-2 text-white/80 text-sm">
                          <span className="text-primary flex-shrink-0">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Missing Numbers */}
          {reading.missing_numbers && reading.missing_numbers.missingNumbers.length > 0 && (
            <div className="glass-strong rounded-[2rem] p-10 space-y-8 card-glow animate-fade-in-up reveal-6">
              <div className="text-center space-y-3">
                <span className="text-6xl">⚠️</span>
                <h2 className="text-4xl font-bold text-white">Missing Numbers</h2>
                <p className="text-white/70">Areas to Be Aware Of</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {reading.missing_numbers.missingNumbers.map((missing, idx) => (
                  <div key={idx} className="glass rounded-2xl p-6 space-y-3 border-2 border-orange-500/20">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto">
                      {missing.number}
                    </div>
                    <p className="text-white/70 text-sm text-center">{missing.effect}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="glass rounded-2xl p-8 text-center space-y-3 animate-fade-in-up reveal-7">
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              These insights are based on your unique numerological profile. If something doesn't seem to fit right now, don't worry. Sometimes, it takes time for things to make sense. Trust your journey and stay positive!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up reveal-8">
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-outline text-lg"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => router.push('/calculator')}
              className="btn-primary text-lg"
            >
              New Reading
            </button>
          </div>
        </div>
      </main>

      {/* Angel Number Modal (if needed) */}
      {selectedAngel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAngel(null)}
        >
          <div
            className="glass-strong rounded-[2rem] p-8 md:p-12 max-w-2xl w-full space-y-6 card-glow animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAngel(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="text-center space-y-4">
              <div
                className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${
                  getThemeColors(selectedAngel.theme).gradient
                } border-2 ${
                  getThemeColors(selectedAngel.theme).border
                } flex items-center justify-center animate-pulse-slow`}
              >
                <span className="text-5xl">{selectedAngel.icon}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                {selectedAngel.title}
              </h3>
              <p className="text-lg font-semibold text-white">
                {selectedAngel.keyword}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed text-center">
                {selectedAngel.explanation}
              </p>
            </div>

            <div
              className={`glass rounded-xl p-6 border-2 ${
                getThemeColors(selectedAngel.theme).border
              } ${getThemeColors(selectedAngel.theme).bg}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💫</span>
                <div className="flex-1">
                  <h5 className="text-white font-semibold mb-2">
                    Your Action Step
                  </h5>
                  <p className="text-white/90 leading-relaxed">
                    {selectedAngel.action}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setSelectedAngel(null)}
                className="btn-outline text-lg px-8"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
