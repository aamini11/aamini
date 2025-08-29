# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Build and Development
- `pnpm build` - Build all applications using Turborepo
- `pnpm dev` - Start development servers for all applications  
- `pnpm --filter <app-name> dev` - Start specific application (e.g., `pnpm --filter portfolio dev`)

### Code Quality
- `pnpm lint` - Run oxlint with type-awareness and zero warnings policy
- `pnpm format` - Check code formatting with Prettier
- `pnpm format:fix` - Fix code formatting issues
- `pnpm typecheck` - Run TypeScript type checking across all projects

### Testing
- `pnpm test` - Run unit tests using Vitest
- `pnpm test:projects` - Run unit tests in workspace root
- `pnpm test:projects:watch` - Watch mode for unit tests
- `pnpm e2e` - Run end-to-end tests using Playwright
- `pnpm e2e:update` - Update Playwright test snapshots

### Full Verification
- `pnpm verify` - Run complete CI pipeline (format, build, lint, test, typecheck, e2e)

## Architecture Overview

This is a monorepo containing three main applications and shared libraries:

### Applications (`apps/`)
- **dota-visualizer** (port 4001): Dota 2 statistics and visualization app
- **imdbgraph** (port 4002): Interactive IMDB data visualization tool with database
- **portfolio** (port 4003): Professional portfolio website

### Shared Libraries (`libs/`)
- **config-typescript**: Shared TypeScript configurations
- **config-vitest**: Vitest testing configuration
- **ui**: Reusable React components with ShadcnUI and theming support

## Technology Stack

- **Framework**: Astro for static site generation with React 19 islands
- **Language**: TypeScript throughout
- **Styling**: Tailwind CSS 4.x
- **Build System**: Turborepo + pnpm workspaces
- **Database**: Drizzle ORM (used in imdbgraph)
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Linting**: oxlint for fast TypeScript analysis
- **Deployment**: Vercel

## Application-Specific Notes

### imdbgraph
- Requires `DATABASE_URL` and `CRON_SECRET` environment variables for build
- Uses Drizzle ORM for database operations
- Has database migrations in `db/migrations/`

### portfolio  
- Requires `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` for contact form
- Contains resume PDF and skill/company assets in `public/`
- Uses server actions for form handling

### dota-visualizer
- Focuses on game statistics visualization
- Uses external API for Dota 2 data

## Development Workflow

1. **Project Setup**: Run `pnpm install` from monorepo root
2. **Development**: Use `pnpm --filter <app> dev` for specific apps or `pnpm dev` for all
3. **Code Quality**: Always run `pnpm lint` and `pnpm typecheck` before committing
4. **Testing**: Run both unit (`pnpm test`) and e2e tests (`pnpm e2e`)
5. **Build Verification**: Use `pnpm verify` to run full CI pipeline locally

## Key Patterns

- All apps follow similar structure: `src/components/`, `src/lib/`, `src/pages/`
- React components use TypeScript with strict typing
- Astro pages handle routing and SSG
- Shared utilities and configurations are in `libs/`
- All apps use Tailwind with consistent design system from `@aamini/ui`