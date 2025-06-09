import React from 'react';
import TradingViewWidget from '../TradingViewWidget';
import SimpleOrderBook from '../SimpleOrderBook';
import NewsWidget from '../NewsWidget';
import FundamentalsWidget from '../FundamentalsWidget';
import PortfolioWidget from '../PortfolioWidget';
import RiskWidget from '../RiskWidget';
import LeaderboardWidget from '../Gamification/Leaderboard';
import ChallengesWidget from '../Gamification/Challenges';
import VoiceAssistant from '../AI/VoiceAssistant';

export default function WidgetFactory({ type, symbol, onSymbolChange }) {
  switch(type) {
    case 'chart': 
      return <TradingViewWidget symbol={symbol} onSymbolChange={onSymbolChange} />;
    case 'orderbook': 
      return <SimpleOrderBook symbol={symbol} />;
    case 'news': 
      return <NewsWidget symbol={symbol} />;
    case 'fundamentals': 
      return <FundamentalsWidget symbol={symbol} />;
    case 'portfolio': 
      return <PortfolioWidget />;
    case 'risk': 
      return <RiskWidget />;
    case 'leaderboard': 
      return <LeaderboardWidget />;
    case 'challenges': 
      return <ChallengesWidget />;
    case 'voice': 
      return <VoiceAssistant />;
    case 'sectors': 
      return <div className="widget">🏭 Sectors Widget (Coming Soon)</div>;
    case 'esg': 
      return <div className="widget">🌱 ESG Metrics (Coming Soon)</div>;
    case 'dividends': 
      return <div className="widget">💰 Dividend Tracker (Coming Soon)</div>;
    default: 
      return <div className="widget unknown-widget">Unknown widget type: {type}</div>;
  }
}
