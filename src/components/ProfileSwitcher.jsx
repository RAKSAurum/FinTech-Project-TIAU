import React from 'react';
import { usePersonalizationContext } from '../context/PersonalizationContext';

export default function ProfileSwitcher() {
  const { userProfile, updateProfile } = usePersonalizationContext();

  const profiles = [
    { key: 'dayTrader', label: '⚡ Day Trader' },
    { key: 'swingTrader', label: '📈 Swing Trader' },
    { key: 'investor', label: '💎 Long-Term Investor' }
  ];

  return (
    <div className="profile-switcher">
      {profiles.map(profile => (
        <button
          key={profile.key}
          className={`profile-btn ${userProfile.type === profile.key ? 'active' : ''}`}
          onClick={() => updateProfile({ type: profile.key })}
        >
          {profile.label}
        </button>
      ))}
    </div>
  );
}
