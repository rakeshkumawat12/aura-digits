# Aura Digits - Numerology Application Architecture

## Application Overview

A mystical, premium numerology web application that calculates and interprets numerological insights based on users' names and birth dates.

---

## Design System

### Color Palette (Dark Mystical Theme)

```css
Primary Colors:
- Deep Purple: #6B46C1 (mystical, spiritual)
- Electric Blue: #4299E1 (trust, clarity)
- Cosmic Violet: #805AD5 (intuition)

Background:
- Deep Space: #0A0E27 (primary background)
- Dark Nebula: #1A1F3A (secondary background)
- Card Surface: #2D3748 (elevated surfaces)

Accent:
- Gold: #F6AD55 (premium, enlightenment)
- Rose Gold: #ED8936 (warmth, energy)
- Cosmic Pink: #ED64A6 (intuition, love)

Text:
- Primary: #F7FAFC (high contrast)
- Secondary: #CBD5E0 (readable)
- Muted: #718096 (supporting text)
```

### Typography

```
Headings: 'Inter', sans-serif (clean, modern)
Body: 'Inter', sans-serif
Accent: 'Playfair Display', serif (mystical touch for numerology numbers)

Sizes:
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.875rem (30px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
```

---

## Application Structure

### Routing Architecture

```
/ (Landing Page)
├── /auth
│   ├── /login
│   └── /signup
├── /calculator (Main calculator)
├── /results
│   └── /[reportId] (Individual report view)
├── /dashboard (User dashboard - saved reports)
├── /blog
│   ├── / (Blog listing)
│   └── /[slug] (Blog detail)
├── /about
└── /profile
```

### Folder Structure

```
src/
├── app/
│   ├── (auth)/              # Auth group
│   │   ├── login/
│   │   └── signup/
│   ├── (main)/              # Main app group
│   │   ├── calculator/
│   │   ├── results/
│   │   ├── dashboard/
│   │   ├── blog/
│   │   ├── about/
│   │   └── profile/
│   ├── layout.tsx
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # Base UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── Badge/
│   ├── layout/              # Layout components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Container/
│   ├── features/            # Feature-specific components
│   │   ├── calculator/
│   │   ├── results/
│   │   ├── blog/
│   │   └── profile/
│   └── shared/              # Shared components
│       ├── Hero/
│       ├── Section/
│       └── AnimatedBackground/
├── lib/
│   ├── numerology/          # Numerology calculation logic
│   │   ├── mulank.ts
│   │   ├── destiny.ts
│   │   ├── luShuGrid.ts
│   │   └── angelNumbers.ts
│   ├── validation/          # Form validation
│   └── api/                 # API utilities
├── hooks/
│   ├── useCalculator.ts
│   ├── useAuth.ts
│   └── useReport.ts
├── types/
│   ├── numerology.ts
│   ├── user.ts
│   └── blog.ts
└── styles/
    ├── themes/
    │   └── dark-mystical.css
    └── animations/
        └── cosmic.css
```

---

## Page Specifications

### 1. Landing Page (/)

**Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar (Fixed)                          │
├─────────────────────────────────────────┤
│                                         │
│        Hero Section                     │
│     - Animated background               │
│     - Headline + CTA                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│    Features Preview Cards               │
│  [Mulank] [Destiny] [Lu Shu Grid]      │
│                                         │
├─────────────────────────────────────────┤
│    How It Works Section                 │
├─────────────────────────────────────────┤
│    Testimonials (Future)                │
├─────────────────────────────────────────┤
│    Footer                               │
└─────────────────────────────────────────┘
```

**Components:**

- `Navbar` (sticky)
- `Hero` with animated cosmic background
- `FeatureCard` (3 preview cards)
- `HowItWorks` (step-by-step guide)
- `Footer`

---

### 2. Authentication (/auth/login, /auth/signup)

**Layout:**

```
┌─────────────────────────────────────────┐
│                                         │
│         [Logo]                          │
│                                         │
│    ┌─────────────────────┐             │
│    │  Auth Card          │             │
│    │  - Email            │             │
│    │  - Password         │             │
│    │  - Login/Signup     │             │
│    │  - Social OAuth     │             │
│    └─────────────────────┘             │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**

- Centered card layout
- Form validation
- Toggle between login/signup
- Forgot password flow
- Social authentication (future)

---

### 3. Calculator Page (/calculator)

**Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│    Calculator Card                      │
│    ┌─────────────────────┐             │
│    │ Full Name           │             │
│    │ [______________]    │             │
│    │                     │             │
│    │ Date of Birth       │             │
│    │ [DD/MM/YYYY]        │             │
│    │                     │             │
│    │ [Calculate Button]  │             │
│    └─────────────────────┘             │
│                                         │
│    Helper Info Section                  │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**

- Real-time validation
- Date picker component
- Helper tooltips
- Loading state during calculation
- Error handling

---

### 4. Results Dashboard (/results/[id])

**Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│  User Info Card                         │
│  Name: John Doe | DOB: 01/01/1990      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐            │
│  │ Mulank   │  │ Destiny  │            │
│  │   [5]    │  │   [8]    │            │
│  └──────────┘  └──────────┘            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Detailed Interpretation                │
│  - Personality traits                   │
│  - Strengths & Weaknesses               │
│  - Career guidance                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Lu Shu Grid (Visual)                   │
│  [3x3 Grid with numbers]                │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Actions: [Save] [Download PDF] [Share] │
│                                         │
│  Disclaimer Text                        │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**

- Animated number reveals
- Expandable sections
- Print/PDF export functionality
- Save to profile (authenticated users)
- Social sharing (future)

---

### 5. Blog (/blog, /blog/[slug])

**Blog Listing Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│  Blog Header                            │
│  "Numerology Insights & Wisdom"         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Post 1 │  │ Post 2 │  │ Post 3 │   │
│  │ Image  │  │ Image  │  │ Image  │   │
│  │ Title  │  │ Title  │  │ Title  │   │
│  │ Excerpt│  │ Excerpt│  │ Excerpt│   │
│  └────────┘  └────────┘  └────────┘   │
│                                         │
│  [Load More]                            │
│                                         │
└─────────────────────────────────────────┘
```

**Blog Detail Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│  Featured Image                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Blog Title                             │
│  Author | Date | Read Time              │
│                                         │
│  Blog Content (Markdown)                │
│                                         │
│  Share Buttons                          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Related Posts                          │
│                                         │
└─────────────────────────────────────────┘
```

---

### 6. About Page (/about)

**Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│  Hero Section                           │
│  "Understanding Numerology"             │
│                                         │
├─────────────────────────────────────────┤
│  What is Numerology?                    │
├─────────────────────────────────────────┤
│  How It Works                           │
├─────────────────────────────────────────┤
│  Calculation Methods                    │
├─────────────────────────────────────────┤
│  FAQ Section (Accordion)                │
├─────────────────────────────────────────┤
│  Disclaimer                             │
└─────────────────────────────────────────┘
```

**Features:**

- Smooth scroll navigation
- Expandable FAQ accordion
- Visual diagrams for calculations
- Educational content

---

### 7. Profile/Dashboard (/profile, /dashboard)

**Layout:**

```
┌─────────────────────────────────────────┐
│ Navbar                                  │
├─────────────────────────────────────────┤
│                                         │
│  Profile Header                         │
│  Avatar | Name | Email                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Tabs: [Reports] [Settings]             │
│                                         │
│  ┌─────────────────────────────┐       │
│  │ Saved Reports               │       │
│  │                             │       │
│  │ Report 1 - 01/01/2024       │       │
│  │ [View] [Download] [Delete]  │       │
│  │                             │       │
│  │ Report 2 - 02/15/2024       │       │
│  │ [View] [Download] [Delete]  │       │
│  │                             │       │
│  └─────────────────────────────┘       │
│                                         │
│  [Logout]                               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Component Library

### UI Components

1. **Button**
   - Variants: primary, secondary, outline, ghost
   - Sizes: small, medium, large
   - States: default, hover, active, disabled, loading

2. **Input**
   - Text, email, password, date
   - With label, error state, helper text
   - Icon support

3. **Card**
   - Glass morphism effect
   - Elevated shadow
   - Hover animations

4. **Badge**
   - Number badges for numerology results
   - Status badges

5. **Modal**
   - Overlay, centered content
   - Animations

6. **Accordion**
   - For FAQ section

---

## User Flow

### First-Time Visitor Flow

```
Landing Page
    ↓
[Calculate Your Numbers]
    ↓
Calculator Page
    ↓
Results Page
    ↓
[Save Report] → Login/Signup → Dashboard
```

### Returning User Flow

```
Landing Page
    ↓
Login
    ↓
Dashboard → View Saved Reports
    OR
Dashboard → New Calculation → Results
```

---

## Responsive Breakpoints

```css
Mobile: 0-640px
Tablet: 641-1024px
Desktop: 1025px+
```

---

## Future Enhancements (Scalable Architecture)

1. **Compatibility Checker**
   - Compare two numerology profiles
   - Relationship insights

2. **Remedies & Recommendations**
   - Based on numerology numbers
   - Lucky colors, gems, dates

3. **Angel Numbers Tracker**
   - Log sightings
   - Get interpretations

4. **Premium Features**
   - Detailed year predictions
   - Personal consultations
   - Advanced calculations

5. **Community Features**
   - Forums
   - User testimonials
   - Success stories

---

## Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Animations:** CSS Animations + Framer Motion (future)
- **Forms:** React Hook Form + Zod validation
- **State:** React Context + Zustand (future)
- **Database:** PostgreSQL (future)
- **Auth:** NextAuth.js (future)
- **PDF:** React-PDF or jsPDF
- **Analytics:** Vercel Analytics

---

## Performance Targets

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Score: > 90

---

## Accessibility Standards

- WCAG 2.1 Level AA compliance
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators
