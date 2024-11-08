import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import FlvJs from 'flv.js';

const LiveStreamPlayer = ({ streamUrl }: { streamUrl: string }) => {
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
    <div>
      <h1>Live Stream</h1>
      <video ref={videoRef} controls width="100%">
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LiveStreamPlayer;
