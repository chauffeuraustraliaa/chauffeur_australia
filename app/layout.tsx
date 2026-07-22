import type { Metadata } from "next";
import { Geist_Mono, Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.australiataxiservice.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Airport Transfers & Taxi Services Australia | Reliable Private Transfers",
    template: "%s | Australia Taxi Service",
  },
  description:
    "Book reliable airport transfers and private taxi services across Australia. Professional drivers, fixed prices, comfortable vehicles and 24/7 customer support.",
  keywords: [
    "airport transfers Australia",
    "taxi service Australia",
    "private transfers Australia",
    "airport taxi",
    "chauffeur service Australia",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Australia Taxi Service",
    title: "Australia Airport Transfers & Private Taxi Services",
    description:
      "Reliable airport taxis and private transfers across Australia's major cities. Book comfortable and affordable transportation today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
