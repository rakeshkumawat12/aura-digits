'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            <span className="text-3xl">✨</span>
            <span>Aura Digits</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/calculator" className="text-white/80 hover:text-white transition-colors font-medium">
              Calculator
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors font-medium">
              Blog
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors font-medium px-4 py-2">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/50">
              Sign Up
            </Link>
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
            <Link href="/auth/login" className="block text-white/80 hover:text-white transition-colors font-medium py-2">
              Login
            </Link>
            <Link href="/auth/signup" className="block bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded-lg text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
