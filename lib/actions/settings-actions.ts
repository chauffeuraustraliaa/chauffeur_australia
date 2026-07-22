"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

import { auth, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  adminPasswordSchema,
  adminProfileSchema,
  companySettingsSchema,
} from "@/lib/validation";

async function requireAdminId() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not authenticated");
  }
  return session.user.id;
}

export async function logoutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function updateAdminName(name: string) {
  const adminId = await requireAdminId();
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    throw new Error("Name must be at least 2 characters");
  }

  await prisma.admin.update({
    where: { id: adminId },
    data: { name: trimmed },
  });

  revalidatePath("/admin/settings");
}

export async function updateAdminProfile(input: { name: string; email: string }) {
  const adminId = await requireAdminId();
  const data = adminProfileSchema.parse(input);

  const existing = await prisma.admin.findUnique({ where: { email: data.email } });
  if (existing && existing.id !== adminId) {
    throw new Error("That email is already in use by another admin account");
  }

  await prisma.admin.update({
    where: { id: adminId },
    data: { name: data.name, email: data.email },
  });

  revalidatePath("/admin/settings");
}

export async function updateAdminPassword(input: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}) {
  const adminId = await requireAdminId();
  const data = adminPasswordSchema.parse(input);

  const admin = await prisma.admin.findUniqueOrThrow({ where: { id: adminId } });
  const isValid = await bcrypt.compare(data.currentPassword, admin.passwordHash);
  if (!isValid) {
    throw new Error("Current password is incorrect");
  }

  const passwordHash = await bcrypt.hash(data.newPassword, 12);
  await prisma.admin.update({
    where: { id: adminId },
    data: { passwordHash },
  });

  revalidatePath("/admin/settings");
}

export async function updateCompanySettings(input: {
  companyName: string;
  supportEmail: string;
  logoUrl?: string;
  currency: string;
  timezone: string;
}) {
  await requireAdminId();
  const data = companySettingsSchema.parse(input);

  await prisma.setting.upsert({
    where: { id: "singleton" },
    update: {
      companyName: data.companyName,
      supportEmail: data.supportEmail,
      logoUrl: data.logoUrl || null,
      currency: data.currency,
      timezone: data.timezone,
    },
    create: {
      id: "singleton",
      companyName: data.companyName,
      supportEmail: data.supportEmail,
      logoUrl: data.logoUrl || null,
      currency: data.currency,
      timezone: data.timezone,
    },
  });

  revalidatePath("/admin/settings");
}
