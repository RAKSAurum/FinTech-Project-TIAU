import React from 'react';
import { usePersonalizationContext } from '../context/PersonalizationContext';

export default function ProfileSwitcher() {
  const { userProfile, updateProfile } = usePersonalizationContext();

  return (
    <div className="profile-switcher">
      <button
        className={`profile-btn ${userProfile.type === 'dayTrader' ? 'active' : ''}`}
        onClick={() => updateProfile({ type: 'dayTrader' })}
      >
        Day Trader
      </button>
      <button
        className={`profile-btn ${userProfile.type === 'investor' ? 'active' : ''}`}
        onClick={() => updateProfile({ type: 'investor' })}
      >
        Long-Term Investor
      </button>
    </div>
  );
}
