
import React, { useState } from 'react';
import OnboardingForm from '../components/OnboardingForm';
import InterviewCall from '../components/InterviewCall';
import InsightHub from '../components/InsightHub';

enum AppStep {
  ONBOARDING = 'onboarding',
  INTERVIEW = 'interview',
  INSIGHTS = 'insights'
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.ONBOARDING);
  
  // Background pattern for the design
  const BackgroundPattern = () => (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-turquoise opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-turquoise opacity-5 blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(rgba(20, 241, 212, 0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>
    </div>
  );
  
  const handleCompleteOnboarding = () => {
    setCurrentStep(AppStep.INTERVIEW);
  };
  
  const handleEndCall = () => {
    setCurrentStep(AppStep.INSIGHTS);
  };
  
  const handleBackToStart = () => {
    setCurrentStep(AppStep.ONBOARDING);
  };
  
  return (
    <div className="min-h-screen w-full bg-jet">
      <BackgroundPattern />
      
      {/* Content based on current step */}
      <div className="animate-fade-in">
        {currentStep === AppStep.ONBOARDING && (
          <OnboardingForm onComplete={handleCompleteOnboarding} />
        )}
        
        {currentStep === AppStep.INTERVIEW && (
          <InterviewCall onEndCall={handleEndCall} />
        )}
        
        {currentStep === AppStep.INSIGHTS && (
          <InsightHub onBackToStart={handleBackToStart} />
        )}
      </div>
    </div>
  );
};

export default Index;
