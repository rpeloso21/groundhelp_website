# Ground Help Website — Project Blueprint & Execution Plan

**Business Name:** Ground Help  
**Location:** Lexington, SC (Serving Lake Murray, Lexington, Columbia Midlands, Irmo, Chapin & West Columbia)  
**Project Path:** `C:\Users\rpelo\OneDrive\Documents\GroundHelp Project`  
**Tech Stack:** React 18 + Vite + Tailwind CSS + Lucide React (Icons)

---

## 1. Visual & Brand Design Alignment (Matching Mockups)

Based on the provided reference mockups, the website implements this exact visual language:

- **Color Palette:**
  - **Primary Brand Green:** `#8ce03f` / `#74c043` (Vibrant lime / spring green used for primary CTAs like *"Get a Free Quote"*, card accents, and leaf branding).
  - **Deep Charcoal / Forest Slate:** `#141f17` (Header bar background, dark primary buttons like *"Request Quote"*, and high-contrast footers).
  - **Clean Surface Background:** `#f8faf8` / `#f3f4f6` (Clean off-white hero and section backgrounds).
  - **Card Surfaces:** `#ffffff` with subtle lime/sage borders (`border-[#8ce03f]/50`) and soft elevation dropshadows.
  - **Text Contrast:** `#0f172a` (Slate 900) for headlines; `#475569` (Slate 600) for body descriptions.
- **Header & Navigation Bar (Mockup 1):**
  - Dark bar with leaf brand icon + **GroundHelp** logo text.
  - Links: *Services (dropdown)*, *About Us*, *Residential (Lawn & Cleaning)*, *Commercial & HOA*, *Contact*.
  - Sticky right CTA button: Bright lime green pill button *"Get a Free Quote"*.
- **Hero Section (Mockup 1):**
  - **Left column:** High-impact bold headline *"Professional Lawn Care, Unmatched Results."*, supporting subtext, and *"Explore Services"* button.
  - **Right column:** High-resolution suburban home with striped green turf, overlaid with the floating **"Instant Quote"** interactive card.
- **Card System & Visuals (Mockup 2):**
  - Section header: *"Complete Lawn Care Solutions"* with descriptive sub-lead.
  - 3-column service cards with rounded corners, custom green-tinted line/vector iconography, concise service descriptions, and lime green *"Learn More"* CTA buttons.

---

## 2. Core Service Pillars & Architecture

The site will structure the stakeholder's priorities into clear, distinct offerings:

| Priority | Offering | Key Highlights & Inclusions |
| :--- | :--- | :--- |
| **Pillar 1** | **Lawn Maintenance** | Recurring weekly/bi-weekly mowing, precision string-trimming, blade edging (sidewalks & driveways), and debris blowing. Clean striped finish. |
| **Pillar 2** | **Landscape & Seasonal Care** | Mulch & South Carolina pine straw installations, seasonal shrub/hedge trimming, weed prevention, spring & fall leaf cleanups, core aeration & overseeding. |
| **Pillar 3** | **Exterior Cleaning** | Low-pressure house soft washing (algae/mildew removal), high-pressure driveway, sidewalk & patio cleaning, and gutter cleanouts. |
| **Pillar 4** | **GroundHelpClean (Residential Cleaning)** | **Distinctly branded section:** Highlighted as a premium *additional service* with a **dedicated, specialized interior cleaning crew** (not the yard crew). Recurring maid service, deep cleans, and move-in/out. Optional combo-bundle discounts when paired with lawn care. |
| **Pillar 5** | **Commercial & HOA Maintenance** | Commercial property upkeep, HOA common area turf management, retention pond clearing, and neighborhood group-rate service programs (volume discounts for neighbors). |

---

## 3. Site Navigation & Multi-Page Structure

We will implement a responsive multi-page layout with smooth client-side routing:

1. **Home (`/`):**
   - Mockup-accurate Hero with floating interactive Instant Quote card.
   - Trust Badges (Lexington local, 100% Satisfaction Guarantee, Fully Insured, 5-Star Rated).
   - *"Complete Lawn Care Solutions"* 3-Card Grid (Mowing, Fertilization/Weed Control, Aeration/Overseeding).
   - Exterior Soft Wash & Pressure Washing Showcase.
   - **GroundHelpClean Feature Banner:** "Meet Our Dedicated Indoor Cleaning Crew" with interior before/after and bundle incentives.
   - Commercial & HOA Group Program preview.
   - Interactive Lawn Care Calendar for Lexington, SC (Warm-season Bermuda, Centipede, Zoysia schedules).
   - Customer Testimonials & FAQ Accordion.
   - Lead Capture Footer with map and Lexington/Lake Murray coverage area.
2. **Lawn & Landscaping (`/services/lawn`):**
   - Recurring maintenance tiers (Basic vs. Full-Care Seasonal).
   - Pine straw & mulch calculator / seasonal cleanup packages.
3. **Exterior Pressure Washing (`/services/exterior`):**
   - House soft wash vs. concrete surface washing comparisons.
   - Gutter debris removal & brightening.
4. **GroundHelpClean (`/services/cleaning`):**
   - Dedicated landing page emphasizing background-checked indoor cleaning specialists, non-toxic products, standard recurring vs deep clean checklists.
5. **Commercial & HOA (`/commercial`):**
   - RFP / bid submission form for property managers and HOA board members.
   - Neighborhood Group Program info (bulk savings when 3+ neighbors book together).
6. **Instant Quote & Contact (`/quote`):**
   - Full interactive estimate calculator and direct Lexington, SC contact details (phone, email, hours).

---

## 4. Key Interactive Features

1. **Hero Instant Quote Card & Multi-Step Estimator:**
   - **Step 1:** Select service(s) (Lawn Maintenance, Landscape Care, Exterior Washing, GroundHelpClean Indoor, Commercial/HOA).
   - **Step 2:** Property size & frequency (e.g., up to 0.25 acre, 0.5 acre, 1+ acre; weekly, bi-weekly, one-time).
   - **Step 3:** Contact details (Name, Email, Phone, Zip Code: 29072, 29073, 29212, etc.).
   - **Output:** Provides an immediate customized ballpark estimate range and saves the lead request with a confirmation notification.
2. **Before / After Visual Sliders:**
   - Interactive before-and-after image slider showing overgrown yard vs. freshly striped lawn, and algae-stained driveway vs. clean concrete.
3. **GroundHelpClean "Bundle & Save" Switcher:**
   - Shows how homeowners in Lexington save 10–15% when pairing outdoor recurring mowing with monthly or bi-weekly interior house cleaning.
4. **Centralized Configuration File (`src/data/companyConfig.js`):**
   - Stores phone `(803) 555-HELP`, email, service areas (Lexington, Lake Murray, Irmo, Chapin, West Columbia), pricing formulas, and business hours in one spot for easy customization.

---

## 5. Phased Implementation Roadmap

- **Phase 1: Project Initialization:**
  - Initialize Vite React project in `C:\Users\rpelo\OneDrive\Documents\GroundHelp Project`.
  - Install Tailwind CSS, `@tailwindcss/forms`, `lucide-react`, and routing utilities.
- **Phase 2: Design System & Config:**
  - Replicate the exact typography, card borders, lime green buttons (`#8ce03f`), and slate header (`#141f17`) from the mockups.
  - Setup `companyConfig.js` with Lexington SC localized details.
- **Phase 3: Hero & Interactive Instant Quote Card:**
  - Build the hero section matching Mockup 1 with the overlay multi-step instant quote widget.
- **Phase 4: Service Components & Dedicated Cleaning Crew:**
  - Build the 3-column card grid matching Mockup 2.
  - Construct the dedicated **GroundHelpClean** indoor crew showcase banner with badge styling.
  - Add Exterior Cleaning (Soft Wash, Pressure Wash, Gutters).
- **Phase 5: Multi-Page Views & Commercial/HOA Portal:**
  - Build Commercial & HOA page with RFP form and neighborhood group discounts.
  - Build About, Contact, and dedicated service detail pages.
- **Phase 6: Testing & Polish:**
  - Verify mobile responsiveness, interactive calculator logic, smooth navigation, and preview locally.
