"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { X } from "lucide-react";

// Token moved to inside the component to avoid Next.js dynamic chunk process ReferenceError

interface NeighborhoodData {
    name: string;
    type: string;
    description?: string;
}

const Map = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<NeighborhoodData | null>(null);

    const points: (NeighborhoodData & { coords: [number, number], description: string })[] = [
        {
            name: "Melrose",
            type: "Primary Pilot Neighborhood",
            coords: [-73.9153, 40.8448],
            description: "Our initial focus area with established community partnerships and active youth programs."
        },
        {
            name: "Morrisania",
            type: "Proposed Service Area",
            coords: [-73.9016, 40.8251],
            description: "High-need district identified for upcoming digital literacy workshops and infrastructure expansion."
        },
        {
            name: "Claremont Village",
            type: "Proposed Service Area",
            coords: [-73.8966, 40.8350],
            description: "Planned hub for community connectivity, focused on linking local residents with essential services."
        }
    ];

    useEffect(() => {
        if (map.current) return;
        if (!mapContainer.current) return;

        console.log('Initializing Mapbox...');
        console.log('Mapbox WebGL Supported:', mapboxgl.supported());

        // Set Mapbox token securely inside the client execution context
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";
        console.log('Access token length:', mapboxgl.accessToken.length);

        if (!mapboxgl.supported()) {
            console.error('Mapbox GL is not supported by this browser (WebGL might be disabled or unavailable).');
            return;
        }

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v11",
                center: [-73.905, 40.835], // Centered between the points
                zoom: 12.5,
                scrollZoom: false,
            });
            console.log('Map instance created successfully.');
        } catch (e) {
            console.error('Error creating Mapbox map instance:', e);
            return;
        }

        map.current.on("load", () => {
            if (!map.current) return;

            // Add GeoJSON source if it exists
            const basePath = process.env.NODE_ENV === 'production' ? '/GRC-X-CITYConnect' : '';
            map.current.addSource("service-areas", {
                type: "geojson",
                data: `${basePath}/service_areas.geojson`,
            });

            // Add fill layer
            map.current.addLayer({
                id: "service-areas-fill",
                type: "fill",
                source: "service-areas",
                paint: {
                    "fill-color": "#2FA4A9",
                    "fill-opacity": 0.1,
                },
            });

            // Add markers
            points.forEach((point) => {
                const el = document.createElement("div");
                el.className = "custom-marker";
                el.style.backgroundColor = point.name === "Melrose" ? "#2FA4A9" : "#6B8E23";

                new mapboxgl.Marker(el)
                    .setLngLat(point.coords)
                    .addTo(map.current!);

                el.addEventListener("click", () => {
                    setSelectedNeighborhood({
                        name: point.name,
                        type: point.type,
                        description: point.description
                    });

                    map.current?.flyTo({
                        center: point.coords,
                        zoom: 14,
                        essential: true
                    });
                });
            });
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, []);

    return (
        <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-inner">
            <div id="map" ref={mapContainer} className="w-full h-full absolute inset-0" />

            {selectedNeighborhood && (
                <div className="absolute top-0 right-0 h-full w-full md:w-80 bg-white/95 backdrop-blur-md shadow-2xl z-10 animate-in slide-in-from-right duration-300 border-l border-gray-100 p-8 flex flex-col justify-center">
                    <button
                        onClick={() => setSelectedNeighborhood(null)}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>

                    <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                            {selectedNeighborhood.type}
                        </span>
                        <h2 className="text-2xl font-bold text-text-dark mb-3">{selectedNeighborhood.name}</h2>
                        <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>

                        <p className="text-gray-600 leading-relaxed text-sm mb-8">
                            {selectedNeighborhood.description || `Our community engagement team is actively working in ${selectedNeighborhood.name} to identify local needs and foster sustainable growth.`}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Local Stakeholder Meeting</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Impact Assessment Phase</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Resource Allocation</span>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-dark-teal text-white py-3 rounded-xl font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 text-sm">
                            View Data
                        </button>
                    </div>
                </div>
            )}

            {!selectedNeighborhood && (
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 animate-reveal pointer-events-none">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Interactive Map</p>
                    <p className="text-sm font-bold text-text-dark">Click a marker to explore locations</p>
                </div>
            )}
        </div>
    );
};

export default Map;
