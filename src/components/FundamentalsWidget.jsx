import React, { useState, useEffect } from 'react';

export default function FundamentalsWidget({ symbol = "NSE:RELIANCE" }) {
  const [fundamentals, setFundamentals] = useState({});
  const symbolName = symbol.split(':')[1] || 'RELIANCE';

  useEffect(() => {
    // Mock fundamentals data based on symbol
    const mockData = {
      'RELIANCE': {
        pe: '24.5', marketCap: '₹15.2L Cr', week52High: '₹3,014', week52Low: '₹2,200',
        dividend: '2.4%', roe: '12.8%', debt: '₹3.2L Cr', revenue: '₹8.7L Cr'
      },
      'TCS': {
        pe: '28.1', marketCap: '₹12.8L Cr', week52High: '₹4,120', week52Low: '₹3,200',
        dividend: '3.1%', roe: '45.2%', debt: '₹12K Cr', revenue: '₹2.1L Cr'
      },
      'HDFCBANK': {
        pe: '18.2', marketCap: '₹11.5L Cr', week52High: '₹1,740', week52Low: '₹1,420',
        dividend: '1.8%', roe: '18.5%', debt: '₹15.2L Cr', revenue: '₹1.8L Cr'
      }
    };
    setFundamentals(mockData[symbolName] || mockData['RELIANCE']);
  }, [symbol, symbolName]);

  return (
    <div className="widget fundamentals-widget">
      <div className="widget-header">
        <h3>📊 {symbolName} Fundamentals</h3>
      </div>
      <div className="fundamentals-grid">
        <div className="metric">
          <span className="label">P/E Ratio:</span>
          <span className="value">{fundamentals.pe}</span>
        </div>
        <div className="metric">
          <span className="label">Market Cap:</span>
          <span className="value">{fundamentals.marketCap}</span>
        </div>
        <div className="metric">
          <span className="label">52W High:</span>
          <span className="value">{fundamentals.week52High}</span>
        </div>
        <div className="metric">
          <span className="label">52W Low:</span>
          <span className="value">{fundamentals.week52Low}</span>
        </div>
        <div className="metric">
          <span className="label">Dividend:</span>
          <span className="value">{fundamentals.dividend}</span>
        </div>
        <div className="metric">
          <span className="label">ROE:</span>
          <span className="value">{fundamentals.roe}</span>
        </div>
      </div>
    </div>
  );
}
