import { CityCard, type CityCardData } from "@/components/city-card";
import { Reveal } from "@/components/reveal";

const cities: CityCardData[] = [
  {
    name: "Melbourne",
    state: "VIC",
    tags: ["Airport Transfers", "Corporate Travel"],
    image: "/melbourne.jpeg",
    href: "/melbourne-chauffeur-service",
  },
  {
    name: "Sydney",
    state: "NSW",
    tags: ["Airport Transfers", "Harbour Transfers"],
    image: "/sydney.webp",
    href: "/sydney-chauffeur-service",
  },
  {
    name: "Brisbane",
    state: "QLD",
    tags: ["Airport Transfers", "Corporate Travel"],
    image: "/brisbane.jpg",
    href: "/brisbane-chauffeur-service",
  },
  {
    name: "Perth",
    state: "WA",
    tags: ["Airport Transfers", "Private Chauffeur"],
    image: "/perth.avif",
    href: "/perth-chauffeur-service",
  },
  {
    name: "Adelaide",
    state: "SA",
    tags: ["Airport Transfers", "Corporate Travel"],
    image: "/adelaide.webp",
    href: "/adelaide-chauffeur-service",
  },
];

export function CityCoverage() {
  return (
    <section className="bg-brand-ivory py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            Where We Operate
          </span>
          <h2 className="font-heading mt-3 text-center text-[32px] font-bold tracking-tight text-brand-ink uppercase sm:text-[42px]">
            Service Areas Across Australia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] text-muted-foreground">
            Chauffeur Australia provides premium chauffeur services in every
            major Australian city.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, index) => (
              <CityCard key={city.name} city={city} seed={index * 19 + 7} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
