import React, { useState, useEffect } from 'react';
import LiveStreamPlayer from '../components/LiveStreamPlayer';

const Camera = () => {
  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/camera', {
      method: 'GET',  // Định nghĩa phương thức là POST
      headers: {
        'Content-Type': 'application/json',  // Xác định kiểu dữ liệu là JSON
      },
    })
      .then(response => response.json())
      .then(data => setStreamUrl(data.rtmp))
      .catch(error => console.error('Error fetching stream URL:', error));
  }, []);

  if (!streamUrl) return <p>Loading...</p>;

  return <LiveStreamPlayer streamUrl={streamUrl} />;
};

export default Camera;
