import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { 
    hasError: false, 
    errorInfo: null,
    retryCount: 0 
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Financial Component Error:', error, errorInfo);
    this.setState({ errorInfo });
    
    // Log specific big.js errors for debugging
    if (error.message.includes('[big.js]')) {
      console.error('Big.js number validation failed:', {
        error: error.message,
        component: errorInfo.componentStack
      });
    }
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      errorInfo: null,
      retryCount: this.state.retryCount + 1 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback financial-error">
          <div className="error-icon">⚠️</div>
          <h3>Market Data Temporarily Unavailable</h3>
          <p>We're experiencing issues loading real-time market data.</p>
          {this.state.retryCount < 3 && (
            <button 
              onClick={this.handleRetry}
              className="retry-button"
            >
              Retry Loading Data
            </button>
          )}
          {this.state.retryCount >= 3 && (
            <button 
              onClick={() => window.location.reload()}
              className="reload-button"
            >
              Reload Dashboard
            </button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
