// src/hooks/useRealTimeData.js
import { useEffect, useState } from 'react';

export function useRealTimeData(symbol = 'NSE:TITAN') {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://your-market-data-provider.com/ws');
    
    ws.onopen = () => {
      ws.send(JSON.stringify({ action: 'subscribe', symbol }));
    };

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(prev => [...prev.slice(-100), newData]); // Keep last 100 data points
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return data;
}
