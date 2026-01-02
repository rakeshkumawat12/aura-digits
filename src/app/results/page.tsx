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
import { analyzePersonalityFromDOB } from '@/data/personalityGroups';
import { calculateLuckyNumbers } from '@/data/numberRelationships';
import {
  angelNumbers,
  getThemeColors,
  type AngelNumber,
} from '@/data/angelNumbers';
import type { SaveReadingRequest, PlaneData } from '@/types/reading';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animated-modal';

// Angel Number Card Component with Animated Modal
function AngelNumberCard({ angel }: { angel: AngelNumber }) {
  const colors = getThemeColors(angel.theme);

  return (
    <Modal>
      <ModalTrigger
        className={`glass-strong rounded-2xl p-6 space-y-4 group hover:-translate-y-1 transition-all duration-300 text-left card-glow ${colors.shadow} hover:shadow-lg w-full`}
      >
        <div
          className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center transition-all duration-300`}
        >
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {angel.icon}
          </span>
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-display text-lg font-semibold text-white">
            {angel.patterns}
          </h3>
          <div
            className={`inline-block px-3 py-1 rounded-full ${colors.bg} border ${colors.border}`}
          >
            <span className="text-white/90 text-xs font-medium uppercase tracking-wider">
              {angel.keyword}
            </span>
          </div>
        </div>

        <p className="text-white/70 text-center text-xs leading-relaxed">
          {angel.title}
        </p>

        <div className="text-center pt-1">
          <span className="text-white/50 text-xs uppercase tracking-wider">
            Tap to reveal message
          </span>
        </div>
      </ModalTrigger>

      <ModalBody className="max-w-3xl">
        <ModalContent className="overflow-y-auto p-0">
          {/* Hero Section with Icon */}
          <div className="relative overflow-hidden rounded-t-2xl">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary">
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20`}></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-accent-violet/20 to-accent-amber/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br from-accent-emerald/20 to-accent-rose/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 pt-12 pb-8 text-center space-y-6">
              {/* Animated Icon */}
              <div className="flex justify-center">
                <div
                  className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500 relative group`}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-7xl relative z-10 animate-float">{angel.icon}</span>
                </div>
              </div>

              {/* Number Pattern */}
              <div className="space-y-3">
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {angel.patterns}
                </h3>

                {/* Keyword Badge */}
                <div className="flex justify-center">
                  <div
                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${colors.bg} border-2 ${colors.border} shadow-lg`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-white font-bold uppercase tracking-widest text-sm">
                      {angel.keyword}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 py-2">
                <div className={`h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent`}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className={`h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent`}></div>
              </div>

              {/* Title */}
              <h4 className="font-display text-2xl md:text-3xl font-semibold text-white/95 leading-relaxed px-4">
                {angel.title}
              </h4>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="px-8 py-8 space-y-6 bg-gradient-to-b from-bg-primary to-bg-secondary">
            {/* Meaning Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📖</span>
                </div>
                <h5 className="font-display text-xl font-semibold text-white">
                  Divine Message
                </h5>
              </div>

              <div className="glass-strong rounded-2xl p-6 border border-white/10">
                <p className="text-white/85 text-base md:text-lg leading-relaxed">
                  {angel.explanation}
                </p>
              </div>
            </div>

            {/* Action Step Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-xl">💫</span>
                </div>
                <h5 className="font-display text-xl font-semibold text-white">
                  Your Action Step
                </h5>
              </div>

              <div
                className={`glass-strong rounded-2xl p-6 border-2 ${colors.border} ${colors.bg} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Subtle Background Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <p className="text-white/90 text-base md:text-lg leading-relaxed relative z-10">
                  {angel.action}
                </p>
              </div>
            </div>

            {/* Affirmation Section */}
            <div className="glass-strong rounded-2xl p-6 border border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-transparent">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">✨</span>
                <div className="flex-1">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed italic">
                    "When you see <span className="text-white font-semibold">{angel.patterns}</span>, the universe is speaking directly to you. Trust the message and embrace the guidance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dob = searchParams.get('dob') || '';

  // Format date consistently for both server and client
  const formattedDate = dob
    ? new Date(dob).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

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

  // Save report state
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // PDF download state
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  // Handle PDF download
  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    setPdfError(null);

    try {
      // Dynamically import PDF generator to reduce initial bundle size
      const { generatePDF } = await import('@/utils/pdfGenerator');

      // Generate PDF from the results content
      await generatePDF('results-content', {
        filename: `numerology-reading-${new Date(dob).toLocaleDateString().replace(/\//g, '-')}.pdf`,
        quality: 0.95,
        scale: 2,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      setPdfError(
        error instanceof Error ? error.message : 'Failed to generate PDF'
      );
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Handle save report
  const handleSaveReport = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      // Calculate frequencies for Lu Shu Grid
      const frequencies: Record<number, number> = {};
      luShuGrid.forEach((row) => {
        row.forEach((cell) => {
          if (cell > 0) {
            frequencies[cell] = (frequencies[cell] || 0) + 1;
          }
        });
      });

      // Get active planes from gridPlanes
      const activePlanes: PlaneData[] = [];
      if (gridPlanes) {
        Object.entries(gridPlanes).forEach(([, value]) => {
          const planeData = value as {
            analysis: {
              fillPercentage: number;
              strength: string;
              isActive: boolean;
            };
            name: string;
            description: string;
            characteristics: string[];
          };
          if (planeData.analysis && planeData.analysis.isActive) {
            activePlanes.push({
              name: planeData.name,
              fillPercentage: planeData.analysis.fillPercentage,
              strength: planeData.analysis.strength as
                | 'weak'
                | 'moderate'
                | 'strong'
                | 'very-strong',
              description: planeData.description,
              characteristics: planeData.characteristics,
            });
          }
        });
      }

      // Prepare the reading data
      const readingData: SaveReadingRequest = {
        date_of_birth: dob,
        mulank,
        destiny,
        lu_shu_grid: {
          grid: luShuGrid,
          frequencies,
        },
        personality_analysis: personalityAnalysis
          ? {
              dominantGroup: personalityAnalysis.dominantGroup,
              groupACount: personalityAnalysis.groupACount,
              groupBCount: personalityAnalysis.groupBCount,
              number5Count: personalityAnalysis.number5Count,
              personalityType: personalityAnalysis.personalityType,
              traits: personalityAnalysis.traits,
              behaviors: personalityAnalysis.behaviors,
              description: personalityAnalysis.description,
            }
          : {
              dominantGroup: 'balanced',
              groupACount: 0,
              groupBCount: 0,
              number5Count: 0,
              personalityType: 'Unknown',
              traits: [],
              behaviors: [],
              description: '',
            },
        lucky_numbers: luckyNumbers,
        active_planes: activePlanes.length > 0 ? activePlanes : undefined,
        missing_numbers:
          missingNumbers.length > 0
            ? {
                missingNumbers,
              }
            : undefined,
        title: `Reading for ${new Date(dob).toLocaleDateString()}`,
      };

      // Call the API
      const response = await fetch('/api/readings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(readingData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to save reading');
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000); // Hide success message after 3s
    } catch (error) {
      console.error('Error saving reading:', error);
      setSaveError(
        error instanceof Error ? error.message : 'Failed to save reading'
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 px-4 pb-12 mystical-bg">
      <div id="results-content" className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in-up mt-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your Numerology Reading
          </h1>
          <div className="glass rounded-2xl p-5 inline-block">
            <p className="text-white/80 text-base">
              <strong className="text-white">Date of Birth:</strong>{' '}
              {formattedDate}
            </p>
          </div>
        </div>

        {/* Core Numbers */}
        <div className="space-y-8 animate-fade-in-up reveal-1">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-white/70 text-sm font-medium tracking-wider uppercase">
                Your Core Numbers
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mulank Card */}
            <div className="glass-strong rounded-2xl p-8 space-y-5 card-glow hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent-emerald/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-4">
                {/* Number Display */}
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent-emerald flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500 relative">
                    {mulank}
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-spin-slow"></div>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-accent-emerald to-primary flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ✨
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h2 className="font-display text-xl font-semibold text-white text-center tracking-tight">
                    Mulank Number
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary/50"></div>
                    <p className="text-primary-light text-[10px] font-medium tracking-widest uppercase">
                      {mulankData.planet} • Driver Number
                    </p>
                    <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary/50"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/75 text-center text-sm leading-relaxed">
                  Your driver number reveals your core personality, natural
                  talents, and how you approach life challenges.
                </p>

                {/* Decorative bottom line */}
                <div className="pt-3">
                  <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Destiny Card */}
            <div className="glass-strong rounded-2xl p-8 space-y-5 card-glow hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent-amber/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-secondary/10 to-secondary-light/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 space-y-4">
                {/* Number Display */}
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-secondary via-accent-amber to-secondary-light flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-secondary/40 group-hover:scale-110 transition-transform duration-500 relative">
                    {destiny}
                    {/* Orbiting dots */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-secondary/30 animate-spin-slow"></div>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-accent-amber to-secondary flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    🌟
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h2 className="font-display text-xl font-semibold text-white text-center tracking-tight">
                    Destiny Number
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-6 bg-gradient-to-r from-transparent to-secondary/50"></div>
                    <p className="text-accent-amber text-[10px] font-medium tracking-widest uppercase">
                      Life Purpose
                    </p>
                    <div className="h-px w-6 bg-gradient-to-l from-transparent to-secondary/50"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/75 text-center text-sm leading-relaxed">
                  Your life purpose number shows your ultimate goals and the
                  path you're meant to follow.
                </p>

                {/* Decorative bottom line */}
                <div className="pt-3">
                  <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mulank Details */}
        <div className="space-y-8 animate-fade-in-up reveal-2">
          {/* Header Section */}
          <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent-emerald/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-primary/30 mb-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-light"></div>
                <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  Number {mulank} Profile
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {mulankData.title}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <p className="text-primary-light text-sm font-medium">
                  Ruled by {mulankData.planet}
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Core Characteristics Card */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  ✨
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Core Characteristics
                </h3>
              </div>
              <ul className="space-y-2.5">
                {mulankData.coreCharacteristics.map((trait, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Card */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-rose/20 to-accent-violet/20 border border-accent-rose/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  ⚠️
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Challenges
                </h3>
              </div>
              <ul className="space-y-2.5">
                {mulankData.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-rose to-accent-violet mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life Guidance Card */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-accent-amber/20 border border-secondary/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  🧭
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Life Guidance
                </h3>
              </div>
              <ul className="space-y-2.5">
                {mulankData.lifeGuidance.map((guidance, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent-amber mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span>{guidance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Favorable Careers Card */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-emerald/20 to-primary/20 border border-accent-emerald/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Favorable Careers
                </h3>
              </div>
              <ul className="space-y-2.5">
                {mulankData.favorableCareers.map((career, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-emerald to-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Famous Personalities */}
          <div className="glass-strong rounded-2xl p-8 card-glow">
            <div className="text-center space-y-5">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">⭐</span>
                <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                  Famous Personalities with Number {mulank}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {mulankData.famousPersonalities.map((person, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl px-5 py-2.5 text-white/80 text-sm hover:text-white hover:bg-white/[0.08] transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {person}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personality Analysis Based on Digit Frequency */}
        {personalityAnalysis && (
          <div className="space-y-8 animate-fade-in-up reveal-3">
            {/* Header Section */}
            <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent-violet/10 to-accent-rose/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-accent-violet/30 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-rose"></div>
                  <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                    Digit Frequency Analysis
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Personality Type Analysis
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-violet/50"></div>
                  <p className="text-accent-violet text-sm font-medium">
                    {personalityAnalysis.personalityType}
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-violet/50"></div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="glass-strong rounded-2xl p-8 card-glow">
              <p className="text-white/80 text-base leading-relaxed text-center max-w-3xl mx-auto">
                {personalityAnalysis.description}
              </p>
            </div>

            {/* Traits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Core Personality Traits Card */}
              <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    🎭
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                    Core Personality Traits
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {personalityAnalysis.traits.map((trait, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real-Life Behavior Card */}
              <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-accent-amber/20 border border-secondary/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    💫
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                    Real-Life Behavior
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {personalityAnalysis.behaviors.map((behavior, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent-amber mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span>{behavior}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Lucky Numbers Section */}
        <div className="space-y-8 animate-fade-in-up reveal-4">
          {/* Header Section */}
          <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent-emerald/10 to-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-accent-emerald/30 mb-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-emerald to-primary"></div>
                <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  Number Relationships
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Lucky Numbers Analysis
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-emerald/50"></div>
                <p className="text-accent-emerald text-sm font-medium">
                  Mulank {mulank} • Destiny {destiny}
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-emerald/50"></div>
              </div>
            </div>
          </div>

          {/* Numbers Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Friend Numbers */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-emerald/20 to-primary/20 border border-accent-emerald/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  🍀
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    Friend Numbers
                  </h3>
                  <p className="text-white/60 text-xs">Most favorable</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 py-2">
                {luckyNumbers.friends.length > 0 ? (
                  luckyNumbers.friends.map((num) => (
                    <div
                      key={num}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-emerald/20 to-primary/20 border border-accent-emerald/40 flex items-center justify-center text-xl font-bold text-white hover:scale-110 hover:border-accent-emerald transition-all duration-300"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">None</p>
                )}
              </div>

              <div className="pt-2">
                <p className="text-white/70 text-xs text-center leading-relaxed">
                  Use for important dates and major decisions
                </p>
              </div>
            </div>

            {/* Neutral Numbers */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-rose/20 border border-accent-violet/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  ⚖️
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    Neutral Numbers
                  </h3>
                  <p className="text-white/60 text-xs">Balanced influence</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 py-2">
                {luckyNumbers.neutrals.length > 0 ? (
                  luckyNumbers.neutrals.map((num) => (
                    <div
                      key={num}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-rose/20 border border-accent-violet/40 flex items-center justify-center text-xl font-bold text-white hover:scale-110 hover:border-accent-violet transition-all duration-300"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">None</p>
                )}
              </div>

              <div className="pt-2">
                <p className="text-white/70 text-xs text-center leading-relaxed">
                  Moderate impact, safe to use
                </p>
              </div>
            </div>

            {/* Enemy Numbers */}
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-rose/20 to-secondary/20 border border-accent-rose/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  ⚠️
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    Enemy Numbers
                  </h3>
                  <p className="text-white/60 text-xs">Use with caution</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 py-2">
                {luckyNumbers.enemies.length > 0 ? (
                  luckyNumbers.enemies.map((num) => (
                    <div
                      key={num}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-rose/20 to-secondary/20 border border-accent-rose/40 flex items-center justify-center text-xl font-bold text-white hover:scale-110 hover:border-accent-rose transition-all duration-300"
                    >
                      {num}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-sm">None</p>
                )}
              </div>

              <div className="pt-2">
                <p className="text-white/70 text-xs text-center leading-relaxed">
                  Avoid for crucial life decisions
                </p>
              </div>
            </div>
          </div>

          {/* Usage Guide */}
          <div className="glass-strong rounded-2xl p-6 card-glow">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent-emerald/20 border border-primary/30 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                💡
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-semibold text-white mb-3">
                  How to Use Lucky Numbers
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-accent-emerald text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/70 text-xs leading-relaxed">
                      Choose friend numbers for important dates (weddings, business launches)
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-accent-emerald text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/70 text-xs leading-relaxed">
                      Use in phone numbers, addresses, and vehicle registration
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-accent-emerald text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/70 text-xs leading-relaxed">
                      Prefer for financial investments and signing contracts
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-accent-rose text-sm mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-white/70 text-xs leading-relaxed">
                      Avoid enemy numbers for crucial life decisions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lu Shu Grid */}
        <div className="space-y-8 animate-fade-in-up reveal-5">
          {/* Header Section */}
          <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden border border-primary/10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-primary/30 mb-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent-gold animate-pulse"></div>
                <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  Ancient Chinese Numerology
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-accent-gold to-primary bg-clip-text text-transparent tracking-tight">
                Lo Shu Grid Analysis
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                <p className="text-primary text-sm font-medium">
                  Energy Matrix
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
              </div>
            </div>
          </div>

          {/* Grid Display */}
          <div className="glass-strong rounded-2xl p-8 card-glow border border-primary/10">
            <div className="max-w-sm mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {luShuGrid.map((row, i) =>
                  row.map((num, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`aspect-square rounded-xl flex items-center justify-center text-4xl font-bold transition-all duration-300 relative group ${
                        num === 0
                          ? 'bg-white/5 border border-white/10 text-white/20'
                          : 'bg-gradient-to-br from-primary/20 via-accent-gold/20 to-primary/20 border-2 border-primary/40 hover:scale-105 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/30'
                      }`}
                    >
                      <span className={`relative z-10 ${num !== 0 ? 'bg-gradient-to-br from-accent-gold via-primary to-accent-champagne bg-clip-text text-transparent animate-gold-glow drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]' : ''}`}>{num || ''}</span>
                      {num !== 0 && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent-gold/0 group-hover:from-primary/20 group-hover:to-accent-gold/20 transition-all duration-300"></div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="glass-strong rounded-2xl p-6 card-glow border border-primary/10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent-gold/20 border border-primary/30 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                📊
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent mb-2">
                  Understanding Your Grid
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  The Lo Shu Grid displays which numbers from 1-9 appear in your birth date. Each present number (shown in gold) reveals specific energies and traits that influence your personality and life path. Empty boxes indicate numbers absent from your birth date, representing areas for growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Planes Analysis */}
        {gridPlanes && (
          <div className="space-y-8 animate-fade-in-up reveal-7">
            {Object.entries(gridPlanes).map(([key, plane]) => {
              if (!plane.analysis.isActive) return null;

              return (
                <div key={key} className="space-y-6">
                  {/* Plane Header */}
                  <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-primary/30 mb-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                        <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                          {plane.analysis.fillPercentage}% Active • {plane.analysis.strength.replace('-', ' ')}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">
                        {plane.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                        <p className="text-primary text-sm font-medium">
                          Grid Plane
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="glass-strong rounded-2xl p-6 card-glow">
                    <p className="text-white/80 text-sm leading-relaxed text-center">
                      {plane.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="glass-strong rounded-2xl p-6 space-y-5 card-glow hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        ✨
                      </div>
                      <h4 className="font-display text-xl font-semibold text-white tracking-tight">
                        Key Characteristics
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {plane.characteristics.map((char, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-white/80 text-sm leading-relaxed group/item hover:text-white transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Balance Tip */}
                  {plane.balanceTip && (
                    <div className="glass-strong rounded-2xl p-6 card-glow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-accent-amber/20 border border-secondary/30 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                          💡
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display text-lg font-semibold text-white mb-2">
                            Balance Tip
                          </h4>
                          <p className="text-white/70 text-xs leading-relaxed">
                            {plane.balanceTip}
                          </p>
                        </div>
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
          <div className="space-y-8 animate-fade-in-up reveal-8">
            {/* Header Section */}
            <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent-rose/10 to-accent-violet/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-accent-rose/30 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-rose to-accent-violet"></div>
                  <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                    Absent Numbers
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Missing Numbers Analysis
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-rose/50"></div>
                  <p className="text-accent-rose text-sm font-medium">
                    Areas for Growth
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-rose/50"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-strong rounded-2xl p-6 card-glow">
              <p className="text-white/80 text-sm leading-relaxed text-center">
                Numbers absent from your birth date and their potential effects on your life
              </p>
            </div>

            {/* Missing Numbers Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {missingNumbers.map((missing) => (
                <div
                  key={missing.number}
                  className="glass-strong rounded-2xl p-6 space-y-4 card-glow hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-rose/20 to-accent-violet/20 border border-accent-rose/30 flex items-center justify-center text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {missing.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/80 text-sm leading-relaxed">
                        {missing.effect}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Remedy Tip */}
            <div className="glass-strong rounded-2xl p-6 card-glow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-accent-amber/20 border border-secondary/30 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                  💡
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold text-white mb-2">
                    Remedy Tip
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed">
                    You can strengthen missing numbers by wearing their associated colors, using their gemstones, or performing specific practices aligned with those planetary energies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Angel Numbers Section */}
        <div className="space-y-8 animate-fade-in-up reveal-6">
          {/* Header Section */}
          <div className="glass-strong rounded-2xl p-8 card-glow relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent-violet/10 to-accent-amber/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-accent-emerald/10 to-accent-rose/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-accent-violet/30 mb-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-amber"></div>
                <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  Divine Messages
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Angel Numbers
              </h2>
              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <p className="text-accent-violet text-sm font-medium">
                  Messages from the Universe
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="glass-strong rounded-2xl p-6 card-glow">
            <p className="text-white/80 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              Have you been seeing repeating numbers on clocks, receipts, or license plates? These aren't coincidences—they're Angel Numbers, gentle messages from the universe guiding your path.
            </p>
          </div>

          {/* Angel Numbers Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {angelNumbers.map((angel) => (
              <AngelNumberCard key={angel.id} angel={angel} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-8 text-center space-y-3 animate-fade-in-up reveal-9">
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
            These insights are based on your unique numerological profile. If
            something doesn't seem to fit right now, don't worry. Sometimes, it
            takes time for things to make sense. Trust your journey and stay
            positive!
          </p>
        </div>

        {/* Save Success/Error Messages */}
        {saveSuccess && (
          <div className="glass rounded-2xl p-6 text-center border-2 border-emerald-500/50 bg-emerald-500/10 animate-fade-in">
            <p className="text-emerald-400 text-lg font-semibold">
              ✓ Reading saved successfully!
            </p>
          </div>
        )}
        {saveError && (
          <div className="glass rounded-2xl p-6 text-center border-2 border-red-500/50 bg-red-500/10 animate-fade-in">
            <p className="text-red-400 text-lg font-semibold">✗ {saveError}</p>
          </div>
        )}
        {pdfError && (
          <div className="glass rounded-2xl p-6 text-center border-2 border-red-500/50 bg-red-500/10 animate-fade-in">
            <p className="text-red-400 text-lg font-semibold">✗ {pdfError}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up reveal-9">
          <button
            onClick={handleSaveReport}
            disabled={isSaving}
            className="btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Saving...
              </span>
            ) : (
              'Save Report'
            )}
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="btn-secondary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingPDF ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Generating PDF...
              </span>
            ) : (
              'Download PDF'
            )}
          </button>
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
