-- Proposed PostgreSQL schema for a future authenticated deployment.
-- Design reference only: no database is provisioned or migrated by this release.
-- Add tenant authorization policies and indexes before enabling real data.
CREATE TABLE users (id uuid PRIMARY KEY, email text NOT NULL UNIQUE, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE businesses (id uuid PRIMARY KEY, name text NOT NULL, industry text NOT NULL, website text, location text, profile jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE memberships (business_id uuid REFERENCES businesses(id), user_id uuid REFERENCES users(id), role text NOT NULL CHECK(role IN ('owner','admin','member')), PRIMARY KEY(business_id,user_id));
CREATE TABLE services (id text PRIMARY KEY, name text NOT NULL, configuration jsonb NOT NULL DEFAULT '{}');
CREATE TABLE leads (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), name text NOT NULL, email text, phone text, source text NOT NULL, status text NOT NULL, value_cents bigint NOT NULL DEFAULT 0 CHECK(value_cents>=0), consent_at timestamptz, created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX leads_business_created ON leads(business_id,created_at);
CREATE TABLE content (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), kind text NOT NULL, body text NOT NULL, status text NOT NULL CHECK(status IN ('draft','approved','archived')), approved_by uuid REFERENCES users(id), approved_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), UNIQUE(id,business_id));
CREATE TABLE social_posts (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), content_id uuid NOT NULL, platform text NOT NULL, scheduled_at timestamptz, published_at timestamptz, external_id text, status text NOT NULL CHECK(status IN ('draft','approved','scheduled','published','failed')), FOREIGN KEY(content_id,business_id) REFERENCES content(id,business_id));
CREATE TABLE campaigns (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), name text NOT NULL, channel text NOT NULL, status text NOT NULL, configuration jsonb NOT NULL DEFAULT '{}');
CREATE TABLE chatbots (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), name text NOT NULL, configuration jsonb NOT NULL DEFAULT '{}', UNIQUE(id,business_id));
CREATE TABLE chatbot_sources (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), chatbot_id uuid NOT NULL, source_url text, content text NOT NULL, reviewed_at timestamptz, FOREIGN KEY(chatbot_id,business_id) REFERENCES chatbots(id,business_id));
CREATE TABLE financial_records (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), kind text NOT NULL CHECK(kind IN ('revenue','expense','transfer')), amount_cents bigint NOT NULL CHECK(amount_cents>=0), currency char(3) NOT NULL DEFAULT 'USD', category text NOT NULL, occurred_on date NOT NULL);
CREATE INDEX financial_records_business_date ON financial_records(business_id,occurred_on);
CREATE TABLE reports (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), kind text NOT NULL, storage_key text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE subscriptions (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), plan_id text NOT NULL, provider_customer_id text UNIQUE, status text NOT NULL, current_period_end timestamptz);
CREATE TABLE integrations (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), provider text NOT NULL, encrypted_credentials bytea NOT NULL, revoked_at timestamptz);
CREATE TABLE audit_events (id uuid PRIMARY KEY, business_id uuid NOT NULL REFERENCES businesses(id), actor_id uuid REFERENCES users(id), action text NOT NULL, subject_id uuid, created_at timestamptz NOT NULL DEFAULT now());
-- Content approval, schedules, memberships and entitlements must be checked
-- server-side. Add composite tenant foreign keys for future tenant-owned relations.
