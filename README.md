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

### 🧪 Testing (Vitest)

This project uses **Vitest** for unit tests.

- Run all tests once:
  - `npm test`
- Run in watch mode:
  - `npm run test:watch`

By convention, tests live under `src/__tests__/*`.

### ➕ Adding a New API Call

1. Create types in `api/types/*`
2. Implement the request in `api/services/*`
3. Create the hook in `api/hooks/*` using `useQuery`/`useMutation`
4. (Optional) Use Redux for global state when it makes sense

### ✅ Notes

- Separating `services` (HTTP) vs `hooks` (React Query) makes code easier to reuse and test.
- React Query hooks centralize `queryKey`, `staleTime`, `enabled`, and invalidation after mutations.

### 📐 Conventions

**API services (`api/services/*`)**

- Keep them as pure async functions that only do HTTP work (no React hooks, no UI logic).
- Return `response.data` (where applicable) so hooks can stay simple.
- Use constants from `api/constants/*` for endpoints (example: `APP_ROUTES`).

**API types (`api/types/*`)**

- Define request/response DTOs close to the feature they belong to.
- Use consistent naming:
  - `ExampleGet`, `ExamplePostData`, `ExamplePatch`, etc.

**React Query hooks (`api/hooks/*`)**

- Always provide a stable `queryKey` (use parameterized keys for ids/filters).
- Encapsulate `enabled`, `staleTime`, and `refetchOnWindowFocus` inside the hook.
- For mutations, invalidate the specific affected query keys in `onSuccess`.

### 🌍 Internationalization (i18n)

This template includes `next-intl` to support translations and localized content.

- Default locale: `en`
- Translation messages live in `app/messages/*`
- The i18n provider is wired in `app/layout.tsx`
