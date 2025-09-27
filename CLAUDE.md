# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack at http://localhost:3000
bun run dev        # Preferred: Use bun for faster installation and execution
```

### Build & Production
```bash
npm run build      # Create production build
npm run start      # Start production server
```

### Code Quality
```bash
npm run lint       # Run ESLint checks
```

## Architecture Overview

This is a Next.js 15 marketing website built with App Router, featuring a sophisticated component architecture with visual editing capabilities and 3D graphics.

### Core Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript 5
- **Tailwind CSS v4** with custom monochrome design system
- **Shadcn/ui** component library (50+ components in `src/components/ui/`)
- **Three.js/React Three Fiber** for 3D graphics
- **Framer Motion** for animations

### Project Structure

The application follows a modular architecture with clear separation of concerns:

1. **Landing Page Sections** (`src/components/sections/`): 14 self-contained section components that compose the main page
2. **Visual Editing System** (`src/visual-edits/`): Custom loader and messenger for live visual editing
3. **UI Components** (`src/components/ui/`): Extensive Shadcn/ui component library
4. **Database Layer**: Drizzle ORM with LibSQL (configuration in `src/lib/db/`)
5. **Authentication**: Better Auth integration
6. **Payments**: Stripe integration

### Key Architectural Decisions

1. **Monochrome Design System**: The entire site uses a black/white/gray color palette defined in CSS variables
2. **Component Composition**: Each landing page section is a standalone component that can be easily modified or reordered
3. **TypeScript Path Aliases**: Use `@/*` to import from `src/*`
4. **No Testing Framework**: Currently no tests - consider adding Vitest or Jest when implementing new features

### Important Files

- `src/app/layout.tsx`: Root layout with error reporting and visual editing integration
- `src/app/page.tsx`: Main landing page that composes all section components
- `src/components/ErrorReporter.tsx`: Global error handling component
- `next.config.ts`: Custom Turbopack rules for visual editing loader

### Development Notes

1. **Visual Editing**: The project includes a custom visual editing system that requires special webpack/Turbopack rules
2. **3D Graphics**: Three.js components may require special consideration for SSR
3. **Form Validation**: Uses React Hook Form with Zod schemas
4. **ESLint Configuration**: Custom flat config in `eslint.config.mjs` with relaxed TypeScript rules

### Common Tasks

**Adding a new landing page section:**
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow existing section patterns for consistency

**Modifying UI components:**
- All UI components are in `src/components/ui/`
- Components follow Shadcn/ui patterns with CN utility for class merging

**Working with forms:**
- Use existing form components from `src/components/ui/form.tsx`
- Implement validation with Zod schemas