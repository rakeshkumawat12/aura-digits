# 🛠️ Development Mode Guide

## Quick Start

```bash
# Clean build cache and start dev server
npm run clean
npm run dev
```

Your app will be available at: **http://localhost:3001**

---

## Understanding Next.js Build Folders

### `.next/` Folder

**What it is**: Next.js build cache and compiled files

**Why it exists**:
- Created when you run `npm run build` OR `npm run dev`
- Stores compiled TypeScript/JSX code
- Caches optimized assets
- Contains server-side rendering code

**Development vs Production**:

| Command | Creates `.next/` | Purpose |
|---------|------------------|---------|
| `npm run dev` | ✅ Yes | Development build (hot reload, source maps) |
| `npm run build` | ✅ Yes | Production build (optimized, minified) |
| `npm start` | ❌ No | Uses existing production build |

**Key Point**: The `.next/` folder is **NOT** the same as production builds. It's always created, but the **content differs** based on the command.

---

## Development-Only Setup

### Current Configuration

✅ **Already Configured Correctly**:

1. **`.gitignore`** - Excludes build folders from Git:
   ```
   /.next/      # Build cache (dev + prod)
   /out/        # Static export folder
   /build       # Alternative build folder
   ```

2. **`package.json`** - Separate scripts:
   ```json
   {
     "dev": "next dev",           // Development server
     "build": "next build",       // Production build
     "start": "next start",       // Production server
     "clean": "rm -rf .next",     // Clean build cache
     "clean:all": "rm -rf .next node_modules && npm install"
   }
   ```

---

## How to Test in Development Mode

### Standard Workflow

```bash
# 1. Start development server
npm run dev

# 2. Open browser
# → http://localhost:3001

# 3. Make changes to code
# → Changes auto-reload (hot module replacement)

# 4. No need to rebuild manually
```

### When to Clean Build Cache

Clean the `.next/` folder when you experience:

- **Stale imports**: Old code still running after changes
- **TypeScript errors**: Cache not reflecting new types
- **Routing issues**: Routes not updating
- **Build artifacts conflict**: After switching branches

```bash
# Quick clean
npm run clean

# Full clean (removes node_modules too)
npm run clean:all
```

---

## Why `.next/` Folder Is Used

### Development Mode (`npm run dev`)

When you run `npm run dev`, Next.js:

1. **Compiles TypeScript** → JavaScript
2. **Bundles React components** → Optimized chunks
3. **Creates dev server** → Hot reload enabled
4. **Stores in `.next/`** → Faster subsequent starts

**Result**: `.next/` contains **development build** with:
- Source maps (for debugging)
- Unminified code (readable errors)
- Hot reload infrastructure

### Production Mode (`npm run build`)

When you run `npm run build`, Next.js:

1. **Compiles for production** → Minified, tree-shaken
2. **Optimizes images** → WebP conversion, sizing
3. **Generates static pages** → Pre-rendered HTML
4. **Creates server bundles** → For SSR routes
5. **Stores in `.next/`** → Production-optimized

**Result**: `.next/` contains **production build** with:
- Minified JavaScript/CSS
- Optimized images
- Pre-rendered pages
- No source maps (smaller size)

---

## Cleaning Build Artifacts

### Method 1: Using npm script (Recommended)

```bash
npm run clean
```

### Method 2: Manual deletion

```bash
rm -rf .next
```

### Method 3: Full reset

```bash
npm run clean:all
# This removes .next AND node_modules, then reinstalls
```

---

## Preventing Accidental Production Builds

### Current Protection

✅ **Already in place**:

1. **`.gitignore`** prevents committing `.next/`
2. **Separate scripts** (`dev` vs `build`)
3. **CI/CD doesn't run locally** (if configured)

### Best Practices

**DO**:
- ✅ Use `npm run dev` for local testing
- ✅ Run `npm run clean` when things seem cached
- ✅ Commit source code only (`.next/` excluded)

**DON'T**:
- ❌ Run `npm run build` unless testing production build
- ❌ Commit the `.next/` folder to Git
- ❌ Run `npm start` locally (requires prior build)

---

## Development Server Details

### What `npm run dev` Does

```bash
npm run dev
↓
next dev
↓
1. Starts development server on port 3000 (or 3001)
2. Watches for file changes
3. Compiles on-demand (lazy compilation)
4. Enables Fast Refresh (hot reload)
5. Shows detailed error messages
6. Preserves React state during reload
```

### Port Configuration

Default: `http://localhost:3000`

**Custom port**:
```bash
# One-time
npm run dev -- -p 3001

# Or update package.json
"dev": "next dev -p 3001"
```

Your project is currently using port **3001**.

---

## Common Development Scenarios

### Scenario 1: Clean Start

```bash
npm run clean
npm run dev
```

### Scenario 2: After Pulling Code

```bash
npm install           # Update dependencies
npm run clean         # Clear old build
npm run dev          # Start fresh
```

### Scenario 3: Switching Branches

```bash
git checkout feature-branch
npm run clean         # Clear cached build
npm install           # Update dependencies (if package.json changed)
npm run dev
```

### Scenario 4: Build for Testing Production Locally

```bash
npm run build         # Creates production build
npm start            # Serves production build
```

**Note**: After testing, run `npm run clean` to remove production build.

---

## Troubleshooting

### Issue: Changes not reflecting

**Solution**:
```bash
npm run clean
npm run dev
```

**Why**: Stale cache in `.next/` folder

---

### Issue: TypeScript errors don't update

**Solution**:
```bash
rm -rf .next
npm run dev
```

**Why**: TypeScript compilation cache is outdated

---

### Issue: Port already in use

**Solution**:
```bash
# Find process using port 3001
lsof -ti:3001

# Kill the process
kill -9 $(lsof -ti:3001)

# Start dev server
npm run dev
```

---

### Issue: Module not found after install

**Solution**:
```bash
npm run clean:all
# This removes .next, node_modules, and reinstalls
```

---

## File Structure (Development)

```
aura-digits/
├── .next/                    # ⚠️ BUILD CACHE (ignored by Git)
│   ├── cache/               # Development cache
│   ├── server/              # Server-side code
│   ├── static/              # Static assets
│   └── ...
├── node_modules/            # Dependencies (ignored by Git)
├── public/                  # Static files (served as-is)
├── src/                     # Source code
│   ├── app/                 # Pages and API routes
│   ├── components/          # React components
│   ├── data/               # Static data
│   ├── lib/                # Libraries (Supabase)
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── .gitignore              # Excludes .next/
├── package.json            # Scripts and dependencies
└── ...
```

---

## Quick Reference

| Task | Command |
|------|---------|
| **Start development** | `npm run dev` |
| **Clean cache** | `npm run clean` |
| **Full reset** | `npm run clean:all` |
| **Build for production** | `npm run build` |
| **Test production** | `npm run build && npm start` |
| **Lint code** | `npm run lint` |
| **Format code** | `npm run format` |

---

## Summary

✅ **Development Mode is Active**

- `.next/` folder cleaned
- `.gitignore` properly configured
- `npm run dev` is the correct command
- Clean scripts added to package.json

**You're ready to develop!**

```bash
npm run dev
# Open http://localhost:3001
# Start coding! 🚀
```

---

## Additional Notes

### Why Not Delete `.next/` from `.gitignore`?

**Bad idea** - Here's why:

1. **Large folder**: Can be 50-500MB
2. **Machine-specific**: Different OS/Node versions produce different builds
3. **Redundant**: Can be regenerated from source code
4. **Slows Git**: Increases repo size, clone time
5. **Build differs**: Dev and prod builds are different

**Keep it ignored!**

### When to Use Production Build Locally

Only when:
- Testing deployment setup
- Debugging production-only issues
- Verifying bundle size
- Testing static generation

**Otherwise**: Stick to `npm run dev`

---

**✨ Happy Coding in Development Mode!**
