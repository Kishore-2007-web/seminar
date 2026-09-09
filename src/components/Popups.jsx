import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send, Cookie, Gift, Bell } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-content-box">
        <Cookie size={28} className="cookie-icon" />
        <div className="cookie-text-side">
          <h4>WE USE COOKIES AND TRACK EVERYTHING YOU DO</h4>
          <p className="cookie-legal-prose">
            By browsing this website, you agree to allow us to sell your browser history, keyboard inputs, and coffee preferences to 482 third-party advertising partners.
            If you wish to opt-out, please click the tiny link below: 
            <span 
              className="dark-pattern-tiny-reject-link" 
              onClick={() => setVisible(false)}
              title="Microscopic Reject Link"
            >
              [reject all and keep privacy]
            </span>
          </p>
        </div>

        {/* DARK PATTERN: Giant pulsing Accept button vs hidden tiny link */}
        <div className="cookie-actions">
          <button 
            className="giant-accept-cookies-btn" 
            onClick={() => setVisible(false)}
          >
            ACCEPT ALL COOKIES & SELL DATA NOW!!! 🍪🍪🍪
          </button>
        </div>
      </div>
    </div>
  );
}

export function NewsletterPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [preChecked, setPreChecked] = useState(true);

  return (
    <div className="modal-overlay">
      <div className="newsletter-popup-box">
        <button className="close-popup-x" onClick={onClose}>
          ✕
        </button>
        
        <Gift size={40} className="gift-bounce-icon" />
        <h2>WAIT! DON'T GO! GET 2% OFF!</h2>
        <p>Subscribe to our ultra-frequent newsletter to receive 400 emails per week!</p>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <input 
            type="email" 
            placeholder="Enter your personal email address..." 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-email-input"
          />

          {/* Dark pattern: Pre-checked newsletter subscription checkbox */}
          <div className="prechecked-newsletter-row">
            <input 
              type="checkbox" 
              id="spamCheck" 
              checked={preChecked} 
              onChange={(e) => setPreChecked(e.target.checked)} 
            />
            <label htmlFor="spamCheck" className="spam-check-label">
              Also sign me up for partner spam, daily surveys, and telemarketing calls. (Pre-selected)
            </label>
          </div>

          <button type="submit" className="claim-2-percent-btn">
            CLAIM MY 2% DISCOUNT NOW!
          </button>
        </form>
      </div>
    </div>
  );
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am AI Chatbot. How may I unhelp you today?" }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInputVal("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { sender: "bot", text: "I am a bot. Thank you for asking about '" + userMsg + "'." }
      ]);
    }, 600);
  };

  return (
    <div className="floating-chat-container">
      {!isOpen ? (
        <button className="chat-trigger-bubble" onClick={() => setIsOpen(true)}>
          <MessageSquare size={22} />
          <span>Chat with Bot 🤖</span>
        </button>
      ) : (
        <div className="chat-window-box">
          <div className="chat-header">
            <span>🤖 AI Customer Assistance</span>
            <button className="close-chat-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chat-body-messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-msg-row ${m.sender}`}>
                <span className="msg-bubble">{m.text}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="chat-input-row">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="chat-text-input"
            />
            <button type="submit" className="chat-send-btn">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
