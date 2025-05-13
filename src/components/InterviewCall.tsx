
import React, { useState } from 'react';
import VideoTile from './shared/VideoTile';
import NovaAvatar from './shared/NovaAvatar';
import ControlBar from './shared/ControlBar';
import ChatBubble from './shared/ChatBubble';
import Card from './shared/Card';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Share, Captions } from 'lucide-react';

interface InterviewCallProps {
  onEndCall: () => void;
}

const InterviewCall: React.FC<InterviewCallProps> = ({ onEndCall }) => {
  const [elapsedTime, setElapsedTime] = useState('24:01');
  const [showCaptions, setShowCaptions] = useState(true);
  const [fullscreenLeft, setFullscreenLeft] = useState(false);
  const [fullscreenRight, setFullscreenRight] = useState(false);
  
  // This would come from the onboarding form
  const participantName = "Nate Adams";
  
  // Mock transcript data - in a real app, this would be streamed from an API
  const messages = [
    {
      id: 1,
      message: "Hey, Nate. Hope you've had a pleasant day so far",
      timestamp: "11:01 AM"
    },
    {
      id: 2,
      message: "Awesome! Let's dive right in. I would first like to get your thoughts around DoorDash and your top 3 reasons for using the app",
      timestamp: "11:03 AM"
    },
    {
      id: 3,
      message: "Excellent, that was super helpful! Next, I would like to understand more around your lifestyle and meal decisions. How often do you dine out and what sort of cuisines do you prefer?",
      timestamp: "11:07 AM"
    }
  ];

  const toggleFullscreenLeft = () => {
    setFullscreenLeft(!fullscreenLeft);
    setFullscreenRight(false);
  };

  const toggleFullscreenRight = () => {
    setFullscreenRight(!fullscreenRight);
    setFullscreenLeft(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Card className="rounded-none rounded-b-xl mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-1 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#2563EB" />
                <path d="M6 12H18M6 8H18M6 16H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold">[Product Discovery] DoorDash &lt;&gt; {participantName}</h2>
              <p className="text-xs text-gray-400">June 15th, 2025 | 11:00 AM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 flex items-center gap-2">
              <Share size={14} />
              <span className="text-xs font-medium">cem-jnmt-hsu</span>
            </div>
            
            <div className="flex items-center gap-2">
              <NovaAvatar size="sm" />
              <div className="text-left">
                <p className="text-sm font-medium">Nova</p>
                <p className="text-xs text-gray-400">AI Moderator</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Main Content with 12-column grid */}
      <div className="container grid grid-cols-12 gap-6 mb-6">
        {/* Left: Interviewee Video (65% width) */}
        <div className={`${fullscreenLeft ? 'col-span-12' : 'col-span-8'} ${fullscreenRight ? 'hidden' : ''}`}>
          <VideoTile
            name={participantName}
            timer={elapsedTime}
            isRecording={true}
            fallbackImage="/placeholder.svg"
            onFullscreenToggle={toggleFullscreenLeft}
            isFullscreen={fullscreenLeft}
          />
        </div>
        
        {/* Right: Nova Video + Captions (35% width) */}
        <div className={`${fullscreenRight ? 'col-span-12' : 'col-span-4'} ${fullscreenLeft ? 'hidden' : ''} relative`}>
          {/* Nova Video */}
          <VideoTile
            name="Nova"
            isActive={true}
            onFullscreenToggle={toggleFullscreenRight}
            isFullscreen={fullscreenRight}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <NovaAvatar size="lg" isActive={true} />
            </div>
          </VideoTile>
          
          {/* Captions Panel */}
          {!fullscreenLeft && !fullscreenRight && (
            <div className="absolute top-0 right-0 bottom-0 w-80 px-3 py-6">
              <Card className="h-full flex flex-col bg-black bg-opacity-75 backdrop-blur-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <NovaAvatar size="sm" />
                    <span className="font-medium">Captions</span>
                  </div>
                  <button
                    className={`p-1 rounded-full ${showCaptions ? 'bg-turquoise bg-opacity-20' : 'bg-soft-gray'}`}
                    onClick={() => setShowCaptions(!showCaptions)}
                    aria-label={showCaptions ? "Hide captions" : "Show captions"}
                  >
                    <Captions size={18} className="text-white" />
                  </button>
                </div>
                
                <ScrollArea className="flex-1">
                  {showCaptions && messages.map(msg => (
                    <ChatBubble
                      key={msg.id}
                      message={msg.message}
                      sender="Nova"
                      timestamp={msg.timestamp}
                      isAI={true}
                    />
                  ))}
                </ScrollArea>
              </Card>
            </div>
          )}
        </div>
      </div>
      
      {/* Control Bar */}
      <div className="container mb-6">
        <ControlBar onEndCall={onEndCall} />
      </div>
    </div>
  );
};

export default InterviewCall;
