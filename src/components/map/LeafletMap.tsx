"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const serviceLocations = [
  {
    name: "Petaluma",
    note: "Our home base",
    lat: 38.2324,
    lng: -122.6367,
    isHQ: true,
  },
  { name: "Santa Rosa", note: "Full service area", lat: 38.4404, lng: -122.7141 },
  { name: "Rohnert Park", note: "Full service area", lat: 38.3396, lng: -122.7011 },
  { name: "Sebastopol", note: "Full service area", lat: 38.4021, lng: -122.8238 },
  { name: "Windsor", note: "Full service area", lat: 38.5474, lng: -122.8143 },
  { name: "Healdsburg", note: "Full service area", lat: 38.6105, lng: -122.8693 },
  { name: "Novato", note: "Full service area", lat: 38.1074, lng: -122.5697 },
  { name: "San Rafael", note: "Full service area", lat: 37.9735, lng: -122.5311 },
  { name: "Mill Valley", note: "Full service area", lat: 37.906, lng: -122.5449 },
  { name: "Fairfax", note: "Full service area", lat: 37.9871, lng: -122.5888 },
];

function makePin(isHQ: boolean) {
  const size = isHQ ? 36 : 28;
  const color = isHQ ? "#1a6335" : "#2f9a52";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <path fill="${color}" stroke="white" stroke-width="1.2"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.8" fill="white"/>
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

export function LeafletMap() {
  return (
    <MapContainer
      center={[38.28, -122.67]}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "#e8f0eb" }}
    >
      <AttributionFix />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {serviceLocations.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={makePin(loc.isHQ ?? false)}
        >
          <Popup className="gc-popup">
            <div className="min-w-[140px]">
              <p className="font-semibold text-[#0f1b14]">{loc.name}</p>
              <p className="text-xs text-[#5b6b62]">{loc.note}</p>
              {loc.isHQ && (
                <span className="mt-1 inline-block rounded-full bg-[#effaf1] px-2 py-0.5 text-xs font-medium text-[#1a6335]">
                  HQ
                </span>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
