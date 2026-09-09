import React, { useState } from "react";
import { TEACHER_ANSWER_KEY } from "../data/teacherAnswerKey";
import { X, Key, CheckSquare, Search, BookOpen } from "lucide-react";

export function TeacherKeyModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = TEACHER_ANSWER_KEY.filter((cat) => {
    if (selectedCategory !== "all" && cat.category !== selectedCategory) return false;
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const catMatch = cat.category.toLowerCase().includes(term);
    const issueMatch = cat.issues.some((issue) => issue.toLowerCase().includes(term));
    return catMatch || issueMatch;
  });

  return (
    <div className="modal-overlay z-index-top">
      <div className="teacher-key-modal-content">
        <div className="teacher-key-header">
          <div className="title-with-icon">
            <Key size={28} className="key-icon" />
            <div>
              <h2>TEACHER ANSWER KEY & UX DISASTER GUIDE</h2>
              <p>Complete official reference list of all intentional UI/UX mistakes embedded in UI Disaster Lab.</p>
            </div>
          </div>
          <button className="close-key-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="key-filter-bar">
          <div className="search-box-key">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search specific mistakes (e.g. password, color, contrast, button)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter-select"
          >
            <option value="all">All 14 UI/UX Flaw Categories</option>
            {TEACHER_ANSWER_KEY.map((c, i) => (
              <option key={i} value={c.category}>{c.category}</option>
            ))}
          </select>
        </div>

        {/* Categories List */}
        <div className="key-issues-scroll">
          {filteredCategories.map((catGroup, idx) => (
            <div key={idx} className="category-answer-block">
              <h3 className="category-block-title">
                <BookOpen size={18} /> {catGroup.category}
              </h3>
              <ul className="issues-bullet-list">
                {catGroup.issues.map((issue, iIdx) => (
                  <li key={iIdx} className="issue-bullet-item">
                    <CheckSquare size={16} className="check-bullet" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="teacher-key-footer">
          <span>💡 Tip: Encourage students to explain WHY each issue harms usability and accessibility.</span>
          <button className="btn-close-key" onClick={onClose}>Close Answer Key</button>
        </div>
      </div>
    </div>
  );
}
