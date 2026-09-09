import React, { useState, useEffect } from "react";
import { Zap, Flame, AlertCircle } from "lucide-react";

export function PromoBanner({ onClaimDiscount }) {
  const [seconds, setSeconds] = useState(119); // 01:59 countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) return 119; // Reset to 1:59 continuously! (Fake urgency)
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `00:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="promo-banner-container">
      <div className="blinking-neon-text">
        <Flame color="#ff0000" className="inline-fire" /> 🔥🔥🔥 SUPER FLASH SALE!!! UP TO 0.5% OFF ENTIRE STORE 🔥🔥🔥 <Flame color="#ff0000" className="inline-fire" />
      </div>

      <div className="banner-urgency-row">
        <span className="urgency-timer-box">
          <Zap size={16} /> HURRY! DEAL EXPIRES IN: <strong className="timer-text">{formatTimer(seconds)}</strong>
        </span>

        <button className="ugly-banner-btn" onClick={onClaimDiscount}>
          CLAIM $0.02 COUPON NOW!!
        </button>
      </div>
    </div>
  );
}
