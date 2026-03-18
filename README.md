## 🚀 Next.js 16 Template (Redux Toolkit + TanStack Query)

Opinionated template focused on keeping API calls clean, typed, and easy to maintain. 🧩

### 🧷 Tech Stack

- `next@16` (App Router) ⚡
- `reduxjs/toolkit` for global state 🗃️
- `@tanstack/react-query` for remote data (caching + sync) 🔄
- `axios` for HTTP requests 🌐
- `next-intl` for i18n translations 🌍
- `vitest` for unit tests 🧪

### 📁 Code Structure

`api/` (HTTP + React Query boundary)

- `api/base.ts`: base HTTP client configuration (axios)
- `api/services/`: pure functions that execute requests with axios (GET/POST/PATCH/etc.)
- `api/hooks/`: React Query hooks (`useQuery`, `useMutation`) that call the services
- `api/constants/`: shared constants (e.g. `APP_ROUTES`)
- `api/types/`: request/response types

`lib/` (application utilities)

- `lib/store.ts`: Redux Toolkit store creation/definition (`makeStore`)
- `lib/hooks.ts`: typed Redux hooks (`useAppDispatch`, `useAppSelector`, `useAppStore`)

### 🔁 Typical Flow

UI (component) → `api/hooks/*` → `api/services/*` → `api/base.ts`

### 🧰 Scripts

- `npm run dev`: start the development server
- `npm run build`: build Next
- `npm run start`: run the app in production
- `npm run lint`: lint with ESLint
- `npm test`: run tests with Vitest

### ➕ Adding a New API Call

1. Create types in `api/types/*`
2. Implement the request in `api/services/*`
3. Create the hook in `api/hooks/*` using `useQuery`/`useMutation`
4. (Optional) Use Redux for global state when it makes sense

### ✅ Notes

- Separating `services` (HTTP) vs `hooks` (React Query) makes code easier to reuse and test.
- React Query hooks centralize `queryKey`, `staleTime`, `enabled`, and invalidation after mutations.

### 🌍 Internationalization (i18n)

This template includes `next-intl` to support translations and localized content.

- Default locale: `en`
- Translation messages live in `app/messages/*`
- The i18n provider is wired in `app/layout.tsx`
