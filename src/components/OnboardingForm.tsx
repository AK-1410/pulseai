
import React, { useState } from 'react';
import Card from './shared/Card';
import TextField, { SelectField, TextArea } from './shared/TextField';
import Button from './shared/Button';
import Toggle from './shared/Toggle';
import Logo from './Logo';

interface FormData {
  name: string;
  workEmail: string;
  phoneNumber: string;
  language: string;
  callType: string;
  modality: string;
  problemStatement: string;
  goal: string;
}

interface OnboardingFormProps {
  onComplete: () => void;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<0 | 1>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    workEmail: '',
    phoneNumber: '',
    language: '',
    callType: '',
    modality: '',
    problemStatement: '',
    goal: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear error when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };
  
  // Added separate handler for textarea changes
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field: keyof FormData) => {
    handleChange(field, e.target.value);
  };
  
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    if (step === 0) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
      
      if (!formData.workEmail.trim()) {
        newErrors.workEmail = 'Work email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
        newErrors.workEmail = 'Please enter a valid email';
        isValid = false;
      }
      
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone number is required';
        isValid = false;
      }
      
      if (!formData.language.trim()) {
        newErrors.language = 'Language is required';
        isValid = false;
      }
    }
    
    if (step === 1) {
      if (!formData.callType) {
        newErrors.callType = 'Please select call type';
        isValid = false;
      }
      
      if (!formData.modality) {
        newErrors.modality = 'Please select modality';
        isValid = false;
      }
      
      if (!formData.problemStatement.trim()) {
        newErrors.problemStatement = 'Problem statement is required';
        isValid = false;
      }
      
      if (!formData.goal.trim()) {
        newErrors.goal = 'Goal is required';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleNext = () => {
    if (validateStep(0)) {
      setCurrentStep(1);
    }
  };
  
  const handleSubmit = () => {
    if (validateStep(1)) {
      console.log('Form submitted:', formData);
      onComplete();
    }
  };
  
  const callTypeOptions = [
    { value: 'rca', label: 'RCA 2-3 min' },
    { value: 'feedback', label: 'Product Feedback 5-7 min' },
    { value: 'discovery', label: 'Discovery 12-15 min' }
  ];
  
  const modalityOptions = [
    { value: 'voice', label: 'Voice' },
    { value: 'video', label: 'Video' }
  ];
  
  const isStepOneValid = formData.name && formData.workEmail && formData.phoneNumber && formData.language;
  const isStepTwoValid = formData.callType && formData.modality && formData.problemStatement && formData.goal;
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 py-12">
        <div className="col-span-1 md:col-span-3">
          <Card>
            <div className="space-y-6">
              {/* Step 1: Basic Information */}
              <div className={`${currentStep === 0 ? 'block' : 'hidden'} transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-6">Interview Setup</h3>
                
                <TextField 
                  label="Name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  error={errors.name}
                />
                
                <TextField 
                  label="Work Email" 
                  type="email"
                  placeholder="your.name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => handleChange('workEmail', e.target.value)}
                  error={errors.workEmail}
                />
                
                <TextField 
                  label="Phone Number" 
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  error={errors.phoneNumber}
                />
                
                <TextField 
                  label="Language" 
                  placeholder="For the interview"
                  value={formData.language}
                  onChange={(e) => handleChange('language', e.target.value)}
                  error={errors.language}
                />
              </div>
              
              {/* Step 2: Interview Details */}
              <div className={`${currentStep === 1 ? 'block' : 'hidden'} transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-6">Interview Details</h3>
                
                <SelectField 
                  label="Type of Call" 
                  options={callTypeOptions}
                  value={formData.callType}
                  onChange={(e) => handleChange('callType', e.target.value)}
                  error={errors.callType}
                />
                
                <SelectField 
                  label="Modality" 
                  options={modalityOptions}
                  value={formData.modality}
                  onChange={(e) => handleChange('modality', e.target.value)}
                  error={errors.modality}
                />
                
                <div className="mb-4">
                  <label className="text-white font-medium mb-2 block">Objective</label>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Problem Statement</p>
                      <TextArea
                        label=""
                        rows={2}
                        placeholder="The reason for you to conduct this interview"
                        value={formData.problemStatement}
                        onChange={(e) => handleTextAreaChange(e, 'problemStatement')}
                        error={errors.problemStatement}
                      />
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Goal</p>
                      <TextArea
                        label=""
                        rows={2}
                        placeholder="What is that you are trying to accomplish from this interview"
                        value={formData.goal}
                        onChange={(e) => handleTextAreaChange(e, 'goal')}
                        error={errors.goal}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Toggle */}
              <Toggle 
                value={currentStep} 
                onChange={(value) => setCurrentStep(value as 0 | 1)}
                options={2}
              />
            </div>
          </Card>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <Card className="h-full flex flex-col justify-between">
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">AI-Powered User Research</h3>
              <p className="text-gray-300">Elevate your user interviews with our cutting-edge AI assistant Nova.</p>
              
              <div className="mt-8">
                {currentStep === 0 ? (
                  <Button 
                    onClick={handleNext}
                    disabled={!isStepOneValid}
                    className="w-full"
                    size="lg"
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={!isStepTwoValid}
                    className="w-full"
                    size="lg"
                  >
                    Start Call
                  </Button>
                )}
              </div>
            </div>
            
            <div className="text-center text-xs text-gray-400 mt-8">
              <p>PulseAI will record this session to provide insights.</p>
              <p>By continuing, you consent to our privacy policy.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
