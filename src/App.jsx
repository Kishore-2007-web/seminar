import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./data/products";
import { ClassroomBar } from "./components/ClassroomBar";
import { HeaderNav } from "./components/HeaderNav";
import { PromoBanner } from "./components/PromoBanner";
import { ProductCard } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";
import { CheckoutPage } from "./components/CheckoutPage";
import { CookieBanner, NewsletterPopup, LiveChatWidget } from "./components/Popups";
import { TeacherKeyModal } from "./components/TeacherKeyModal";
import { AlertTriangle, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [teacherKeyOpen, setTeacherKeyOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  
  // Fake 3.5s page loading spinner state (Bad Feedback flaw #9)
  const [isLoading, setIsLoading] = useState(true);
  
  // Feedback toast state
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    // Initial loading spinner delay
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Auto open newsletter after 4s
    const newsletterTimer = setTimeout(() => {
      setNewsletterOpen(true);
    }, 4000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(newsletterTimer);
    };
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prev) => [...prev, { ...product, quantity }]);
    // Ambiguous feedback message!
    triggerToast("SUCCESS!!! probably... (Item added to cart?)");
  };

  return (
    <div className="disaster-lab-app">
      {/* 1. Classroom Activity Control Top Bar */}
      <ClassroomBar onOpenTeacherKey={() => setTeacherKeyOpen(true)} />

      {/* Bad Feedback Flaw: Initial Fake Loading Spinner */}
      {isLoading ? (
        <div className="initial-fake-loader-screen">
          <div className="loader-box">
            <Loader2 size={64} className="spinning-loader-icon" />
            <h2>LOADING UI DISASTER LAB (PLEASE WAIT 2.5s)...</h2>
            <p>Optimizing terrible UX elements and chaotic layouts...</p>
          </div>
        </div>
      ) : (
        <div className="app-main-viewport">
          {/* Top Flashing Sale Banner */}
          <PromoBanner 
            onClaimDiscount={() => triggerToast("COUPON APPLIED: $0.02 OFF (Valid on orders over $10,000)")} 
          />

          {/* Terrible Header Navigation */}
          <HeaderNav 
            activePage={activePage} 
            setActivePage={setActivePage}
            cartCount={cartItems.length}
            onTriggerNotification={triggerToast}
          />

          {/* Feedback Toast Notification (Placed in unusual top-left position overlapping elements) */}
          {toastMessage && (
            <div className="disaster-toast-popup">
              <AlertTriangle size={18} />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* PAGE CONTENT ROUTING */}
          <main className="main-content-container">
            {activePage === "home" && (
              <div className="home-page-view">
                {/* Visual Hierarchy Disaster Title */}
                <div className="hero-disaster-section">
                  <h1 className="microscopic-h1">OUR FEATURED TECH COLLECTION</h1>
                  <h2 className="massive-h2-subhead">MYSTERY TECH PRODUCTS DEALS DEALS DEALS</h2>
                  <p className="clashing-hero-text">
                    BUY THE MOST INCREDIBLE UNNECESSARY GADGETS EVER CREATED IN 2026! 
                    GUARANTEED TO BE DELIVERED EVENTUALLY OR NOT AT ALL.
                  </p>
                </div>

                {/* Product Grid with uneven margins & misaligned cards */}
                <div className="product-cards-grid">
                  {PRODUCTS.map((prod, idx) => (
                    <ProductCard 
                      key={prod.id}
                      product={prod}
                      index={idx}
                      onSelectProduct={(p) => setSelectedProduct(p)}
                      onAddToCart={(p) => handleAddToCart(p)}
                    />
                  ))}
                </div>

                {/* Random Unnecessary Decorative Section with huge blank spacing */}
                <div className="random-decorative-banner">
                  <span className="spinning-badge-icon">⭐</span>
                  <h3>OVER 10,000 HAPPY CUSTOMERS WOULD BUY AGAIN IF THEY COULD FIND THE BUTTON</h3>
                  <p>Certified Anti-UX Standard Compliant Site 2026</p>
                </div>
              </div>
            )}

            {activePage === "checkout" && (
              <CheckoutPage 
                cartItems={cartItems}
                onBackToStore={() => setActivePage("home")}
                onTriggerNotification={triggerToast}
              />
            )}
          </main>

          {/* PRODUCT DETAIL MODAL */}
          {selectedProduct && (
            <ProductModal 
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
            />
          )}

          {/* POPUPS & DARK PATTERNS */}
          <CookieBanner />
          
          {newsletterOpen && (
            <NewsletterPopup onClose={() => setNewsletterOpen(false)} />
          )}

          <LiveChatWidget />

          {/* TEACHER ANSWER KEY MODAL */}
          {teacherKeyOpen && (
            <TeacherKeyModal onClose={() => setTeacherKeyOpen(false)} />
          )}

          {/* FOOTER WITH HIDDEN TEACHER ANSWER KEY LINK */}
          <footer className="disaster-footer">
            <div className="footer-top-row">
              <span>© 2026 UI Disaster Lab - Created for UI Error Hunt Classroom Activity</span>
            </div>
            
            {/* Dark Pattern Hidden Link for Order Cancellation */}
            <div className="hidden-cancellation-row">
              <span className="white-on-white-text">
                To cancel your order or request a full refund, click here: 
                <a 
                  href="#cancel" 
                  className="hidden-white-link"
                  onClick={(e) => { e.preventDefault(); triggerToast("CANCELLATION FAILED: Link is decorative only."); }}
                >
                  [Cancel Order]
                </a>
              </span>
            </div>

            {/* Hidden Teacher Answer Key Link at bottom */}
            <div className="teacher-key-bottom-container">
              <button 
                className="hidden-teacher-key-link" 
                onClick={() => setTeacherKeyOpen(true)}
              >
                🔑 Teacher Answer Key (Click to view intentional UI/UX mistakes list)
              </button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
