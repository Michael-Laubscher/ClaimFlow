# Askari Frontend

A modern React application focused on streamlining claims management workflows through a clean, scalable, and maintainable user experience.

## Overview

Askari Frontend is being developed with a strong emphasis on modular architecture, reusable components, and long-term maintainability.

The project follows modern React development practices and is structured to support future growth without introducing unnecessary complexity.

Key goals include:

* Clean and predictable architecture
* Reusable UI components
* Feature-based organization
* Strong TypeScript support
* Scalable state management
* Centralized API handling
* Improved developer experience
* Performance-focused design

---

## Architecture Vision

The application is being organized around feature ownership and separation of concerns.

```text
src/
├── app/
├── features/
├── components/
├── hooks/
├── services/
├── utils/
├── types/
├── constants/
├── assets/
└── styles/
```

### Feature-Based Development

Each feature owns its:

```text
feature/
├── components/
├── hooks/
├── pages/
├── services/
├── schemas/
├── types/
└── utils/
```

This structure improves:

* Scalability
* Maintainability
* Team collaboration
* Feature isolation

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Styling

* Tailwind CSS

### Data & State

* React Query
* Zustand
* Axios

### Forms & Validation

* React Hook Form
* Zod

### UI & Animation

* Framer Motion
* Lucide Icons
* clsx
* tailwind-merge

---

## Core Principles

### Reusable Components

Shared UI elements live in a centralized design system:

```text
components/ui/
├── button/
├── card/
├── input/
├── modal/
├── table/
├── badge/
└── loader/
```

This ensures:

* Consistent styling
* Faster development
* Reduced duplication
* Easier maintenance

### Service Layer

API communication is separated from UI components.

```typescript
export const getClaims = async () => {
  return api.get('/claims');
};
```

Components consume data through hooks rather than making direct requests.

### Custom Hooks

Business logic is extracted into reusable hooks.

Examples:

```typescript
useClaims()
usePolicies()
useAuth()
useModal()
usePagination()
```

### State Management

Different tools are used for different responsibilities:

| Purpose         | Tool            |
| --------------- | --------------- |
| Server State    | React Query     |
| Global UI State | Zustand         |
| Forms           | React Hook Form |

---

## Development Standards

### Naming Conventions

Components

```text
ClaimsTable.tsx
```

Hooks

```text
useClaims.ts
```

Services

```text
claims.service.ts
```

Constants

```text
CLAIM_STATUS
```

### Project Rules

* Keep components focused and small
* Avoid duplicated logic
* Avoid duplicated styling
* Reuse shared components whenever possible
* Keep API calls out of UI components
* Place business logic in hooks and services
* Maintain strong TypeScript typing

---

## Performance Strategy

The project is designed with performance in mind through:

* Route-based code splitting
* Lazy loading
* React.memo
* useMemo
* useCallback
* Optimized rendering patterns
* Modular feature loading

---

## Long-Term Vision

ClaimFlow aims to evolve into a scalable enterprise-grade frontend architecture that provides:

* Predictable development patterns
* Strong type safety
* Consistent user experience
* Reusable design systems
* Maintainable business logic
* High-performance user interfaces

The focus is on creating software that is easy to understand, easy to extend, and easy to maintain as requirements grow.
