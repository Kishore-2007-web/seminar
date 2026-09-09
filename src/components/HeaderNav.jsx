import React, { useState } from "react";
import { Bell, ShoppingCart, Search, Menu, HelpCircle } from "lucide-react";

export function HeaderNav({ activePage, setActivePage, cartCount, onTriggerNotification }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bellNotice, setBellNotice] = useState(false);

  return (
    <>
      {/* Top Header Row with Spinning Logo & Bad Hierarchy Title */}
      <header className="disaster-top-header">
        <div className="logo-section">
          {/* Spinning Logo Animation */}
          <div className="spinning-logo" title="UI Disaster Lab Official 3D Spinning Badge">
            🌀 disaster! 💥
          </div>
          <div>
            {/* H3 for main title (bad visual hierarchy: giant subhead style or tiny main title) */}
            <span className="tiny-main-title">official store of</span>
            <h3 className="huge-subhead-logo">UI DISASTER LAB</h3>
          </div>
        </div>

        {/* Fake Search Bar with missing label & bad alignment */}
        <div className="bad-search-container">
          <input 
            type="text" 
            placeholder="Search stuff here or don't..." 
            className="bad-search-input" 
          />
          <button 
            className="bad-search-btn" 
            onClick={() => onTriggerNotification("SEARCH ERROR: Database missing query parameter 'query'")}
          >
            <Search size={14} /> FIND IT!
          </button>
        </div>

        {/* Header Right Icons */}
        <div className="header-right-tools">
          {/* Bell Icon with Fake Invisible Notifications */}
          <div className="notification-bell-box" onClick={() => setBellNotice(!bellNotice)}>
            <Bell size={24} className="bell-icon" />
            <span className="bell-badge">3</span>
            {bellNotice && (
              <div className="bell-popup">
                <p>🔔 You have 3 invisible notifications!</p>
                <small>(They will never render on screen)</small>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <div 
            className="header-cart-box" 
            onClick={() => setActivePage("checkout")}
            title="Cart & Checkout"
          >
            <ShoppingCart size={22} />
            <span className="cart-text-btn">BASKET ({cartCount})</span>
          </div>
        </div>
      </header>

      {/* TERRIBLE NAVIGATION MENU PLACEMENT & STYLING */}
      {/* Intentionally shunted to bottom-right or floating randomly with horrible labels */}
      <nav className="terrible-nav-menu">
        <div className="nav-title-label">MENU (Click items carefully):</div>
        
        {/* Navigation items with bad names */}
        <button 
          className={`bad-nav-btn ${activePage === "home" ? "active" : ""}`} 
          onClick={() => setActivePage("home")}
        >
          Stuff
        </button>

        {/* Plain text link disguised as normal text with no hover pointer */}
        <span 
          className="plain-text-nav-link" 
          onClick={() => setActivePage("home")}
        >
          Go (Home)
        </span>

        {/* Duplicate Navigation Link */}
        <button 
          className="bad-nav-btn duplicate-link" 
          onClick={() => setActivePage("home")}
        >
          Stuff
        </button>

        {/* Unclear Menu Link */}
        <button 
          className="bad-nav-btn" 
          onClick={() => onTriggerNotification("Redirecting to nowhere...")}
        >
          Click
        </button>

        {/* Dropdown with hidden important page (Checkout) */}
        <div className="nav-dropdown-wrapper">
          <button 
            className="bad-nav-btn dropdown-toggle" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            More Things ▼
          </button>
          
          {dropdownOpen && (
            <div className="nav-dropdown-menu">
              <a href="#secret" onClick={(e) => { e.preventDefault(); onTriggerNotification("Secret Page 404"); }}>
                Secret Place
              </a>
              <a href="#things2" onClick={(e) => { e.preventDefault(); onTriggerNotification("Things 2 clicked"); }}>
                Things 2
              </a>
              {/* Checkout hidden here! */}
              <a 
                href="#checkout" 
                className="hidden-checkout-link"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setActivePage("checkout"); 
                  setDropdownOpen(false); 
                }}
              >
                🛒 CHECKOUT & PAYMENT (HIDDEN PAGE)
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
