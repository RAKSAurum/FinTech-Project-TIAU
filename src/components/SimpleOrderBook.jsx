import React, { useState, useEffect } from 'react';

export default function SimpleOrderBook() {
  const [orderData, setOrderData] = useState({
    asks: [
      { price: 3452.50, size: 1200, total: 1200 },
      { price: 3451.75, size: 800, total: 2000 },
      { price: 3451.25, size: 1500, total: 3500 }
    ],
    bids: [
      { price: 3449.75, size: 2100, total: 2100 },
      { price: 3449.25, size: 1800, total: 3900 },
      { price: 3448.50, size: 950, total: 4850 }
    ]
  });

  // Simulate real-time updates for your fintech dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setOrderData(prev => ({
        asks: prev.asks.map(order => ({
          ...order,
          price: order.price + (Math.random() - 0.5) * 0.25
        })),
        bids: prev.bids.map(order => ({
          ...order,
          price: order.price + (Math.random() - 0.5) * 0.25
        }))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const spread = orderData.asks[orderData.asks.length - 1]?.price - orderData.bids[0]?.price;
  const spreadPercent = (spread / orderData.bids[0]?.price * 100);

  return (
    <div className="widget simple-orderbook">
      <div className="widget-header">
        <h3>NIFTY 50 Order Book</h3>
        <div className="live-indicator">
          <span className="status-dot"></span>
          Live
        </div>
      </div>
      
      <div className="orderbook-container">
        <div className="orderbook-section asks-section">
          <div className="section-header">
            <span>Price</span>
            <span>Size</span>
            <span>Total</span>
          </div>
          {orderData.asks.reverse().map((order, idx) => (
            <div key={idx} className="order-row ask-row">
              <span className="price ask-price">₹{order.price.toFixed(2)}</span>
              <span className="size">{order.size.toLocaleString()}</span>
              <span className="total">{order.total.toLocaleString()}</span>
            </div>
          ))}
        </div>
        
        <div className="spread-indicator">
          <div className="spread-value">
            Spread: ₹{spread?.toFixed(2)} ({spreadPercent?.toFixed(3)}%)
          </div>
        </div>
        
        <div className="orderbook-section bids-section">
          {orderData.bids.map((order, idx) => (
            <div key={idx} className="order-row bid-row">
              <span className="price bid-price">₹{order.price.toFixed(2)}</span>
              <span className="size">{order.size.toLocaleString()}</span>
              <span className="total">{order.total.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
