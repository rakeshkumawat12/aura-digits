'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';

export default function CalculatorPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    dateOfBirth: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate calculation
    setIsCalculating(true);
    setTimeout(() => {
      // Redirect to results page with query params
      const query = new URLSearchParams({
        dob: formData.dateOfBirth,
      });
      router.push(`/results?${query.toString()}`);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 py-12 mystical-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6 animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Numerology Calculator
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Enter your date of birth to discover your numerology numbers and unlock insights about your life path
            </p>
          </div>

          <div className="glass-strong rounded-[2rem] p-8 md:p-12 space-y-8 card-glow animate-fade-in-up reveal-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-white/90">
                  Date of Birth
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.dateOfBirth ? 'border-red-500' : 'border-white/20'} rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
                {errors.dateOfBirth && (
                  <span className="text-sm text-red-400">{errors.dateOfBirth}</span>
                )}
                <p className="text-sm text-white/50">
                  Your birth date is used to calculate your Mulank and Lu Shu Grid
                </p>
              </div>

              <button
                type="submit"
                className="w-full btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Calculating...
                  </span>
                ) : (
                  <>
                    Calculate My Numbers ✨
                  </>
                )}
              </button>
            </form>

            <div className="border-t border-white/10 pt-8 space-y-6">
              <h3 className="font-display text-2xl font-semibold text-white">What You'll Get:</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🔢</span>
                  <div>
                    <strong className="text-white block mb-1">Mulank (Driver Number)</strong>
                    <p className="text-white/70 text-sm">Your core personality and natural tendencies</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">⭐</span>
                  <div>
                    <strong className="text-white block mb-1">Destiny Number</strong>
                    <p className="text-white/70 text-sm">Your life purpose and ultimate goals</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">🎯</span>
                  <div>
                    <strong className="text-white block mb-1">Lu Shu Grid</strong>
                    <p className="text-white/70 text-sm">Detailed analysis of your strengths and areas to develop</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-white/60">
                <strong className="text-white/80">Note:</strong> Numerology is for spiritual guidance and
                self-reflection purposes only. Results should be used as a tool for
                personal growth and awareness.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
