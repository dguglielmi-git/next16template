# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `next-intl` integration for internationalization (i18n) with `en` as the default locale.
- Vitest setup for unit testing plus an initial example test.

### Changed

- Updated `README.md` to document the project architecture (`api/*`, `lib/*`), conventions, i18n, and testing.

### Fixed

- ESLint issues in `app/StoreProvider.tsx` (store initialization + prop typing).
- Import alias usage (`@/lib/*`) in `StoreProvider`.

## [0.1.0] - 2026-03-17

### Added

- Template scaffolding for Next.js 16.
- Redux Toolkit store utilities and typed Redux hooks.
- TanStack Query + axios API layer with structured `api/` organization:
  - `api/services/` for HTTP requests
  - `api/hooks/` for React Query hooks
  - `api/constants/` for shared constants (e.g. `APP_ROUTES`)
  - `api/types/` for request/response DTOs
- Redux provider via `app/StoreProvider.tsx`.

