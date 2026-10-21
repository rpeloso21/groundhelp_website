# Ground Help — Custom Landscaping & Property Care Website

Professional, high-converting website built from scratch for **Ground Help**, based in **Lexington, SC** (serving Lake Murray, Irmo, Chapin, West Columbia, and the Columbia Midlands).

---

## 🎨 Visual System & Mockup Alignment

The website replicates the exact design aesthetic of the client's reference mockups:

1. **Header & Navigation (Mockup 1):**
   - Deep slate/forest header (`#141f17`) with green leaf badge (`#8ce03f`) and crisp typography.
   - Smooth navigation: Services dropdown, About Us, Residential, GroundHelpClean (dedicated indoor crew), Commercial & HOA, and Contact.
   - Action CTA: Bright lime-green pill button **"Get a Free Quote"**.
2. **Hero Section (Mockup 1):**
   - Bold headline: *"Professional Lawn Care, Unmatched Results."*
   - Two-column layout featuring a pristine suburban home with striped green lawn.
   - Floating **"Instant Quote"** interactive card with instant ballpark estimator and lead capture.
3. **Complete Lawn Care Solutions (Mockup 2):**
   - Centered section header: *"Complete Lawn Care Solutions"*.
   - 3-column card grid with rounded thin green borders (`border-[#bbf7d0]`), custom line-art vector SVGs (Mower, Fertilizer Spreader, Aeration Roller), and lime green **"Learn More"** buttons.

---

## ⭐ Stakeholder Priorities Addressed

| Priority | Implementation Details |
| :--- | :--- |
| **Lawn Maintenance** | Dedicated sections & page for recurring mowing, string-trimming, 90-degree vertical edging, and debris blowing. Tailored to Midlands warm-season grasses (Bermuda, Centipede, Zoysia). |
| **Landscape & Seasonal Care** | South Carolina long-leaf pine straw installation, double-shredded hardwood mulch refresh, shrub pruning, weed defense, and core aeration. |
| **Exterior Cleaning** | House low-pressure soft washing (eliminating algae and mildew without high PSI), concrete driveway and patio pressure washing, and gutter cleanouts. |
| **GroundHelpClean (Residential Cleaning)** | **Distinctly branded division:** Emphasized as a dedicated residential cleaning service with a **strictly separate indoor cleaning crew** (background-checked, HEPA vacuums, non-toxic products). Features a **"Bundle & Save 10%"** incentive when paired with recurring lawn care. |
| **Commercial & HOA Maintenance** | Dedicated portal for subdivision entrance maintenance, common area turf, retention pond management, and our **Neighborhood Group Service Program** (10-15% route discount for 3+ neighbors). |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node v20.17.0)
- npm 9+

### Commands
```bash
# Install dependencies (already installed)
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

The dev server runs locally at: **`http://127.0.0.1:3000/`**

---

## 📁 Project Structure

```
"C:\Users\rpelo\OneDrive\Documents\GroundHelp Project\"
├── docs/
│   ├── ground_help_website_plan.md    # Complete architectural plan
│   └── design_references/             # Saved copies of the 2 reference mockups
├── public/
│   └── images/                        # High-resolution reference & background images
├── src/
│   ├── assets/                        # Icons and static assets
│   ├── components/
│   │   ├── Navbar.jsx                 # Dark header with logo & CTA button (Mockup 1)
│   │   ├── Footer.jsx                 # Comprehensive footer with service areas & phone
│   │   ├── InstantQuoteCard.jsx       # Floating estimator widget (Mockup 1)
│   │   ├── ServiceCard.jsx            # 3-card grid with custom line SVGs (Mockup 2)
│   │   ├── GroundHelpCleanBanner.jsx  # Dedicated indoor cleaning crew showcase
│   │   ├── BeforeAfterSlider.jsx      # Interactive comparison slider
│   │   └── QuoteModal.jsx             # Accessible modal for instant estimates
│   ├── data/
│   │   └── companyConfig.js           # Single source of truth for phone, email, prices, FAQs
│   ├── pages/
│   │   ├── HomePage.jsx               # Main landing page matching mockups
│   │   ├── LawnServicesPage.jsx       # Mowing, edging, pine straw, aeration
│   │   ├── ExteriorCleaningPage.jsx   # Soft washing, pressure washing, gutters
│   │   ├── GroundHelpCleanPage.jsx    # Dedicated indoor maid service & checklists
│   │   ├── CommercialHoaPage.jsx      # HOA common grounds & neighborhood group rates
│   │   ├── AboutPage.jsx              # Lexington local team & standards
│   │   └── ContactPage.jsx            # Direct contact info, map areas & message form
│   ├── App.jsx                        # Routing, mobile sticky bar & state
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Tailwind base & custom utilities
├── index.html                         # SEO title, meta & Inter typography
├── package.json                       # Dependencies & build scripts
├── tailwind.config.js                 # Brand colors: #8ce03f, #141f17, etc.
└── vite.config.js                     # Vite build configuration
```

---

## ⚙️ Updating Company Details

To change the phone number, email, service areas, or pricing at any time, edit **`src/data/companyConfig.js`**. All changes propagate across the entire website instantly!
