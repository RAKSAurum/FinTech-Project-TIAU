import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function TradingViewWidget({ symbol = "NSE:TITAN" }) {
  const chartContainerRef = useRef(null);
  const chart = useRef(null);
  const series = useRef(null);

  useEffect(() => {
    // Initialize chart
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: '#0F172A' },
        textColor: '#94A3B8'
      },
      grid: {
        vertLines: { color: '#1E293B' },
        horzLines: { color: '#1E293B' }
      }
    });

    // Add series
    series.current = chart.current.addCandlestickSeries({
      upColor: '#00F0A0',
      downColor: '#F59E0B',
      borderVisible: false,
      wickUpColor: '#00F0A0',
      wickDownColor: '#F59E0B'
    });

    // Sample data (replace with real API data)
    const initialData = [
      { time: '2025-06-01', open: 2100, high: 2150, low: 2080, close: 2125 },
      { time: '2025-06-02', open: 2125, high: 2180, low: 2105, close: 2175 }
    ];
    series.current.setData(initialData);

    // Handle resize
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || !entries[0].target) return;
      const { width, height } = entries[0].contentRect;
      chart.current.resize(width, height);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.current.remove();
    };
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: 500 }} />;
}
