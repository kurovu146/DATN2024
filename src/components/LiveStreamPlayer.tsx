import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import FlvJs from 'flv.js';

interface VideoLiveStreamProps {
  onClose: () => void; // Thêm props để đóng video
  streamUrl: string;
  canClose: boolean;
}

const LiveStreamPlayer = ({ onClose, streamUrl, canClose }: VideoLiveStreamProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);  // Explicitly typing the ref

  useEffect(() => {
    if (FlvJs.isSupported() && videoRef.current) {
      const flvPlayer = FlvJs.createPlayer({
        type: 'flv',
        url: streamUrl
      });
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
      flvPlayer.muted = true;
      const playPromise = flvPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => { })
          .catch(error => { });
      }
    } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = streamUrl;
    }

    return () => {
      if (Hls.isSupported() && videoRef.current) {
        const hls = new Hls();
        hls.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
      { canClose ? <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>Close</button> : null }
      <video
        ref={videoRef}
        controls
        autoPlay
        loop
        style={{ width: '100%', maxWidth: '1000px', height: '100%', margin: 'auto', display: 'block' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LiveStreamPlayer;
