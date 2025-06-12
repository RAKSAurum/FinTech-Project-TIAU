import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './styles/main.css';
import React, { useEffect, useState } from 'react';
import { usePersonalizationContext } from './context/PersonalizationContext';
import LayoutGrid from './components/Dashboard/LayoutGrid';
import ProfileSwitcher from './components/ProfileSwitcher';
import ErrorBoundary from './components/ErrorBoundary';


export default function App() {
  const { getLayout } = usePersonalizationContext();
  const [layoutConfig, setLayoutConfig] = useState({ 
    layout: [], 
    widgets: [] 
  });

  useEffect(() => {
    const config = getLayout();
    setLayoutConfig(config);
  }, [getLayout]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>FinTech Trading Dash</h1>
        <ProfileSwitcher />
      </header>
      <ErrorBoundary>
        <LayoutGrid {...layoutConfig} />
      </ErrorBoundary>
    </div>
  );
}
