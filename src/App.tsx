import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './components/Map';
import 'leaflet/dist/leaflet.css';
import L, { LatLng } from 'leaflet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CameraInfo } from './interfaces/Interface';
import Sidebar from './components/Sidebar';

const cameraIP: CameraInfo[] = [
  {
    position: {
      lat: 21.176559, lng: 106.065590,
      equals: function (otherLatLng: L.LatLngExpression, maxMargin?: number): boolean {
        throw new Error("Function not implemented.");
      },
      distanceTo: function (otherLatLng: L.LatLngExpression): number {
        throw new Error("Function not implemented.");
      },
      wrap: function (): LatLng {
        throw new Error("Function not implemented.");
      },
      toBounds: function (sizeInMeters: number): L.LatLngBounds {
        throw new Error("Function not implemented.");
      },
      clone: function (): LatLng {
        throw new Error("Function not implemented.");
      }
    },
    video: 'video.mp4'
  },
  {
    position: {
      lat: 21.10110, lng: 105.832817,
      equals: function (otherLatLng: L.LatLngExpression, maxMargin?: number): boolean {
        throw new Error("Function not implemented.");
      },
      distanceTo: function (otherLatLng: L.LatLngExpression): number {
        throw new Error("Function not implemented.");
      },
      wrap: function (): LatLng {
        throw new Error("Function not implemented.");
      },
      toBounds: function (sizeInMeters: number): L.LatLngBounds {
        throw new Error("Function not implemented.");
      },
      clone: function (): LatLng {
        throw new Error("Function not implemented.");
      }
    },
    video: 'video2.mp4'
  },
  {
    position: {
      lat: 21.106100, lng: 105.802817,
      equals: function (otherLatLng: L.LatLngExpression, maxMargin?: number): boolean {
        throw new Error("Function not implemented.");
      },
      distanceTo: function (otherLatLng: L.LatLngExpression): number {
        throw new Error("Function not implemented.");
      },
      wrap: function (): LatLng {
        throw new Error("Function not implemented.");
      },
      toBounds: function (sizeInMeters: number): L.LatLngBounds {
        throw new Error("Function not implemented.");
      },
      clone: function (): LatLng {
        throw new Error("Function not implemented.");
      }
    },
    video: 'video3.mp4'
  },
  {
    position: {
      lat: 21.028611, lng: 105.884817,
      equals: function (otherLatLng: L.LatLngExpression, maxMargin?: number): boolean {
        throw new Error("Function not implemented.");
      },
      distanceTo: function (otherLatLng: L.LatLngExpression): number {
        throw new Error("Function not implemented.");
      },
      wrap: function (): LatLng {
        throw new Error("Function not implemented.");
      },
      toBounds: function (sizeInMeters: number): L.LatLngBounds {
        throw new Error("Function not implemented.");
      },
      clone: function (): LatLng {
        throw new Error("Function not implemented.");
      }
    },
    video: 'video1.mp4'
  }
]

const MapPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Sidebar /> {/* Add the Sidebar component */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={[21.028511, 105.804817]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {cameraIP.map((item, index) => (
            <LocationMarker item={item} key={"c" + index} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Styles for the container and map
const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Full height for the viewport
  },
  mapContainer: {
    flex: 1, // The map will take up the remaining space
  },
};
export default App;
