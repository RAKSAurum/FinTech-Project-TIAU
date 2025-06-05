import React, { useEffect, useRef, useState } from 'react';

export default function TradingViewWidget({ symbol = "NSE:RELIANCE", onSymbolChange }) {
  const containerRef = useRef(null);
  const [currentSymbol, setCurrentSymbol] = useState(symbol);

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = '';
    
    const loadScript = () => {
      return new Promise((resolve) => {
        if (window.TradingView) return resolve();
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    loadScript().then(() => {
      if (containerRef.current && window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: currentSymbol,
          interval: "D",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1E293B",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          hide_side_toolbar: false,
          studies: ["MACD@tv-basicstudies"],
          withdateranges: true,
          autosize: true,
          onSymbolChanged: (symbolInfo) => {
            setCurrentSymbol(symbolInfo.name);
            if (onSymbolChange) onSymbolChange(symbolInfo.name);
          }
        });
      }
    });
  }, [currentSymbol]);

  const handleSymbolChange = (newSymbol) => {
    setCurrentSymbol(newSymbol);
    if (onSymbolChange) onSymbolChange(newSymbol);
  };

  return (
    <div className="widget trading-chart">
      <div className="widget-header">
        <h3>{currentSymbol} Live Chart</h3>
        <div className="symbol-selector">
          <select 
            value={currentSymbol} 
            onChange={(e) => handleSymbolChange(e.target.value)}
            className="symbol-dropdown"
          >
            <option value="NSE:RELIANCE">Reliance Industries</option>
            <option value="NSE:TCS">TCS</option>
            <option value="NSE:HDFCBANK">HDFC Bank</option>
            <option value="NSE:INFY">Infosys</option>
            <option value="NSE:ICICIBANK">ICICI Bank</option>
            <option value="NSE:LT">L&T</option>
            <option value="NSE:TITAN">Titan</option>
          </select>
        </div>
      </div>
      <div 
        ref={containerRef}
        id={`tradingview_${Math.random().toString(36).substr(2, 9)}`}
        style={{ width: '100%', height: 'calc(100% - 60px)', minHeight: '400px' }}
      />
    </div>
  );
}
