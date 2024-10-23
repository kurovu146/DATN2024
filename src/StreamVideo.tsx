import React, { useRef, useEffect } from 'react';

interface VideoStreamProps {
  onClose: () => void; // Thêm props để đóng video
}

const VideoStream: React.FC<VideoStreamProps> = ({ onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
console.log('here');

  useEffect(() => {
    const startVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Lỗi khi truy cập camera:", error);
      }

      // Nếu không có camera, fallback về video local
      if (videoRef.current) {
        videoRef.current.src = '/video.mp4'; // Đảm bảo video.mp4 nằm trong thư mục public
        // await videoRef.current.play(); // Phát video local
      }
    };

    startVideoStream();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>Close</button>
      <video
        ref={videoRef}
        controls
        autoPlay
        loop
        style={{ width: '80%', maxWidth: '800px', height: 'auto', margin: 'auto', display: 'block' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoStream;
