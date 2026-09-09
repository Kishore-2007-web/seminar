import React, { useState, useEffect } from "react";
import { Play, CheckCircle, Clock, Award } from "lucide-react";

export function ClassroomBar() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [findings, setFindings] = useState("");
  const [scoreModalOpen, setScoreModalOpen] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(null);

  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      handleSubmitFindings();
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startHunt = () => {
    setIsActive(true);
    setTimeLeft(300);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Count items by splitting lines
  const countDiscoveredErrors = () => {
    if (!findings.trim()) return 0;
    const lines = findings.split("\n").filter((line) => line.trim().length > 3);
    return lines.length;
  };

  const handleSubmitFindings = () => {
    setIsActive(false);
    const lineCount = countDiscoveredErrors();
    const textLower = findings.toLowerCase();

    // Keyword detection bonus score
    const keywords = [
      "color", "contrast", "hierarchy", "font", "comic sans", "navigation", 
      "password", "plain text", "button", "disabled", "popup", "timer", 
      "alignment", "responsive", "accessibility", "stock", "green", "price", 
      "mismatch", "cookie", "dark pattern", "label", "form", "error", "broken"
    ];

    let matchedKeywords = 0;
    keywords.forEach((kw) => {
      if (textLower.includes(kw)) matchedKeywords++;
    });

    const score = Math.min(100, Math.round(lineCount * 8 + matchedKeywords * 4));
    
    let grade = "UI Novice";
    if (score > 80) grade = "🏆 DISASTER MASTER!";
    else if (score > 50) grade = "🕵️ UX DETECTIVE!";
    else if (score > 20) grade = "🔍 ERROR HUNTER!";

    setCalculatedScore({
      score,
      count: lineCount,
      keywords: matchedKeywords,
      grade
    });
    setScoreModalOpen(true);
  };

  return (
    <>
      {/* Classroom Control Bar Fixed Top */}
      <div className="classroom-bar">
        <div className="classroom-info">
          <span className="classroom-badge">🎓 CLASSROOM ACTIVITY</span>
          <span className="classroom-title">UI ERROR HUNT</span>
          <span className="classroom-subtitle">Find as many UI/UX mistakes as you can!</span>
        </div>

        <div className="classroom-timer-box">
          {!isActive ? (
            <button className="start-hunt-btn" onClick={startHunt}>
              <Play size={16} /> Start UI Hunt (5 Min)
            </button>
          ) : (
            <div className="timer-display">
              <Clock size={16} className="pulse-icon" />
              <span>TIME LEFT: <strong>{formatTime(timeLeft)}</strong></span>
            </div>
          )}
        </div>

        <div className="classroom-stats">
          <div className="counter-chip">
            Errors Logged: <strong>{countDiscoveredErrors()}</strong>
          </div>
          <button className="submit-findings-btn" onClick={handleSubmitFindings}>
            <CheckCircle size={16} /> Submit Findings
          </button>
        </div>
      </div>

      {/* Floating Notes Log Box for Students */}
      {isActive && (
        <div className="student-notes-drawer">
          <div className="drawer-header">
            <span>📝 Discovered UI Mistakes Log</span>
            <span className="hint-text">(Type 1 mistake per line)</span>
          </div>
          <textarea
            className="findings-input"
            rows={5}
            placeholder="Type issues here e.g.&#10;1. Password input displays plain text&#10;2. Add to Cart button looks disabled&#10;3. Green circle used for Out of Stock..."
            value={findings}
            onChange={(e) => setFindings(e.target.value)}
          />
        </div>
      )}

      {/* Score Modal */}
      {scoreModalOpen && calculatedScore && (
        <div className="modal-overlay">
          <div className="score-modal-content">
            <div className="score-header">
              <Award size={48} className="trophy-icon" />
              <h2>UI ERROR HUNT RESULTS</h2>
            </div>
            
            <div className="score-badge-large">{calculatedScore.grade}</div>

            <div className="score-grid">
              <div className="score-card">
                <span className="score-label">Final Score</span>
                <span className="score-value">{calculatedScore.score} / 100</span>
              </div>
              <div className="score-card">
                <span className="score-label">Issues Logged</span>
                <span className="score-value">{calculatedScore.count}</span>
              </div>
              <div className="score-card">
                <span className="score-label">Key Concepts Identified</span>
                <span className="score-value">{calculatedScore.keywords}</span>
              </div>
            </div>

            <p className="score-summary">
              Great job inspecting the UI Disaster Lab!
            </p>

            <div className="score-actions">
              <button 
                className="btn-primary-score" 
                onClick={() => setScoreModalOpen(false)}
              >
                Close & Keep Exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
