import { CheckCircle, Gift, Heart, ShieldCheck, Sun, Truck } from "lucide-react";

export const NAV_LINKS = [
  { name: "Why Us", href: "#why-special" },
  { name: "Products", href: "#products" },
  { name: "Benefits", href: "#benefits" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export const FEATURES = [
  {
    title: "100% Authentic",
    description: "Directly sourced from the sacred soils of Vrindavan, Nandgaon, and Govardhan.",
    icon: ShieldCheck,
  },
  {
    title: "Hand-Collected",
    description: "Gathered by Brajwasis with utmost devotion and purity during Brahma Muhurta.",
    icon: Heart,
  },
  {
    title: "Spiritually Blessed",
    description: "Sanctified through chanting and offering to Shri Radha Krishna before packaging.",
    icon: Sun,
  },
  {
    title: "Premium Purity",
    description: "Cleaned, sieved, and packed naturally without any chemical processing.",
    icon: CheckCircle,
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Sacred Braj Raj (Dust of Braj)",
    price: "₹299",
    originalPrice: "₹499",
    description: "Pure dust from the holy land of Vrindavan. Perfect for Tilak and daily worship.",
    image: "https://picsum.photos/id/1047/400/400", // Placeholder for earthy texture
    tags: ["Best Seller", "For Tilak"],
  },
  {
    id: 2,
    name: "Original Vrindavan Tulsi Mala",
    price: "₹551",
    originalPrice: "₹899",
    description: "Hand-carved Tulsi beads from authentic Braj Tulsi plants. Ideal for Japa.",
    image: "https://picsum.photos/id/28/400/400", // Placeholder for nature/wood
    tags: ["Premium", "For Japa"],
  },
  {
    id: 3,
    name: "Divine Braj Combo",
    price: "₹799",
    originalPrice: "₹1398",
    description: "A blessed combination of Braj Raj and Tulsi Mala for complete spiritual protection.",
    image: "https://picsum.photos/id/360/400/400", // Placeholder for flowers/combo
    tags: ["Gift Pack", "High Demand"],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Radhika Sharma",
    location: "Mumbai",
    text: "I could feel the divine vibration the moment I opened the packet. The Braj Raj is so pure and soft. Truly brings Vrindavan to my home.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Verma",
    location: "Delhi",
    text: "Authentic Tulsi beads. I have been looking for genuine beads for my chanting, and these are perfect. The packaging was very secure.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sita Devi",
    location: "Bangalore",
    text: "A beautiful gift for my parents. They were moved to tears holding the sacred dust of Braj. Thank you for this service.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Is the Braj Raj really from Vrindavan?",
    answer: "Yes, absolutely. We personally collect the sacred dust from specific holy spots in Braj (Vrindavan, Govardhan, Nandgaon) ensuring it is 100% authentic.",
  },
  {
    question: "How do I use Braj Raj?",
    answer: "You can apply it as a Tilak on your forehead daily, use it during meditation, or keep it in your altar for Vastu purification.",
  },
  {
    question: "Is the Tulsi Mala suitable for wearing?",
    answer: "Yes, our Tulsi beads are smooth and polished naturally, making them comfortable for both wearing around the neck and for Japa (chanting).",
  },
  {
    question: "How long does shipping take?",
    answer: "We ship within 24 hours of your order. Delivery typically takes 3-5 business days across India depending on your location.",
  },
];
