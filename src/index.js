import React from 'react';
import { createRoot } from 'react-dom/client';
import { PersonalizationProvider } from './context/PersonalizationContext';
import App from './App';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './styles/main.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PersonalizationProvider>
      <App />
    </PersonalizationProvider>
  </React.StrictMode>
);

