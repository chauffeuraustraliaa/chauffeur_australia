import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-config";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },

  // City pillar pages
  { path: "/melbourne-chauffeur-service", changeFrequency: "weekly", priority: 0.9 },
  { path: "/sydney-chauffeur-service", changeFrequency: "weekly", priority: 0.9 },
  { path: "/brisbane-chauffeur-service", changeFrequency: "weekly", priority: 0.9 },
  { path: "/perth-chauffeur-service", changeFrequency: "weekly", priority: 0.9 },
  { path: "/adelaide-chauffeur-service", changeFrequency: "weekly", priority: 0.9 },

  // National service pages
  { path: "/airport-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/city-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hotel-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/corporate-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/private-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/executive-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wedding-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/event-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cruise-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/long-distance-transfers", changeFrequency: "monthly", priority: 0.8 },

  // Melbourne cluster pages
  { path: "/melbourne-airport-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/melbourne-city-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/melbourne-hotel-transfers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/melbourne-corporate-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/melbourne-wedding-chauffeur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/melbourne-cruise-transfers", changeFrequency: "monthly", priority: 0.8 },

  // Melbourne route pages
  { path: "/melbourne-airport-to-cbd", changeFrequency: "monthly", priority: 0.7 },
  { path: "/melbourne-airport-to-st-kilda", changeFrequency: "monthly", priority: 0.7 },
  { path: "/melbourne-airport-to-southbank", changeFrequency: "monthly", priority: 0.7 },
  { path: "/melbourne-airport-to-docklands", changeFrequency: "monthly", priority: 0.7 },

  // Core pages
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/get-a-quote", changeFrequency: "monthly", priority: 0.7 },

  // Legal
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
