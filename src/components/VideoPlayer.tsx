
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    playerRef.current = videojs(videoRef.current.querySelector('video'), {
      controls: true,
      fluid: true,
      sources: [{
        src: src,
        type: 'video/mp4'
      }]
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src]);

  return (
    <div className={`video-player-wrapper ${className}`}>
      <div ref={videoRef}>
        <video className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
};

export default VideoPlayer;
