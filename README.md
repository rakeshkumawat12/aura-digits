# Aura Digits

A production-ready Next.js starter template with TypeScript, clean architecture, and best practices.

## Features

- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **ESLint** and **Prettier** for code quality
- **Absolute imports** with `@/` path alias
- **Clean folder structure** for scalability
- **CSS Modules** for component styling
- **Environment variables** setup
- **Reusable components** with examples

## Project Structure

```
aura-digits/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── styles/              # Module CSS files
│   │   └── Home.module.css
│   └── types/               # TypeScript type definitions
│       └── index.ts
├── .env.local.example       # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone or download this repository:

```bash
cd aura-digits
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration.

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Create an optimized production build:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## Code Quality

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

## Key Configurations

### TypeScript

The project uses strict TypeScript configuration with:

- Strict mode enabled
- No unused locals/parameters
- Force consistent casing in file names
- Path aliases: `@/*` maps to `src/*`

### Absolute Imports

Use the `@/` prefix for absolute imports:

```typescript
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import { useLocalStorage } from '@/hooks/useLocalStorage';
```

### Environment Variables

- **Public variables**: Prefix with `NEXT_PUBLIC_` to expose to the browser
- **Private variables**: Keep without prefix for server-side only
- Never commit `.env.local` to version control

## Components

### Button Component

Example reusable component with variants and sizes:

```typescript
import { Button } from '@/components/Button';

<Button variant="primary" size="medium">
  Click me
</Button>
```

## Custom Hooks

### useLocalStorage

Persist state in localStorage:

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage';

const [value, setValue] = useLocalStorage('key', 'defaultValue');
```

## Utilities

### cn (className combiner)

Combine multiple class names:

```typescript
import { cn } from '@/lib/utils';

const className = cn('base-class', condition && 'conditional-class');
```

### debounce

Limit function call frequency:

```typescript
import { debounce } from '@/lib/utils';

const debouncedFn = debounce(() => console.log('Called'), 300);
```

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Always define TypeScript types/interfaces
3. **CSS Modules**: Use for component-specific styles
4. **Server/Client Components**: Use 'use client' only when needed
5. **Environment Variables**: Never commit sensitive data
6. **Code Formatting**: Run Prettier before commits
7. **Absolute Imports**: Use `@/` prefix for cleaner imports

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Other deployment options:

- [Docker](https://nextjs.org/docs/deployment#docker-image)
- [Self-hosting](https://nextjs.org/docs/deployment#self-hosting)
- [Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## License

MIT
