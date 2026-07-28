"use client";

import { track } from "@vercel/analytics";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const serviceLinks = [
  {
    label: "All Services",
    href: "/#services",
    description: "See every transfer service we offer",
  },
  {
    label: "Airport Transfers",
    href: "/airport-transfers",
    description: "Luxury airport chauffeur pickup & drop-off",
  },
  {
    label: "City Transfers",
    href: "/city-transfers",
    description: "Private, door-to-door transfers around the city",
  },
  {
    label: "Hotel Transfers",
    href: "/hotel-transfers",
    description: "Private transfers to and from your hotel",
  },
  {
    label: "Corporate Chauffeur",
    href: "/corporate-chauffeur",
    description: "Business travel, staff and client transport",
  },
  {
    label: "Private Chauffeur",
    href: "/private-chauffeur",
    description: "Personal chauffeur hire by the hour or day",
  },
  {
    label: "Executive Transfers",
    href: "/executive-transfers",
    description: "VIP transfers for business leaders",
  },
  {
    label: "Wedding Chauffeur",
    href: "/wedding-chauffeur",
    description: "Luxury transport for your wedding day",
  },
  {
    label: "Event Chauffeur",
    href: "/event-chauffeur",
    description: "Transfers for concerts, galas and events",
  },
  {
    label: "Cruise Transfers",
    href: "/cruise-transfers",
    description: "Transfers to and from cruise terminals",
  },
  {
    label: "Long Distance Transfers",
    href: "/long-distance-transfers",
    description: "Interstate and regional chauffeur transfers",
  },
];

const navLinks = [
  { label: "Routes", href: "/#routes" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-navy/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Chauffeur Australia"
            width={647}
            height={165}
            priority
            unoptimized
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-white/85 transition-colors hover:text-brand-gold"
            >
              Services
              <ChevronDown
                className="size-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                aria-hidden
              />
            </button>
            <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-brand-navy p-2 shadow-xl">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <span className="block text-sm font-medium text-white">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-white/50">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-white/85 transition-colors hover:text-brand-gold"
          >
            About
          </Link>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/get-a-quote" />}
            nativeButton={false}
            onClick={() => track("Header Get Quote Click")}
            className="rounded-full bg-brand-gold px-6 text-brand-navy-deep hover:bg-brand-gold-hover"
          >
            Get Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 bg-brand-navy px-6 pb-6 lg:hidden">
          <span className="px-3 pt-2 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
            Services
          </span>
          {serviceLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-brand-gold"
          >
            About
          </Link>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<Link href="/get-a-quote" />}
            nativeButton={false}
            onClick={() => {
              setMenuOpen(false);
              track("Header Get Quote Click");
            }}
            className="mt-2 rounded-full bg-brand-gold px-6 text-brand-navy-deep hover:bg-brand-gold-hover"
          >
            Get Quote
          </Button>
        </nav>
      )}
    </header>
  );
}
