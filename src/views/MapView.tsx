import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { clsx } from 'clsx';
import { MapPin } from 'lucide-react';
import { bowls } from '../data/bowls';

// Custom icon logic
// Custom icon logic
const ROUNDS = ['All', 'Round of 32', 'Sweet 16', 'Elite 8', 'Final 4', 'Natty'];

const createCustomIcon = (isActive: boolean, _type: 'selected' | 'default') => {
    const color = isActive ? '#eab308' : '#3b82f6';
    const size = isActive ? 16 : 8;
    const glow = isActive ? 'box-shadow: 0 0 15px #eab308;' : 'box-shadow: 0 0 8px #3b82f6;';

    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="
      width: ${size}px; 
      height: ${size}px; 
      background-color: ${color}; 
      border-radius: 50%; 
      ${glow}
      transition: all 0.3s ease;
    "></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

export const MapView = () => {
    const [selectedRound, setSelectedRound] = useState<string>('All');
    const [activeBowlId, setActiveBowlId] = useState<string | null>(null);

    // Filter bowls
    const visibleBowls = selectedRound === 'All'
        ? bowls
        : bowls.filter(b => b.round === selectedRound);

    return (
        <div className="flex h-full w-full bg-slate-950">
            {/* Sidebar Controls */}
            <div className="w-80 border-r border-white/10 flex flex-col bg-slate-900/50 backdrop-blur-md z-10">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-premium-gold mb-4">Bowl Ecosystem</h2>

                    <div className="flex flex-wrap gap-2">
                        {ROUNDS.map(r => (
                            <button
                                key={r}
                                onClick={() => setSelectedRound(r)}
                                className={clsx(
                                    "px-3 py-1 rounded-full text-xs font-semibold transition-all mb-1",
                                    selectedRound === r
                                        ? "bg-premium-blue text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                                )}
                            >
                                {r.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {visibleBowls.map(bowl => (
                        <div
                            key={bowl.id}
                            className={clsx(
                                "p-3 rounded-lg border cursor-pointer transition-all hover:bg-white/5",
                                activeBowlId === bowl.id ? "border-premium-gold bg-white/5" : "border-slate-800"
                            )}
                            onMouseEnter={() => setActiveBowlId(bowl.id)}
                            onMouseLeave={() => setActiveBowlId(null)}
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-slate-200">{bowl.name}</span>
                                <span className="text-[10px] text-premium-blue font-mono px-1.5 py-0.5 bg-premium-blue/10 rounded">
                                    {bowl.round === 'Round of 32' ? 'R32' : bowl.round}
                                </span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {bowl.city}, {bowl.state}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leaflet Map Area */}
            <div className="flex-1 relative z-0">
                <MapContainer
                    center={[39.8283, -98.5795]}
                    zoom={4}
                    style={{ height: '100%', width: '100%', background: '#020617' }}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />

                    {visibleBowls.map(bowl => (
                        <Marker
                            key={bowl.id}
                            position={[bowl.coordinates.lat, bowl.coordinates.lng]}
                            icon={createCustomIcon(activeBowlId === bowl.id, 'default')}
                            eventHandlers={{
                                mouseover: () => setActiveBowlId(bowl.id),
                                mouseout: () => setActiveBowlId(null),
                            }}
                        >
                            <Popup
                                className="custom-popup"
                                closeButton={false}
                            >
                                <div className="p-2 bg-slate-900 text-white border border-slate-700 rounded shadow-xl">
                                    <div className="font-bold text-sm text-premium-gold">{bowl.name}</div>
                                    <div className="text-xs text-slate-400">{bowl.city}</div>
                                    <div className="mt-1 text-[10px] uppercase text-premium-blue font-bold">{bowl.round}</div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* Legend/Info Overlay */}
                <div className="absolute bottom-8 right-8 text-right text-slate-500 text-xs max-w-xs pointer-events-none z-[1000]">
                    <p>Interactive Map of 32-Team Playoff Host Sites.</p>
                    <p className="mt-1">Powered by Leaflet & CartoDB Dark Matter.</p>
                </div>
            </div>
        </div>
    );
};
