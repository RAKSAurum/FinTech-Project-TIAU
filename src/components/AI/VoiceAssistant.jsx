import React, { useState } from 'react';
import { usePersonalizationContext } from '../../context/PersonalizationContext';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const { updateProfile, userProfile } = usePersonalizationContext();

  // Enhanced command processing function
  const processCommand = (command) => {
    const lowerCommand = command.toLowerCase().trim();
    console.log('Processing command:', lowerCommand); // Debug log
    
    // Chart related commands
    if (lowerCommand.includes('show') && (lowerCommand.includes('nifty') || lowerCommand.includes('chart'))) {
      setResponse('✅ Displaying NIFTY 50 chart with technical indicators...');
      return;
    }
    
    // Profile switching commands
    if (lowerCommand.includes('day trader') || lowerCommand.includes('day trading')) {
      updateProfile({ type: 'dayTrader' });
      setResponse('✅ Switched to Day Trader layout with order book and real-time data.');
      return;
    }
    
    if (lowerCommand.includes('investor') || lowerCommand.includes('long term')) {
      updateProfile({ type: 'investor' });
      setResponse('✅ Switched to Long-Term Investor layout with fundamentals.');
      return;
    }
    
    // Stock analysis commands
    if (lowerCommand.includes('undervalued') || lowerCommand.includes('value stocks')) {
      setResponse('📊 Scanning for undervalued stocks: TITAN (P/E: 24.5), HDFC Bank (P/E: 18.2), TCS (P/E: 28.1) show strong fundamentals with institutional buying...');
      return;
    }
    
    // Market sentiment commands
    if (lowerCommand.includes('market sentiment') || lowerCommand.includes('sentiment')) {
      setResponse('📈 Current market sentiment: Bullish (67%). Banking sector leading gains (+2.4%), tech sector mixed. NIFTY resistance at 25,200.');
      return;
    }
    
    // Clear/reset commands
    if (lowerCommand.includes('clear') || lowerCommand.includes('reset')) {
      setTranscript('');
      setResponse('');
      return;
    }
    
    // Default response
    setResponse('❓ Try: "Show NIFTY chart", "Switch to day trader", "Find undervalued stocks", "Market sentiment", or "Clear"');
  };

  const handleVoiceClick = () => {
    if (!isListening) {
      setIsListening(true);
      setTranscript('🎤 Listening...');
      setResponse('');
      
      // Enhanced Web Speech API setup
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;
        
        recognition.onstart = () => {
          console.log('Speech recognition started');
        };
        
        recognition.onresult = (event) => {
          const spokenText = event.results[0][0].transcript;
          const confidence = event.results[0][0].confidence;
          
          console.log('Recognized:', spokenText, 'Confidence:', confidence);
          
          setTranscript(`"${spokenText}"`);
          processCommand(spokenText);
          setIsListening(false);
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setTranscript('❌ Sorry, I couldn\'t understand that. Please try again.');
          setResponse('');
          setIsListening(false);
        };
        
        recognition.onend = () => {
          console.log('Speech recognition ended');
          setIsListening(false);
        };
        
        recognition.start();
      } else {
        // Enhanced fallback with realistic simulation
        setTimeout(() => {
          const simulatedCommands = [
            'Show me NIFTY 50 chart',
            'Find undervalued stocks',
            'Switch to day trader layout',
            'What is market sentiment today'
          ];
          const randomCommand = simulatedCommands[Math.floor(Math.random() * simulatedCommands.length)];
          setTranscript(`"${randomCommand}" (Simulated)`);
          processCommand(randomCommand);
          setIsListening(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="widget voice-assistant">
      <div className="widget-header">
        <h3>🤖 AI Trading Assistant</h3>
        <span className="profile-indicator">Profile: {userProfile.type}</span>
      </div>
      
      <button 
        className={`voice-button ${isListening ? 'listening' : ''}`}
        onClick={handleVoiceClick}
        disabled={isListening}
      >
        {isListening ? '🔴 Listening...' : '🎤 Click to Speak'}
      </button>
      
      {transcript && (
        <div className="transcript">
          <strong>You said:</strong> {transcript}
        </div>
      )}
      
      {response && (
        <div className="ai-response">
          <strong>AI Response:</strong> {response}
        </div>
      )}
      
      <div className="suggested-commands">
        <p className="commands-label">💡 Try saying:</p>
        <ul>
          <li>"Show NIFTY chart"</li>
          <li>"Find undervalued stocks"</li>
          <li>"Switch to day trader"</li>
          <li>"Market sentiment"</li>
          <li>"Clear" (to reset)</li>
        </ul>
      </div>
    </div>
  );
}
