# Security policy

Do not disclose secrets in a public issue. Report vulnerabilities privately to the repository maintainer through a verified contact channel or GitHub private vulnerability reporting if enabled.

This release contains a public marketing site and synthetic demo tools. It has no customer authentication, database writes, live AI connection, automatic publishing, payment collection, or live finance integration. The dashboard must remain demo-only until authentication and tenant access controls are implemented.

- Keep `.env`, provider keys, OAuth tokens, customer exports and local runtime state out of source control.
- Only intentionally public configuration may use `NEXT_PUBLIC_`.
- Do not render model output or user input as raw HTML.
- Validate and authorize every server mutation. Add rate limits, request size limits, origin checks and abuse controls to future contact/AI APIs.
- Encrypt integration credentials at rest and rotate them after suspected disclosure.
- Sanitize spreadsheet exports against formula injection.
- Use signed, replay-resistant webhooks and idempotent background jobs.
- Gate publishing and customer messages on human approval and consent.
- Review dependency alerts before public launch. Keep a lockfile and pin updates through tested changes.
- Add production HTTP security headers, a runtime-tested Content Security Policy, monitoring and an incident response contact before onboarding real clients.

No security audit or compliance certification is claimed by this repository.
