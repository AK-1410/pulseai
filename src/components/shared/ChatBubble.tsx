
import React from 'react';
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  sender: string;
  timestamp?: string;
  isAI?: boolean;
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  timestamp,
  isAI = false,
  className
}) => {
  return (
    <div className={cn(
      "mb-4 px-4 py-3 rounded-xl max-w-full",
      isAI ? "bg-soft-gray" : "bg-turquoise bg-opacity-20",
      className
    )}>
      {timestamp && (
        <div className="text-right text-xs text-gray-400 mb-1">{timestamp}</div>
      )}
      <p className="text-white text-sm">{message}</p>
    </div>
  );
};

export default ChatBubble;
