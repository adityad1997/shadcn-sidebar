// components/Map.js
'use client'

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CheckCircle, XCircle } from 'lucide-react';

// Fix default Leaflet icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample data for markers
const markers = [
  { id: 1, position: [26.912743, 75.755192], shopName: 'Shop Name 1', area: 'DS Name 1' },
  { id: 2, position: [26.921624, 75.767692], shopName: 'Shop Name 2', area: 'DS Name 2' },
  { id: 3, position: [26.922746, 75.765192], shopName: 'Shop Name 3', area: 'DS Name 3' },
  { id: 4, position: [26.929713, 75.764192], shopName: 'Shop Name 4', area: 'DS Name 4' },
  { id: 5, position: [26.911743, 75.745192], shopName: 'Shop Name 5', area: 'DS Name 5' },
  { id: 20, position: [26.949843, 75.799152], shopName: 'Shop Name 20', area: 'DS Name 20' }
];

const Map = () => {
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [openPopupId, setOpenPopupId] = useState(null); // Track open popup ID

  // Handle Accept/Reject actions
  const handleAction = (action, markerId) => {
    setConfirmationMessage(`Entry ${action}`);
    setOpenPopupId(null); // Close the popup by resetting openPopupId
    setTimeout(() => setConfirmationMessage(null), 2000); 
  };

  return (
    <div className="relative">
      <MapContainer center={[26.912743, 75.755192]} zoom={12} style={{ height: '60vh', width: 'auto', zIndex: '0' }}>
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
                  <p>{marker.area}</p>
                  <img src="https://via.placeholder.com/100" alt="Placeholder" className="my-2 mx-auto" />
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
