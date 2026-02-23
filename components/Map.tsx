"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { X } from "lucide-react";

// Replace with your actual Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoiZGV2YXBpIiwiYSI6ImNseXJ3Z280bjAwZnYyam9qZ29nYzIyejgifQ.dummy_token";

interface NeighborhoodData {
    name: string;
    type: string;
}

const Map = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<NeighborhoodData | null>(null);

    useEffect(() => {
        if (map.current) return;
        if (!mapContainer.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: [-73.9153, 40.8448], // lng, lat
            zoom: 11,
            scrollZoom: false,
        });

        map.current.on("load", () => {
            if (!map.current) return;

            // Add GeoJSON source
            map.current.addSource("service-areas", {
                type: "geojson",
                data: "/service_areas.geojson",
            });

            // Add fill layer
            map.current.addLayer({
                id: "service-areas-fill",
                type: "fill",
                source: "service-areas",
                paint: {
                    "fill-color": "#6B8E23",
                    "fill-opacity": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        0.7,
                        0.45,
                    ],
                },
            });

            // Add outline layer
            map.current.addLayer({
                id: "service-areas-outline",
                type: "line",
                source: "service-areas",
                paint: {
                    "line-color": "#6B8E23",
                    "line-width": 1,
                },
            });

            // Custom Marker for Melrose
            const el = document.createElement("div");
            el.className = "custom-marker";
            el.title = "Primary Pilot Neighborhood: Melrose";

            new mapboxgl.Marker(el)
                .setLngLat([-73.9153, 40.8448])
                .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML("<h3>Primary Pilot Neighborhood: Melrose</h3>"))
                .addTo(map.current);

            let hoveredFeatureId: string | number | null = null;

            // Hover effects
            map.current.on("mousemove", "service-areas-fill", (e) => {
                if (!map.current) return;
                if (e.features && e.features.length > 0) {
                    if (hoveredFeatureId !== null) {
                        map.current.setFeatureState(
                            { source: "service-areas", id: hoveredFeatureId },
                            { hover: false }
                        );
                    }
                    hoveredFeatureId = e.features[0].id || e.features[0].properties?.name;
                    if (hoveredFeatureId !== null) {
                        map.current.setFeatureState(
                            { source: "service-areas", id: hoveredFeatureId },
                            { hover: true }
                        );
                    }
                    map.current.getCanvas().style.cursor = "pointer";
                }
            });

            map.current.on("mouseleave", "service-areas-fill", () => {
                if (!map.current) return;
                if (hoveredFeatureId !== null) {
                    map.current.setFeatureState(
                        { source: "service-areas", id: hoveredFeatureId },
                        { hover: false }
                    );
                }
                hoveredFeatureId = null;
                map.current.getCanvas().style.cursor = "";
            });

            // Click event
            map.current.on("click", "service-areas-fill", (e) => {
                if (e.features && e.features.length > 0) {
                    const props = e.features[0].properties;
                    setSelectedNeighborhood({
                        name: props?.name || "Unknown",
                        type: "Service Area",
                    });
                }
            });
        });

        return () => {
            map.current?.remove();
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <div ref={mapContainer} className="w-full h-full" />

            {selectedNeighborhood && (
                <div className="absolute top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-10 animate-in slide-in-from-right duration-300 border-l border-gray-100 p-8">
                    <button
                        onClick={() => setSelectedNeighborhood(null)}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>

                    <div className="mt-8">
                        <span className="inline-block px-3 py-1 bg-olive-green/10 text-olive-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                            {selectedNeighborhood.type}
                        </span>
                        <h2 className="text-3xl font-bold text-text-dark mb-4">{selectedNeighborhood.name}</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>

                        <p className="text-gray-600 leading-relaxed text-sm mb-6">
                            Our community engagement team is actively working in {selectedNeighborhood.name} to identify local needs and foster sustainable growth.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Active Community Center</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Youth Programs Available</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Monthly Town Hall</span>
                            </div>
                        </div>

                        <button className="w-full mt-12 bg-dark-teal text-white py-4 rounded-xl font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/20">
                            Get Involved
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Map;
