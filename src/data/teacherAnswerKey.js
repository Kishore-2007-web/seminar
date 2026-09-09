export const TEACHER_ANSWER_KEY = [
  {
    category: "1. Poor Visual Hierarchy",
    issues: [
      "Subheadings (`<h3>`) are 64px while the main page title is a tiny 11px font.",
      "The 'NUKE ALL CART ITEMS' secondary button is massive and bright red, while the main 'Proceed to Checkout' button looks tiny and grayed out.",
      "Crucial price disclaimers are buried in microscopic 7px text, while minor legal disclaimers use giant 48px neon text.",
      "Inconsistent text sizes and header levels used arbitrarily across product cards."
    ]
  },
  {
    category: "2. Bad Color Choices",
    issues: [
      "Low contrast light gray text (`#a1a1a1`) on pure white background, making text nearly unreadable.",
      "Vibrant lime-green text on bright yellow backgrounds causing extreme eye strain.",
      "Clashing electric colors (hot pink `#ff007f`, purple `#9000ff`, yellow, lime green).",
      "Buttons performing the exact same action ('Add to Cart') use 4 completely different random colors across cards."
    ]
  },
  {
    category: "3. Bad Typography",
    issues: [
      "Mixing 5 contrasting font families on a single page (Comic Sans, Papyrus, Times New Roman, Impact, Courier New).",
      "Random font-weight shifts mid-sentence (*SUPER* **UNBEATABLE** ***DEAL***).",
      "Entire product descriptions forced into ALL CAPS in Comic Sans.",
      "Excessive and erratic use of bolding, italics, and underlines on random words."
    ]
  },
  {
    category: "4. Terrible Navigation",
    issues: [
      "Primary navigation menu is shoved to the bottom-right corner instead of top header.",
      "Unclear & useless navigation labels: 'Stuff', 'Go', 'More Things', 'Click', 'Secret Place'.",
      "Navigation link 'More Things' is disguised as plain body text with no pointer cursor or hover styling.",
      "Duplicate navigation link 'Stuff' appears in 3 separate places leading to different views.",
      "Crucial Checkout page hidden behind a nested dropdown inside 'More Things'."
    ]
  },
  {
    category: "5. Bad Buttons",
    issues: [
      "Inconsistent button shapes (oval 200px, borderless square, rounded pill, tiny circle).",
      "Confusing button labels: 'Do It', 'Proceed', 'Continue??', 'Maybe', 'Execute'.",
      "The primary 'Proceed to Checkout' button is styled with `#ccc` gray background and `cursor: not-allowed` (looks disabled even though active!).",
      "Secondary destructive action ('Clear Cart') is visually 5x larger than primary checkout action.",
      "Buttons placed 1px apart with zero margin spacing, causing accidental clicks."
    ]
  },
  {
    category: "6. Bad Forms (Checkout Page)",
    issues: [
      "Unnecessary irrelevant fields: 'Favorite Color', 'Pet Mother Maiden Name', 'Fax Number', 'Shoe Size in cm', 'Blood Type'.",
      "Confusing field labels: 'Digit String 1', 'Physical Residence Code'.",
      "Inputs are completely misaligned with varying margins and label placements (above, left, inline).",
      "Missing `*` required field indicators on mandatory inputs while optional fields have deceptive red stars.",
      "**CRITICAL DARK SECURITY FLAW: Password field uses `<input type='text'>` exposing plain text password!**",
      "Country dropdown options are sorted randomly ('Jupiter', 'Antarctica', 'United States (Tuesdays Only)', 'Alpha Centauri').",
      "Form validation error messages appear at the bottom footer 800px away from the input field.",
      "Confusing double-negative checkbox wording: 'Uncheck this box if you DO NOT wish to NOT opt-out of weekly SMS alerts'."
    ]
  },
  {
    category: "7. Poor Spacing & Alignment",
    issues: [
      "Product grid cards have random 23px top/left margins creating jagged uneven alignment.",
      "Cards have zero inner padding causing text to stick directly to container borders.",
      "Sections touch screen edges without container padding, followed by massive 300px empty white gaps."
    ]
  },
  {
    category: "8. Accessibility Problems",
    issues: [
      "Microscopic 6px font size on critical shipping notes.",
      "Fails contrast standards (light gray on white, yellow on cyan).",
      "Icon-only buttons lack `aria-label` or descriptive text.",
      "Form `<input>` tags missing matching `<label htmlFor>` attributes.",
      "**Stock status relies ONLY on color dots** (green dot = out of stock, red dot = in stock), completely inaccessible for colorblind users.",
      "Interactive elements have `outline: none !important`, hiding focus indicators during keyboard navigation."
    ]
  },
  {
    category: "9. Bad Feedback",
    issues: [
      "Clicking 'Add to Cart' triggers an ambiguous modal: 'SUCCESS!!! probably...'",
      "Toast notifications spawn in the top-left overlapping navigation or offscreen.",
      "Annoying fake 3.5-second loading spinner on page load.",
      "Misleading checkout confirmation message: 'CONGRATULATIONS! Your error code is SUCCESS_FAILED_001.'"
    ]
  },
  {
    category: "10. Bad Responsive Design",
    issues: [
      "Layout breaks on mobile screens due to fixed 1500px wide header width.",
      "Text overflows out of card containers into neighboring elements.",
      "Horizontal scrollbar forced on standard mobile viewports.",
      "Checkout buttons overlap each other on smaller screen widths."
    ]
  },
  {
    category: "11. Dark Patterns",
    issues: [
      "Cookie consent banner: 'ACCEPT ALL COOKIES & SELL DATA' is a giant glowing button; 'Reject' is a 6px gray link hidden in legal paragraph.",
      "Unwanted newsletter subscription box pre-checked by default.",
      "Cancellation instructions hidden in invisible white text on light gray background in footer."
    ]
  },
  {
    category: "12. Excessive UI & Clutter",
    issues: [
      "Multiple popups competing on load (Cookie Banner + Newsletter + Discount Wheel).",
      "Floating elements cluttering screen: Floating sales badge, floating live-chat bot, pulsing notification bell.",
      "Fake countdown timer ('DEAL EXPIRES IN 00:01:59') that automatically resets when reaching zero.",
      "Giant blinking top sales banner ('🔥🔥🔥 SALE!!! BUY NOW 🔥🔥🔥')."
    ]
  },
  {
    category: "13. Random Unnecessary Elements",
    issues: [
      "Fake social proof badge: '🔥 17 people are looking at this!' on every item.",
      "Useless notification: 'You have 3 invisible notifications'.",
      "Outdated badges: 'Voted #1 Website in 1997'.",
      "Spinning 3D badge in header causing visual distraction.",
      "Unhelpful tooltips: 'This is a button that does something when clicked'."
    ]
  },
  {
    category: "14. Error States",
    issues: [
      "Cryptic form error message: 'Error: Something went wrong in file chunk_492.js at line 3492'.",
      "Broken image placeholder rendered with broken link `broken_screen_guard_image_404.png`.",
      "Buttons with empty `onClick` handlers that do literally nothing.",
      "Links pointing to `#nowhere` or non-existent routes.",
      "Contradictory product description ('100% Waterproof - Warning: keep away from water').",
      "Price discrepancies: Product card displays $19.99, product page displays $49.99, checkout summary displays $89.99!"
    ]
  }
];
