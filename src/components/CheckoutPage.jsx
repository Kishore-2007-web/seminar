import React, { useState } from "react";
import { AlertCircle, Lock, ShieldAlert, Trash2, ArrowLeft } from "lucide-react";

export function CheckoutPage({ cartItems, onBackToStore, onTriggerNotification }) {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "", // Plain text password input flaw!
    digitString1: "",
    faxNumber: "",
    favColor: "",
    petMaidenName: "",
    shoeSize: "",
    bloodType: "",
    country: "Jupiter",
    residenceCode: "",
    optOutSms: true
  });

  const [validationError, setValidationError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    // Intentionally output obscure error or strange success message
    if (!formData.fullName) {
      setValidationError("FATAL CHECKOUT ERROR 0x88921: Field 'Enter Information Here:' is missing or illegal.");
      return;
    }

    setValidationError("");
    setIsSuccess(true);
    onTriggerNotification("CONGRATULATIONS! Your error code is SUCCESS_FAILED_001.");
  };

  const calculateTotal = () => {
    // Price discrepancy: $89.99 base + $20 Mystery Administrative Fee + $14.99 Floating Point Tax
    return "$124.98";
  };

  return (
    <div className="disaster-checkout-container">
      {/* Back to store link hidden or styled strangely */}
      <div className="checkout-nav-row">
        <button className="bad-back-btn" onClick={onBackToStore}>
          <ArrowLeft size={14} /> Back to Stuff
        </button>
        <span className="tiny-checkout-header">CHECKOUT FORM (V2.0-BETA)</span>
      </div>

      <div className="checkout-content-grid">
        {/* Checkout Form */}
        <div className="checkout-form-column">
          <h2 className="form-main-title">ENTER YOUR ENTIRE LIFE INFORMATION:</h2>

          <form onSubmit={handleSubmitCheckout} className="bad-checkout-form">
            {/* Field 1: Confusing Label & Missing required indicator */}
            <div className="form-group misaligned-group-1">
              <label className="bad-form-label">Enter Information Here: <span className="optional-tag">(Optional?)</span></label>
              <input
                type="text"
                name="fullName"
                placeholder="First Last Name or Nickname"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bad-form-input"
              />
            </div>

            {/* FIELD 2: CRITICAL SECURITY FLAW - PASSWORD IN PLAIN TEXT! */}
            <div className="form-group misaligned-group-2">
              <label className="bad-form-label label-plain-text-pwd">
                Account Security Password: <span className="red-star-deceptive">*</span>
              </label>
              <div className="plain-text-pwd-warning">
                ⚠️ SECURITY NOTICE: For your convenience, password is displayed in plain unmasked text.
              </div>
              <input
                type="text" /* INSECURE PLAIN TEXT FIELD! */
                name="password"
                placeholder="Enter account password here (Visible to everyone)"
                value={formData.password}
                onChange={handleInputChange}
                className="bad-form-input plain-text-password-input"
              />
            </div>

            {/* Unnecessary Field: Fax Number */}
            <div className="form-group misaligned-group-3">
              <label className="bad-form-label">Fax Number (Required): <span className="red-star-deceptive">*</span></label>
              <input
                type="text"
                name="faxNumber"
                placeholder="+1 (555) 019-2831"
                value={formData.faxNumber}
                onChange={handleInputChange}
                className="bad-form-input"
              />
            </div>

            {/* Confusing Label: Credit Card as "Digit String 1" */}
            <div className="form-group inline-misaligned">
              <label className="bad-form-label">Digit String 1 (16 Numbers):</label>
              <input
                type="text"
                name="digitString1"
                placeholder="4000 0000 0000 0000"
                value={formData.digitString1}
                onChange={handleInputChange}
                className="bad-form-input short-input"
              />
            </div>

            {/* Unnecessary Field: Pet's Mother's Maiden Name */}
            <div className="form-group">
              <label className="bad-form-label">Pet's Mother's Maiden Name:</label>
              <input
                type="text"
                name="petMaidenName"
                placeholder="Fluffy Sr."
                value={formData.petMaidenName}
                onChange={handleInputChange}
                className="bad-form-input"
              />
            </div>

            {/* Unnecessary Fields: Shoe Size & Blood Type */}
            <div className="form-row-crowded">
              <div className="form-group">
                <label className="bad-form-label">Shoe Size (cm):</label>
                <input
                  type="number"
                  name="shoeSize"
                  placeholder="28.5"
                  value={formData.shoeSize}
                  onChange={handleInputChange}
                  className="bad-form-input tiny-number-input"
                />
              </div>

              <div className="form-group">
                <label className="bad-form-label">Blood Type:</label>
                <input
                  type="text"
                  name="bloodType"
                  placeholder="O Positive"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="bad-form-input tiny-number-input"
                />
              </div>
            </div>

            {/* Confusing Dropdown Options */}
            <div className="form-group">
              <label className="bad-form-label">Select Country of Origin:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="bad-form-select"
              >
                <option value="Jupiter">Jupiter (Gas Giant)</option>
                <option value="Antarctica">Antarctica (Penguin Territory)</option>
                <option value="United States (Tuesdays Only)">United States (Tuesdays Only)</option>
                <option value="Alpha Centauri">Alpha Centauri Star System</option>
                <option value="Other">Other Dimension</option>
                <option value="Unknown">Unknown / Prefer Not To Disclose</option>
              </select>
            </div>

            {/* Confusing Double-Negative Checkbox Wording */}
            <div className="checkbox-confusing-box">
              <input
                type="checkbox"
                id="optOutSms"
                name="optOutSms"
                checked={formData.optOutSms}
                onChange={handleInputChange}
                className="bad-checkbox-element"
              />
              <label htmlFor="optOutSms" className="confusing-checkbox-label">
                Uncheck this box if you DO NOT wish to NOT opt-out of receiving daily promotional SMS text spam (Standard fees apply twice per message).
              </label>
            </div>

            {/* BAD BUTTON HIERARCHY:
                Primary action ("Proceed to Pay") looks DISABLED (#ccc, cursor: not-allowed visual style).
                Secondary action ("NUKE ALL CART ITEMS") is huge, pulsing red, and placed right next to it!
            */}
            <div className="checkout-button-hierarchy-disaster">
              {/* Deceptive Disabled-Looking Button that actually works! */}
              <button
                type="submit"
                className="deceptive-disabled-btn"
                title="This button looks gray and disabled, but it actually submits the form!"
              >
                Proceed (Clickable Despite Gray Appearance)
              </button>

              {/* Overpowering Destructive Action */}
              <button
                type="button"
                className="overpowering-nuke-btn"
                onClick={() => onTriggerNotification("CART DELETED! All items removed.")}
              >
                <Trash2 size={18} /> CLEAR ALL CART ITEMS & DELETE ACCOUNT!
              </button>
            </div>
          </form>

          {/* Form Validation Error Message: Placed 800px away at the bottom of the page! */}
          <div className="misplaced-error-footer-box">
            <h4 className="error-title">FORM ERROR LOGS (SCROLL DOWN 800PX TO SEE):</h4>
            {validationError ? (
              <div className="obscure-error-message">
                <AlertCircle size={20} color="#ff0000" />
                <span>{validationError}</span>
              </div>
            ) : (
              <div className="no-error-status">System Status: OK (No active errors detected yet)</div>
            )}
          </div>
        </div>

        {/* Cart Order Summary Column */}
        <div className="order-summary-column">
          <div className="order-summary-card">
            <h3>ORDER SUMMARY</h3>
            <div className="summary-item-row">
              <span>Quantum Hover-Spoon Pro Max</span>
              <strong>$89.99</strong>
            </div>
            <div className="summary-item-row">
              <span>Mystery Administrative Fee</span>
              <strong>$20.00</strong>
            </div>
            <div className="summary-item-row">
              <span>Invisible Screen Guard Shipping</span>
              <strong>$14.99</strong>
            </div>
            <div className="summary-total-row">
              <span>TOTAL DUE:</span>
              <strong className="discrepant-total-price">{calculateTotal()}</strong>
            </div>
            <small className="tiny-disclaimer">
              *(Notice how product was $19.99 on Card, $49.99 on Details, and is now $89.99 here!)
            </small>
          </div>
        </div>
      </div>

      {/* Success Confirmation State */}
      {isSuccess && (
        <div className="modal-overlay">
          <div className="confusing-success-modal">
            <h2>🎉 CONGRATULATIONS! 🎉</h2>
            <p>Your order status: <strong>SUCCESS_FAILED_001</strong></p>
            <p>Your credit card has been charged $124.98. Delivery expected within 0 to 1400 business days.</p>
            <button 
              className="btn-primary-score" 
              onClick={() => { setIsSuccess(false); onBackToStore(); }}
            >
              Return to UI Disaster Lab
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
