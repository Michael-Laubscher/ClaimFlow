// app/router/routes/claims.routes.tsx

import type { RouteObject } from 'react-router-dom';

import {
  lazyPage,
  withSuspense,
} from '../route.utils';

// -----------------------------
// Lazy Pages
// -----------------------------

const ClaimsPage = lazyPage(
  () =>
    import(
      '@/features/claims/pages/ClaimsPage'
    )
);

const SuccessPage = lazyPage(
  () =>
    import(
      '@/features/claims/pages/SuccessPage'
    )
);

// -----------------------------
// Routes
// -----------------------------

export const claimsRoutes: RouteObject[] = [
  {
    path: 'new',

    element: withSuspense(<ClaimsPage />),

    handle: {
      title: 'Submit Claim',
    },
  },

  {
    path: 'success',

    element: withSuspense(<SuccessPage />),

    handle: {
      title: 'Claim Submitted',
    },
  },
];