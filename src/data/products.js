export const PRODUCTS = [
  {
    id: 1,
    title: "QUANTUM HOVER-SPOON PRO MAX",
    cardPrice: "$19.99",
    detailPrice: "$49.99",
    checkoutPrice: "$89.99",
    rating: "★★★★★ (4.9)",
    stockStatusColor: "#00ff00", // Green means out of stock! (Accessibility issue)
    stockLabel: "", // intentionally missing text
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&auto=format&fit=crop&q=60",
    isBrokenImage: false,
    viewingCount: 17,
    description: "USES ADVANCED QUANTUM AI TO STABILIZE YOUR MORNING CEREAL IN ZERO GRAVITY ENVIRONMENT.",
    contradiction: "100% Waterproof. WARNING: Do not allow contact with water, liquid, or high humidity.",
    reviews: [
      { name: "John D.", rating: 5, comment: "It hover good but cereal fell into keyboard 10/10" },
      { name: "TechFan99", rating: 1, comment: "Why is password field showing in plain text on checkout???" }
    ]
  },
  {
    id: 2,
    title: "Invisible Wireless Screen Guard",
    cardPrice: "$99.00",
    detailPrice: "$149.00",
    checkoutPrice: "$199.99",
    rating: "★★☆☆☆ (1.2)",
    stockStatusColor: "#ff0000", // Red means in stock!
    stockLabel: "",
    image: "broken_screen_guard_image_404.png", // Intentional broken image URL!
    isBrokenImage: true,
    viewingCount: 42,
    description: "Guaranteed 100% transparent screen guard. Arrives as a completely empty box. You cannot see it because it is that invisible.",
    contradiction: "Includes lifetime replacement warranty. Note: Warranty claim link is permanently disabled.",
    reviews: [
      { name: "Karen M.", rating: 1, comment: "Literally paid $99 for an empty envelope." },
      { name: "Seller Response", rating: 5, comment: "It is invisible as advertised thank you." }
    ]
  },
  {
    id: 3,
    title: "RGB TACTICAL BANANA STAND",
    cardPrice: "$34.50",
    detailPrice: "$12.00",
    checkoutPrice: "$75.00",
    rating: "★★★★☆ (4.2)",
    stockStatusColor: "#ffff00", // Yellow ambiguous stock
    stockLabel: "",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&auto=format&fit=crop&q=60",
    isBrokenImage: false,
    viewingCount: 8,
    description: "SYNC YOUR FRUIT STORAGE WITH YOUR CPU TEMPERATURE USING 16.8 MILLION CHROMA LIGHTING EFFECTS.",
    contradiction: "Fits bananas of all sizes. DOES NOT FIT CURVED BANANAS.",
    reviews: [
      { name: "Gamer99", rating: 5, comment: "My bananas get 144 FPS now." }
    ]
  },
  {
    id: 4,
    title: "Hydro-Powered Cyber-Toothbrush",
    cardPrice: "$5.99",
    detailPrice: "$59.99",
    checkoutPrice: "$120.00",
    rating: "★★★☆☆ (3.0)",
    stockStatusColor: "#00ff00", // Green means out of stock
    stockLabel: "",
    image: "https://images.unsplash.com/photo-1559591937-e58af10079c3?w=400&auto=format&fit=crop&q=60",
    isBrokenImage: false,
    viewingCount: 99,
    description: "Cleans teeth at 45,000 RPM using direct hydroelectric turbine pressure.",
    contradiction: "Ultra gentle for sensitive teeth. Requires 240V industrial 3-phase wall outlet in your bathroom.",
    reviews: [
      { name: "Dr. Smile", rating: 2, comment: "Blew a fuse in my entire neighborhood." }
    ]
  }
];
