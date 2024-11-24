import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'; // React Player hỗ trợ nhiều giao thức stream
import '../styles/VSM.css'; // Style riêng cho trang VSM
import { CameraInterface } from '../interfaces/Interface';
import LiveStreamPlayer from '../components/LiveStreamPlayer';

const VSM = () => {
  const [cameras, setCameras] = useState<CameraInterface[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<CameraInterface[]>([]);
  const [filters, setFilters] = useState({
    city: '',
    userId: '',
  });

  useEffect(() => {
    // Fetch tất cả camera từ API
    fetch('http://localhost:3001/api/cameras', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCameras(data); // Lưu dữ liệu camera
        setFilteredCameras(data); // Hiển thị toàn bộ ban đầu
      })
      .catch((error) => console.error('Error fetching cameras:', error));
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
    // Lọc camera theo location và user
    const filtered = cameras.filter((camera) => {
      const matchesCity = filters.city ? camera.city.toLowerCase().includes(filters.city.toLowerCase()) : true;
      const matchesUser = filters.userId ? camera.userId.toString() === filters.userId : true;
      return matchesCity && matchesUser;
    });
    setFilteredCameras(filtered);
  }, [filters, cameras]);

  return (
    <div className="vsm-page">
      <h1>Video Stream Manager</h1>

      {/* Bộ lọc */}
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
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={filters.userId}
            onChange={handleFilterChange}
            placeholder="Enter user ID"
          />
        </label>
      </div>

      {/* Danh sách camera */}
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
