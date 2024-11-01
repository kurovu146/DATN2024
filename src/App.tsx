import './App.css';
import 'leaflet/dist/leaflet.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Map from './pages/Map';
import DefaultLayout from './layouts/DefaulLayout';
import Camera from './pages/Camera';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DefaultLayout content={<Map/>} />} />
      <Route path="camera" element={<DefaultLayout content={<Camera/>} />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
