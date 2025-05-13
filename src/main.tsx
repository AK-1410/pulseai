
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add global styles for voice visualization
const style = document.createElement('style');
style.textContent = `
  @keyframes pulseHeight {
    0%, 100% {
      transform: scaleY(0.3);
    }
    50% {
      transform: scaleY(1);
    }
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
