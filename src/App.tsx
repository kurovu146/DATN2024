import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './Map';
import 'leaflet/dist/leaflet.css';
import L, { LatLng } from 'leaflet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const cameraIP: LatLng[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  { 
    lat: 21.30110, lng: 105.132817,
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
  {
    lat: 21.20110, lng: 105.83517,
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
  {
    lat: 21.11110, lng: 105.732817,
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
]

const MapPage: React.FC = () => {
  return (
    <MapContainer center={[21.028511, 105.804817]} zoom={13} style={{ width: '100vw', height: '100vh' }} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cameraIP.map((item, index) => (
        <LocationMarker item={item} key={"c" + index} />
      ))}
    </MapContainer>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
