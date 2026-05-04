"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

type ServiceLocation = {
  name: string;
  county: string;
  note: string;
  description: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
  slug?: string;
  landmarks: string[];
};

const serviceLocations: ServiceLocation[] = [
  {
    name: "Petaluma",
    county: "Sonoma County",
    note: "Our home base",
    description:
      "Green Core is based in Petaluma and serves nearby North Bay homes with heating, cooling, heat pump, and indoor comfort solutions.",
    lat: 38.2324,
    lng: -122.6367,
    isHQ: true,
    slug: "petaluma",
    landmarks: [
      "Downtown Petaluma",
      "Petaluma River",
      "Shollenberger Park",
      "Helen Putnam Regional Park",
    ],
  },
  {
    name: "Santa Rosa",
    county: "Sonoma County",
    note: "Full service area",
    description:
      "Serving Santa Rosa neighborhoods from downtown and Railroad Square to Bennett Valley, Fountaingrove, and surrounding areas.",
    lat: 38.4404,
    lng: -122.7141,
    slug: "santa-rosa",
    landmarks: [
      "Railroad Square",
      "Downtown Santa Rosa",
      "Howarth Park",
      "Annadel State Park",
    ],
  },
  {
    name: "Rohnert Park",
    county: "Sonoma County",
    note: "Full service area",
    description:
      "Serving Rohnert Park homes with HVAC systems designed for consistent comfort, efficient operation, and reliable airflow.",
    lat: 38.3396,
    lng: -122.7011,
    slug: "rohnert-park",
    landmarks: [
      "Sonoma State University",
      "Green Music Center",
      "Foxtail Golf Club",
      "Crane Creek Regional Park",
    ],
  },
  {
    name: "Sebastopol",
    county: "Sonoma County",
    note: "Full service area",
    description:
      "Serving Sebastopol and nearby west county homes where moisture control, airflow, and efficient heating matter.",
    lat: 38.4021,
    lng: -122.8238,
    slug: "sebastopol",
    landmarks: [
      "Downtown Sebastopol",
      "The Barlow",
      "Ragle Ranch Regional Park",
      "West County Trail",
    ],
  },
  {
    name: "Windsor",
    county: "Sonoma County",
    note: "Full service area",
    description:
      "Serving Windsor homes and nearby neighborhoods with HVAC repair, replacement, and high-efficiency comfort upgrades.",
    lat: 38.5474,
    lng: -122.8143,
    landmarks: [
      "Windsor Town Green",
      "Downtown Windsor",
      "Foothill Regional Park",
      "Shiloh Ranch Regional Park",
    ],
  },
  {
    name: "Healdsburg",
    county: "Sonoma County",
    note: "Full service area",
    description:
      "Serving Healdsburg homes where warm afternoons, cool evenings, and varied home styles call for thoughtful system design.",
    lat: 38.6105,
    lng: -122.8693,
    landmarks: [
      "Healdsburg Plaza",
      "Dry Creek Valley",
      "Russian River",
      "Fitch Mountain",
    ],
  },
  {
    name: "Novato",
    county: "Marin County",
    note: "Full service area",
    description:
      "Serving Novato homes from downtown to hillside neighborhoods with balanced HVAC, heat pump, and airflow solutions.",
    lat: 38.1074,
    lng: -122.5697,
    slug: "novato",
    landmarks: [
      "Downtown Novato",
      "Hamilton Field",
      "Stafford Lake",
      "Olompali State Historic Park",
    ],
  },
  {
    name: "San Rafael",
    county: "Marin County",
    note: "Full service area",
    description:
      "Serving San Rafael homes with heating and cooling solutions built for varied neighborhoods, hillside exposure, and coastal influence.",
    lat: 37.9735,
    lng: -122.5311,
    slug: "san-rafael",
    landmarks: [
      "Downtown San Rafael",
      "China Camp State Park",
      "Terra Linda",
      "Marin Civic Center",
    ],
  },
  {
    name: "Mill Valley",
    county: "Marin County",
    note: "Full service area",
    description:
      "Serving Mill Valley homes where coastal fog, redwoods, and hillside layouts make consistency and moisture control especially important.",
    lat: 37.906,
    lng: -122.5449,
    slug: "mill-valley",
    landmarks: [
      "Downtown Mill Valley",
      "Mount Tamalpais",
      "Old Mill Park",
      "Muir Woods",
    ],
  },
  {
    name: "Fairfax",
    county: "Marin County",
    note: "Full service area",
    description:
      "Serving Fairfax homes and nearby Marin neighborhoods with HVAC service focused on comfort, efficiency, and quieter operation.",
    lat: 37.9871,
    lng: -122.5888,
    landmarks: [
      "Downtown Fairfax",
      "Cascade Canyon",
      "Deer Park",
      "Marin Museum of Bicycling",
    ],
  },
];

function makePin(isHQ: boolean, isActive: boolean) {
  const size = isActive ? (isHQ ? 54 : 48) : isHQ ? 46 : 40;
  const color = isActive ? "#f59e0b" : "#facc15";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <filter id="pin-shadow" x="-30%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.4" flood-color="#0f1b14" flood-opacity="0.35"/>
      </filter>
      <path fill="${color}" stroke="#0f1b14" stroke-width="1.5" filter="url(#pin-shadow)"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.8" fill="#0f1b14"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

function AttributionFix() {
  const map = useMap();
  useEffect(() => {
    map.attributionControl.setPrefix("");
  }, [map]);
  return null;
}

function LocationMarkers({
  activeLocation,
  onSelect,
}: {
  activeLocation: ServiceLocation | null;
  onSelect: (location: ServiceLocation) => void;
}) {
  const map = useMap();

  return (
    <>
      {serviceLocations.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={makePin(
            loc.isHQ ?? false,
            activeLocation?.name === loc.name,
          )}
          eventHandlers={{
            click: () => {
              onSelect(loc);
              map.flyTo([loc.lat, loc.lng], loc.isHQ ? 12 : 11, {
                duration: 0.7,
              });
            },
          }}
        />
      ))}
    </>
  );
}

function LocationPanel({
  location,
  onClose,
}: {
  location: ServiceLocation | null;
  onClose: () => void;
}) {
  return (
    <aside
      aria-hidden={!location}
      aria-label={location ? `${location.name} service area details` : undefined}
      className={cn(
        "absolute inset-x-3 bottom-3 z-20 overflow-hidden rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/10 backdrop-blur transition-[opacity,transform] duration-300 ease-out sm:inset-x-auto sm:bottom-4 sm:right-4 sm:top-4 sm:w-[360px] sm:rounded-3xl",
        location
          ? "translate-y-0 opacity-100 sm:translate-x-0"
          : "pointer-events-none translate-y-[calc(100%+1rem)] opacity-0 sm:translate-x-[calc(100%+1rem)] sm:translate-y-0",
      )}
    >
      {location && (
        <div className="flex max-h-[min(82dvh,560px)] flex-col sm:max-h-full">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {location.county}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {location.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
                aria-label="Close location details"
              >
                Close
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                {location.note}
              </span>
              {location.isHQ && (
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-white">
                  HQ
                </span>
              )}
            </div>
          </div>

          <div className="overflow-y-auto px-5 py-4">
            <p className="text-sm leading-relaxed text-muted">
              {location.description}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-subtle p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Map point
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </dd>
              </div>
              <div className="rounded-2xl bg-subtle p-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Coverage
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  City area
                </dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                Nearby landmarks
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted"
                  >
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto grid gap-2 border-t border-border p-4">
            {location.slug && (
              <Link
                href={`/service-areas/${location.slug}`}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                View {location.name} services
              </Link>
            )}
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
            >
              Schedule service
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
}

export function LeafletMap() {
  const [activeLocation, setActiveLocation] = useState<ServiceLocation | null>(
    null,
  );

  return (
    <div className="relative isolate h-full w-full">
      <MapContainer
        center={[38.28, -122.67]}
        zoom={10}
        scrollWheelZoom={false}
        className="relative z-0 h-full w-full"
        style={{ background: "#e8f0eb" }}
      >
        <AttributionFix />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <LocationMarkers
          activeLocation={activeLocation}
          onSelect={setActiveLocation}
        />
      </MapContainer>
      <LocationPanel
        location={activeLocation}
        onClose={() => setActiveLocation(null)}
      />
    </div>
  );
}
