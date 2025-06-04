import React from "react";

export default function FundamentalsWidget({ symbol = "NSE:TITAN" }) {
  // Placeholder: Replace with real fundamentals API call
  return (
    <div className="widget fundamentals">
      <h3>Fundamentals: {symbol}</h3>
      <ul>
        <li>P/E Ratio: 72.4</li>
        <li>Market Cap: ₹2.1T</li>
        <li>Dividend Yield: 0.5%</li>
        <li>Sector: Consumer Goods</li>
      </ul>
    </div>
  );
}
