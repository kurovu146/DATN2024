import React from 'react';

interface Camera {
  id: number;
  name: string;
  location: string;
}

const cameraList: Camera[] = [
  { id: 1, name: 'Camera 1', location: 'Location A' },
  { id: 2, name: 'Camera 2', location: 'Location B' },
  { id: 3, name: 'Camera 3', location: 'Location C' },
];

const Camera: React.FC = () => {
  return (
    <div>
      <h1>Camera List</h1>
      <ul>
        {cameraList.map((camera) => (
          <li key={camera.id}>
            <strong>{camera.name}</strong> - {camera.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Camera;
