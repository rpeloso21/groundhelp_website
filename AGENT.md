# GroundHelp Project — Agent Handover & Current State

**Generated:** 2026-10-28  
**Project Path:** `C:\Users\rpelo\OneDrive\Documents\GroundHelp Project`  
**Git Branch:** `develop`  
**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, Canvas-Confetti, Netlify Forms.

---

## 1. Project Overview & Context
This is a custom commercial & residential website for **GroundHelp**, a property care and landscaping company based in **Lexington, SC** (serving Lexington, Lake Murray, Irmo, Chapin, West Columbia, and the Midlands).

Key brand divisions:
1. **Lawn Maintenance & Landscape Care:** Precision mowing, edging, SC long-leaf pine straw, mulch, aeration.
2. **Exterior Cleaning:** Low-pressure soft house wash, high-flow concrete pressure washing, gutter clearing.
3. **Holiday / Christmas Lights (Seasonal):** Custom commercial-grade LED lighting design, roofline installation, maintenance, takedown, and storage.
4. **Commercial & HOA:** Common-area mowing, retention pond edging, itemized RFP bids ($2M liability insured).
5. **GroundHelpClean (Residential Interior Maid Service):** Dedicated indoor crew (strictly separate from lawn crew) — **Currently being transitioned to "Coming Soon / Join Launch Waitlist"**.

---

## 2. Status of the Current Batch of User Requests

### Request 1: Relocate the "3+ Neighbors" Route Discount Block
* **User Goal:** Move the 3+ neighbors discount block outside of the Commercial & HOA block on the homepage. Place it in the Lawncare Services section or as a callout bubble.
* **Status:** **COMPLETED** in `src/pages/HomePage.jsx`.
  - Added a dedicated "Neighborhood Route Discount (Save 10% – 15%)" callout banner inside Section 2 (Lawncare) under the service cards.
  - Refocused Section 6 exclusively on Commercial grounds and HOA board RFP proposals with $2M liability badges.

### Request 2: Unify Company Name to "GroundHelp" (One Word)
* **User Goal:** Ensure that "GroundHelp" is spelled as one word everywhere (remove instances of "Ground Help" with a space).
* **Completed Edits:**
  - `index.html`: `<title>` and `<meta description>` updated.
  - `src/data/companyConfig.js`: `name: "GroundHelp"`, `christmasLights.description` updated.
  - `src/components/Navbar.jsx`: Logo alt text and aria-labels updated.
  - `src/components/Footer.jsx`: Alt text and copyright (`GroundHelp LLC`) updated.
  - `src/components/BeforeAfterSlider.jsx`: `afterLabel = 'After GroundHelp'` updated.
  - `src/components/InstantQuoteCard.jsx`: Confirmation message updated.
* **Remaining Edits (Quick Search & Replace):**
  - `src/pages/AboutPage.jsx`:
    - Line 27: `About Ground Help` ➔ `About GroundHelp`
    - Line 60: `Ground Help was built to solve this entire challenge...` ➔ `GroundHelp was built to solve this entire challenge...`
    - Line 121: `Experience the Ground Help Difference` ➔ `Experience the GroundHelp Difference`
  - `src/pages/ContactPage.jsx`:
    - Line 25: `Get in Touch with Ground Help` ➔ `Get in Touch with GroundHelp`
    - Line 140: `<span>Send Message to Ground Help</span>` ➔ `<span>Send Message to GroundHelp</span>`
    - Line 163: `Thank you for reaching out to Ground Help.` ➔ `Thank you for reaching out to GroundHelp.`
  - `src/pages/CommercialHoaPage.jsx`:
    - Line 196: `Thank you for considering Ground Help for {rfpForm.organizationName}.` ➔ `Thank you for considering GroundHelp for {rfpForm.organizationName}.`
  - `src/pages/HomePage.jsx`:
    - Line 317: `Take the hazard and hassle out of the holidays. Ground Help provides complete...` ➔ `Take the hazard and hassle out of the holidays. GroundHelp provides complete...`
    - Line 357: `Hear from local residents and HOA presidents who rely on Ground Help.` ➔ `Hear from local residents and HOA presidents who rely on GroundHelp.`
  - `src/pages/GroundHelpCleanPage.jsx`:
    - Line 327: `The Ground Help Bundle Advantage` ➔ `The GroundHelp Bundle Advantage`
    - Line 333: `When you use Ground Help for your weekly or bi-weekly lawn care...` ➔ `When you use GroundHelp for your weekly or bi-weekly lawn care...`

---

### Request 3: Update GroundHelpClean to "Coming Soon"
* **User Goal:** Update GroundHelpClean across the site to "Coming Soon" because the crew is not currently active / up and running.
* **Completed Edits:**
  - `src/data/companyConfig.js`:
    - `services.groundHelpClean`: added `isComingSoon: true`, `badge: "Coming Soon"`, updated `headline`, `startingAt: "Coming Soon (Join Waitlist)"`, updated `description` and FAQ answer.
  - `src/components/Navbar.jsx`:
    - Nav menu badge changed to `"Coming Soon"` (with amber accent styling).
    - Dropdown menu item badge changed to `"Coming Soon"`.
    - Mobile drawer badge changed to `"Coming Soon"`.
  - `src/components/Footer.jsx`:
    - Link changed to `GroundHelpClean (Coming Soon)`.
  - `src/components/GroundHelpCleanBanner.jsx`:
    - Top badge changed to `"🚀 Coming Soon • Independent Residential Interior Division"`.
    - Headline changed to `"Coming Soon: GroundHelpClean"`.
    - Body text updated to explain crew is preparing & training.
    - Buttons updated to `"Learn About GroundHelpClean"` and `"Join Launch Waitlist"`.
    - Rate footer changed to `"Coming Soon — Waitlist Open"`.
  - `src/components/InstantQuoteCard.jsx`:
    - Select option changed to `GroundHelpClean (Coming Soon - Join Waitlist)`.
    - Bundle checkbox changed to `Bundle GroundHelpClean (Coming Soon - Join Waitlist)` and description reflects reserving launch discount.
* **Remaining Edits in `src/pages/GroundHelpCleanPage.jsx`:**
  - Hero section was updated to "Coming Soon • GroundHelpClean Interior Division" and button set to "Join Launch Waitlist".
  - Lines 177-181, 218-222, 259-263: Update tier action buttons to `"Join Waitlist (Recurring)"`, `"Join Waitlist (Deep Clean)"`, `"Join Waitlist (Move-In/Out)"`.
  - Line 338-342: Bundle banner button changed to `"Join Waitlist & Save 10%"`.

---

## 3. How to Pick Up and Complete the Task

### Step 1: Complete Remaining Text Replacements
1. In `src/pages/AboutPage.jsx`, replace `Ground Help` with `GroundHelp` (lines 27, 60, 121).
2. In `src/pages/ContactPage.jsx`, replace `Ground Help` with `GroundHelp` (lines 25, 140, 163).
3. In `src/pages/CommercialHoaPage.jsx`, replace `Ground Help` with `GroundHelp` (line 196).
4. In `src/pages/HomePage.jsx`, replace `Ground Help` with `GroundHelp` (lines 317, 357).
5. In `src/pages/GroundHelpCleanPage.jsx`:
   - Replace `Ground Help` with `GroundHelp` (lines 327, 333).
   - Update tier buttons from "Schedule / Book" to "Join Waitlist" (lines 180, 221, 262, 341).

### Step 2: Verify Build
Run the following in PowerShell:
```powershell
Set-Location "C:\Users\rpelo\OneDrive\Documents\GroundHelp Project"
npm run build
```
Verify that Vite builds cleanly with 0 errors.

### Step 3: Git Status & Review
Check `git status` and `git diff` to ensure all changes match the stakeholder's instructions:
```powershell
git status
```
Notify the user that the updates are verified, built, and ready for their commit and push.
