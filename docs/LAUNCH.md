# Launch checklist

## Business configuration

- Replace example prices in `config/content.ts` and confirm actual service scope, cadence, setup charges and ad spend exclusions.
- Set a real contact email, phone and booking URL in environment configuration. Verify the destinations before linking them publicly.
- The current lead form prepares a downloadable consultation brief. It does not send a lead or create a calendar booking.
- Review privacy and terms for the actual business entity, retention practices, jurisdiction and service contracts with appropriate professional advice.
- Add genuine testimonials only with permission. Never convert the placeholder into an invented endorsement.
- Verify the service area language; no street address, partnerships, client count or accomplishments are claimed.

## Technical launch

- Verify domain ownership, set `NEXT_PUBLIC_SITE_URL`, rebuild and check canonical links and sitemap.
- The initial Sites deployment is private; change audience only when ready to share publicly.
- If enabling live lead capture, add validation, spam protection, durable storage, retryable notifications, consent records and honest failure handling.
- Do not put real customer data in the demo dashboard. Add server-side authentication and tenant authorization first.
- Connect AI, email, CRM and social providers separately. Keep approval before publication and test provider failure states.
- Set appropriate HTTP headers and test Content Security Policy against the deployed runtime.
- Complete keyboard, screen-reader, small-screen and production performance reviews before paid campaigns.
- Configure tracking only after consent and privacy disclosures are ready.

## Current demo behavior

Calculators perform actual arithmetic on visitor inputs. Audit and content tools use deterministic templates and rules; no website is crawled and no language model runs. Dashboard records are synthetic. Changes live only in memory and reset on refresh. Exports are real downloadable CSV files containing sample data. Finance views are organizational examples, not financial, tax, accounting or investment advice. Social scheduling is an in-memory planning exercise and does not publish or queue real posts.
