import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CitySkyline } from "@/components/city-skyline";

export type CityCardData = {
  name: string;
  state: string;
  tags: string[];
  image: string | null;
  large?: boolean;
};

export function CityCard({ city, seed }: { city: CityCardData; seed: number }) {
  return (
    <Link
      href="/get-a-quote"
      className={`group relative flex flex-col justify-end overflow-hidden rounded-[24px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:ring-brand-gold ${
        city.large ? "h-[400px]" : "h-[320px]"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 scale-100 transition-transform duration-500 group-hover:scale-105">
          {city.image ? (
            <Image
              src={city.image}
              alt={`${city.name} skyline`}
              fill
              sizes={city.large ? "(min-width: 1024px) 1200px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
              className="object-cover"
            />
          ) : (
            <CitySkyline seed={seed} />
          )}
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        />
      </div>

      <span className="absolute top-6 left-6 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
        {city.state}
      </span>

      <div className="relative">
        <h3 className="font-heading text-3xl font-semibold text-white">{city.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-gold-light">
          Luxury Chauffeur Service
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {city.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-gold">
          Explore City
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
