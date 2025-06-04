export const traderProfiles = {
  dayTrader: {
    layout: [
      { i: 'chart', x: 0, y: 0, w: 8, h: 8 },
      { i: 'orderbook', x: 8, y: 0, w: 4, h: 4 },
      { i: 'news', x: 8, y: 4, w: 4, h: 4 }
    ],
    widgets: [
      { i: 'chart', type: 'chart' },
      { i: 'orderbook', type: 'orderbook' },
      { i: 'news', type: 'news' }
    ]
  },
  investor: {
    layout: [
      { i: 'chart', x: 0, y: 0, w: 8, h: 6 },
      { i: 'fundamentals', x: 8, y: 0, w: 4, h: 4 },
      { i: 'news', x: 8, y: 4, w: 4, h: 2 }
    ],
    widgets: [
      { i: 'chart', type: 'chart' },
      { i: 'fundamentals', type: 'fundamentals' },
      { i: 'news', type: 'news' }
    ]
  }
};
