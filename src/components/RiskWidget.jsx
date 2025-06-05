import React from 'react';

export default function RiskWidget() {
  return (
    <div className="widget risk-widget">
      <div className="widget-header">
        <h3>⚠️ Risk Management</h3>
      </div>
      <div className="risk-metrics">
        <div className="metric">
          <span className="label">Value at Risk (1D):</span>
          <span className="value">₹8,450</span>
        </div>
        <div className="metric">
          <span className="label">Portfolio Beta:</span>
          <span className="value">1.24</span>
        </div>
        <div className="metric">
          <span className="label">Max Drawdown:</span>
          <span className="value">-5.2%</span>
        </div>
        <div className="metric">
          <span className="label">Sharpe Ratio:</span>
          <span className="value">1.45</span>
        </div>
      </div>
    </div>
  );
}
