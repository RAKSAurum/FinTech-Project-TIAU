import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersonalizationProvider } from './context/PersonalizationContext';
import App from './App';
import './styles/main.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonalizationProvider>
      <App />
    </PersonalizationProvider>
  </React.StrictMode>
);
