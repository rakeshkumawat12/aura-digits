# Aura Digits - Numerology Web Application

## 🎯 Project Overview

**Aura Digits** is a premium, mystical numerology web application built with Next.js 15 and TypeScript. It provides users with personalized numerology readings based on their name and birth date, featuring Mulank numbers, Destiny numbers, and Lu Shu Grid visualizations.

---

## ✨ Key Features

### Current Implementation

- ✅ **Modern Tech Stack**: Next.js 15 + TypeScript + CSS Modules
- ✅ **Dark Mystical Theme**: Deep space colors with cosmic gradients
- ✅ **Design System**: Comprehensive CSS variables and theming
- ✅ **Animations**: Cosmic animations (float, pulse-glow, twinkle, shimmer)
- ✅ **Glass Morphism**: Modern UI effects
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: WCAG AA compliance ready
- ✅ **Type Safety**: Full TypeScript coverage

### Planned Features

- 📊 **Numerology Calculations**
  - Mulank (Driver Number)
  - Destiny Number
  - Lu Shu Grid Analysis
  - Angel Numbers (future)

- 🎨 **User Experience**
  - Interactive calculator
  - Animated number reveals
  - PDF report generation
  - Save & share reports

- 👤 **User Management**
  - Authentication (Login/Signup)
  - User dashboard
  - Saved reports history
  - Profile management

- 📝 **Content**
  - Educational blog
  - About numerology
  - FAQ section
  - Calculation guides

---

## 🏗️ Application Architecture

### Tech Stack

```
Framework:     Next.js 15 (App Router)
Language:      TypeScript 5.7
Styling:       CSS Modules + CSS Variables
Fonts:         Inter (body) + Playfair Display (accents)
Deployment:    Vercel (recommended)
```

### Folder Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── (auth)/            # Authentication routes
│   │   ├── login/
│   │   └── signup/
│   ├── (main)/            # Main application routes
│   │   ├── calculator/
│   │   ├── results/
│   │   ├── dashboard/
│   │   ├── blog/
│   │   ├── about/
│   │   └── profile/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
│
├── components/
│   ├── ui/                # Base UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Badge/
│   │   └── Modal/
│   ├── layout/            # Layout components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Container/
│   ├── features/          # Feature-specific components
│   │   ├── calculator/
│   │   ├── results/
│   │   ├── blog/
│   │   └── profile/
│   └── shared/            # Shared components
│       ├── Hero/
│       ├── FeatureCard/
│       └── AnimatedBackground/
│
├── lib/                   # Business logic
│   ├── numerology/        # Calculation logic
│   │   ├── mulank.ts
│   │   ├── destiny.ts
│   │   ├── luShuGrid.ts
│   │   └── interpretations.ts
│   ├── validation/        # Form validation
│   └── utils.ts           # Utilities
│
├── hooks/                 # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useCalculator.ts
│   └── useAuth.ts
│
├── types/                 # TypeScript definitions
│   ├── numerology.ts
│   ├── user.ts
│   ├── blog.ts
│   └── index.ts
│
└── styles/                # Styling
    ├── themes/
    │   └── dark-mystical.css
    └── animations/
        └── cosmic.css
```

---

## 🎨 Design System

### Color Palette

**Primary Colors (Mystical)**

```css
Deep Purple:    #6B46C1  (spiritual, mystical)
Electric Blue:  #4299E1  (trust, clarity)
Cosmic Violet:  #805AD5  (intuition)
```

**Background (Deep Space)**

```css
Deep Space:     #0A0E27  (primary background)
Dark Nebula:    #1A1F3A  (secondary background)
Card Surface:   #2D3748  (elevated surfaces)
```

**Accents**

```css
Gold:           #F6AD55  (premium, enlightenment)
Rose Gold:      #ED8936  (warmth, energy)
Cosmic Pink:    #ED64A6  (intuition, love)
```

**Text**

```css
Primary:        #F7FAFC  (high contrast)
Secondary:      #CBD5E0  (readable)
Muted:          #718096  (supporting text)
```

### Typography

**Font Families**

- **Headings**: Inter (clean, modern)
- **Body**: Inter
- **Accents**: Playfair Display (mystical numbers)

**Font Sizes**

- H1: 48px (3rem)
- H2: 36px (2.25rem)
- H3: 30px (1.875rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

### Spacing Scale

```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
```

---

## 📱 Page Specifications

### 1. Landing Page (/)

**Purpose**: Introduce numerology and capture user interest

**Sections**:

- Navbar (fixed): Logo + Nav tabs + Login/Signup
- Hero: "Discover Your Life Path Through Numerology"
- Feature Preview: Mulank, Destiny, Lu Shu Grid cards
- How It Works: Step-by-step guide
- CTA: "Calculate Your Numbers"
- Footer

### 2. Authentication (/auth/login, /auth/signup)

**Purpose**: User login and registration

**Features**:

- Email/Password inputs
- Form validation
- Toggle between login/signup
- Forgot password
- Social OAuth (future)

### 3. Calculator (/calculator)

**Purpose**: Collect user data for numerology calculation

**Inputs**:

- Full Name (text)
- Date of Birth (date picker)
- Validation: Required fields
- Submit: "Calculate"

**Helper Info**:

- Tooltips explaining each field
- Examples

### 4. Results Dashboard (/results/[id])

**Purpose**: Display numerology readings

**Components**:

- User Info Card
- Mulank Number Badge + Interpretation
- Destiny Number Badge + Interpretation
- Lu Shu Grid (3x3 visual)
- Detailed Insights:
  - Personality traits
  - Strengths & Weaknesses
  - Career guidance
  - Relationship compatibility

**Actions**:

- Save Report (auth required)
- Download PDF
- Share (future)

**Disclaimer**: "For spiritual guidance only"

### 5. Blog (/blog, /blog/[slug])

**Purpose**: Educational content about numerology

**Listing Page**:

- Grid of blog cards
- Title, excerpt, image
- "Read More" CTA
- Categories/Tags filter

**Detail Page**:

- Featured image
- Title + Author + Date
- Content (Markdown support)
- Related posts

### 6. About (/about)

**Purpose**: Educate users about numerology

**Sections**:

- What is Numerology?
- How It Works
- Calculation Methods
- FAQ (Accordion)
- Disclaimer

### 7. Profile/Dashboard (/profile, /dashboard)

**Purpose**: User account management

**Features**:

- Profile header (Avatar, Name, Email)
- Saved Reports:
  - List view
  - View, Download, Delete actions
- Account Settings
- Logout

---

## 🔮 Numerology Calculations

### Mulank (Driver Number)

**Calculation**: Sum of birth date digits → reduce to single digit

**Example**:

- Born: 25th
- Calculation: 2 + 5 = 7
- Mulank: 7

**Meaning**: Represents personality and behavior

### Destiny Number

**Calculation**: Name converted to numbers → sum → reduce

**Pythagorean System**:

```
A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9
J=1, K=2, L=3, M=4, N=5, O=6, P=7, Q=8, R=9
S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8
```

**Meaning**: Life path and purpose

### Lu Shu Grid

**Calculation**: Plot birth date numbers in 3x3 grid

**Grid Layout**:

```
4 9 2
3 5 7
8 1 6
```

**Analysis**:

- Missing numbers → Weaknesses
- Repeating numbers → Strengths
- Horizontal/Vertical/Diagonal lines → Planes

---

## 🎯 User Flow

### First-Time Visitor

```
Landing Page
    ↓
"Calculate Your Numbers"
    ↓
Calculator Page
    ↓
Enter Name + DOB
    ↓
Results Page
    ↓
[Save Report] → Login/Signup
```

### Returning User

```
Login
    ↓
Dashboard → View Saved Reports
    OR
Dashboard → New Calculation
```

---

## 📊 Component Library

### UI Components

**Button**

- Variants: primary, secondary, outline, ghost
- Sizes: small, medium, large
- States: default, hover, loading, disabled

**Card**

- Variants: default, glass, elevated
- Parts: Card, CardHeader, CardBody, CardFooter
- Hover effects

**Input**

- Types: text, email, password, date
- With label, helper text, error state
- Icon support

**Badge**

- Number badges for numerology results
- Color variants
- Sizes

**Modal**

- Centered overlay
- Animated entrance
- Close on backdrop click

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm/yarn/pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

---

## 📂 Environment Variables

```env
# Application
NEXT_PUBLIC_APP_NAME=Aura Digits
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API (Future)
# NEXT_PUBLIC_API_URL=
# API_SECRET_KEY=

# Database (Future)
# DATABASE_URL=

# Authentication (Future)
# NEXTAUTH_URL=
# NEXTAUTH_SECRET=
```

---

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all files
- Follow ESLint rules
- Format with Prettier
- Use absolute imports: `@/components`

### Component Guidelines

- Functional components only
- Use TypeScript interfaces for props
- CSS Modules for styling
- Export from index.ts

### File Naming

- Components: PascalCase (Button.tsx)
- Utilities: camelCase (formatDate.ts)
- Types: camelCase (numerology.ts)
- CSS Modules: PascalCase.module.css

### Git Workflow

- Feature branches: `feature/name`
- Bug fixes: `fix/name`
- Commit format: Conventional Commits

---

## 🎯 Future Roadmap

### Phase 2: Advanced Features

- [ ] Compatibility Checker
- [ ] Remedies & Recommendations
- [ ] Angel Numbers Tracker
- [ ] Year/Month Predictions

### Phase 3: Premium

- [ ] Paid consultations
- [ ] Advanced calculations
- [ ] Personalized reports
- [ ] Subscription model

### Phase 4: Community

- [ ] User testimonials
- [ ] Forums
- [ ] Share success stories
- [ ] Social features

---

## 📚 Documentation

- [Architecture Guide](ARCHITECTURE.md) - Full architecture details
- [Implementation Plan](IMPLEMENTATION_PLAN.md) - Development roadmap
- [Quick Start](QUICK_START.md) - Quick reference guide
- [README](README.md) - Project setup and usage

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📄 License

MIT License - See LICENSE file

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Numerology experts for calculation methods
- Design inspiration from mystical and spiritual themes

---

**Built with ❤️ for seekers of cosmic wisdom**
