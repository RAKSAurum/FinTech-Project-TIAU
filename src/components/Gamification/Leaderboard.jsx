import React from 'react';

export default function LeaderboardWidget() {
  const leaders = [
    { name: 'TradingAce', pnl: '+15.2%', streak: 12 },
    { name: 'MarketWiz', pnl: '+12.8%', streak: 8 },
    { name: 'BullRun2024', pnl: '+10.5%', streak: 15 }
  ];

  return (
    <div className="widget leaderboard-widget">
      <h3>Top Performers</h3>
      <div className="leaderboard-list">
        {leaders.map((trader, index) => (
          <div key={trader.name} className="leaderboard-item">
            <span className="rank">#{index + 1}</span>
            <span className="name">{trader.name}</span>
            <span className="pnl">{trader.pnl}</span>
            <span className="streak">{trader.streak} days</span>
          </div>
        ))}
      </div>
    </div>
  );
}
