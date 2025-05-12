
import React from 'react';
import { cn } from "@/lib/utils";

interface VideoTileProps {
  videoSrc?: string;
  fallbackImage?: string;
  name: string;
  timer?: string;
  isRecording?: boolean;
  isActive?: boolean;
  className?: string;
}

const VideoTile: React.FC<VideoTileProps> = ({
  videoSrc,
  fallbackImage,
  name,
  timer,
  isRecording = false,
  isActive = false,
  className
}) => {
  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden aspect-video bg-soft-gray", 
      isActive && "ring-2 ring-turquoise",
      className
    )}>
      {videoSrc ? (
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />
      ) : fallbackImage ? (
        <img
          src={fallbackImage}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex-center text-white">
          <span className="text-2xl font-medium">{name.charAt(0)}</span>
        </div>
      )}
      
      {/* Timer badge */}
      {timer && (
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 rounded-full px-3 py-1 flex items-center gap-2">
          {isRecording && (
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
          )}
          <span className="text-white text-xs">{timer}</span>
        </div>
      )}
      
      {/* Name overlay */}
      <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 rounded-full px-3 py-1">
        <span className="text-white text-sm">{name}</span>
      </div>
    </div>
  );
};

export default VideoTile;
