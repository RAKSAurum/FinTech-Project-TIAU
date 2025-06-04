import React, { useState, useEffect } from 'react';
import LayoutGrid from './components/Dashboard/LayoutGrid';
import ProfileSwitcher from './components/ProfileSwitcher';
import { usePersonalizationContext } from './context/PersonalizationContext';
import './styles/main.css';

export default function App() {
  const { userProfile, getLayout } = usePersonalizationContext();
  const [layout, setLayout] = useState([]);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const { layout: newLayout, widgets: newWidgets } = getLayout();
    setLayout(newLayout);
    setWidgets(newWidgets);
  }, [userProfile, getLayout]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>FinTech Trading Dashboard</h1>
        <ProfileSwitcher />
      </header>
      <LayoutGrid layout={layout} widgets={widgets} />
    </div>
  );
}
