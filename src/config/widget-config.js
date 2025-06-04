// src/config/widget-config.js
export const WIDGETS = [
  {
    type: "chart",
    displayName: "TradingView Chart",
    defaultProps: { symbol: "NSE:TITAN" }
  },
  {
    type: "news",
    displayName: "News & Sentiment",
    defaultProps: { symbol: "NSE:TITAN" }
  },
  {
    type: "fundamentals",
    displayName: "Fundamentals",
    defaultProps: { symbol: "NSE:TITAN" }
  },
  {
    type: "leaderboard",
    displayName: "Leaderboard",
    defaultProps: {}
  },
  {
    type: "challenges",
    displayName: "Challenges",
    defaultProps: {}
  },
  {
    type: "voice",
    displayName: "AI Voice Assistant",
    defaultProps: {}
  }
];
