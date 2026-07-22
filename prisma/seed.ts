import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

const services = [
  { id: "svc_airport", name: "Airport Transfer", slug: "airport", description: "Airport pickup and drop-off" },
  { id: "svc_hotel", name: "Hotel Transfer", slug: "hotel", description: "Transfers to and from hotels" },
  { id: "svc_city", name: "City Transfer", slug: "city", description: "Point-to-point city transfers" },
  { id: "svc_corporate", name: "Corporate", slug: "corporate", description: "Business and corporate travel" },
  { id: "svc_private", name: "Private Chauffeur", slug: "private", description: "Personal chauffeur hire" },
  { id: "svc_executive", name: "Executive Transfers", slug: "executive", description: "VIP executive transfers" },
  { id: "svc_wedding", name: "Wedding", slug: "wedding", description: "Wedding day chauffeur services" },
  { id: "svc_event", name: "Event", slug: "event", description: "Concerts, galas and event transfers" },
  { id: "svc_cruise", name: "Cruise", slug: "cruise", description: "Cruise port transfers" },
  { id: "svc_long_distance", name: "Long Distance", slug: "long-distance", description: "Interstate and regional transfers" },
];

async function main() {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@australiataxiservice.com.au";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";
  const adminName = process.env.ADMIN_NAME ?? "Admin";

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: adminName,
      email: adminEmail,
      passwordHash,
    },
  });

  await prisma.setting.upsert({
    where: { id: "singleton" },
    update: {},
    create: { id: "singleton" },
  });

  console.log(`Seeded ${services.length} services.`);
  console.log(`Seeded admin account: ${adminEmail}`);
  if (!process.env.ADMIN_PASSWORD) {
    console.log(
      `No ADMIN_PASSWORD env var was set, so the default password "ChangeMe123!" was used — change it after first login.`
    );
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
