"use client";

import dynamic from "next/dynamic";
import type { Location } from "@/types";

const LocationMap = dynamic(() => import("@/components/ui/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] md:h-[500px] w-full rounded-2xl bg-charcoal-100 animate-pulse flex items-center justify-center">
      <p className="text-charcoal-400">Karte wird geladen...</p>
    </div>
  ),
});

interface LocationMapWrapperProps {
  locations: Location[];
}

export default function LocationMapWrapper({ locations }: LocationMapWrapperProps) {
  return <LocationMap locations={locations} />;
}
