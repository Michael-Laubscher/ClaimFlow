# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## UAT / Production deployment

This project is a static Vite-built React application. To prepare for UAT deployment:

- Install dependencies: `npm install`
- Provide environment values for the build using a `.env.production` file or by exporting VITE_* variables before `npm run build`
- Build the app: `npm run build`
- Verify the production build locally: `npm run preview`
- Deploy the generated `dist/` directory to your web server

### Required environment variables

The application expects the following Vite environment variables at build time:

- `VITE_AZURE_CLIENT_ID` - Azure AD client ID for authentication
- `VITE_AZURE_TENANT_ID` - Azure AD tenant ID
- `VITE_API_URL` - API base URL (defaults to `/api` if not set)
- `VITE_SUPPORT_EMAIL` - support email address shown in the app
- `VITE_BASE_URL` - optional base path for the app when deployed under a subpath (defaults to `/`)

### Server requirements

- Serve `dist/index.html` and the `dist/assets` files from the same host
- Configure the web server to fallback to `index.html` for SPA routes
- If the app is deployed under a subpath, set `VITE_BASE_URL=/your/subpath/` in `.env.production`

### Packaging for manual deployment

After building, create a deployable ZIP archive with:

```bash
npm run package
```

This will build the app and generate `claimflow-dist.zip` in the project root. Copy or extract that archive on the target web server so the `dist/` directory contents are served.

If you only need the static files, you can also deploy the `dist/` folder directly without the ZIP file.

