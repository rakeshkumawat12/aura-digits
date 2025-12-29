'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [supabase.auth]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsMenuOpen(false);
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`
              floating-navbar
              ${isScrolled ? 'floating-navbar-scrolled' : ''}
              transition-all duration-300
            `}
          >
            <div className="flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-3 group flex-shrink-0"
              >
                <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/auradigitsLogo.png"
                    alt="Aura Digits Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/calculator" className="nav-link">
                  Calculator
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                {loading ? (
                  <div className="w-6 h-6 border-2 border-primary/50 border-t-primary rounded-full animate-spin"></div>
                ) : user ? (
                  <>
                    <Link href="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      Login
                    </Link>
                    <Link href="/auth/signup" className="btn-nav-primary">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <span
                    className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-24 left-4 right-4 max-w-md mx-auto floating-navbar animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  href="/"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/calculator"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Calculator
                </Link>
                <Link
                  href="/about"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10"></div>

              {/* Mobile Auth Section */}
              <div className="space-y-3">
                {loading ? (
                  <div className="flex justify-center py-2">
                    <div className="w-6 h-6 border-2 border-primary/50 border-t-primary rounded-full animate-spin"></div>
                  </div>
                ) : user ? (
                  <>
                    <div className="text-sm text-white/60 px-4 py-2">
                      {user.user_metadata?.full_name || user.email}
                    </div>
                    <Link
                      href="/dashboard"
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="mobile-nav-link w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="btn-nav-primary w-full text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
