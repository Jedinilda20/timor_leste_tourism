'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
const createCustomIcon = (color: string) => {
  if (typeof window === 'undefined') return undefined;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 30px;
        height: 30px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

const locations = [
  {
    name: 'Dili',
    position: [-8.5569, 125.5603] as [number, number],
    description: 'Capital city - Cristo Rei, Tais Market, Resistance Museum',
    type: 'Capital',
    color: '#DC241F',
  },
  {
    name: 'Atauro Island',
    position: [-8.2667, 125.5967] as [number, number],
    description: 'World-class diving and pristine beaches',
    type: 'Beach & Diving',
    color: '#0EA5E9',
  },
  {
    name: 'Jaco Island',
    position: [-8.4372, 127.3153] as [number, number],
    description: 'Uninhabited paradise with crystal-clear waters',
    type: 'Beach',
    color: '#FFC726',
  },
  {
    name: 'Mount Ramelau',
    position: [-8.9167, 125.4833] as [number, number],
    description: 'Highest peak - 2,963m elevation, stunning sunrise views',
    type: 'Mountain',
    color: '#22C55E',
  },
  {
    name: 'Baucau',
    position: [-8.4667, 126.4583] as [number, number],
    description: 'Colonial architecture and traditional markets',
    type: 'City',
    color: '#DC241F',
  },
  {
    name: 'Com Beach',
    position: [-8.8333, 125.6667] as [number, number],
    description: 'Beautiful coastal area with excellent swimming',
    type: 'Beach',
    color: '#06B6D4',
  },
  {
    name: 'Maubisse',
    position: [-8.8167, 125.6000] as [number, number],
    description: 'Mountain town with coffee plantations',
    type: 'Mountain Town',
    color: '#10B981',
  },
];

const Map = () => {
  return (
    <div className="h-[600px] relative z-0">
      <MapContainer
        center={[-8.8742, 125.7275]}
        zoom={9}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => {
          const icon = createCustomIcon(location.color);
          return icon ? (
            <Marker
              key={index}
              position={location.position}
              icon={icon}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-xs text-[#DC241F] font-semibold mb-2">
                    {location.type}
                  </p>
                  <p className="text-sm text-gray-700">
                    {location.description}
                  </p>
                </div>
              </Popup>
            </Marker>
          ) : null;
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
