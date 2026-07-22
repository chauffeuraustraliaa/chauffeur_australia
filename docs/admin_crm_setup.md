# Admin CRM Setup

The Admin CRM (`/admin`) is built with Next.js, Prisma, NextAuth (Auth.js) and
Supabase Postgres. This guide gets it running from a fresh Supabase project.

## 1. Create a Supabase project

1. Create a project at supabase.com.
2. In **Project Settings → Database**, copy the connection string. Use the
   **Session pooler** (or direct) connection string — the one in the form:
   `postgresql://postgres.[project-ref]:[password]@[host]:5432/postgres`.

## 2. Set environment variables

Copy `.env` (already present) and fill in:

- `DATABASE_URL` — the Supabase connection string from step 1.
- `AUTH_SECRET` — generate with `openssl rand -base64 32`.
- `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` — credentials for the first
  admin account, created by the seed script below.
- `NEXT_PUBLIC_SITE_URL` — your deployed URL (or `http://localhost:3000` locally).

## 3. Create the database schema

You have two equivalent options — pick one:

**Option A — Supabase SQL editor (recommended, no local Postgres needed):**
Open `supabase/schema.sql` in this repo, paste its full contents into
Supabase's SQL Editor, and run it. This creates every table, enum, index,
trigger, and the `settings` singleton row exactly matching `prisma/schema.prisma`.

**Option B — Prisma migrate:**
```
npx prisma migrate dev --name init
```
Only do this if you did *not* already run `supabase/schema.sql`, since both
create the same tables.

If you ever change `prisma/schema.prisma`, keep `supabase/schema.sql` in sync
manually (there's a comment at the top of that file as a reminder), since this
project points Prisma at Supabase via `DATABASE_URL` rather than letting
Prisma manage migrations against it directly.

## 4. Seed services + the first admin account

```
npx prisma generate
npx tsx prisma/seed.ts
```

This upserts the 10 service records (Airport, Hotel, City, Corporate, etc.),
the `settings` singleton row, and one Admin account using
`ADMIN_NAME` / `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env`.

## 5. Log in

Start the app (`npm run dev`) and visit `/admin/login`. Sign in with the
`ADMIN_EMAIL` / `ADMIN_PASSWORD` you set in `.env`. You can change the name,
email, and password afterwards from `/admin/settings`.

## What's connected vs. not

- Leads created via the public **Get A Quote** page (`/get-a-quote`) land
  directly in `/admin/leads` via a real Prisma write — no mock data.
- Quotes, bookings, cancellations, and customer profiles are all backed by
  the same database — creating/sending a quote and accepting it will move a
  lead through to `/admin/bookings` for real.
- The **Logo URL** field under Settings → Company expects a hosted image URL.
  Actual file upload isn't wired up since no storage provider (e.g. Supabase
  Storage) is configured yet — add that if you want drag-and-drop upload.
- The dashboard's "Bookings Overview" card is a placeholder; wire in a
  charting library (e.g. Recharts) once there's enough booking history to
  chart.
