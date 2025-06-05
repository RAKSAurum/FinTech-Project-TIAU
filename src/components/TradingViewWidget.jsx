import React, { useEffect, useRef } from 'react';

export default function TradingViewWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.TradingView) {
      new window.TradingView.widget({
        width: "100%",
        height: 500,
        symbol: "NSE:NIFTY50",
        interval: "D",
        timezone: "Asia/Kolkata",
        theme: "dark",
        container_id: containerRef.current?.id,
        // ... other config
      });
    }
  }, []);

  return <div id="tradingview_chart" ref={containerRef} />;
}
