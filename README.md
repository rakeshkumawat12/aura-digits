# Aura Digits - Numerology Web Application

> A premium, mystical numerology platform built with Next.js 15 and TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Overview

**Aura Digits** is a modern numerology web application that provides personalized insights based on users' names and birth dates. Features include Mulank (Driver Number), Destiny Number calculations, and Lu Shu Grid analysis with a beautiful dark mystical theme.

### 🎯 Key Features

- 🔮 **Numerology Calculations** - Mulank, Destiny, Lu Shu Grid
- 🎨 **Dark Mystical Theme** - Beautiful cosmic UI with animations
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Lightning Fast** - Optimized Next.js 15 performance
- 🔒 **Type-Safe** - Full TypeScript coverage
- ♿ **Accessible** - WCAG AA compliant

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
aura-digits/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Landing page
│   │   └── globals.css      # Global styles with theme
│   ├── components/          # React components
│   │   ├── ui/              # Base UI (Card, Button, Input, Badge, Modal)
│   │   ├── layout/          # Layout (Navbar, Footer, Container)
│   │   ├── features/        # Feature-specific components
│   │   └── shared/          # Shared components (Hero, FeatureCard)
│   ├── lib/                 # Business logic
│   │   ├── numerology/      # Calculation logic (Mulank, Destiny, Lu Shu)
│   │   ├── validation/      # Form validation
│   │   └── utils.ts         # Utilities
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript definitions
│   │   ├── numerology.ts    # Numerology types
│   │   ├── user.ts          # User types
│   │   └── blog.ts          # Blog types
│   └── styles/              # Styling
│       ├── themes/          # dark-mystical.css (CSS variables)
│       └── animations/      # cosmic.css (animations)
├── public/                  # Static assets
├── ARCHITECTURE.md          # Complete architecture guide
├── IMPLEMENTATION_PLAN.md   # Development roadmap
├── PROJECT_SUMMARY.md       # Detailed overview
└── QUICK_START.md           # Quick reference
```

---

## 🎨 Design System

### Color Palette

**Primary Colors (Mystical)**

```css
Deep Purple: #6b46c1 (spiritual, mystical)
Electric Blue: #4299e1 (trust, clarity)
Cosmic Violet: #805ad5 (intuition)
```

**Background (Deep Space)**

```css
Deep Space: #0a0e27 (primary background)
Dark Nebula: #1a1f3a (secondary background)
Card Surface: #2d3748 (elevated surfaces)
```

**Accents**

```css
Gold: #f6ad55 (premium, enlightenment)
Rose Gold: #ed8936 (warmth, energy)
Cosmic Pink: #ed64a6 (intuition, love)
```

### Typography

- **Headings**: Inter (modern, clean)
- **Body**: Inter
- **Accents**: Playfair Display (mystical numbers)

### Available Components

✅ **Button** - Multiple variants (primary, secondary, outline)
✅ **Card** - Glass morphism effects (default, glass, elevated)
🚧 **Input** - Form inputs with validation
🚧 **Badge** - Number displays for numerology
🚧 **Modal** - Overlay dialogs

---

## 📱 Application Pages

### Planned Pages (See ARCHITECTURE.md for details)

1. **Landing Page (/)** - Hero + Feature preview + CTA
2. **Calculator (/calculator)** - Input name & DOB for calculations
3. **Results (/results/[id])** - Display numerology insights
4. **Authentication (/auth/login, /auth/signup)** - User login/signup
5. **Blog (/blog)** - Educational content about numerology
6. **About (/about)** - What is numerology, FAQ, methods
7. **Profile (/profile)** - User dashboard with saved reports

---

## 🔮 Numerology Calculations

### Mulank (Driver Number)

Sum of birth date digits reduced to single digit.

**Example**: Born on 25th → 2 + 5 = **7**

### Destiny Number

Based on name using Pythagorean numerology system.

**System**: A=1, B=2... Z=26 (cyclical 1-9)

### Lu Shu Grid

3x3 grid analysis based on birth date numbers.

```
4 9 2
3 5 7
8 1 6
```

- **Missing numbers** → Areas to develop
- **Repeating numbers** → Natural strengths

---

## 💻 Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

### Code Style Guidelines

- ✅ Use TypeScript for all files
- ✅ Follow ESLint configuration
- ✅ Format code with Prettier
- ✅ Use absolute imports: `@/components`
- ✅ CSS Modules for component styles
- ✅ Functional components only

### Absolute Imports

Use the `@/` prefix for clean imports:

```typescript
import { Button } from '@/components/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { NumerologyResult } from '@/types/numerology';
```

---

## 🌐 Environment Variables

```env
# Application
NEXT_PUBLIC_APP_NAME=Aura Digits
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Future: API, Database, Authentication
```

See [.env.local.example](.env.local.example) for full reference.

---

## 🏗️ Tech Stack

| Category   | Technology                  |
| ---------- | --------------------------- |
| Framework  | Next.js 15 (App Router)     |
| Language   | TypeScript 5.7              |
| Styling    | CSS Modules + CSS Variables |
| Fonts      | Inter + Playfair Display    |
| Linting    | ESLint 9                    |
| Formatting | Prettier 3                  |
| Deployment | Vercel (recommended)        |

---

## 📚 Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Complete architecture and design system
- **[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md)** - Development roadmap and priorities
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Comprehensive project overview
- **[QUICK_START.md](QUICK_START.md)** - Quick reference for common tasks

---

## 🎯 Development Roadmap

### Phase 1: Foundation ✅

- [x] Project setup with Next.js 15 + TypeScript
- [x] Design system and dark mystical theme
- [x] CSS variables and animations (cosmic theme)
- [x] Base UI components (Button, Card)
- [x] TypeScript type definitions
- [x] Architecture documentation

### Phase 2: Core Features 🚧 (Next)

- [ ] Landing page with Hero section
- [ ] Navbar and Footer components
- [ ] Calculator page with form validation
- [ ] Numerology calculation logic (Mulank, Destiny, Lu Shu)
- [ ] Results dashboard with visualizations
- [ ] Authentication flow (Login/Signup)

### Phase 3: Content Pages

- [ ] Blog section (listing + detail pages)
- [ ] About page with FAQ accordion
- [ ] User profile and dashboard
- [ ] Saved reports management

### Phase 4: Advanced Features

- [ ] PDF report generation
- [ ] Compatibility checker
- [ ] Remedies & recommendations
- [ ] Angel numbers tracker

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📊 Performance Targets

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Score: > 90

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ ARIA labels (in progress)
- ✅ Color contrast (WCAG AA)
- ✅ Screen reader support

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Deployment platform
- Numerology experts for calculation methods
- Design inspiration from mystical and spiritual themes

---

**Built with ❤️ for seekers of cosmic wisdom**

_Last updated: December 2024_
