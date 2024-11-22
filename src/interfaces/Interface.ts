import { LatLng } from "leaflet";

export interface CameraInfo {
  position: LatLng;
  video: string;
}

export interface MenuItem {
  icon: string;
  text: string;
  path: string;
}

export interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
}

export interface CameraCreate {
  streamKey: string,
  userId?: number,
  lat: string,
  lng: string,
  country: string,
  city: string,
  district: string
}