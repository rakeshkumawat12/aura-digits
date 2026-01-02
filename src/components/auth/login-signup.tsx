"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function LoginSignupSection() {
  const router = useRouter();
  const supabase = createClient();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Authenticate with Supabase
    setIsLoading(true);
    setErrors({});

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrors({ general: error.message });
        setIsLoading(false);
        return;
      }

      if (data.user) {
        router.push("/");
        router.refresh();
      }
    } catch {
      setErrors({ general: "An unexpected error occurred" });
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: "github" | "google") => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error(`${provider} login error:`, error);
        setErrors({ general: error.message });
        setIsLoading(false);
      }
    } catch (error) {
      console.error(`${provider} login error:`, error);
      setErrors({ general: "An unexpected error occurred" });
      setIsLoading(false);
    }
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    type P = { x: number; y: number; v: number; o: number };
    let ps: P[] = [];
    let raf = 0;

    const make = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      v: Math.random() * 0.25 + 0.05,
      o: Math.random() * 0.35 + 0.15,
    });

    const init = () => {
      ps = [];
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < count; i++) ps.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ps.forEach((p) => {
        p.y -= p.v;
        if (p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + Math.random() * 40;
          p.v = Math.random() * 0.25 + 0.05;
          p.o = Math.random() * 0.35 + 0.15;
        }
        ctx.fillStyle = `rgba(13, 148, 136, ${p.o})`;
        ctx.fillRect(p.x, p.y, 0.7, 2.2);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="fixed inset-0 bg-[#0A0A0F] text-white overflow-hidden">
      <style>{`
        .accent-lines{position:absolute;inset:0;pointer-events:none;opacity:.6}
        .hline,.vline{position:absolute;background:rgba(13, 148, 136, 0.15);will-change:transform,opacity}
        .hline{left:0;right:0;height:1px;transform:scaleX(0);transform-origin:50% 50%;animation:drawX .8s cubic-bezier(.22,.61,.36,1) forwards}
        .vline{top:0;bottom:0;width:1px;transform:scaleY(0);transform-origin:50% 0%;animation:drawY .9s cubic-bezier(.22,.61,.36,1) forwards}
        .hline:nth-child(1){top:18%;animation-delay:.12s}
        .hline:nth-child(2){top:50%;animation-delay:.22s}
        .hline:nth-child(3){top:82%;animation-delay:.32s}
        .vline:nth-child(4){left:22%;animation-delay:.42s}
        .vline:nth-child(5){left:50%;animation-delay:.54s}
        .vline:nth-child(6){left:78%;animation-delay:.66s}
        .hline::after,.vline::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(13, 148, 136, 0.3),transparent);opacity:0;animation:shimmer .9s ease-out forwards}
        .hline:nth-child(1)::after{animation-delay:.12s}
        .hline:nth-child(2)::after{animation-delay:.22s}
        .hline:nth-child(3)::after{animation-delay:.32s}
        .vline:nth-child(4)::after{animation-delay:.42s}
        .vline:nth-child(5)::after{animation-delay:.54s}
        .vline:nth-child(6)::after{animation-delay:.66s}
        @keyframes drawX{0%{transform:scaleX(0);opacity:0}60%{opacity:.95}100%{transform:scaleX(1);opacity:.6}}
        @keyframes drawY{0%{transform:scaleY(0);opacity:0}60%{opacity:.95}100%{transform:scaleY(1);opacity:.6}}
        @keyframes shimmer{0%{opacity:0}35%{opacity:.25}100%{opacity:0}}

        .card-animate {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s cubic-bezier(.22,.61,.36,1) 0.4s forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Atmospheric background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.15),transparent)]" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(180,83,9,0.1),transparent)]" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(124,58,237,0.08),transparent)]" />
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />
      </div>

      {/* Animated accent lines */}
      <div className="accent-lines">
        <div className="hline" />
        <div className="hline" />
        <div className="hline" />
        <div className="vline" />
        <div className="vline" />
        <div className="vline" />
      </div>

      {/* Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none"
      />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
        <Link href="/" className="text-xs tracking-[0.14em] uppercase text-white/60 hover:text-primary transition-colors font-medium">
          AURA DIGITS
        </Link>
        <Link href="/" className="relative z-50">
          <Button
            variant="outline"
            className="h-9 rounded-lg border-white/[0.15] bg-white/[0.03] text-white/80 hover:bg-white/[0.08] hover:text-white hover:border-primary/40 transition-all"
          >
            <span className="mr-2 text-sm">Home</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </header>

      {/* Centered Login Card */}
      <div className="h-full w-full grid place-items-center px-4 relative z-10">
        <Card className="card-animate w-full max-w-sm border-white/[0.08] bg-[#13131C]/70 backdrop-blur-xl shadow-2xl shadow-black/20 supports-[backdrop-filter]:bg-[#13131C]/60">
          <CardHeader className="space-y-1.5 pb-6">
            <CardTitle className="text-2xl font-display text-white tracking-tight">Welcome back</CardTitle>
            <CardDescription className="text-white/50 text-sm">
              Sign in to your account
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-5 px-6">
            <form onSubmit={handleSubmit} className="grid gap-5">
              {errors.general && (
                <div className="p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                  <p className="text-sm text-red-400">{errors.general}</p>
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white/80 text-sm font-normal">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors({ ...errors, email: "" });
                    }}
                    className={`pl-10 bg-white/[0.03] border-white/[0.12] text-white placeholder:text-white/30 hover:bg-white/[0.05] focus:bg-white/[0.05] focus:border-primary/40 transition-all ${
                      errors.email ? "border-red-400/50 focus:border-red-400/70" : ""
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-400">{errors.email}</span>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white/80 text-sm font-normal">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: "" });
                    }}
                    className={`pl-10 pr-10 bg-white/[0.03] border-white/[0.12] text-white placeholder:text-white/30 hover:bg-white/[0.05] focus:bg-white/[0.05] focus:border-primary/40 transition-all ${
                      errors.password ? "border-red-400/50 focus:border-red-400/70" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-white/30 hover:text-white/70 transition-colors"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-xs text-red-400">{errors.password}</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary"
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-white/50 text-sm font-normal cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <a href="/auth/forgot-password" className="text-sm text-white/60 hover:text-primary transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-10 rounded-lg bg-gradient-to-r from-primary via-accent-gold to-primary text-bg-primary border border-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-0.5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin"></span>
                    Signing in...
                  </span>
                ) : (
                  "Continue"
                )}
              </Button>
            </form>

            <div className="relative py-2">
              <Separator className="bg-white/[0.08]" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#13131C]/80 px-3 text-[11px] uppercase tracking-widest text-white/30 font-medium">
                or
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-10 rounded-lg border-white/[0.12] bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleOAuthLogin("google")}
              disabled={isLoading}
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm">Continue with Google</span>
            </Button>
          </CardContent>

          <CardFooter className="flex items-center justify-center text-sm text-white/50 pb-6">
            Don't have an account?
            <a className="ml-1.5 text-white/80 hover:text-primary transition-colors font-medium" href="/auth/signup">
              Create one
            </a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
