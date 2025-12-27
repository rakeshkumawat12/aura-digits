'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2024',
    mulank: 7,
    destiny: 5,
  };

  // Mock saved readings
  const savedReadings = [
    {
      id: 1,
      date: 'Dec 15, 2024',
      name: 'John Doe',
      mulank: 7,
      destiny: 5,
    },
    {
      id: 2,
      date: 'Nov 28, 2024',
      name: 'Jane Smith',
      mulank: 3,
      destiny: 8,
    },
  ];

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
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                  <p className="text-white/60">{user.email}</p>
                  <p className="text-white/50 text-sm mt-1">Member since {user.memberSince}</p>
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
                        {user.mulank}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Mulank Number</h3>
                        <p className="text-white/60 text-sm">Your driver number</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                        {user.destiny}
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
                        <span className="text-2xl font-bold text-gradient">85%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent-gold to-accent-rose w-5/6"></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm">
                        Complete your profile to unlock personalized insights and recommendations
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

                {savedReadings.length === 0 ? (
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
                          <h3 className="text-xl font-bold text-white">{reading.name}</h3>
                          <span className="text-white/50 text-sm">{reading.date}</span>
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
                          <button className="flex-1 btn-outline text-sm py-2">View</button>
                          <button className="flex-1 btn-primary text-sm py-2">Download</button>
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
                      defaultValue={user.name}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/90">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
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
