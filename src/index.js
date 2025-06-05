import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './styles/main.css'; // Your custom styles
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersonalizationProvider } from './context/PersonalizationContext';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <PersonalizationProvider>
    <App />
  </PersonalizationProvider>
);