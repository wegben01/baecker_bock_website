"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Location } from "@/types";

const customIcon = L.divIcon({
  className: "custom-marker",
  html: `<svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0C6.716 0 0 6.716 0 15c0 10.5 15 25 15 25s15-14.5 15-25C30 6.716 23.284 0 15 0z" fill="#C4854A"/>
    <circle cx="15" cy="14" r="6" fill="white"/>
  </svg>`,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

interface LocationMapProps {
  locations: Location[];
}

export default function LocationMap({ locations }: LocationMapProps) {
  const center: [number, number] = [49.45, 11.15];

  return (
    <MapContainer
      center={center}
      zoom={11}
      className="h-[400px] md:h-[500px] w-full rounded-2xl shadow-lg z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.coordinates.lat, location.coordinates.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="font-sans">
              <p className="font-bold text-charcoal-900 !m-0">{location.name}</p>
              <p className="text-sm text-charcoal-600 !m-0">{location.street}</p>
              <p className="text-sm text-charcoal-600 !m-0 !mb-1">
                {location.zip} {location.city}
              </p>
              <a
                href={`tel:${location.phone.replace(/\s/g, "")}`}
                className="text-sm text-terracotta-600 hover:text-terracotta-700"
              >
                {location.phone}
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
