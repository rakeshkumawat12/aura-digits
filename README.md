# Aura Digits

A modern numerology calculator providing personalized insights through Life Path Numbers, Angel Numbers, Lucky Numbers, and Lo Shu Grid analysis.

## Features

- **Life Path Calculations** - Mulank (Root Number) and Destiny Number based on birth date
- **Angel Numbers** - Discover recurring number patterns and their spiritual meanings
- **Lucky & Enemy Numbers** - Personalized lucky numbers with practical usage guidance
- **Lo Shu Grid Analysis** - Visualize numerological profile with missing numbers insights
- **Premium UI/UX** - Mystical design with glass morphism, responsive layouts, and smooth animations
- **Secure Authentication** - Email/password and Google OAuth via Supabase
- **Protected Routes** - Seamless auth flow with return URL handling

## Tech Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Typography**: Geist Font Family
- **Analytics**: Vercel Analytics
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aura-digits
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── auth/          # Authentication pages and callback
│   ├── calculator/    # Main calculator page
│   ├── results/       # Results display page
│   └── layout.tsx     # Root layout with font config
├── components/
│   ├── auth/          # Auth components (login, signup, ProtectedRoute)
│   ├── layout/        # Layout components (Navbar, Footer)
│   └── ui/            # Reusable UI components
├── lib/
│   └── supabase/      # Supabase client and server instances
└── fonts/             # Geist font files
```

## Authentication Setup

### Supabase Configuration

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Enable Email provider in Authentication → Providers
3. For Google OAuth:
   - Enable Google provider in Supabase
   - Add OAuth credentials from Google Cloud Console
   - Configure authorized redirect URI: `https://your-project.supabase.co/auth/v1/callback`

### Protected Routes

Pages use the `<ProtectedRoute>` component to ensure authentication. Unauthenticated users are redirected to signup with their intended destination stored for post-login redirect to the calculator page.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

Remember to update Supabase Site URL and redirect URLs to include your production domain.

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```
