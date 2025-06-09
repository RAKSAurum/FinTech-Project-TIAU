import React from 'react';

export default function PortfolioWidget() {
  const holdings = [
    { symbol: 'RELIANCE', qty: 50, avg: 2450, current: 2580, pnl: '+5.3%' },
    { symbol: 'TCS', qty: 25, avg: 3200, current: 3840, pnl: '+20.0%' },
    { symbol: 'HDFCBANK', qty: 100, avg: 1520, current: 1675, pnl: '+10.2%' }
  ];

  return (
    <div className="widget portfolio-widget">
      <div className="widget-header">
        <h3>💼 Portfolio</h3>
        <span className="total-pnl">+₹45,230 (12.5%)</span>
      </div>
      <div className="holdings-list">
        {holdings.map((holding, index) => (
          <div key={index} className="holding-item">
            <div className="symbol">{holding.symbol}</div>
            <div className="qty">{holding.qty}</div>
            <div className="avg">₹{holding.avg}</div>
            <div className={`pnl ${holding.pnl.startsWith('+') ? 'positive' : 'negative'}`}>
              {holding.pnl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
