# Askari Frontend

A modern React application currently undergoing a structured refactor to improve maintainability, scalability, developer experience, and long-term performance.

## Overview

This project is being transformed from a traditional component-based React application into a feature-driven, enterprise-grade architecture.

The goal is to create a codebase that is:

* Clean and easy to navigate
* Modular and scalable
* Consistent across features
* Easy to onboard new developers into
* Performance focused
* Built around reusable UI patterns
* Maintainable as the application grows

---

## Current Refactor Goals

### Architecture

Move from a flat component structure to a feature-based architecture:

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

### Component Cleanup

Current refactoring focuses on:

* Breaking large components into smaller modules
* Separating UI from business logic
* Extracting reusable components
* Reducing duplication
* Improving readability

### Shared UI System

A reusable design system is being introduced:

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

Benefits:

* Consistent styling
* Faster development
* Reduced code duplication
* Easier maintenance

### Feature-Based Structure

Each business domain owns its own:

```text
features/
├── auth/
├── dashboard/
├── claims/
├── policies/
└── billing/
```

Each feature contains:

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

---

## Technology Stack

### Core

* React
* TypeScript
* Vite

### Styling

* Tailwind CSS

### Data & State

* React Query
* Zustand
* Axios

### Forms

* React Hook Form
* Zod

### UI & Utilities

* Framer Motion
* Lucide Icons
* clsx
* tailwind-merge

---

## Refactoring Roadmap

### Phase 1 – Foundation

* [ ] Create new folder structure
* [ ] Configure ESLint
* [ ] Configure Prettier
* [ ] Enable strict TypeScript rules
* [ ] Remove dead code
* [ ] Remove unused dependencies

### Phase 2 – Shared System

* [ ] Extract Navbar
* [ ] Extract Sidebar
* [ ] Extract Footer
* [ ] Build reusable UI library
* [ ] Standardize spacing and typography

### Phase 3 – Features

* [ ] Move features into dedicated modules
* [ ] Create feature-specific hooks
* [ ] Create feature-specific services
* [ ] Improve type safety

### Phase 4 – Data Layer

* [ ] Centralize API communication
* [ ] Integrate React Query
* [ ] Remove duplicate requests
* [ ] Improve caching strategy

### Phase 5 – Forms

* [ ] Modularize large forms
* [ ] Add schema validation
* [ ] Improve form reusability

### Phase 6 – Performance

* [ ] Route splitting
* [ ] Lazy loading
* [ ] React.memo optimization
* [ ] Virtualized tables
* [ ] Reduce unnecessary re-renders

---

## Development Principles

### Components

* One responsibility per component
* Reusable where possible
* Keep components small and focused

### API Layer

Avoid API calls inside components.

Instead:

```typescript
services/claims.service.ts
```

Example:

```typescript
export const getClaims = async () => {
  return api.get('/claims');
};
```

### Hooks

Shared logic should be extracted into custom hooks:

```typescript
useClaims()
usePolicies()
useAuth()
useModal()
usePagination()
```

### State Management

Use the right tool for the right state:

| State Type      | Tool            |
| --------------- | --------------- |
| Server Data     | React Query     |
| Global UI State | Zustand         |
| Forms           | React Hook Form |

---

## Code Standards

### Naming

Components:

```text
ClaimsTable.tsx
```

Hooks:

```text
useClaims.ts
```

Files:

```text
claims.service.ts
```

Constants:

```text
CLAIM_STATUS
```

### Guidelines

* No duplicated business logic
* No duplicated styling
* No direct API calls in UI components
* No oversized components
* Shared UI first
* Feature ownership of logic

---

## Future Improvements

Planned improvements include:

* Storybook integration
* Automated testing
* CI/CD improvements
* Design system documentation
* Accessibility audits
* Performance monitoring
* End-to-end testing

---

## Contributing

When contributing:

1. Follow the established architecture.
2. Reuse existing UI components where possible.
3. Keep components focused and modular.
4. Place business logic inside hooks/services.
5. Avoid introducing duplicated patterns.

---

## Project Vision

The long-term vision is to evolve this application into a highly maintainable, enterprise-grade React platform with:

* Feature-driven architecture
* Strong type safety
* Reusable design system
* Scalable state management
* Predictable development patterns
* Excellent developer experience
