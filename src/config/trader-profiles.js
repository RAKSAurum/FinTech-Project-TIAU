export const traderProfiles = {
  dayTrader: {
    layout: {
      lg: [
        // Main trading chart - largest widget for price action analysis
        { i: 'chart', x: 0, y: 0, w: 8, h: 8, minW: 4, maxW: 12, minH: 4, maxH: 12 },
        
        // Order book - critical for day trading (already working in your screenshot)
        { i: 'orderbook', x: 8, y: 0, w: 4, h: 8, minW: 2, maxW: 6, minH: 4, maxH: 10 },
        
        // News & sentiment - market moving information
        { i: 'news', x: 0, y: 8, w: 6, h: 4, minW: 3, maxW: 8, minH: 2, maxH: 6 },
        
        // Leaderboard - gamification for competitive traders
        { i: 'leaderboard', x: 6, y: 8, w: 3, h: 4, minW: 2, maxW: 4, minH: 2, maxH: 6 },
        
        // Challenges - skill-based PnL goals as per your PDF
        { i: 'challenges', x: 9, y: 8, w: 3, h: 4, minW: 2, maxW: 4, minH: 2, maxH: 6 },
        
        // Voice assistant - "Show me undervalued stocks" feature
        { i: 'voice', x: 0, y: 12, w: 6, h: 3, minW: 3, maxW: 8, minH: 2, maxH: 4 },
        
        // Risk management - Value at Risk for day trading
        { i: 'risk', x: 6, y: 12, w: 6, h: 3, minW: 3, maxW: 8, minH: 2, maxH: 4 }
      ],
      md: [
        { i: 'chart', x: 0, y: 0, w: 6, h: 6, minW: 3, maxW: 10, minH: 3, maxH: 8 },
        { i: 'orderbook', x: 6, y: 0, w: 4, h: 6, minW: 2, maxW: 6, minH: 3, maxH: 8 },
        { i: 'news', x: 0, y: 6, w: 5, h: 3, minW: 3, maxW: 7, minH: 2, maxH: 5 },
        { i: 'leaderboard', x: 5, y: 6, w: 3, h: 3, minW: 2, maxW: 4, minH: 2, maxH: 5 },
        { i: 'challenges', x: 8, y: 6, w: 2, h: 3, minW: 2, maxW: 4, minH: 2, maxH: 5 },
        { i: 'voice', x: 0, y: 9, w: 10, h: 2, minW: 3, maxW: 10, minH: 2, maxH: 3 }
      ],
      sm: [
        { i: 'chart', x: 0, y: 0, w: 6, h: 6, minW: 3, maxW: 6, minH: 3, maxH: 8 },
        { i: 'orderbook', x: 0, y: 6, w: 6, h: 4, minW: 3, maxW: 6, minH: 2, maxH: 6 },
        { i: 'news', x: 0, y: 10, w: 6, h: 3, minW: 3, maxW: 6, minH: 2, maxH: 5 },
        { i: 'leaderboard', x: 0, y: 13, w: 3, h: 3, minW: 3, maxW: 6, minH: 2, maxH: 5 },
        { i: 'challenges', x: 3, y: 13, w: 3, h: 3, minW: 3, maxW: 6, minH: 2, maxH: 5 },
        { i: 'voice', x: 0, y: 16, w: 6, h: 2, minW: 3, maxW: 6, minH: 2, maxH: 3 }
      ],
      xs: [
        { i: 'chart', x: 0, y: 0, w: 4, h: 6, minW: 2, maxW: 4, minH: 3, maxH: 8 },
        { i: 'orderbook', x: 0, y: 6, w: 4, h: 4, minW: 2, maxW: 4, minH: 2, maxH: 6 },
        { i: 'news', x: 0, y: 10, w: 4, h: 3, minW: 2, maxW: 4, minH: 2, maxH: 5 },
        { i: 'voice', x: 0, y: 13, w: 4, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 3 }
      ]
    },
    widgets: [
      { i: 'chart', type: 'chart' },
      { i: 'orderbook', type: 'orderbook' },
      { i: 'news', type: 'news' },
      { i: 'leaderboard', type: 'leaderboard' },
      { i: 'challenges', type: 'challenges' },
      { i: 'voice', type: 'voice' },
      { i: 'risk', type: 'risk' }
    ]
  },

  investor: {
    layout: {
      lg: [
        // Chart with longer timeframes for investors
        { i: 'chart', x: 0, y: 0, w: 8, h: 6, minW: 4, maxW: 12, minH: 3, maxH: 10 },
        
        // Fundamentals - P/E, market cap, etc. (critical for long-term decisions)
        { i: 'fundamentals', x: 8, y: 0, w: 4, h: 6, minW: 2, maxW: 6, minH: 3, maxH: 8 },
        
        // Portfolio performance and asset allocation
        { i: 'portfolio', x: 0, y: 6, w: 6, h: 4, minW: 3, maxW: 8, minH: 2, maxH: 6 },
        
        // News with longer-term focus
        { i: 'news', x: 6, y: 6, w: 6, h: 4, minW: 3, maxW: 8, minH: 2, maxH: 6 },
        
        // Sector analysis - as per your PDF requirements
        { i: 'sectors', x: 0, y: 10, w: 8, h: 4, minW: 4, maxW: 10, minH: 2, maxH: 6 },
        
        // Voice assistant for research queries
        { i: 'voice', x: 8, y: 10, w: 4, h: 4, minW: 2, maxW: 6, minH: 2, maxH: 6 }
      ],
      md: [
        { i: 'chart', x: 0, y: 0, w: 6, h: 6, minW: 3, maxW: 10, minH: 3, maxH: 8 },
        { i: 'fundamentals', x: 6, y: 0, w: 4, h: 6, minW: 2, maxW: 6, minH: 3, maxH: 8 },
        { i: 'portfolio', x: 0, y: 6, w: 5, h: 4, minW: 3, maxW: 7, minH: 2, maxH: 6 },
        { i: 'news', x: 5, y: 6, w: 5, h: 4, minW: 3, maxW: 7, minH: 2, maxH: 6 },
        { i: 'sectors', x: 0, y: 10, w: 6, h: 3, minW: 3, maxW: 8, minH: 2, maxH: 5 },
        { i: 'voice', x: 6, y: 10, w: 4, h: 3, minW: 2, maxW: 6, minH: 2, maxH: 5 }
      ],
      sm: [
        { i: 'chart', x: 0, y: 0, w: 6, h: 6, minW: 3, maxW: 6, minH: 3, maxH: 8 },
        { i: 'fundamentals', x: 0, y: 6, w: 6, h: 4, minW: 3, maxW: 6, minH: 2, maxH: 6 },
        { i: 'portfolio', x: 0, y: 10, w: 6, h: 3, minW: 3, maxW: 6, minH: 2, maxH: 5 },
        { i: 'news', x: 0, y: 13, w: 6, h: 3, minW: 3, maxW: 6, minH: 2, maxH: 5 },
        { i: 'voice', x: 0, y: 16, w: 6, h: 2, minW: 3, maxW: 6, minH: 2, maxH: 3 }
      ],
      xs: [
        { i: 'chart', x: 0, y: 0, w: 4, h: 6, minW: 2, maxW: 4, minH: 3, maxH: 8 },
        { i: 'fundamentals', x: 0, y: 6, w: 4, h: 4, minW: 2, maxW: 4, minH: 2, maxH: 6 },
        { i: 'portfolio', x: 0, y: 10, w: 4, h: 3, minW: 2, maxW: 4, minH: 2, maxH: 5 },
        { i: 'voice', x: 0, y: 13, w: 4, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 3 }
      ]
    },
    widgets: [
      { i: 'chart', type: 'chart' },
      { i: 'fundamentals', type: 'fundamentals' },
      { i: 'portfolio', type: 'portfolio' },
      { i: 'news', type: 'news' },
      { i: 'sectors', type: 'sectors' },
      { i: 'voice', type: 'voice' }
    ]
  }
};
