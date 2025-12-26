# Quick Start Guide

## Installation & Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

## Adding a New Page

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file:

```typescript
export default function NewPage() {
  return <div>New Page</div>;
}
```

## Creating a Component

1. Create a file in `src/components/`
2. Use TypeScript and CSS Modules:

```typescript
// src/components/Card.tsx
import styles from './Card.module.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

```css
/* src/components/Card.module.css */
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
```

3. Export from `src/components/index.ts`:

```typescript
export { Card } from './Card';
```

## Using Absolute Imports

Always use `@/` prefix:

```typescript
import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { User } from '@/types';
```

## Environment Variables

- **Public** (client-side): `NEXT_PUBLIC_*`
- **Private** (server-side): No prefix

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://localhost/db
```

## Project Structure

```
src/
├── app/          # Pages and layouts (App Router)
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions
├── styles/       # CSS modules
└── types/        # TypeScript types
```

## Tips

1. Use server components by default (faster)
2. Add `'use client'` only for interactivity
3. Keep components small and focused
4. Always define TypeScript types
5. Use CSS Modules for styling
6. Format code before committing

## Need Help?

Check the main [README.md](README.md) for detailed documentation.
