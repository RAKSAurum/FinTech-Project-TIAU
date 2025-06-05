// src/context/PersonalizationContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { traderProfiles } from '../config/trader-profiles';

const PersonalizationContext = createContext();

export function PersonalizationProvider({ children }) {
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('traderProfile');
    return saved ? JSON.parse(saved) : { type: 'dayTrader' };
  });

  const updateProfile = (newProfile) => {
    setUserProfile(newProfile);
    localStorage.setItem('traderProfile', JSON.stringify(newProfile));
  };

  const getLayout = () => traderProfiles[userProfile.type] || traderProfiles.dayTrader;

  return (
    <PersonalizationContext.Provider value={{ userProfile, updateProfile, getLayout }}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export const usePersonalizationContext = () => {
  const context = useContext(PersonalizationContext);
  if (!context) {
    throw new Error('usePersonalizationContext must be used within a PersonalizationProvider');
  }
  return context;
};
