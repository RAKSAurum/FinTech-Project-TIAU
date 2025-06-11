# FinTech Trading Dashboard - TIAU

A modern, AI-driven trading dashboard with personalized UI that adapts to different trader profiles (day traders, swing traders, long-term investors).

## 🚀 Live Demo

Visit the live application: [https://SpeedyOni.github.io/FinTech-Project-TIAU](https://SpeedyOni.github.io/FinTech-Project-TIAU)

## 📋 Features

- **Hyper-Personalization**: AI-driven UI that adapts to user behavior
- **Multiple Trader Profiles**: Day Trader, Swing Trader, Long-Term Investor
- **Voice Assistant**: AI-powered voice commands for navigation and analysis
- **Real-time Widgets**: 
  - TradingView Charts
  - Order Book
  - News & Sentiment Analysis
  - Portfolio Tracker
  - Risk Management
  - Gamification (Leaderboards & Challenges)
- **Drag-and-Drop Dashboard**: Customizable widget layout
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technology Stack

- React 18.2.0
- React Grid Layout (for drag-and-drop)
- TradingView Widgets
- Web Speech API (for voice commands)
- CSS3 with custom animations

## 🏃‍♂️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/SpeedyOni/FinTech-Project-TIAU.git
   cd FinTech-Project-TIAU
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment to GitHub Pages

1. Ensure your `package.json` has the correct homepage:
   ```json
   "homepage": "https://SpeedyOni.github.io/FinTech-Project-TIAU"
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

3. The app will be automatically deployed to the `gh-pages` branch

4. Configure GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Save

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:
```
REACT_APP_DATA_ENDPOINT=https://api.marketdata.in
```

Note: Environment variables don't work in GitHub Pages deployment. Use build-time configuration instead.

## 📁 Project Structure

```
src/
├── components/         # React components
├── config/            # Configuration files
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── styles/            # CSS styles
├── utils/             # Utility functions
├── App.jsx            # Main App component
└── index.js           # Entry point
```

## 👥 Team

- Tej - mr.nuclearice@gmail.com
- Aanan - aananchopra17@gmail.com
- Ishaan - ishaanksaikia@gmail.com
- Uddhav - uddhavbhatia1@gmail.com

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of a FinTech educational initiative.

## 🔮 Future Enhancements

- Integration with real-time market data APIs
- Advanced AI predictions and behavioral analysis
- Social trading features
- Multi-asset support (crypto, global stocks)
- Strategy marketplace
- Backtesting sandboxs