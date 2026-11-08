# GroundHelp Project — Agent Handover & Current State

**Updated:** 2026-11-08  
**Project Path:** `C:\Users\rpelo\OneDrive\Documents\GroundHelp Project`  
**Git Branch:** `develop`  
**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React, Canvas-Confetti, Netlify Forms, Supabase Cloud Database.

---

## 1. Project Overview & Context
This is a custom commercial & residential website for **GroundHelp**, a property care and landscaping company based in **Lexington, SC** (serving Lexington, Lake Murray, Irmo, Chapin, West Columbia, and the Midlands).

---

## 2. Recent Major Deliverables Completed

### A. Corrected Brand Logo Integration
* Source file: `stock_images/Logos/GroundHelp-Corrected.jpg` (fixes the kerning between 'n' and 'd' in "GroundHelp").
* Re-generated transparent web assets in `public/images/`:
  - `groundhelp-logo-dark.png`: Brand lime green emblem (`#8ce03f`) with crisp white text for the dark Navbar and Footer (`#141f17`).
  - `groundhelp-logo-light.png`: Dark forest green version for light backgrounds.
  - `groundhelp-logo-forest.png`: Full forest green version.
  - `groundhelp-icon-green.png`: Favicon / icon crop.

### B. Updated Official Pricing Structure (From Owner's Sheet: `Website Price Ranges.xlsx`)
* **Routine Lawn Maintenance (Per Visit):**
  - Small (< 0.25 acre): Weekly **$45 – $55** | Bi-Weekly **$54 – $66** (1.2x)
  - Average (0.25 – 0.50 acre): Weekly **$56 – $76** | Bi-Weekly **$67 – $91**
  - Large (0.50 – 1.0 acre): Weekly **$95 – $120** | Bi-Weekly **$114 – $144**
  - Estate (1.0+ acre): Weekly **$121 – $135** | Bi-Weekly **$145 – $162**
* **Landscape & Seasonal Care:** Small ($150–$270), Average ($275–$495), Large ($500–$750), Estate (Estimate Only).
* **Estimate-Only Services:**
  - **Exterior Soft Washing:** Min. charge $150 (flat surfaces) / $275 (house wash). Form dynamically collects Stories, Heated SqFt, Algae Condition, and Flat Surfaces.
  - **Commercial & HOA:** Itemized proposal & walkthrough required.
  - **Christmas Lights:** Custom commercial LED design required.
  - **Estate Landscaping (1+ Acre):** Walkthrough required.
* **GroundHelpClean:** Coming Soon / Waitlist mode ($115–$135 / $136–$159 weekly/bi-weekly for small, etc.).

### C. Team Bios & Founder Story (`src/pages/AboutPage.jsx`)
* **Photos integrated in `public/images/`:** `co-founder-nick.png`, `co-founder-alejandra.png`, `general-manager-billy.jpg`, `crew-leader-joshua.jpg`.
* **"Our Story" Section:** Features Nick Stevens' personal founder journey (mowing lawns for dirt bikes, construction project management, relocating to SC to prioritize family, and founding GroundHelp to set a higher standard). Includes featured pull-quote.
* **"Meet Our Team" Cards:** Nick Stevens (Co-Founder), Alejandra Stevens (Co-Founder & Director of Safety), Billy (General Manager), Joshua (Crew Leader).

### D. Real-Time Cloud Analytics & Owner Dashboard (Supabase)
* **Supabase Project:** URL `https://eriqlyoonxedhtmilpxp.supabase.co`, key `sb_publishable_3RjXRTNMlmKAztZyxhfqLQ_2Ckh4M4q` (in `.env` and `src/utils/supabaseClient.js`).
* **Tables:** `site_events` (traffic/page views) and `quote_leads` (live customer quote submissions).
* **Zero pre-seeded or fake data:** 100% authentic live metrics.
* **Owner Dashboard:** Access via URL hash `/#admin` or `/#dashboard` or footer "Owner Portal" link. PIN: `1234`.

---

## 3. Development & Build Commands
* **Vite Build:**
  ```powershell
  Set-Location "C:\Users\rpelo\OneDrive\Documents\GroundHelp Project"
  npm run build
  ```
* **Dev Server:**
  ```powershell
  Set-Location "C:\Users\rpelo\OneDrive\Documents\GroundHelp Project"
  npm run dev -- --host 127.0.0.1 --port 3000
  ```
