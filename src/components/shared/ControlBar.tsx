
import React from 'react';
import { Mic, MicOff, Camera, Share, More, EndCall } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ControlBarProps {
  onEndCall: () => void;
  className?: string;
}

const ControlBar: React.FC<ControlBarProps> = ({ onEndCall, className }) => {
  const [micActive, setMicActive] = React.useState(true);
  const [cameraActive, setCameraActive] = React.useState(true);
  
  return (
    <div className={cn(
      "glass-card rounded-full py-4 px-6 flex items-center justify-between",
      className
    )}>
      <div className="flex items-center gap-3">
        <button
          className={cn(
            "w-10 h-10 rounded-full flex-center transition-all",
            micActive ? "bg-turquoise" : "bg-destructive"
          )}
          onClick={() => setMicActive(!micActive)}
          aria-label={micActive ? "Mute microphone" : "Unmute microphone"}
        >
          {micActive ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
        
        <button 
          className={cn(
            "w-10 h-10 rounded-full flex-center transition-all",
            cameraActive ? "bg-turquoise" : "bg-destructive"
          )}
          onClick={() => setCameraActive(!cameraActive)}
          aria-label={cameraActive ? "Turn off camera" : "Turn on camera"}
        >
          <Camera size={20} />
        </button>
        
        <button 
          className="w-10 h-10 rounded-full flex-center bg-soft-gray hover:bg-opacity-80 transition-all"
          aria-label="Share screen"
        >
          <Share size={20} />
        </button>
        
        <button 
          className="w-10 h-10 rounded-full flex-center bg-soft-gray hover:bg-opacity-80 transition-all"
          aria-label="More options"
        >
          <More size={20} />
        </button>
      </div>
      
      <button 
        className="bg-destructive text-white rounded-full py-2 px-6 hover:bg-opacity-90 transition-all"
        onClick={onEndCall}
        aria-label="End call"
      >
        <span className="flex items-center gap-2">
          <EndCall size={18} />
          End Call
        </span>
      </button>
    </div>
  );
};

export default ControlBar;
