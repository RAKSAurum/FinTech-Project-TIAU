import TradingViewWidget from '../TradingViewWidget';
import SimpleOrderBook from '../SimpleOrderBook';
import LeaderboardWidget from '../Gamification/Leaderboard';
import ChallengesWidget from '../Gamification/Challenges';
import VoiceAssistant from '../AI/VoiceAssistant';

export default function WidgetFactory({ type }) {
  switch(type) {
    case 'chart': return <TradingViewWidget />;
    case 'orderbook': return <SimpleOrderBook />;
    case 'leaderboard': return <LeaderboardWidget />;
    case 'challenges': return <ChallengesWidget />;
    case 'voice': return <VoiceAssistant />;
    case 'fundamentals':
      return (
        <div className="widget fundamentals-widget">
          <h3>Fundamentals</h3>
          <div className="fundamentals-data">
            <div className="metric">
              <span className="label">P/E Ratio:</span>
              <span className="value">24.5</span>
            </div>
            <div className="metric">
              <span className="label">Market Cap:</span>
              <span className="value">₹15.2L Cr</span>
            </div>
            <div className="metric">
              <span className="label">52W High:</span>
              <span className="value">₹3,580</span>
            </div>
            <div className="metric">
              <span className="label">52W Low:</span>
              <span className="value">₹3,100</span>
            </div>
          </div>
        </div>
      );
    case 'news':
      return (
        <div className="widget news-widget">
          <h3>Market News</h3>
          <div className="news-items">
            <div className="news-item">
              <span className="news-time">10:30 AM</span>
              <span className="news-text">NIFTY shows strong momentum...</span>
            </div>
            <div className="news-item">
              <span className="news-time">09:45 AM</span>
              <span className="news-text">Banking sector outperforms...</span>
            </div>
          </div>
        </div>
      );
    default: 
      return (
        <div className="widget unknown-widget">
          <h3>Unknown Widget</h3>
          <p>Widget type "{type}" is not recognized</p>
        </div>
      );
  }
}
