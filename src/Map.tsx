import { Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L, { LatLng } from "leaflet";
import React, { useState } from 'react';
import StreamVideo from './StreamVideo'; // Đảm bảo bạn đã tạo component StreamVideo

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/camera.png', // URL to your custom icon
  iconSize: [8, 8], // size of the icon
});

interface LocationMarkerProps {
  item: LatLng;
}

function LocationMarker({ item }: LocationMarkerProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handleMarkerClick = () => {
    setShowVideo(true); // Set state để hiện video
  };

  return (
    <>
      <Marker position={item} icon={customIcon} eventHandlers={{ click: handleMarkerClick }}>
        {showVideo && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 999 }}>
            <StreamVideo onClose={() => setShowVideo(false)} /> {/* Thêm props để đóng video */}
          </div>
        )}
      </Marker>
    </>
  );
}

export default LocationMarker;
