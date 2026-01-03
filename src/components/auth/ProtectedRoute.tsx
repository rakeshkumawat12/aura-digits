'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  redirectTo = '/auth/signup'
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          // Store the intended destination for redirect after login
          const returnUrl = pathname + (typeof window !== 'undefined' ? window.location.search : '');
          sessionStorage.setItem('returnUrl', returnUrl);

          router.push(redirectTo);
          return;
        }

        setUser(user);
      } catch (error) {
        console.error('Auth check error:', error);
        router.push(redirectTo);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          router.push(redirectTo);
        } else if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router, redirectTo, pathname]);

  if (loading) {
    return (
      <main className="min-h-screen pt-20 px-4 py-12 mystical-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white/70 text-sm">Verifying authentication...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
