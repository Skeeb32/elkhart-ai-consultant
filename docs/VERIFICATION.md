# Verification record

Verified locally on October 7, 2026, using Node 24.19.0 and the checked-in dependency lockfile. This records a bounded local review, not a production certification.

## Passed

- `npm run typecheck`: no TypeScript errors.
- `npm test`: 11 tests passed. Coverage includes conversion math, invalid numeric inputs, zero denominators, customer/lead constraints, CSV quoting and formula protection, input-sensitive audit rules, template output and demo provider metadata.
- `npm run build`: Cloudflare Worker-compatible production output generated successfully.
- `npm run test:routes -- http://127.0.0.1:4173`: all 41 application routes returned HTTP 200 and exactly one h1. Sitemap and robots endpoints returned HTTP 200. Four invalid route cases returned HTTP 404.
- Headless Chrome/Playwright checks against the local production build: content generation and editing surface, live calculator updates, consultation-brief download, lead search empty state and reset, FAQ answer and human-escalation fallback, draft approval, future-date planning and calendar display.
- Mobile navigation from the homepage to pricing worked after the navigation compatibility fix.
- No uncaught browser page errors in the final interaction/responsive run.
- No document-wide horizontal overflow at 320, 768, 1024 or 1440 pixels on the homepage, services, pricing, tools, contact, workspace overview, leads, social planner and finance views. Tables and the calendar have intentional internal scrolling.
- Real screenshots captured at 1440 × 1000 and 390 × 844 for the README.

## Issues caught and corrected

- The Vinext beta Link loader lost internal navigation functions in the production bundle. The application now uses a native anchor wrapper and the public router API; modified/external clicks keep normal browser behavior.
- The dashboard content flex item needed a minimum-width constraint to keep a wide leads table from stretching the page at tablet sizes.
- The dashboard shell no longer nests a main landmark inside another main landmark.

## Limits

- No measured code-coverage percentage, Lighthouse score, load benchmark, uptime target, accessibility certification or real customer outcome is claimed.
- The hosted production URL is not part of this local browser test. Deployment status is verified separately through Sites.
- The optional WebMCP calculator registration is feature-detected; the test browser did not expose `document.modelContext`, so native tool registration/execution validation was unavailable.
- No live provider, email delivery, CRM, social publishing, authentication, database tenancy, payment or accounting integration was tested because none is connected.
- The GitHub Actions badge reports the remote workflow status; this document’s local passes are not a substitute for that status.
