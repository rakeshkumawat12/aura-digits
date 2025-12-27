'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-3xl group-hover:animate-float">✨</span>
            <span className="font-display text-3xl font-bold text-gradient hover:opacity-90 transition-opacity">
              Aura Digits
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/calculator" className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg relative group">
              Calculator
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition-all duration-300 font-medium text-lg relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {loading ? (
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-white/70 hover:text-white transition-all duration-300 font-medium px-4 py-2.5"
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-4">
                  <span className="text-white/70 font-medium">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-white/80 hover:text-white transition-all duration-300 font-medium px-5 py-2.5 border-2 border-white/20 rounded-xl hover:bg-white/10 hover:border-primary/50"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-white/70 hover:text-white transition-all duration-300 font-medium px-5 py-2.5">
                  Login
                </Link>
                <Link href="/auth/signup" className="bg-gradient-to-r from-primary via-primary-light to-primary text-white font-semibold px-7 py-3 rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 bg-[length:200%_100%] hover:bg-right">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
            <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
            <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/10 animate-fade-in-up">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
              Home
            </Link>
            <Link href="/calculator" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
              Calculator
            </Link>
            <Link href="/about" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
              About
            </Link>
            <Link href="/blog" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
              Blog
            </Link>
            <div className="border-t border-white/10 my-2"></div>

            {loading ? (
              <div className="flex justify-center py-2">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : user ? (
              <>
                <div className="text-white/80 text-sm py-2">
                  {user.user_metadata?.full_name || user.email}
                </div>
                <Link href="/dashboard" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-medium py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
                  Login
                </Link>
                <Link href="/auth/signup" className="block bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded-lg text-center">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
