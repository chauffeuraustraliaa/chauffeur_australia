"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export function MobileStickyQuoteBar() {
  const pathname = usePathname();

  if (pathname === "/get-a-quote") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-brand-navy p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.15)] lg:hidden">
      <Button
        render={<a href="/get-a-quote" />}
        nativeButton={false}
        onClick={() => track("Sticky Get Quote Click", { page: pathname })}
        size="lg"
        className="h-12 w-full rounded-full bg-brand-gold text-base font-semibold text-brand-navy-deep hover:bg-brand-gold-hover"
      >
        Get Quote
      </Button>
    </div>
  );
}
