import React from "react";

export default function NewsSentimentWidget({ symbol = "NSE:TITAN" }) {
  // Placeholder: Replace with real API integration
  return (
    <div className="widget news-sentiment">
      <h3>News & Sentiment for {symbol}</h3>
      <ul>
        <li>Economic Times: "Titan Q4 results beat expectations" [Positive]</li>
        <li>MoneyControl: "Titan sees strong demand in jewelry segment" [Neutral]</li>
        <li>Reuters: "Titan shares up 2% on volume spike" [Positive]</li>
      </ul>
    </div>
  );
}
