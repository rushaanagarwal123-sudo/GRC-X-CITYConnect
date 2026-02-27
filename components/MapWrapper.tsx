"use client";

import React, { useEffect, useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css";

// Avoid SSR Next.js bugs with next/dynamic by manually importing inside useEffect
export default function MapWrapper() {
    const [MapComponent, setMapComponent] = useState<any>(null);

    useEffect(() => {
        import('./Map').then((mod) => {
            setMapComponent(() => mod.default);
        });
    }, []);

    if (!MapComponent) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                Loading interactive map...
            </div>
        );
    }

    return <MapComponent />;
}
