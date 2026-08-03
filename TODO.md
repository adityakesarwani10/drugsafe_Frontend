# TanStack → Plain React + Vite Conversion

## Steps

### Phase 1: Project Configuration
- [x] 1. Update `package.json` — remove TanStack deps, add react-router-dom, update scripts
- [x] 2. Rewrite `vite.config.ts` — use plain @vitejs/plugin-react + tailwindcss
- [x] 3. Create `index.html` — standard Vite HTML entry point
- [x] 4. Update `eslint.config.js` — remove TanStack-specific rules

### Phase 2: Delete TanStack-specific files
- [x] 5. Delete `src/router.tsx`
- [x] 6. Delete `src/routeTree.gen.ts`
- [x] 7. Delete `src/start.ts`
- [x] 8. Delete `src/server.ts`
- [x] 9. Delete `src/lib/error-capture.ts`
- [x] 10. Delete `src/lib/error-page.ts`

### Phase 3: Create new app structure
- [x] 11. Create `src/main.tsx` — React entry with BrowserRouter
- [x] 12. Create `src/App.tsx` — Router configuration with routes
- [x] 13. Create `src/pages/LandingPage.tsx` — from `routes/index.tsx`
- [x] 14. Create `src/pages/DashboardPage.tsx` — from `routes/dashboard.tsx`
- [x] 15. Create `src/pages/NotFoundPage.tsx` — 404 page

### Phase 4: Update components
- [x] 16. Update `Navbar.tsx` — replace @tanstack/react-router with react-router-dom
- [x] 17. Update `Hero.tsx` — replace @tanstack/react-router Link

### Phase 5: Install, build & verify
- [x] 18. Install dependencies
- [x] 19. Build & verify

