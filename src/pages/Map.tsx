import { LatLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../components/LocationMarker";
import { CameraInfo } from "../interfaces/Interface";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";

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

const Map: React.FC = () => {
  const token = localStorage.getItem('token');
  const { user } = useAuth();
  const [cameraList, setCameraList] = useState([]);  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/cameras`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setCameraList(data);
      })
      .catch(error => console.error('Error fetching camera data:', error));
  }, []);

  return (
    <MapContainer
      center={[21.028511, 105.804817]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cameraList.map((item, index) => (
        <LocationMarker item={item} key={"c" + index} />
      ))}
    </MapContainer>
  );
};

export default Map;