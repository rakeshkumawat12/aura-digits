'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import {
  calculateMulank,
  calculateDestinyNumber,
  generateLuShuGrid,
} from '@/utils/numerology';
import { mulankNumbers } from '@/data/mulankNumbers';
import { getGridPlaneAnalyses, getMissingNumbers } from '@/data/luShuGridData';
import {
  analyzePersonalityFromDOB,
} from '@/data/personalityGroups';
import { calculateLuckyNumbers } from '@/data/numberRelationships';
import { angelNumbers, getThemeColors, type AngelNumber } from '@/data/angelNumbers';

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dob = searchParams.get('dob') || '';

  // Calculate numerology numbers
  const mulank = dob ? calculateMulank(dob) : 1;
  const destiny = dob ? calculateDestinyNumber(dob) : 1;
  const luShuGrid = dob
    ? generateLuShuGrid(dob)
    : [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

  // Get Mulank data
  const mulankData = mulankNumbers[mulank];

  // Get Lu Shu Grid plane analyses and missing numbers
  const gridPlanes = dob ? getGridPlaneAnalyses(luShuGrid) : null;
  const missingNumbers = dob ? getMissingNumbers(luShuGrid) : [];

  // Get personality analysis based on digit frequency
  const personalityAnalysis = dob ? analyzePersonalityFromDOB(dob) : null;

  // Calculate lucky numbers based on Mulank and Destiny relationships
  const luckyNumbers = calculateLuckyNumbers(mulank, destiny);

  // Angel Numbers modal state
  const [selectedAngel, setSelectedAngel] = useState<AngelNumber | null>(null);

  return (
    <main className="min-h-screen pt-20 px-4 py-12 mystical-bg">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
            Your Numerology Reading
          </h1>
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-white/80 text-lg">
              <strong className="text-white">Date of Birth:</strong>{' '}
              {new Date(dob).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Core Numbers */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up reveal-1">
          <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500">
            <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent-emerald flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-primary/40">
              {mulank}
            </div>
            <h2 className="font-display text-3xl font-semibold text-white text-center">
              Mulank Number
            </h2>
            <p className="text-white/60 text-sm font-medium tracking-wider uppercase text-center">
              {mulankData.planet} - Driver Number
            </p>
            <p className="text-white/70 text-center text-lg leading-relaxed">
              Your driver number reveals your core personality, natural talents,
              and how you approach life challenges.
            </p>
          </div>

          <div className="glass-strong rounded-[2rem] p-10 space-y-6 card-glow hover:-translate-y-2 transition-all duration-500">
            <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-secondary via-accent-amber to-secondary-light flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-secondary/40">
              {destiny}
            </div>
            <h2 className="font-display text-3xl font-semibold text-white text-center">
              Destiny Number
            </h2>
            <p className="text-white/60 text-sm font-medium tracking-wider uppercase text-center">
              Life Purpose
            </p>
            <p className="text-white/70 text-center text-lg leading-relaxed">
              Your life purpose number shows your ultimate goals and the path
              you're meant to follow.
            </p>
          </div>
        </div>

        {/* Mulank Details */}
        <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-10 card-glow animate-fade-in-up reveal-2">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
              {mulankData.title}
            </h2>
            <p className="text-white/60 text-lg">
              Ruled by {mulankData.planet}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Core Characteristics */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-xl">
                  ✨
                </span>
                Core Characteristics
              </h3>
              <ul className="space-y-3">
                {mulankData.coreCharacteristics.map((trait, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/75 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-rose to-accent-violet flex items-center justify-center text-xl">
                  ⚠️
                </span>
                Challenges
              </h3>
              <ul className="space-y-3">
                {mulankData.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/75 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-rose mt-2 flex-shrink-0"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life Guidance */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent-amber flex items-center justify-center text-xl">
                  🧭
                </span>
                Life Guidance
              </h3>
              <ul className="space-y-3">
                {mulankData.lifeGuidance.map((guidance, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/75 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span>{guidance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Favorable Careers */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-emerald to-primary flex items-center justify-center text-xl">
                  💼
                </span>
                Favorable Careers
              </h3>
              <ul className="space-y-3">
                {mulankData.favorableCareers.map((career, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/75 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-emerald mt-2 flex-shrink-0"></span>
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Famous Personalities */}
          <div className="border-t border-white/10 pt-8 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-white text-center flex items-center justify-center gap-3">
              <span className="text-3xl">⭐</span>
              Famous Personalities with Number {mulank}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {mulankData.famousPersonalities.map((person, index) => (
                <div
                  key={index}
                  className="glass rounded-xl px-6 py-3 text-white/80 hover:text-white transition-colors"
                >
                  {person}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personality Analysis Based on Digit Frequency */}
        {personalityAnalysis && (
          <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-10 card-glow animate-fade-in-up reveal-3">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Personality Type Analysis
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Based on digit frequency analysis from your date of birth
              </p>
            </div>

            {/* Dominant Personality Type */}
            <div className="border-t border-white/10 pt-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary">
                  <span className="text-white font-bold text-lg uppercase tracking-wider">
                    {personalityAnalysis.personalityType}
                  </span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                  {personalityAnalysis.description}
                </p>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-xl">
                    🎭
                  </span>
                  Core Personality Traits
                </h3>
                <ul className="space-y-3">
                  {personalityAnalysis.traits.map((trait, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/75 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-accent-amber flex items-center justify-center text-xl">
                    💫
                  </span>
                  Real-Life Behavior
                </h3>
                <ul className="space-y-3">
                  {personalityAnalysis.behaviors.map((behavior, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/75 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                      <span>{behavior}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Lucky Numbers Section */}
        <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-10 card-glow animate-fade-in-up reveal-4">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Lucky Numbers
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Based on the relationship between your Mulank ({mulank}) and Destiny ({destiny}) numbers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Friend Numbers */}
            <div className="glass rounded-2xl p-8 space-y-6 group hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-700/30 border-2 border-emerald-500/40 flex items-center justify-center">
                  <span className="text-3xl">🍀</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Friend Numbers
                </h3>
                <p className="text-white/60 text-sm">
                  Your most favorable and lucky numbers
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {luckyNumbers.friends.length > 0 ? (
                  luckyNumbers.friends.map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border-2 border-emerald-500/50 flex items-center justify-center text-2xl font-bold text-white hover:scale-110 hover:border-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">No friend numbers</p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/70 text-sm text-center leading-relaxed">
                  Use these numbers for important decisions, dates, and events for maximum success
                </p>
              </div>
            </div>

            {/* Neutral Numbers */}
            <div className="glass rounded-2xl p-8 space-y-6 group hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/30 to-pink-500/30 border-2 border-violet-500/40 flex items-center justify-center">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Neutral Numbers
                </h3>
                <p className="text-white/60 text-sm">
                  Balanced influence - neither lucky nor unlucky
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {luckyNumbers.neutrals.length > 0 ? (
                  luckyNumbers.neutrals.map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border-2 border-violet-500/50 flex items-center justify-center text-2xl font-bold text-white hover:scale-110 hover:border-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/20"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">No neutral numbers</p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/70 text-sm text-center leading-relaxed">
                  These numbers have moderate impact and can be used without major concern
                </p>
              </div>
            </div>

            {/* Enemy Numbers */}
            <div className="glass rounded-2xl p-8 space-y-6 group hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border-2 border-red-500/40 flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Enemy Numbers
                </h3>
                <p className="text-white/60 text-sm">
                  Challenging numbers - use with caution
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {luckyNumbers.enemies.length > 0 ? (
                  luckyNumbers.enemies.map((num) => (
                    <div
                      key={num}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/50 flex items-center justify-center text-2xl font-bold text-white hover:scale-110 hover:border-red-400 transition-all duration-300 shadow-lg shadow-red-500/20"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">No enemy numbers</p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/70 text-sm text-center leading-relaxed">
                  Avoid using these numbers for important life decisions and major events
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="glass rounded-xl p-6 space-y-4">
              <h4 className="font-display text-xl font-semibold text-white text-center flex items-center justify-center gap-3">
                <span className="text-2xl">💡</span>
                How to Use Lucky Numbers
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Choose friend numbers for important dates (weddings, business launches, etc.)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Use friend numbers in phone numbers, addresses, and vehicle registration</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Prefer friend numbers when making financial investments or signing contracts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-rose mt-1">✗</span>
                  <span>Avoid enemy numbers for crucial life decisions and major undertakings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lu Shu Grid */}
        <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-8 card-glow animate-fade-in-up reveal-5">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white text-center tracking-tight">
            Lu Shu Grid
          </h2>
          <p className="text-white/60 text-center text-lg max-w-2xl mx-auto">
            Ancient Chinese numerology system revealing your energy matrix
          </p>

          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {luShuGrid.map((row, i) =>
                row.map((num, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="aspect-square bg-gradient-to-br from-accent-violet/20 to-accent-amber/20 border-2 border-accent-violet/30 rounded-2xl flex items-center justify-center text-4xl font-bold text-white hover:scale-105 hover:border-accent-violet/60 transition-all duration-300 shadow-lg"
                  >
                    {num}
                  </div>
                ))
              )}
            </div>
          </div>

          <p className="text-white/70 text-center max-w-2xl mx-auto leading-relaxed">
            The 3x3 grid analysis reveals your strengths, weaknesses, and areas
            for personal development. Each number represents the frequency of
            that digit in your birth date.
          </p>
        </div>

        {/* Angel Numbers Section */}
        <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-10 card-glow animate-fade-in-up reveal-6">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Angel Numbers
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Have you been seeing repeating numbers on clocks, receipts, or license plates? These aren't coincidences—they're Angel Numbers, gentle messages from the universe guiding your path.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {angelNumbers.map((angel) => {
              const colors = getThemeColors(angel.theme);
              return (
                <button
                  key={angel.id}
                  onClick={() => setSelectedAngel(angel)}
                  className={`glass rounded-2xl p-6 space-y-4 group hover:scale-105 transition-all duration-300 text-left ${colors.hover} ${colors.shadow} hover:shadow-xl`}
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} flex items-center justify-center transition-all duration-300`}>
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{angel.icon}</span>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {angel.patterns}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} border ${colors.border}`}>
                      <span className="text-white/90 text-xs font-medium uppercase tracking-wider">
                        {angel.keyword}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/70 text-center text-sm leading-relaxed">
                    {angel.title}
                  </p>

                  <div className="text-center pt-2">
                    <span className="text-white/60 text-xs uppercase tracking-wider">
                      Tap to reveal message
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Angel Number Modal */}
        {selectedAngel && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedAngel(null)}
          >
            <div
              className="glass-strong rounded-[2rem] p-8 md:p-12 max-w-2xl w-full space-y-6 card-glow animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedAngel(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
                aria-label="Close modal"
              >
                <span className="text-white/60 group-hover:text-white text-2xl">×</span>
              </button>

              {/* Icon and Number */}
              <div className="text-center space-y-4">
                <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${getThemeColors(selectedAngel.theme).gradient} border-2 ${getThemeColors(selectedAngel.theme).border} flex items-center justify-center animate-pulse-slow`}>
                  <span className="text-6xl">{selectedAngel.icon}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  {selectedAngel.patterns}
                </h3>
                <div className={`inline-block px-4 py-2 rounded-full ${getThemeColors(selectedAngel.theme).bg} border ${getThemeColors(selectedAngel.theme).border}`}>
                  <span className="text-white font-medium uppercase tracking-wider text-sm">
                    {selectedAngel.keyword}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h4 className="font-display text-2xl font-semibold text-white">
                  {selectedAngel.title}
                </h4>
              </div>

              {/* Explanation */}
              <div className="glass rounded-xl p-6 space-y-4">
                <p className="text-white/80 text-lg leading-relaxed text-center">
                  {selectedAngel.explanation}
                </p>
              </div>

              {/* Action Prompt */}
              <div className={`glass rounded-xl p-6 border-2 ${getThemeColors(selectedAngel.theme).border} ${getThemeColors(selectedAngel.theme).bg}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💫</span>
                  <div className="flex-1">
                    <h5 className="text-white font-semibold mb-2">Your Action Step</h5>
                    <p className="text-white/90 leading-relaxed">
                      {selectedAngel.action}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button at Bottom */}
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

        {/* Active Planes Analysis */}
        {gridPlanes && (
          <div className="space-y-8 animate-fade-in-up reveal-7">
            {Object.entries(gridPlanes).map(([key, plane]) => {
              if (!plane.analysis.isActive) return null;

              return (
                <div
                  key={key}
                  className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-6 card-glow"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/30">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                      <span className="text-white/80 font-medium text-sm uppercase tracking-wider">
                        {plane.analysis.fillPercentage}% Active •{' '}
                        {plane.analysis.strength.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                      {plane.name}
                    </h3>
                    <p className="text-white/60 text-lg">{plane.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-display text-xl font-semibold text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-lg">
                        ✨
                      </span>
                      Key Characteristics
                    </h4>
                    <ul className="space-y-3">
                      {plane.characteristics.map((char, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-white/75 leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plane.balanceTip && (
                    <div className="border-t border-white/10 pt-6">
                      <div className="glass rounded-xl p-6 space-y-3">
                        <h4 className="font-display text-lg font-semibold text-white flex items-center gap-3">
                          <span className="text-xl">💡</span>
                          Balance Tip
                        </h4>
                        <p className="text-white/75 leading-relaxed">
                          {plane.balanceTip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Missing Numbers Section */}
        {missingNumbers.length > 0 && (
          <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-8 card-glow animate-fade-in-up reveal-8">
            <div className="text-center space-y-4">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Missing Numbers Analysis
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Numbers absent from your birth date and their potential effects
                on your life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {missingNumbers.map((missing) => (
                <div
                  key={missing.number}
                  className="glass rounded-xl p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-rose/30 to-accent-violet/30 border-2 border-accent-rose/40 flex items-center justify-center text-2xl font-bold text-white">
                      {missing.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/75 leading-relaxed">
                        {missing.effect}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="glass rounded-xl p-6">
                <p className="text-white/60 text-sm text-center leading-relaxed">
                  💡 <strong className="text-white/80">Remedy Tip:</strong> You
                  can strengthen missing numbers by wearing their associated
                  colors, using their gemstones, or performing specific
                  practices aligned with those planetary energies.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-8 text-center space-y-3 animate-fade-in-up reveal-9">
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
            These insights are based on your unique numerological profile. If something doesn't seem to fit right now, don't worry. Sometimes, it takes time for things to make sense. Trust your journey and stay positive!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up reveal-9">
          <button className="btn-primary text-lg">Save Report</button>
          <button className="btn-secondary text-lg">Download PDF</button>
          <button
            onClick={() => router.push('/calculator')}
            className="btn-outline text-lg"
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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center mystical-bg">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white text-xl font-medium">
                Loading your results...
              </p>
            </div>
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </>
  );
}
