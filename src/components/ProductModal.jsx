import React, { useState } from "react";
import { X, Star, AlertTriangle, ShieldCheck, RefreshCw } from "lucide-react";

export function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  // Bad quantity controls!
  const handleIncrease = () => {
    // Confusing logic: Clicking (+) subtracts 1 or adds 5 randomly!
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleDecrease = () => {
    // Clicking (-) adds 5!
    setQuantity((prev) => prev + 5);
  };

  return (
    <div className="modal-overlay">
      <div className="product-modal-container">
        {/* Misaligned Close Button */}
        <button className="misaligned-close-btn" onClick={onClose}>
          ❌ CLOSE THIS MODAL (IF YOU CAN)
        </button>

        <div className="modal-product-grid">
          {/* Product Image */}
          <div className="modal-image-col">
            {product.isBrokenImage ? (
              <div className="broken-image-box modal-img">
                <span className="broken-img-text">IMAGE FAILED TO LOAD (404)</span>
              </div>
            ) : (
              <img src={product.image} alt={product.title} className="modal-product-img" />
            )}
          </div>

          {/* Details Column */}
          <div className="modal-details-col">
            {/* Title in Papyrus or Comic Sans font */}
            <h2 className="modal-product-title">{product.title}</h2>

            {/* Rating */}
            <div className="modal-rating-row">
              <span className="stars-gold">{product.rating}</span>
              <span className="tiny-review-count">(Based on 4,920 fake reviews)</span>
            </div>

            {/* Price Mismatch Notice ($49.99 here vs $19.99 on Card!) */}
            <div className="modal-price-box">
              <span className="modal-price-label">Product Detail Price:</span>
              <strong className="modal-price-val">{product.detailPrice}</strong>
              <small className="price-disclaimer-tiny">
                *(Note: Price was {product.cardPrice} on previous screen and will be {product.checkoutPrice} on checkout)
              </small>
            </div>

            {/* Contradictory Information */}
            <div className="contradiction-alert-box">
              <AlertTriangle size={18} color="#ff0000" />
              <div>
                <strong>IMPORTANT PRODUCT SPECS:</strong>
                <p>{product.contradiction}</p>
              </div>
            </div>

            {/* Confusing Quantity Selector */}
            <div className="confusing-qty-container">
              <label className="qty-label">Choose Quantity:</label>
              <div className="qty-button-row">
                <button className="bad-qty-btn" onClick={handleDecrease} title="Decreases? No, adds 5!">
                  - (Adds 5)
                </button>
                <input 
                  type="text" 
                  className="qty-display-input" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />
                <button className="bad-qty-btn" onClick={handleIncrease} title="Increases? No, subtracts 1!">
                  + (Subtracts 1)
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="modal-cta-group">
              <button 
                className="modal-add-cart-btn"
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                EXECUTE ORDER & ADD TO CART! 🛒
              </button>
            </div>

            {/* Fake Reviews */}
            <div className="modal-fake-reviews">
              <h3>Customer Opinions:</h3>
              {product.reviews.map((rev, idx) => (
                <div key={idx} className="review-item">
                  <strong>{rev.name}</strong> - <span>{rev.comment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
