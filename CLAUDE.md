# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbo
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
npx prisma studio # Open Prisma DB browser
npx prisma db push # Sync schema to MongoDB
```

## Architecture

**Watch Wave** is a movie/TV show discovery and favorites platform built with Next.js 14 App Router.

### Key Directories

- `src/app/` — App Router pages and API routes
- `src/components/` — Shared UI components (Navbar, Slider, Pagination, MediaCard, etc.)
- `src/features/` — Feature modules: `auth`, `media`, `mediaDetails`, `profiles`
- `src/lib/` — Core logic: API queries (`apiMovies.ts`, `apiSeries.ts`, `apiAuth.ts`), Prisma client (`db.ts`), NextAuth config (`auth.ts`), server actions, Zod schemas
- `src/hooks/` — Custom hooks (e.g., `useCurrentUser`)
- `src/providers/` — React context providers (ReactQuery, NextAuth session)

### Routes

- `/` — Homepage (trending, now playing, upcoming, series sections)
- `/movies/[type]` — Movies by category: `now_playing`, `upcoming`, `popular`, `top_rated`
- `/series/[type]` — Series by category: `on_the_air`, `popular`, `top_rated`, `airing_today`
- `/auth` — Sign in / sign up
- `/profiles` — User profiles
- `/api/auth/[...nextauth]` — NextAuth handler

### Data Flow

**External data (TMDB API):** Fetched server-side via async Server Components using `fetcher()` in `src/lib/`. Revalidated every 24 hours (ISR). TMDB env vars: `TMBD_BASE_URL`, `TMDB_API_KEY`, `TMBD_IMAGE_BASE_URL`.

**Client-side state:** TanStack React Query for caching/refetching. Default stale time is 10 seconds.

**Auth:** NextAuth v4 with JWT strategy. Providers: Google OAuth, GitHub OAuth, and credentials (bcrypt). User data stored in MongoDB via Prisma.

**Database:** MongoDB with Prisma ORM. Models: `User`, `Account`, `Session`, `VerificationToken`, `Movie` (for favorites).

### Styling

Tailwind CSS + NextUI component library. Primary color is `#e50914` (Netflix-style red). Dark mode is on by default.

## Environment Variables

```env
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
TMDB_API_KEY=
TMBD_BASE_URL=
TMBD_IMAGE_BASE_URL=
```
