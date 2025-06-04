import React from "react";

export default function Challenges() {
  // Placeholder challenges; replace with API call or context later
  const challenges = [
    {
      title: "Daily PnL Streak",
      description: "Maintain a positive PnL for 5 consecutive days.",
      progress: "3/5 days"
    },
    {
      title: "Low-Risk Portfolio",
      description: "Build a portfolio with Sharpe ratio > 2 this month.",
      progress: "In Progress"
    }
  ];

  return (
    <div className="widget challenges">
      <h3>Skill Challenges</h3>
      <ul>
        {challenges.map((c, i) => (
          <li key={i}>
            <strong>{c.title}</strong>: {c.description}
            <div><em>{c.progress}</em></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
