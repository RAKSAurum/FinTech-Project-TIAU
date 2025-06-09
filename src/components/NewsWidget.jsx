import React, { useState, useEffect } from 'react';

export default function NewsWidget({ symbol = "NSE:RELIANCE" }) {
  const [news, setNews] = useState([]);
  const symbolName = symbol.split(':')[1] || 'RELIANCE';

  useEffect(() => {
    // Simulate news based on symbol
    const mockNews = [
      {
        time: '09:30 AM',
        headline: `${symbolName} Q3 results show strong growth in revenue`,
        sentiment: 'positive'
      },
      {
        time: '08:45 AM', 
        headline: `Institutional buying increases in ${symbolName}`,
        sentiment: 'positive'
      },
      {
        time: '07:20 AM',
        headline: `Market analysts upgrade ${symbolName} to BUY`,
        sentiment: 'positive'
      }
    ];
    setNews(mockNews);
  }, [symbol, symbolName]);

  return (
    <div className="widget news-widget">
      <div className="widget-header">
        <h3>📰 {symbolName} News</h3>
        <span className="live-indicator">Live</span>
      </div>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className={`news-item ${item.sentiment}`}>
            <span className="news-time">{item.time}</span>
            <span className="news-headline">{item.headline}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
