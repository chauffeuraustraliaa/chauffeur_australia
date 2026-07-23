import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Chauffeur Australia <bookings@chauffeuraustralia.com>";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";

export const LOGO_URL = `${SITE_URL}/logo.png`;
