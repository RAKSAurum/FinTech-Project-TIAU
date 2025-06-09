export const traderProfiles = {
  dayTrader: {
    layout: {
      lg: [
        { i: 'chart', x: 0, y: 0, w: 8, h: 12, minW: 6, maxW: 12, minH: 8, maxH: 15 },
        { i: 'orderbook', x: 8, y: 0, w: 4, h: 12, minW: 3, maxW: 6, minH: 8, maxH: 15 },
        { i: 'news', x: 0, y: 12, w: 6, h: 5, minW: 4, maxW: 8, minH: 3, maxH: 7 },
        { i: 'leaderboard', x: 6, y: 12, w: 3, h: 5, minW: 2, maxW: 4, minH: 3, maxH: 7 },
        { i: 'challenges', x: 9, y: 12, w: 3, h: 5, minW: 2, maxW: 4, minH: 3, maxH: 7 },
        { i: 'voice', x: 0, y: 17, w: 8, h: 4, minW: 4, maxW: 10, minH: 3, maxH: 6 },
        { i: 'risk', x: 8, y: 17, w: 4, h: 4, minW: 3, maxW: 6, minH: 3, maxH: 6 }
      ]
    },
    widgets: [
      { i: 'chart', type: 'chart', symbol: 'NSE:RELIANCE' },
      { i: 'orderbook', type: 'orderbook' },
      { i: 'news', type: 'news' },
      { i: 'leaderboard', type: 'leaderboard' },
      { i: 'challenges', type: 'challenges' },
      { i: 'voice', type: 'voice' },
      { i: 'risk', type: 'risk' }
    ]
  },

  swingTrader: {
    layout: {
      lg: [
        { i: 'chart', x: 0, y: 0, w: 8, h: 12, minW: 6, maxW: 12, minH: 8, maxH: 15 },
        { i: 'news', x: 8, y: 0, w: 4, h: 6, minW: 3, maxW: 6, minH: 4, maxH: 8 },
        { i: 'fundamentals', x: 8, y: 6, w: 4, h: 6, minW: 3, maxW: 6, minH: 4, maxH: 8 },
        { i: 'portfolio', x: 0, y: 12, w: 6, h: 5, minW: 4, maxW: 8, minH: 3, maxH: 7 },
        { i: 'voice', x: 6, y: 12, w: 6, h: 5, minW: 4, maxW: 8, minH: 3, maxH: 7 }
      ]
    },
    widgets: [
      { i: 'chart', type: 'chart', symbol: 'NSE:TCS' },
      { i: 'news', type: 'news' },
      { i: 'fundamentals', type: 'fundamentals' },
      { i: 'portfolio', type: 'portfolio' },
      { i: 'voice', type: 'voice' }
    ]
  },

  investor: {
    layout: {
      lg: [
        { i: 'chart', x: 0, y: 0, w: 8, h: 10, minW: 6, maxW: 12, minH: 6, maxH: 12 },
        { i: 'fundamentals', x: 8, y: 0, w: 4, h: 10, minW: 3, maxW: 6, minH: 6, maxH: 12 },
        { i: 'portfolio', x: 0, y: 10, w: 6, h: 5, minW: 4, maxW: 8, minH: 3, maxH: 7 },
        { i: 'news', x: 6, y: 10, w: 6, h: 5, minW: 4, maxW: 8, minH: 3, maxH: 7 },
        { i: 'voice', x: 0, y: 15, w: 12, h: 4, minW: 6, maxW: 12, minH: 3, maxH: 6 }
      ]
    },
    widgets: [
      { i: 'chart', type: 'chart', symbol: 'NSE:HDFCBANK' },
      { i: 'fundamentals', type: 'fundamentals' },
      { i: 'portfolio', type: 'portfolio' },
      { i: 'news', type: 'news' },
      { i: 'voice', type: 'voice' }
    ]
  }
};
