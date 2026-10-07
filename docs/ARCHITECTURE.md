# Architecture

The public marketing application lives in `app/(marketing)`. The sample client application lives in `app/dashboard` with its own layout. The client portal is explicitly a demonstration, contains synthetic records, and has no authentication or private customer data. It must not accept real customer records until tenant authorization and durable storage are implemented.

## Runtime

TypeScript, React, the Next.js App Router API, Tailwind CSS, shadcn/ui primitives, and Lucide icons. The included Vinext adapter builds the Next.js application for Cloudflare Workers and Sites. This is not an official Vercel Next.js deployment. Test framework compatibility before switching runtimes.

## Boundaries

- `config/`: editable services, plans, industries, FAQs, content themes and articles.
- `lib/ai/`: provider-neutral AI contract and deterministic sample implementation. No AI provider network calls are made.
- `lib/integrations/`: capability contracts for CRM, email, social publishing and finance data. Production adapters must run on the server.
- `lib/domain.ts`: tenant-aware domain model for the future application.
- `components/tools/`: public audit, content generator, calculators and automation finder.
- `components/dashboard/`: sample client workspace with in-memory editing and CSV reports.
- `docs/schema.sql`: proposed relational schema, not applied to a database.

## Real lead capture

The consultation form downloads a local consultation brief by default. It explicitly states that nothing has been submitted. Set a verified public contact email or HTTPS booking link to enable those contact options. An email draft is not proof of delivery. A production form receiver should validate all fields, require abuse protection, store a consent timestamp, persist the lead, enqueue an email, and only then acknowledge receipt. Never mark a request sent merely because a browser action completed.

## Future authenticated application

1. Introduce identity, memberships and a server-verified active business ID.
2. Enforce business membership on every query and mutation; never trust a client-provided tenant ID.
3. Apply reviewed database migrations; add backups, retention and deletion routines.
4. Replace demo repositories with tenant-scoped repositories.
5. Add subscription entitlements on the server, signed webhook verification and idempotency keys.
6. Add OAuth integrations with encrypted refresh tokens, scoped permissions and revocation.
7. Run scheduled work through a durable queue, with retries, deduplication and audit logs.
8. Require explicit content approval before publishing; route sensitive messages to a human.

## AI providers

The AIService contract separates content generation from provider SDKs. A live implementation belongs behind a server endpoint. It must validate input, enforce tenant quotas and timeouts, redact unnecessary personal data, constrain output, and log usage without storing raw sensitive prompts. Provider errors must surface as errors, not silently become mock successes.

Chatbot retrieval should store source documents by business, chunk and index them in tenant-specific retrieval namespaces, attach source citations, distinguish trusted system instructions from retrieved text, and offer human escalation. Never let an uploaded document grant permissions or initiate external actions.

## Analytics

The analytics adapter is disabled by default and uses no trackers. Connect an analytics sink only after adding an appropriate consent flow and updating the privacy notice. Use non-identifying event names such as `audit_completed`; do not send names, emails, message bodies, financial data or full URLs with query parameters.

## Navigation compatibility

`components/app-link.tsx` renders a native anchor and uses the public `useRouter().push()` API for ordinary same-origin clicks. It preserves modified clicks, downloads, external targets, and native same-page hashes. This avoids an observed Vinext beta Link prefetch/dynamic-import failure without changing vendored dependencies. Retest this boundary when upgrading the adapter.
