import { Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { useState } from 'react';
import { CameraInfo } from "../interfaces/Interface";
import StreamVideo from "./StreamVideo";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/camera.png', // URL to your custom icon
  iconSize: [16, 16], // size of the icon
});

interface LocationMarkerProps {
  item: CameraInfo;
}

function LocationMarker({ item }: LocationMarkerProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handleMarkerClick = () => {
    setShowVideo(true); // Set state để hiện video
  };

  return (
    <>
      <Marker position={item.position} icon={customIcon} eventHandlers={{ click: handleMarkerClick }}>
        {showVideo && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 999 }}>
            <div style={{margin: 'auto'}}>
              <StreamVideo onClose={() => setShowVideo(false)} videoUrl={item.video}/> {/* Thêm props để đóng video */}
            </div>
          </div>
        )}
      </Marker>
    </>
  );
}

export default LocationMarker;
