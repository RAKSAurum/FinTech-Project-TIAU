import React, { useState } from "react";
import LayoutGrid from "./components/Dashboard/LayoutGrid";
import { traderProfiles } from "./config/trader-profiles";
import "./styles/main.css";


function App() {
  // For demo, let user pick profile
  const [profile, setProfile] = useState("dayTrader");
  const [layout, setLayout] = useState(traderProfiles[profile]);

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
    setLayout(traderProfiles[e.target.value]);
  };

  const handleLayoutChange = (newLayout) => {
    // Optionally persist layout to localStorage or backend
  };

  return (
    <div>
      <header>
        <h1>FinTech Personalized Trading Dashboard</h1>
        <select value={profile} onChange={handleProfileChange}>
          <option value="dayTrader">Day Trader</option>
          <option value="investor">Investor</option>
        </select>
      </header>
      <LayoutGrid layout={layout} widgets={layout} onLayoutChange={handleLayoutChange} />
    </div>
  );
}

export default App;
