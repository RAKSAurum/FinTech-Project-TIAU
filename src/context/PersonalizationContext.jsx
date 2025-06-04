import React, { createContext, useContext, useState } from 'react';
import { traderProfiles } from '../config/trader-profiles';

const PersonalizationContext = createContext({
  userProfile: { type: 'dayTrader' },
  updateProfile: () => {},
  getLayout: () => {}
});

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

export const usePersonalizationContext = () => useContext(PersonalizationContext);
