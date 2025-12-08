# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

Little Aretha is a React SPA tribute website for an Aretha Franklin tribute band. It features multi-language support (French, English, Spanish) and a responsive design.

## Tech Stack

- **Framework:** React 19 with React Router 7
- **Build:** Vite 7
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **State:** React Query for server state, i18next for i18n
- **UI:** Headless UI, Lucide icons, Motion animations

## Commands

```bash
yarn dev          # Start dev server
yarn build        # Type-check + production build
yarn lint         # Run ESLint
yarn test         # Run Vitest in watch mode
yarn test:run     # Single test run
yarn test:coverage # Coverage report
```

## Project Structure

```
src/
├── api/          # API integration (reserved)
├── assets/       # Static assets
├── common/       # Shared components, hooks, types, utils
├── core/         # App infrastructure (layouts, router, providers, contexts)
├── features/     # Feature modules (home, biography, technical, contact)
├── i18n/         # Translation files (fr.json, en.json, es.json)
└── test/         # Test setup
```

## Code Conventions

### Imports

Always use path aliases:
- `@/` → `src/`
- `@api/` → `src/api/`
- `@common/` → `src/common/`
- `@core/` → `src/core/`
- `@features/` → `src/features/`
- `@i18n/` → `src/i18n/`

### Components

- Use function components with TypeScript
- Named exports for features
- Page components named `{Feature}Page.tsx`
- Feature-specific components in `/components` subdirectory

### Internationalization

All user-facing text must use the i18n system:
```typescript
const { t } = useTranslation();
// Then use t('key.path') for text
```

### Styling

- Use Tailwind utility classes
- Brand colors: `brand-dark`, `brand-darker`, `brand-gold`, `brand-gold-light`, `brand-gold-dark`, `brand-cream`
- Fonts: `font-serif` (Playfair Display) for headlines, default sans-serif for body
- Mobile-first responsive design (use `md:` breakpoint for desktop)

### Dialogs/Overlays

Use the custom OverlayProvider context system for dialogs and panels instead of direct component rendering.

## Routes

- `/` → Home
- `/biographie` → Biography
- `/technique` → Technical
- `/contact` → Contact

## TypeScript

- Strict mode enabled
- No unused variables or parameters allowed
- All components should have proper types
