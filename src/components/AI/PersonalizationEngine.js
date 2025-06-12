// src/components/AI/PersonalizationEngine.js
import { useState } from 'react';
import { traderProfiles } from '../../config/trader-profiles';

export const usePersonalization = () => {
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('traderProfile');
    return saved ? JSON.parse(saved) : { type: 'dayTrader' };
  });

  const updateProfile = (newProfile) => {
    setUserProfile(newProfile);
    localStorage.setItem('traderProfile', JSON.stringify(newProfile));
  };

  const getLayout = (behavior) => {
    const profileMap = {
      highFrequency: 'dayTrader',
      longHold: 'investor',
      // Add more mappings as needed
    };
    
    return traderProfiles[profileMap[behavior] || 'dayTrader'];
  };

  return { userProfile, updateProfile, getLayout };
};