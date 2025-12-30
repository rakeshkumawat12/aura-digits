'use client';

import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import type { Reading } from '@/types/reading';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('readings');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [savedReadings, setSavedReadings] = useState<Reading[]>([]);
  const [loadingReadings, setLoadingReadings] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/auth/login');
        return;
      }

      setUser(user);
      setLoading(false);
    };

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchReadings = useCallback(async () => {
    setLoadingReadings(true);
    try {
      const response = await fetch('/api/readings');
      const result = await response.json();

      if (result.success && result.readings) {
        setSavedReadings(result.readings);
      }
    } catch (error) {
      console.error('Error fetching readings:', error);
    } finally {
      setLoadingReadings(false);
    }
  }, []);

  // Fetch saved readings when readings tab is active
  useEffect(() => {
    if (activeTab === 'readings' && user) {
      fetchReadings();
    }
  }, [activeTab, user, fetchReadings]);

  const handleDeleteReading = async (readingId: string) => {
    if (!confirm('Are you sure you want to delete this reading?')) {
      return;
    }

    setDeleteLoading(readingId);
    try {
      const response = await fetch(`/api/readings/${readingId}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setSavedReadings(savedReadings.filter(r => r.id !== readingId));
      } else {
        alert('Failed to delete reading');
      }
    } catch (error) {
      console.error('Error deleting reading:', error);
      alert('Failed to delete reading');
    } finally {
      setDeleteLoading(null);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 px-4 py-12 mystical-bg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-white/70 text-sm">Loading your dashboard...</p>
          </div>
        </main>
      </>
    );
  }

  if (!user) {
    return null;
  }

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const userEmail = user.email || '';
  const memberSince = new Date(user.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 px-4 py-8 mystical-bg">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="glass-strong rounded-xl p-6 card-glow relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-white tracking-tight">{displayName}</h1>
                  <p className="text-white/60 text-xs mt-0.5">{userEmail}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">Member since {memberSince}</p>
                </div>
              </div>
              <Link href="/calculator" className="btn-secondary inline-flex items-center gap-2 text-sm">
                <span>New Reading</span>
                <span className="text-base">✨</span>
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="glass-strong rounded-xl p-1.5 inline-flex gap-1.5">
            <button
              onClick={() => setActiveTab('readings')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'readings'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Saved Readings
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Settings
            </button>
          </div>

          {/* Saved Readings Tab */}
          {activeTab === 'readings' && (
            <div className="space-y-5">
              <div className="glass-strong rounded-xl p-6 card-glow">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet/20 to-accent-amber/20 border border-accent-violet/30 flex items-center justify-center text-lg">
                    📚
                  </div>
                  <h2 className="font-display text-xl font-semibold text-white tracking-tight">Saved Readings</h2>
                </div>

                {loadingReadings ? (
                  <div className="text-center py-10">
                    <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-white/60 mt-3 text-xs">Loading your readings...</p>
                  </div>
                ) : savedReadings.length === 0 ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl flex items-center justify-center text-3xl mx-auto">
                      📖
                    </div>
                    <p className="text-white/60 text-xs">No saved readings yet</p>
                    <Link href="/calculator" className="btn-primary inline-block text-sm">
                      Create Your First Reading
                    </Link>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    {savedReadings.map((reading) => (
                      <div
                        key={reading.id}
                        className="glass-strong rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 space-y-4 card-glow group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-base font-semibold text-white tracking-tight">
                            {reading.title || `Reading for ${new Date(reading.date_of_birth).toLocaleDateString()}`}
                          </h3>
                          <span className="text-white/50 text-[11px] whitespace-nowrap">
                            {new Date(reading.created_at).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="text-white/70 text-xs">
                          <span className="text-white/50">DOB:</span> {new Date(reading.date_of_birth).toLocaleDateString()}
                        </div>

                        <div className="flex gap-3">
                          <div className="flex-1 text-center p-3 glass rounded-lg group-hover:bg-white/5 transition-all duration-300">
                            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">{reading.mulank}</div>
                            <div className="text-white/60 text-[11px] mt-0.5">Mulank</div>
                          </div>
                          <div className="flex-1 text-center p-3 glass rounded-lg group-hover:bg-white/5 transition-all duration-300">
                            <div className="text-xl font-bold bg-gradient-to-r from-secondary to-accent-amber bg-clip-text text-transparent">{reading.destiny}</div>
                            <div className="text-white/60 text-[11px] mt-0.5">Destiny</div>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-1">
                          <Link
                            href={`/reading/${reading.id}`}
                            className="flex-1 btn-outline text-xs py-2 text-center"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleDeleteReading(reading.id)}
                            disabled={deleteLoading === reading.id}
                            className="btn-outline text-red-400 border-red-400/30 hover:bg-red-500/10 hover:border-red-400/50 disabled:opacity-50 disabled:cursor-not-allowed px-3 text-xs py-2"
                          >
                            {deleteLoading === reading.id ? (
                              <span className="w-4 h-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin inline-block"></span>
                            ) : (
                              '🗑️'
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-5">
              <div className="glass-strong rounded-xl p-6 space-y-5 card-glow">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-emerald/20 to-accent-violet/20 border border-accent-emerald/30 flex items-center justify-center text-lg">
                    ⚙️
                  </div>
                  <h2 className="font-display text-xl font-semibold text-white tracking-tight">Account Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-white/90">Full Name</label>
                    <input
                      type="text"
                      defaultValue={displayName}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-white/90">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userEmail}
                      disabled
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-sm text-white/50 placeholder-white/40 focus:outline-none cursor-not-allowed"
                    />
                    <p className="text-[11px] text-white/50">Email cannot be changed</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-white/90">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <button className="btn-primary w-full sm:w-auto text-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
