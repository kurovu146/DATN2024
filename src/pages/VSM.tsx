import React, { useState, useEffect } from 'react';
import '../styles/VSM.css'; 
import { CameraInterface } from '../interfaces/Interface';
import LiveStreamPlayer from '../components/LiveStreamPlayer';
import { CallAPI } from '../utils/common';

const VSM = () => {
  const [cameras, setCameras] = useState<CameraInterface[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<CameraInterface[]>([]);
  const [filters, setFilters] = useState({
    city: '',
    userId: '',
  });

  useEffect(() => {
    async function getListCamera () {
      try {
        const response = await CallAPI('GET', '/cameras');

        if (response.statusText === 'OK') {
          setCameras(response.data);
          setFilteredCameras(response.data);
        }
      } catch (error) {
        throw new Error('Error fetching cameras!');
      }
      
    }

    getListCamera();
  }, []);

  // Xử lý lọc dữ liệu
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const filtered = cameras.filter((camera) => {
      return filters.city ? camera.city.toLowerCase().includes(filters.city.toLowerCase()) : true;
    });
    setFilteredCameras(filtered);
  }, [filters, cameras]);

  return (
    <div className="vsm-page">
      <h1>Video Stream Manager</h1>

      <div className="filters">
        <label>
          City:
          <input
            type="text"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            placeholder="Enter city"
          />
        </label>
      </div>

       <div className="camera-list">
        {filteredCameras.map((camera) => (
          <div className="camera-item" key={camera.id}>
            <h3>
              {camera.city} - {camera.country}
            </h3>
            <p>User ID: {camera.userId}</p>
            <div className="camera-stream">
              <LiveStreamPlayer onClose={() => {}} streamUrl={`http://localhost:8000/live/${camera.streamKey}.flv`} canClose={false}/> 
            </div>
          </div>
        ))}
        {filteredCameras.length === 0 && <p>No cameras found.</p>}
      </div>
    </div>
  );
};

export default VSM;
