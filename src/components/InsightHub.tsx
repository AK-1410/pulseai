
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { Play, Download, Copy, Share } from 'lucide-react';

interface InsightHubProps {
  onBackToStart: () => void;
}

const InsightHub: React.FC<InsightHubProps> = ({ onBackToStart }) => {
  return (
    <div className="min-h-screen py-10">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Interview Insights</h2>
          <div className="bg-soft-gray rounded-full px-4 py-1">
            <span className="text-sm">Internal - Doordash</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left Column: Call Summary */}
          <div>
            <Card className="h-full">
              <h3 className="text-xl font-bold mb-4">Call Summary</h3>
              
              <div className="h-64 overflow-y-auto text-gray-300 space-y-4">
                <p>The call with Nate Adams focused on his experience with the DoorDash application and his food ordering habits. Here are the key insights:</p>
                
                <p><strong>Top 3 reasons for using DoorDash:</strong></p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Convenience - ability to order food without leaving home</li>
                  <li>Variety of restaurant options in one place</li>
                  <li>Delivery tracking system that provides real-time updates</li>
                </ol>
                
                <p><strong>Pain points:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Delivery fees sometimes feel too high when ordering from certain restaurants</li>
                  <li>Occasional issues with order accuracy when restaurants are busy</li>
                  <li>Wish there were more filter options for dietary restrictions</li>
                </ul>
                
                <p><strong>Feature requests:</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Better bundling options for multiple restaurant orders</li>
                  <li>More detailed ingredient listings for allergy concerns</li>
                  <li>Loyalty program that works across multiple restaurants</li>
                </ul>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download size={16} />
                  Download PDF
                </Button>
                
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Copy size={16} />
                  Copy Highlights
                </Button>
                
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share size={16} />
                  Share to Slack
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Right Column: Audio Player & Chat */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold mb-4">Call Recording</h3>
              
              <div className="bg-black rounded-xl p-6 flex items-center justify-between">
                <div className="space-y-3">
                  <div className="h-10">
                    <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,20 L5,15 L10,25 L15,10 L20,30 L25,5 L30,35 L35,15 L40,20 L45,10 L50,25 L55,5 L60,30 L65,20 L70,15 L75,25 L80,10 L85,30 L90,15 L95,25 L100,10 L105,30 L110,20 L115,15 L120,25 L125,5 L130,35 L135,20 L140,15 L145,25 L150,10 L155,30 L160,15 L165,25 L170,20 L175,10 L180,30 L185,15 L190,25 L195,5 L200,20" stroke="#FF6B6B" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xl font-bold text-destructive">15:06</span>
                  <button className="bg-white rounded-full w-12 h-12 flex-center">
                    <Play size={24} className="text-black ml-1" />
                  </button>
                </div>
              </div>
            </Card>
            
            {/* Chat with Nova */}
            <Card>
              <div className="min-h-[300px] flex flex-col">
                <h3 className="text-xl font-bold mb-4">Chat with Nova</h3>
                
                <div className="flex-1 bg-soft-gray bg-opacity-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <NovaAvatar size="sm" />
                    <div>
                      <p className="font-medium">Nova</p>
                      <p className="text-xs text-gray-400">AI Research Assistant</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm">
                    Hello! I've analyzed the interview with Nate Adams. Ask me anything about the conversation, and I can provide insights or pull specific quotes from the transcript.
                  </p>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full rounded-xl bg-soft-gray border-muted p-4 pr-12" 
                    placeholder="Ask me anything about this interview..." 
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-turquoise">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <Button onClick={onBackToStart}>Start New Interview</Button>
        </div>
      </div>
    </div>
  );
};

// Small helper component for NovaAvatar inside InsightHub
const NovaAvatar = ({ size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12"
  };
  
  return (
    <div className={`${sizes[size]} rounded-full bg-yellow-400 flex items-center justify-center`}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-purple-900"></div>
          <div className="w-2 h-2 rounded-full bg-purple-900"></div>
        </div>
      </div>
    </div>
  );
};

export default InsightHub;
