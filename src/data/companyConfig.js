export const companyConfig = {
  name: "Ground Help",
  brandName: "GroundHelp",
  tagline: "Professional Lawn Care, Unmatched Results.",
  subTagline: "Reliable, recurring lawn maintenance, seasonal landscape care, exterior pressure washing, and dedicated residential cleaning across Lexington, SC & Lake Murray.",
  city: "Lexington",
  state: "SC",
  phone: "803-200-1170",
  rawPhone: "8032001170",
  email: "info@GroundHelp.com",
  address: "Tulip way, Lexington, South Carolina 29072",
  hours: "Monday – Friday: 7:00 AM – 6:30 PM | Saturday: 8:00 AM – 2:00 PM",
  serviceAreas: [
    "Lexington",
    "Lake Murray",
    "Columbia Midlands",
    "Irmo",
    "Chapin",
    "West Columbia",
    "Red Bank",
    "Gilbert"
  ],
  stats: [
    { label: "Active Yards Serviced", value: "450+" },
    { label: "5-Star Local Reviews", value: "180+" },
    { label: "Lexington SC Local", value: "100%" },
    { label: "Dedicated Crews", value: "2 Divisions" }
  ],
  services: {
    lawnMaintenance: {
      id: "lawn-maintenance",
      title: "Routine Lawn Maintenance",
      shortTitle: "Routine Mowing",
      category: "Lawn Care",
      headline: "Precision mowing, crisp edging, and clean blow-offs every single visit.",
      description: "Our recurring lawn service ensures your Bermuda, Centipede, or Zoysia turf remains immaculate year-round. Includes precision rotary mowing, string-trimming obstacles, crisp sidewalk and driveway vertical blade edging, and full debris blow-off.",
      frequency: ["Weekly", "Bi-Weekly"],
      features: [
        "Precision mowing at optimal seasonal turf heights",
        "Crisp 90-degree vertical blade edging along concrete borders",
        "String trimming along fence lines, trees, and obstacles",
        "Debris blow-off from driveways, patios, and walkways",
        "Regular blade sharpening for clean cuts and disease prevention"
      ],
      startingAt: "$45 / visit"
    },
    landscapeCare: {
      id: "landscape-seasonal",
      title: "Landscape & Seasonal Care",
      shortTitle: "Fertilization & Seasonal Care",
      category: "Landscape Care",
      headline: "Keep your beds fresh and your turf nourished through every Midlands season.",
      description: "Comprehensive seasonal property maintenance tailored specifically to South Carolina soil. From long-leaf pine straw and double-shredded hardwood mulch refresh to seasonal pruning, weed control, and core aeration.",
      features: [
        "Fresh premium South Carolina long-leaf pine straw & mulch installation",
        "Ornamental shrub, hedge, and small tree trimming",
        "Seasonal flower bed weeding and pre-emergent defense",
        "Core aeration & warm-season nutrient conditioning",
        "Spring & fall leaf cleanouts and storm yard cleanups"
      ],
      startingAt: "$120 / service"
    },
    exteriorCleaning: {
      id: "exterior-cleaning",
      title: "Exterior Cleaning & Pressure Washing",
      shortTitle: "Soft Washing & Pressure Wash",
      category: "Exterior Cleaning",
      headline: "Safely restore siding, driveways, patios, and gutters without damage.",
      description: "South Carolina humidity causes stubborn green algae and black mold on vinyl, stucco, and concrete. Our commercial soft-washing system safely eliminates mildew without high-pressure surface damage, while flat-surface washers revive driveways and patios.",
      features: [
        "Low-pressure house soft washing (eliminates algae, mildew, and spider webs)",
        "High-flow surface pressure cleaning for concrete driveways, sidewalks & patios",
        "Gutter debris extraction and exterior downspout flush",
        "Pool deck, patio paver, and retaining wall restoration",
        "Biodegradable, plant-safe cleaning agents"
      ],
      startingAt: "$175 / house wash"
    },
    groundHelpClean: {
      id: "ground-help-clean",
      brandName: "GroundHelpClean",
      title: "Residential Interior Cleaning",
      shortTitle: "GroundHelpClean",
      category: "Interior Cleaning",
      isDedicatedCrew: true,
      badge: "Dedicated Cleaning Crew",
      headline: "Total home care from the yard to the living room with our specialized indoor team.",
      description: "GroundHelpClean operates as a dedicated, fully independent residential cleaning division. Never the lawn crew — your home is cared for by vetted, trained indoor cleaning specialists with hospital-grade vacuums and eco-friendly supplies.",
      crewPledge: "100% separate indoor division. Background-checked, bonded, insured, and meticulously trained cleaning professionals.",
      bundleDiscount: "Save 10% on your recurring lawn care when you bundle bi-weekly or monthly GroundHelpClean residential maid service!",
      features: [
        "Dedicated indoor cleaning specialists (strictly separate from yard crews)",
        "Recurring maid service (weekly, bi-weekly, or monthly)",
        "Deep kitchen & bathroom disinfection & detailing",
        "Move-in / Move-out and seasonal deep cleans",
        "HEPA-filter filtration vacuums & pet-safe, non-toxic sanitizers",
        "Consistent cleaning crews who know your personal preferences"
      ],
      startingAt: "$135 / clean"
    },
    commercialHoa: {
      id: "commercial-hoa",
      title: "Commercial & HOA Maintenance",
      shortTitle: "Commercial & HOA",
      category: "Commercial & HOA",
      headline: "Reliable grounds management for business parks, retail, and neighborhood communities.",
      description: "We partner with Lexington property managers and HOA boards to keep community entrances, common areas, clubhouse amenities, and commercial lots looking their absolute best with reliable, scheduled commercial service and group neighborhood opportunities.",
      features: [
        "HOA common area mowing, edging, and retention pond trimming",
        "Clubhouse and community pool grounds maintenance",
        "Commercial retail and office park grounds upkeep",
        "Neighborhood Group Rates (bulk discounts for adjacent homeowners)",
        "Detailed digital billing, proof-of-work reporting, and dedicated account manager"
      ],
      startingAt: "Custom Bid / Contract"
    }
  },
  testimonials: [
    {
      name: "Marcus & Sarah Jenkins",
      neighborhood: "Golden Hills, Lexington, SC",
      service: "Weekly Lawn Care & GroundHelpClean Bundle",
      quote: "Having Ground Help manage our Bermuda lawn while their GroundHelpClean crew handles our bi-weekly house cleaning is a game changer. The lawn lines are razor sharp and having two professional crews we trust on one simple bill is unmatched.",
      rating: 5
    },
    {
      name: "Brenda T.",
      neighborhood: "Lake Murray / Chapin Area",
      service: "House Soft Wash & Pine Straw Installation",
      quote: "Our siding had that awful Midlands green algae buildup from the summer humidity. Ground Help soft washed the entire two-story house and refreshed our pine straw beds in a single morning. Looks like a brand new home!",
      rating: 5
    },
    {
      name: "Dave R., HOA President",
      neighborhood: "Whiteford Community, Lexington",
      service: "HOA Common Grounds & Neighborhood Program",
      quote: "Ground Help has been maintaining our neighborhood entrances and common area parks for over two seasons. Prompt, professional, and our residents love the neighborhood group rate discount.",
      rating: 5
    }
  ],
  faqs: [
    {
      question: "Are your lawn care and indoor cleaning crews the same people?",
      answer: "No, absolutely not! GroundHelpClean is a dedicated indoor division with specialized residential cleaning technicians. They drive separate vehicles, use hospital-grade indoor HEPA equipment and non-toxic cleaning products, and are specifically trained in meticulous interior home care. You get the convenience of one trusted local company with dedicated specialists for each job."
    },
    {
      question: "How does the 'Instant Quote' work?",
      answer: "Our online estimator provides a transparent ballpark price range based on your property size, requested services (mowing, soft wash, interior clean, pine straw), and service frequency. Once submitted, our team confirms your specific yard details using satellite measurements and sends an exact locked-in quote within a few business hours."
    },
    {
      question: "Do I need to sign a long-term contract for recurring lawn maintenance?",
      answer: "No long-term lock-in required! Our recurring residential lawn maintenance is pay-as-you-go with simple card on file billing after each visit. You can pause or cancel anytime with reasonable notice."
    },
    {
      question: "What types of turf do you service in the Lexington and Columbia area?",
      answer: "We specialize in South Carolina warm-season grasses including Bermuda (Tifway 419, Celebration), Centipede, Zoysia (Zeon, Empire), and St. Augustine, adjusting blade cutting heights seasonally to protect root health during hot Midlands summers."
    },
    {
      question: "What is your HOA Neighborhood Group Discount?",
      answer: "When three or more homeowners in the same subdivision or cul-de-sac book recurring lawn care or pressure washing together on the same service day, we pass the route efficiency savings directly to you with 10% to 15% off regular rates."
    }
  ]
};
