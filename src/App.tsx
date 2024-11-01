import './App.css';
import 'leaflet/dist/leaflet.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MapPage from './pages/MapPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MapPage/>} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
