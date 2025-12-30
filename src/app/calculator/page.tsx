'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { DateField, DateInput } from '@/components/ui/datefield';
import { Label } from '@/components/ui/field';

export default function CalculatorPage() {
  const router = useRouter();
  const [dateValue, setDateValue] = useState<any>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!dateValue) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Convert DateValue to string format (YYYY-MM-DD)
    const dobString = `${dateValue.year}-${String(dateValue.month).padStart(2, '0')}-${String(dateValue.day).padStart(2, '0')}`;

    // Simulate calculation
    setIsCalculating(true);
    setTimeout(() => {
      // Redirect to results page with query params
      const query = new URLSearchParams({
        dob: dobString,
      });
      router.push(`/results?${query.toString()}`);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 flex items-center justify-center mystical-bg">
        <div className="max-w-xl mx-auto w-full">
          <div className="text-center mb-8 space-y-3 animate-fade-in-up">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Numerology Calculator
            </h1>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 space-y-6 card-glow animate-fade-in-up reveal-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <DateField
                  className="w-full space-y-2"
                  value={dateValue}
                  onChange={setDateValue}
                  isInvalid={!!errors.dateOfBirth}
                >
                  <Label className="text-white/90 text-sm">
                    Date of Birth <span className="text-red-400 ml-1">*</span>
                  </Label>
                  <DateInput className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary" />
                </DateField>
                {errors.dateOfBirth && (
                  <span className="text-xs text-red-400">
                    {errors.dateOfBirth}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-secondary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Calculating...
                  </span>
                ) : (
                  <>Calculate My Numbers</>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
