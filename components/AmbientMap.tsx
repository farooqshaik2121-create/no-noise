"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface AmbientZone {
  name: string;
  lat: number;
  lng: number;
  note: string;
}

export interface CityData {
  id: string;
  name: string;
  center: [number, number];
  zoom: number;
  zones: AmbientZone[];
}

const CITIES: CityData[] = [
  {
    id: "nyc",
    name: "New York",
    center: [40.7291, -73.9965],
    zoom: 14,
    zones: [
      { name: "Washington Square South", lat: 40.73, lng: -73.9975, note: "Bench by the fountain after 11 PM. Chess tables empty." },
      { name: "Alley Espresso", lat: 40.725, lng: -73.992, note: "SoHo cobblestones, quiet back room with vinyl playing." },
      { name: "Brooklyn Heights Promenade", lat: 40.696, lng: -73.995, note: "Skyline glow across East River. Very low crowd." },
      { name: "Quiet Noodle Bar", lat: 40.715, lng: -73.998, note: "Chinatown basement counter, steaming broth at 1 AM." },
    ],
  },
  {
    id: "austin",
    name: "Austin",
    center: [30.2672, -97.7431],
    zoom: 14,
    zones: [
      { name: "Lady Bird Lake Trail", lat: 30.261, lng: -97.745, note: "Night stroll along the water, low lamp reflections." },
      { name: "Congress Ave Alley", lat: 30.268, lng: -97.742, note: "Hidden patio behind historic brick, warm amber string lights." },
      { name: "Rainey St Quiet Nook", lat: 30.259, lng: -97.738, note: "Old bungalow porch away from the main strip." },
    ],
  },
  {
    id: "chicago",
    name: "Chicago",
    center: [41.881832, -87.623177],
    zoom: 14,
    zones: [
      { name: "Riverwalk East", lat: 41.888, lng: -87.621, note: "Quiet water reflections between skyscrapers after 10 PM." },
      { name: "Pilsen Coffee Alcove", lat: 41.856, lng: -87.658, note: "Mural-covered brick street, late-night filter coffee." },
      { name: "Loop Late Diner", lat: 41.879, lng: -87.63, note: "Neon counter under the L tracks, quiet corner booth." },
    ],
  },
  {
    id: "seattle",
    name: "Seattle",
    center: [47.6062, -122.3321],
    zoom: 14,
    zones: [
      { name: "Pioneer Square Pergola", lat: 47.601, lng: -122.334, note: "Wet iron structure glowing under warm streetlamps." },
      { name: "Post Alley Roastery", lat: 47.608, lng: -122.341, note: "Rain on cobblestones, steaming espresso from the doorway." },
      { name: "Elliott Bay Bench", lat: 47.609, lng: -122.344, note: "Salty sea breeze, quiet harbor ferry lights." },
    ],
  },
  {
    id: "greenville",
    name: "Greenville",
    center: [34.8467, -82.399],
    zoom: 14,
    zones: [
      { name: "Quiet corner by the falls", lat: 34.8452, lng: -82.3995, note: "Seating above the Reedy — loudest sound is water." },
      { name: "Late-night tea window", lat: 34.847, lng: -82.3949, note: "Main Street, after the crowd folds up." },
      { name: "West End sunset bench", lat: 34.838, lng: -82.4015, note: "Faces the mural wall, not the road." },
      { name: "Corner bakery, first light", lat: 34.858, lng: -82.3908, note: "North Main. Warmest window in town at 6 AM." },
    ],
  },
];

/**
 * "Ambient Map Feed" — Major US City Downtowns on dark tiles.
 * Switch cities instantly, explore quiet moments marked by soft amber glow zones.
 */
export function AmbientMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [activeCityId, setActiveCityId] = useState("nyc");

  const currentCity = CITIES.find((c) => c.id === activeCityId) || CITIES[0];

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: currentCity.center,
      zoom: currentCity.zoom,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    // Keyframes
    if (!document.getElementById("ambient-zone-keyframes")) {
      const style = document.createElement("style");
      style.id = "ambient-zone-keyframes";
      style.innerHTML = `@keyframes zone-breathe { 0%,100% { opacity:.55; transform:scale(1);} 50% { opacity:1; transform:scale(1.18);} }`;
      document.head.appendChild(style);
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update markers and pan on city change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    map.flyTo(currentCity.center, currentCity.zoom, { duration: 1.5 });

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Add new markers
    currentCity.zones.forEach((zone) => {
      const icon = L.divIcon({
        className: "",
        html: `<div class="ambient-zone" data-name="${zone.name}" style="position:relative;width:56px;height:56px;">
          <div style="position:absolute;inset:0;border-radius:9999px;background:radial-gradient(circle,rgba(245,158,11,0.85) 0%,rgba(245,158,11,0.28) 42%,rgba(245,158,11,0) 70%);box-shadow:0 0 34px 8px rgba(245,158,11,0.28);animation:zone-breathe 4s ease-in-out infinite;"></div>
          <div style="position:absolute;left:50%;top:50%;width:7px;height:7px;transform:translate(-50%,-50%);border-radius:9999px;background:#fbbf24;box-shadow:0 0 10px 2px rgba(251,191,36,0.9);"></div>
        </div>`,
        iconSize: [56, 56],
        iconAnchor: [28, 28],
      });
      const marker = L.marker([zone.lat, zone.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:inherit;font-size:12px;line-height:1.5;color:#18181b;min-width:160px">
            <strong>${zone.name}</strong><br/><span style="color:#52525b">${zone.note}</span>
          </div>`
        );
      markersRef.current.push(marker);
    });
  }, [currentCity]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-night-900">
      {/* City Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] bg-night-950/80 px-4 py-3 backdrop-blur">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-soft">
          Select Downtown:
        </span>
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCityId(city.id)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all ${
                activeCityId === city.id
                  ? "bg-amber-glow text-night-950 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                  : "bg-white/[0.04] text-night-300 hover:bg-white/[0.08] hover:text-night-100"
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="h-[420px] w-full md:h-[480px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[500] flex justify-center">
        <span className="rounded-full border border-white/10 bg-night-950/85 px-4 py-1.5 text-[11px] tracking-wide text-night-200 backdrop-blur shadow-lg">
          Soft glow = quiet moments in {currentCity.name} · exact coordinates stay private
        </span>
      </div>
    </div>
  );
}
