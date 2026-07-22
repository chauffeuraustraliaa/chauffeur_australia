-- Chauffeur Australia Admin CRM — Supabase schema
-- Run this in the Supabase SQL editor (Database > SQL Editor > New query).
-- This matches prisma/schema.prisma exactly. If you ever change the Prisma
-- schema, update this file (and re-run the relevant ALTER/CREATE statements)
-- to keep them in sync, since Prisma is pointed at this database via
-- DATABASE_URL rather than managing migrations itself here.

-- ============================================================
-- Extensions
-- ============================================================
create extension if not exists pgcrypto;

-- ============================================================
-- Enums
-- ============================================================
create type "JourneyType" as enum ('ONE_WAY', 'RETURN', 'HOURLY');

create type "LeadStatus" as enum (
  'NEW',
  'PENDING_REVIEW',
  'QUOTE_SENT',
  'ACCEPTED',
  'CONFIRMED',
  'REJECTED',
  'CANCELLED'
);

create type "CancellationReason" as enum (
  'CANCELLED_BY_ADMIN',
  'CANCELLED_BY_CUSTOMER',
  'NO_RESPONSE',
  'EXPIRED_QUOTE'
);

create type "QuoteStatus" as enum ('DRAFT', 'SENT', 'ACCEPTED', 'REJECTED', 'EXPIRED');

create type "BookingStatus" as enum ('CONFIRMED', 'COMPLETED', 'CANCELLED');

-- ============================================================
-- Helper: keep updated_at fresh on direct SQL edits
-- (Prisma also sets this at the application layer; this trigger
-- covers rows edited directly in the Supabase table editor.)
-- ============================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================
-- admins
-- ============================================================
create table admins (
  id            text primary key,
  name          text not null,
  email         text not null unique,
  "passwordHash" text not null,
  "createdAt"   timestamptz not null default now(),
  "updatedAt"   timestamptz not null default now()
);

create trigger admins_set_updated_at
  before update on admins
  for each row execute function set_updated_at();

-- ============================================================
-- settings (singleton row — always id = 'singleton')
-- ============================================================
create table settings (
  id             text primary key default 'singleton',
  "companyName"  text not null default 'Chauffeur Australia',
  "supportEmail" text not null default 'support@chauffeuraustralia.com',
  "logoUrl"      text,
  currency       text not null default 'AUD',
  timezone       text not null default 'Australia/Sydney',
  "updatedAt"    timestamptz not null default now()
);

create trigger settings_set_updated_at
  before update on settings
  for each row execute function set_updated_at();

insert into settings (id) values ('singleton');

-- ============================================================
-- customers
-- ============================================================
create table customers (
  id          text primary key,
  name        text not null,
  email       text not null unique,
  phone       text not null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create trigger customers_set_updated_at
  before update on customers
  for each row execute function set_updated_at();

-- ============================================================
-- services
-- ============================================================
create table services (
  id          text primary key,
  name        text not null,
  slug        text not null unique,
  description text,
  "createdAt" timestamptz not null default now()
);

-- ============================================================
-- leads
-- ============================================================
create table leads (
  id          text primary key,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),

  "customerId" text not null references customers(id),

  "fullName" text not null,
  email      text not null,
  phone      text not null,

  "journeyType"     "JourneyType" not null,
  "pickupLocation"  text not null,
  "dropoffLocation" text,
  date              timestamptz not null,
  time              text not null,
  "returnDate"      timestamptz,
  "returnTime"      text,
  "endTime"         text,
  passengers        integer not null,
  luggage           integer not null,

  "serviceId" text not null references services(id),

  "specialRequests" text,

  status               "LeadStatus" not null default 'NEW',
  "cancellationReason" "CancellationReason"
);

create index leads_customer_id_idx on leads("customerId");
create index leads_service_id_idx on leads("serviceId");
create index leads_status_idx on leads(status);
create index leads_created_at_idx on leads("createdAt" desc);

create trigger leads_set_updated_at
  before update on leads
  for each row execute function set_updated_at();

-- ============================================================
-- quotes (one-to-one with leads)
-- ============================================================
create table quotes (
  id          text primary key,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),

  "leadId" text not null unique references leads(id),

  "driverCost" numeric(10, 2) not null,
  markup       numeric(10, 2) not null,
  "totalPrice" numeric(10, 2) not null,
  currency     text not null default 'AUD',
  notes        text,
  status       "QuoteStatus" not null default 'DRAFT'
);

create trigger quotes_set_updated_at
  before update on quotes
  for each row execute function set_updated_at();

-- ============================================================
-- bookings (one-to-one with leads)
-- ============================================================
create table bookings (
  id          text primary key,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),

  "bookingNumber" text not null unique,

  "leadId" text not null unique references leads(id),

  "customerId" text not null references customers(id),

  "travelDate" timestamptz not null,
  status       "BookingStatus" not null default 'CONFIRMED'
);

create index bookings_customer_id_idx on bookings("customerId");
create index bookings_status_idx on bookings(status);

create trigger bookings_set_updated_at
  before update on bookings
  for each row execute function set_updated_at();

-- ============================================================
-- Seed reference data: services
-- (ids are plain slugs here for readability; Prisma will just read
-- these rows rather than create them once seeded)
-- ============================================================
insert into services (id, name, slug, description) values
  ('svc_airport', 'Airport Transfer', 'airport', 'Airport pickup and drop-off'),
  ('svc_hotel', 'Hotel Transfer', 'hotel', 'Transfers to and from hotels'),
  ('svc_city', 'City Transfer', 'city', 'Point-to-point city transfers'),
  ('svc_corporate', 'Corporate', 'corporate', 'Business and corporate travel'),
  ('svc_private', 'Private Chauffeur', 'private', 'Personal chauffeur hire'),
  ('svc_executive', 'Executive Transfers', 'executive', 'VIP executive transfers'),
  ('svc_wedding', 'Wedding', 'wedding', 'Wedding day chauffeur services'),
  ('svc_event', 'Event', 'event', 'Concerts, galas and event transfers'),
  ('svc_cruise', 'Cruise', 'cruise', 'Cruise port transfers'),
  ('svc_long_distance', 'Long Distance', 'long-distance', 'Interstate and regional transfers');

-- ============================================================
-- Row Level Security
-- This app connects to Postgres directly via Prisma using a
-- service-role style connection string (not the Supabase JS client
-- with anon/public keys), so RLS is not required for the app to
-- function. Enabling it here is a defence-in-depth measure in case
-- these tables are ever queried through Supabase's PostgREST/API
-- layer or the JS client with a public key.
-- ============================================================
alter table admins enable row level security;
alter table settings enable row level security;
alter table customers enable row level security;
alter table services enable row level security;
alter table leads enable row level security;
alter table quotes enable row level security;
alter table bookings enable row level security;

-- No policies are created, which means the anon/authenticated
-- Supabase roles have zero access by default. The app's Prisma
-- connection uses the postgres role (or a dedicated DB user with
-- BYPASSRLS), which is unaffected by RLS policies.
