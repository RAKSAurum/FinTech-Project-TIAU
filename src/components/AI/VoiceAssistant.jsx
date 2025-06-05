import React, { useState } from 'react';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleVoiceClick = () => {
    if (!isListening) {
      setIsListening(true);
      setTranscript('Listening...');
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript('Show me NIFTY 50 analysis');
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div className="widget voice-assistant">
      <h3>AI Assistant</h3>
      <button 
        className={`voice-button ${isListening ? 'listening' : ''}`}
        onClick={handleVoiceClick}
        disabled={isListening}
      >
        🎤 {isListening ? 'Listening...' : 'Click to Speak'}
      </button>
      <div className="transcript">
        {transcript && (
          <div className="transcript-text">
            "{transcript}"
          </div>
        )}
      </div>
      <div className="suggested-commands">
        <p className="commands-label">Try saying:</p>
        <ul>
          <li>"Show me undervalued stocks"</li>
          <li>"What's the market sentiment?"</li>
          <li>"Switch to investor layout"</li>
        </ul>
      </div>
    </div>
  );
}
