// src/components/ProfileSwitcher.jsx
import { usePersonalizationContext } from '../context/PersonalizationContext';

export default function ProfileSwitcher() {
  const { userProfile, updateProfile } = usePersonalizationContext();

  return (
    <div className="profile-switcher">
      <button 
        onClick={() => updateProfile({ type: 'dayTrader' })}
        className={userProfile.type === 'dayTrader' ? 'active' : ''}
      >
        Day Trader
      </button>
      <button
        onClick={() => updateProfile({ type: 'investor' })}
        className={userProfile.type === 'investor' ? 'active' : ''}
      >
        Long-Term Investor
      </button>
    </div>
  );
}
