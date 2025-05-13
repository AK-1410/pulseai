
import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";
import { Maximize, Minimize } from 'lucide-react';

interface VideoTileProps {
  videoSrc?: string;
  fallbackImage?: string;
  name: string;
  timer?: string;
  isRecording?: boolean;
  isActive?: boolean;
  className?: string;
  children?: ReactNode;
  onFullscreenToggle?: () => void;
  isFullscreen?: boolean;
}

const VideoTile: React.FC<VideoTileProps> = ({
  videoSrc,
  fallbackImage,
  name,
  timer,
  isRecording = false,
  isActive = false,
  className,
  children,
  onFullscreenToggle,
  isFullscreen = false
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
      ) : fallbackImage && !children ? (
        <img
          src={fallbackImage}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : children ? (
        children
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

      {/* Voice visualization for Nova */}
      {isActive && !timer && (
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 rounded-full px-3 py-1">
          <div className="flex items-center gap-1 h-3">
            {[1, 2, 3, 4].map((bar) => (
              <div 
                key={bar}
                className="w-1 bg-turquoise" 
                style={{ 
                  height: `${Math.random() * 12}px`,
                  transition: 'transform 200ms ease',
                  animation: 'pulseHeight 1s infinite alternate'
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Fullscreen toggle */}
      {onFullscreenToggle && (
        <button 
          onClick={onFullscreenToggle}
          className="absolute top-3 right-3 bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition-all"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
        </button>
      )}
      
      {/* Name overlay */}
      <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 rounded-full px-3 py-1">
        <span className="text-white text-sm">{name}</span>
      </div>
    </div>
  );
};

export default VideoTile;
