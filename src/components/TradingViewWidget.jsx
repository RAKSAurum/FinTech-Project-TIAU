import { widget } from '../../public/charting_library/charting_library.min';

export default function TradingViewWidget({ symbol, theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const widgetInstance = new widget({
      container: containerRef.current,
      symbol: symbol || 'NSE:NIFTY50',
      interval: '1D',
      library_path: '/charting_library/',
      theme: theme || 'Dark',
      disabled_features: ['header_widget', 'left_toolbar'],
      overrides: {
        'paneProperties.background': '#0F172A',
        'mainSeriesProperties.candleStyle.upColor': '#00F0A0'
      }
    });

    return () => widgetInstance.remove();
  }, [symbol, theme]);

  return <div ref={containerRef} className="h-[600px] w-full"/>;
}
