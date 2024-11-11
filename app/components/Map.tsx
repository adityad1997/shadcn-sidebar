// components/Map.js
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CheckCircle, XCircle } from 'lucide-react'; // Icons for accept/reject

// Fix default Leaflet icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample data for markers, adjusted to be around the specified center point (26.912743, 75.755192)
const markers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  position: [26.912743 + i * 0.01, 75.755192 + i * 0.01], // Increment latitude and longitude to spread markers out
  shopName: `Shop ${i + 1}`,
  area: `Jaipur, India - Location ${i + 1}`
}));

const Map = () => {
  return (
    <MapContainer center={[26.912743, 75.755192]} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{marker.shopName}</h3>
              <p>{marker.area}</p>
              <img src="https://via.placeholder.com/100" alt="Placeholder" className="my-2 mx-auto" />
              <div className="mt-2 flex justify-center space-x-2">
                <button className="flex items-center gap-1 text-green-500">
                  <CheckCircle className="w-4 h-4" />
                  Accept
                </button>
                <button className="flex items-center gap-1 text-red-500">
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
