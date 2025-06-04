import React from "react";

export default function VoiceAssistant() {
  // Placeholder: Integrate with voice-to-text and LLM backend
  return (
    <div className="widget voice-assistant">
      <h3>AI Voice/Text Assistant</h3>
      <input type="text" placeholder="Ask me about Titan..." style={{ width: "90%" }} />
      <button>Ask</button>
      <div className="ai-response">Try: "Show me undervalued stocks with high institutional buying"</div>
    </div>
  );
}
