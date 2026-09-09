import React from "react";
import { Eye, Info, AlertTriangle } from "lucide-react";

export function ProductCard({ product, onSelectProduct, onAddToCart, index }) {
  // Different button colors for similar actions! (Bad Color Choices)
  const buttonColors = [
    { bg: "#28a745", text: "#ffffff" }, // Green
    { bg: "#dc3545", text: "#ffffff" }, // Red
    { bg: "#ffc107", text: "#000000" }, // Yellow
    { bg: "#6f42c1", text: "#ffffff" }  // Purple
  ];

  const btnStyle = buttonColors[index % buttonColors.length];

  // Bad button labels per card
  const buttonLabels = ["Do It", "Proceed", "Continue??", "Maybe"];

  return (
    <div className={`disaster-product-card card-index-${index}`}>
      {/* Social Proof Badge */}
      <div className="social-proof-badge">
        <Eye size={12} /> 🔥 {product.viewingCount} people looking right now!
      </div>

      {/* Product Image Box (Card 2 contains broken image) */}
      <div className="product-image-container" onClick={() => onSelectProduct(product)}>
        {product.isBrokenImage ? (
          <div className="broken-image-box">
            <img src={product.image} alt="" className="broken-img-element" />
            <span className="broken-img-text">broken_screen_guard_404.png</span>
          </div>
        ) : (
          <img src={product.image} alt={product.title} className="product-img" />
        )}
      </div>

      {/* Card Content with Bad Hierarchy and Mixed Typography */}
      <div className="card-body-content">
        {/* Mixed font weights and uppercase */}
        <h4 className="product-card-title" onClick={() => onSelectProduct(product)}>
          {product.title}
        </h4>

        {/* Stock Status Flaw: COMMUNICATED ONLY BY COLOR! */}
        <div className="stock-status-row">
          <span className="stock-status-label-text">Availability:</span>
          {/* Green dot = OUT OF STOCK, Red dot = IN STOCK. No text label! Accessibility error! */}
          <span 
            className="stock-color-dot" 
            style={{ backgroundColor: product.stockStatusColor }}
            title="Stock status indicated by color only"
          />
        </div>

        {/* Price Displayed Differently here ($19.99) vs Detail Modal ($49.99) vs Checkout ($89.99) */}
        <div className="card-price-row">
          <span className="price-tag">{product.cardPrice}</span>
          <span className="tiny-strikethrough">$999.99</span>
        </div>

        {/* Description in microscopic or low-contrast text */}
        <p className="card-description-low-contrast">
          {product.description}
        </p>

        {/* Bad Button Hierarchy & Crowded Buttons */}
        <div className="card-button-group">
          {/* Primary action tiny with clashing colors */}
          <button
            className="bad-card-action-btn primary-action"
            style={{ backgroundColor: btnStyle.bg, color: btnStyle.text }}
            onClick={() => onAddToCart(product)}
            title="This button adds item to cart probably"
          >
            {buttonLabels[index % buttonLabels.length]} (${product.cardPrice})
          </button>

          {/* Secondary action visually huge and neon pulsing! */}
          <button
            className="bad-card-action-btn secondary-overpowering"
            onClick={() => onSelectProduct(product)}
          >
            Inspect Details! 🔍
          </button>
        </div>

        {/* Unnecessary badge */}
        <div className="unnecessary-badge">
          Voted #1 Item in 1997
        </div>
      </div>
    </div>
  );
}
