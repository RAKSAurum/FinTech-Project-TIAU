import React from 'react';

export default function ChallengesWidget() {
  const challenges = [
    { 
      title: 'Weekly Profit Challenge', 
      target: '5% Return', 
      progress: 60,
      status: 'active'
    },
    { 
      title: 'Risk Management Master', 
      target: 'Max 2% Drawdown', 
      progress: 85,
      status: 'active'
    }
  ];

  return (
    <div className="widget challenges-widget">
      <h3>Active Challenges</h3>
      <div className="challenges-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-item">
            <div className="challenge-header">
              <h4>{challenge.title}</h4>
              <span className={`status ${challenge.status}`}>
                {challenge.status}
              </span>
            </div>
            <div className="challenge-target">
              Target: {challenge.target}
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar"
                style={{ width: `${challenge.progress}%` }}
              />
            </div>
            <div className="progress-text">
              {challenge.progress}% Complete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
