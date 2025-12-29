'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import type { Reading } from '@/types/reading';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
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

  // Fetch saved readings when readings tab is active
  useEffect(() => {
    if (activeTab === 'readings' && user) {
      fetchReadings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, user]);

  const fetchReadings = async () => {
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
  };

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
        <main className="min-h-screen pt-20 px-4 py-12 cosmic-bg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-white/70">Loading your dashboard...</p>
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
      <main className="min-h-screen pt-20 px-4 py-12 cosmic-bg">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{displayName}</h1>
                  <p className="text-white/60">{userEmail}</p>
                  <p className="text-white/50 text-sm mt-1">Member since {memberSince}</p>
                </div>
              </div>
              <Link href="/calculator" className="btn-secondary">
                New Reading ✨
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="glass rounded-2xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('readings')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'readings'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Saved Readings
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Settings
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Your Numbers */}
                <div className="glass-strong rounded-3xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-white">Your Core Numbers</h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                        7
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Mulank Number</h3>
                        <p className="text-white/60 text-sm">Your driver number</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Destiny Number</h3>
                        <p className="text-white/60 text-sm">Your life purpose</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/results" className="btn-outline w-full block text-center">
                    View Full Reading
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="glass-strong rounded-3xl p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-white">Quick Stats</h2>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80">Total Readings</span>
                        <span className="text-2xl font-bold text-gradient">{savedReadings.length}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-2/3"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80">Profile Complete</span>
                        <span className="text-2xl font-bold text-gradient">
                          {user.user_metadata?.full_name ? '100%' : '50%'}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent-gold to-accent-rose"
                          style={{ width: user.user_metadata?.full_name ? '100%' : '50%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm">
                        {user.user_metadata?.full_name
                          ? 'Your profile is complete!'
                          : 'Complete your profile to unlock personalized insights and recommendations'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-strong rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      🔢
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">New reading calculated</p>
                      <p className="text-white/50 text-sm">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                      📊
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Profile updated</p>
                      <p className="text-white/50 text-sm">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Saved Readings Tab */}
          {activeTab === 'readings' && (
            <div className="space-y-6">
              <div className="glass-strong rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Saved Readings</h2>

                {loadingReadings ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-white/60 mt-4">Loading your readings...</p>
                  </div>
                ) : savedReadings.length === 0 ? (
                  <div className="text-center py-12 space-y-4">
                    <p className="text-white/60">No saved readings yet</p>
                    <Link href="/calculator" className="btn-primary inline-block">
                      Create Your First Reading
                    </Link>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {savedReadings.map((reading) => (
                      <div
                        key={reading.id}
                        className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white">
                            {reading.title || `Reading for ${new Date(reading.date_of_birth).toLocaleDateString()}`}
                          </h3>
                          <span className="text-white/50 text-sm">
                            {new Date(reading.created_at).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="text-white/70 text-sm">
                          DOB: {new Date(reading.date_of_birth).toLocaleDateString()}
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-1 text-center p-3 bg-primary/10 rounded-xl">
                            <div className="text-2xl font-bold text-gradient">{reading.mulank}</div>
                            <div className="text-white/60 text-sm mt-1">Mulank</div>
                          </div>
                          <div className="flex-1 text-center p-3 bg-secondary/10 rounded-xl">
                            <div className="text-2xl font-bold text-gradient">{reading.destiny}</div>
                            <div className="text-white/60 text-sm mt-1">Destiny</div>
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Link
                            href={`/reading/${reading.id}`}
                            className="flex-1 btn-outline text-sm py-2 text-center"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleDeleteReading(reading.id)}
                            disabled={deleteLoading === reading.id}
                            className="btn-outline text-red-400 border-red-400/30 hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed px-4 text-sm py-2"
                          >
                            {deleteLoading === reading.id ? (
                              <span className="w-5 h-5 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin inline-block"></span>
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
            <div className="space-y-6">
              <div className="glass-strong rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white">Account Settings</h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/90">Full Name</label>
                    <input
                      type="text"
                      defaultValue={displayName}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/90">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userEmail}
                      disabled
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white/50 placeholder-white/40 focus:outline-none cursor-not-allowed"
                    />
                    <p className="text-xs text-white/50">Email cannot be changed</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/90">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <button className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="glass-strong rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white">Preferences</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <div>
                      <p className="text-white font-medium">Email Notifications</p>
                      <p className="text-white/60 text-sm">Receive updates and insights</p>
                    </div>
                    <button className="w-14 h-8 bg-primary rounded-full relative">
                      <span className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <div>
                      <p className="text-white font-medium">Daily Numerology Tips</p>
                      <p className="text-white/60 text-sm">Get daily insights in your inbox</p>
                    </div>
                    <button className="w-14 h-8 bg-white/20 rounded-full relative">
                      <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-3xl p-8 space-y-4 border-2 border-red-500/20">
                <h2 className="text-2xl font-bold text-white">Danger Zone</h2>
                <p className="text-white/60">Once you delete your account, there is no going back. Please be certain.</p>
                <button className="btn-outline border-red-500 text-red-400 hover:bg-red-500/10">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
