# README visuals

The PNG files in `docs/images/` are screenshots of the actual local production build, not generated product mockups. They contain synthetic application data only.

To refresh them:

1. Use Node 24 and run `npm ci`, `npm run build`, and `npm start`.
2. Open the printed origin in a browser at 1440 × 1000 with device pixel ratio 1.
3. Capture the viewport for `/` as `homepage.png`, `/dashboard/overview` as `workspace.png`, and `/dashboard/finance` as `finance.png`.
4. On `/ai-audit`, submit the default sample values, then capture `opportunity-finder.png` at the same viewport.
5. Capture `/` at 390 × 844 with device pixel ratio 1 as `mobile.png`.
6. Check the images visually and confirm they contain no real customer information before committing.

`readme-hero.svg` is a repository-native typography and workflow banner using the site’s design tokens. It is deliberately separate from the application screenshots. All README image references are relative repository paths, so forks retain the visuals.
