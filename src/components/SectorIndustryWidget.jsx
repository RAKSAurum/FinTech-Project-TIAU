import { useState, useEffect } from 'react';

export default function SectorIndustryWidget() {
  const [expandedSector, setExpandedSector] = useState(null);
  const [sectors] = useState([
    { 
      name: 'Banking', 
      performance: '+2.4%', 
      topStocks: ['HDFCBANK', 'ICICIBANK'],
      news: 'RBI Policy Announcement Expected'
    },
  ]);

  return (
    <div className="widget sector-industry">
      <h3>Sectors & Industries</h3>
      <div className="sector-list">
        {sectors.map((sector) => (
          <div 
            key={sector.name} 
            className="sector-item"
            onClick={() => setExpandedSector(expandedSector === sector.name ? null : sector.name)}
          >
            <div className="sector-header">
              <span>{sector.name}</span>
              <span className="performance">{sector.performance}</span>
            </div>
            
            {expandedSector === sector.name && (
              <div className="sector-details">
                <div className="subsection">
                  <h4>Top Stocks</h4>
                  <ul>
                    {sector.topStocks.map(stock => (
                      <li key={stock}>{stock}</li>
                    ))}
                  </ul>
                </div>
                <div className="subsection">
                  <h4>Latest News</h4>
                  <p>{sector.news}</p>
                </div>
                <iframe
                  src="https://s3.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22NSE%3ANIFTY_BANK%22%5D%5D%2C%22chartOnly%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22colorTheme%22%3A%22dark%22%7D"
                  className="sector-chart"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
