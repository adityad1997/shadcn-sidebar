// components/Map.js
'use client'

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';

// Fix default Leaflet icon issues
L.Icon.Default.prototype.options.iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
L.Icon.Default.prototype.options.iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
L.Icon.Default.prototype.options.shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

// Sample data for markers
const markers: { id: number, position: [number, number], shopName: string, area: string }[] = [
  { id: 1, position: [26.912743, 75.755192], shopName: 'Shop Name 1', area: 'DS Name 1' },
  { id: 2, position: [26.921624, 75.767692], shopName: 'Shop Name 2', area: 'DS Name 2' },
  { id: 3, position: [26.922746, 75.765192], shopName: 'Shop Name 3', area: 'DS Name 3' },
  { id: 4, position: [26.929713, 75.764192], shopName: 'Shop Name 4', area: 'DS Name 4' },
  { id: 5, position: [26.911743, 75.745192], shopName: 'Shop Name 5', area: 'DS Name 5' },
  { id: 6, position: [26.949843, 75.799152], shopName: 'Shop Name 6', area: 'DS Name 6' },
  { id: 7, position: [26.920743, 75.730192], shopName: 'Shop Name 7', area: 'DS Name 7' },
  { id: 8, position: [26.932743, 75.741192], shopName: 'Shop Name 8', area: 'DS Name 8' },
  { id: 9, position: [26.943843, 75.752152], shopName: 'Shop Name 9', area: 'DS Name 9' },
  { id: 10, position: [26.948743, 75.760192], shopName: 'Shop Name 10', area: 'DS Name 10' }
];

const Map = () => {
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const [openPopupId, setOpenPopupId] = useState<number | null>(null); // Track open popup ID

  // Handle Accept/Reject actions
  const handleAction = (action: string, markerId: number) => {
    setConfirmationMessage(`Entry ${action}`);
    setOpenPopupId(null); // Close the popup by resetting openPopupId
    setTimeout(() => setConfirmationMessage(null), 2000); 
  };

  return (
    <div className="relative">
      <MapContainer center={[26.932743, 75.765192]} zoom={13} style={{ height: '60vh', width: 'auto', zIndex: '0' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            eventHandlers={{
              click: () => setOpenPopupId(marker.id), // Open popup on click
            }}
          >
            {openPopupId === marker.id && (
              <Popup>
              <div className="text-center">
                <h3 className="font-bold">{marker.shopName}</h3>
                {/* Provide width and height for both images */}
                <Image src="/images/default-image.png" alt="Placeholder" width={300} height={300} className="my-2 mx-auto" />
                <div className="mt-2 flex justify-center space-x-2">
                  <button onClick={() => handleAction("Accepted", marker.id)} className="flex items-center gap-1 text-green-500">
                    <CheckCircle className="w-4 h-4" />
                    Accept
                  </button>
                  <button onClick={() => handleAction("Rejected", marker.id)} className="flex items-center gap-1 text-red-500">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </Popup>
            
            )}
          </Marker>
        ))}
      </MapContainer>

      {/* Confirmation Message at the Bottom */}
      {confirmationMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg text-sm z-50">
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};

export default Map;
