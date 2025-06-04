import React from "react";
import TradingViewWidget from "../TradingViewWidget";
import NewsSentimentWidget from "../NewsSentimentWidget";
import FundamentalsWidget from "../FundamentalsWidget";
import LeaderboardWidget from "../Gamification/Leaderboard";
import VoiceAssistant from "../AI/VoiceAssistant";

// Factory pattern for rendering widgets
export default function WidgetFactory({ type, ...props }) {
  switch (type) {
    case "chart":
      return <TradingViewWidget {...props} />;
    case "news":
      return <NewsSentimentWidget {...props} />;
    case "fundamentals":
      return <FundamentalsWidget {...props} />;
    case "leaderboard":
      return <LeaderboardWidget {...props} />;
    case "voice":
      return <VoiceAssistant {...props} />;
    default:
      return <div>Unknown widget: {type}</div>;
  }
}
