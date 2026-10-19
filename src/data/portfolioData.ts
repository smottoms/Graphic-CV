export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "Motion Graphics" | "Event Design" | "Brand Identity" | "Social & Digital";
  year: string;
  summary: string;
  challenge: string;
  outcome: string;
  deliverables: string[];
  tools: string[];
  palette: string[];
  featuredMetric: string;
  aspectType: "motion" | "editorial" | "branding" | "event";
}

export const portfolioData = {
  name: "Toms Johnson",
  firstName: "Toms",
  lastName: "Johnson",
  role: "Graphic & Motion Graphic Designer",
  pillars: ["CREATIVE", "VISUALS", "BRANDS", "STORIES"],
  scriptWords: ["Design", "Motion", "Create"],
  aboutMe:
    "Graphic and motion graphic designer experienced in creating visual content for brands, events and digital communication. Focused on clear layouts, visual storytelling and engaging design.",
  profile:
    "Creative designer with experience in graphic design and motion graphics, including company and event-related visual content. Interested in producing polished, engaging visuals for brands and digital platforms.",
  contact: {
    phone: "7400251288",
    phoneFormatted: "+91 74002 51288",
    email: "tomsjohnson56@gmail.com",
    location: "Andheri East, Mumbai",
    availability: "Available for Full-Time & Select Freelance Projects",
  },
  coreSkills: [
    {
      name: "Graphic Design",
      icon: "pen-tool",
      level: 96,
      description: "Key visuals, print collateral, marketing campaigns, and high-impact brand communications.",
    },
    {
      name: "Motion Graphics",
      icon: "play-square",
      level: 94,
      description: "Kinetic typography, logo animations, explainer reels, and dynamic digital video assets.",
    },
    {
      name: "Branding & Visual Identity",
      icon: "layers",
      level: 92,
      description: "Cohesive brand systems, logomarks, color architecture, and visual guidelines.",
    },
    {
      name: "Social Media Creatives",
      icon: "instagram",
      level: 95,
      description: "Scroll-stopping carousels, animated stories, reels packaging, and digital ad suites.",
    },
    {
      name: "Event Design",
      icon: "calendar",
      level: 90,
      description: "Bespoke event branding, stage backdrops, environmental graphics, and invitation suites.",
    },
    {
      name: "Visual Storytelling",
      icon: "lightbulb",
      level: 93,
      description: "Concept-driven narratives that translate complex messages into memorable visual journeys.",
    },
    {
      name: "Layout & Typography",
      icon: "type",
      level: 95,
      description: "Editorial grids, expressive typographic hierarchy, presentations, and publication design.",
    },
  ],
  experiences: [
    {
      period: "2024 – 2026",
      role: "GRAPHIC DESIGNER & MOTION GRAPHIC DESIGNER",
      company: "Zilicon Network Solution",
      type: "Full-Time Role",
      location: "Mumbai",
      highlights: [
        "Created graphic and motion-based visual content for company communication and digital use.",
        "Supported visual design needs with attention to layout, consistency and brand presentation.",
      ],
      tags: ["Motion Graphics", "Corporate Communication", "Digital Campaigns", "Brand Consistency"],
    },
    {
      period: "2021 – 2023",
      role: "FREELANCE GRAPHIC DESIGNER",
      company: "Event projects — Knot with Style and Vama",
      type: "Freelance & Event Direction",
      location: "Mumbai",
      highlights: [
        "Worked on freelance graphic design projects, including creative support for event-related work.",
      ],
      tags: ["Event Identity", "Print & Signage", "Bespoke Invitations", "Visual Styling"],
    },
  ],
  additionalStrengths: [
    {
      title: "Creative thinking",
      icon: "lightbulb",
      detail: "Ideating fresh visual concepts tailored to audience emotion and brand tone.",
    },
    {
      title: "Attention to detail",
      icon: "target",
      detail: "Precision in kerning, grid alignment, color accuracy, and keyframe easing.",
    },
    {
      title: "Adaptability",
      icon: "users",
      detail: "Seamlessly shifting between corporate tech visuals and luxury event aesthetics.",
    },
    {
      title: "Visual problem-solving",
      icon: "cog",
      detail: "Distilling dense ideas into clear, structured layouts that communicate effortlessly.",
    },
    {
      title: "Collaboration",
      icon: "handshake",
      detail: "Partnering closely with marketing teams, event planners, and stakeholders.",
    },
  ],
  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Malayalam", proficiency: "Native / Bilingual Proficiency" },
  ],
  toolsAndSoftware: [
    "Adobe After Effects",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe InDesign",
    "Figma",
    "Cinema 4D / Motion Suite",
    "Typography & Grid Systems",
  ],
  projects: [
    {
      id: "zilicon-motion-system",
      title: "Zilicon Digital & Motion Identity Suite",
      client: "Zilicon Network Solution",
      category: "Motion Graphics",
      year: "2025",
      summary:
        "Comprehensive motion graphics system, animated product explainers, and corporate communication templates built to unify Zilicon's digital presence.",
      challenge:
        "Zilicon Network Solution needed a cohesive visual language across internal communications, social channels, and client-facing digital presentations that felt modern, authoritative, and kinetic.",
      outcome:
        "Established a modular motion toolkit and layout grid system that accelerated campaign turnaround while elevating brand consistency across all digital touchpoints.",
      deliverables: [
        "Animated Brand Stinger & Lower Thirds",
        "Product Explainer Motion Reels",
        "Corporate Presentation & Layout System",
        "Social Media Kinetic Templates",
      ],
      tools: ["After Effects", "Illustrator", "Premiere Pro"],
      palette: ["#1C1917", "#9E7B56", "#DDBEA0", "#F5F2EB"],
      featuredMetric: "40+ Motion & Digital Assets",
      aspectType: "motion",
    },
    {
      id: "knot-with-style-events",
      title: "Knot with Style — Bespoke Event Visuals",
      client: "Knot with Style",
      category: "Event Design",
      year: "2023",
      summary:
        "End-to-end visual storytelling, monogram branding, environmental stage graphics, and print collateral for luxury curated events.",
      challenge:
        "Each celebration required a custom visual identity that harmonized physical decor, print touchpoints, and digital save-the-date motion invites under tight event deadlines.",
      outcome:
        "Delivered cohesive event suites with custom typography, tactile print layouts, and animated digital invitations that set the tone for unforgettable guest experiences.",
      deliverables: [
        "Custom Event Monograms & Crests",
        "Animated Save-the-Date Reels",
        "Welcome Signage & Stage Backdrops",
        "Editorial Itinerary & Menu Suites",
      ],
      tools: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
      palette: ["#2A211B", "#B68D65", "#E8D5C0", "#FAF6F0"],
      featuredMetric: "Bespoke Luxury Event Suites",
      aspectType: "event",
    },
    {
      id: "vama-cultural-showcase",
      title: "Vama — Event & Lifestyle Visual Campaign",
      client: "Vama Events",
      category: "Event Design",
      year: "2022",
      summary:
        "Art direction and graphic collateral for Vama's curated lifestyle and cultural event productions, blending warm editorial typography with expressive layouts.",
      challenge:
        "Translating the warmth and craftsmanship of live cultural gatherings into both large-format venue graphics and mobile-first social teasers.",
      outcome:
        "Created a versatile visual language spanning venue wayfinding, digital countdowns, and post-event highlight packaging.",
      deliverables: [
        "Event Key Visuals & Posters",
        "Venue Wayfinding & Environmental Graphics",
        "Social Media Teaser Carousels",
        "Sponsor & Program Booklets",
      ],
      tools: ["Illustrator", "Photoshop", "InDesign"],
      palette: ["#1F1B18", "#8F6843", "#D7B38C", "#F7F3EE"],
      featuredMetric: "360° Event Print & Digital",
      aspectType: "editorial",
    },
    {
      id: "kinetic-brand-stories",
      title: "Kinetic Typography & Social Reel Series",
      client: "Digital Brand Campaigns",
      category: "Social & Digital",
      year: "2025",
      summary:
        "High-retention short-form motion graphics and editorial carousel systems engineered for brand storytelling across Instagram, LinkedIn, and YouTube Shorts.",
      challenge:
        "Capturing audience attention within the first 1.5 seconds of social feeds while maintaining refined typographic hierarchy and brand clarity.",
      outcome:
        "Combined smooth easing curves, bold editorial grids, and tactile textures to transform static announcements into high-engagement motion stories.",
      deliverables: [
        "Kinetic Typography Reels",
        "Multi-Slide Seamless Carousels",
        "Animated Infographic Loops",
        "Digital Ad Banner Suites",
      ],
      tools: ["After Effects", "Figma", "Photoshop", "Illustrator"],
      palette: ["#141210", "#A6825B", "#E5C9AC", "#FFFFFF"],
      featuredMetric: "High-Retention Motion Reels",
      aspectType: "motion",
    },
    {
      id: "lumina-brand-architecture",
      title: "Aura & Form — Visual Identity & Packaging",
      client: "Concept & Brand Studio Work",
      category: "Brand Identity",
      year: "2024",
      summary:
        "Minimalist warm-bronze visual identity system exploring the interplay between architectural serif/sans typography, tactile packaging, and motion logos.",
      challenge:
        "Crafting a timeless visual identity that scales effortlessly from a 32px mobile avatar to embossed packaging and full-screen motion bumpers.",
      outcome:
        "Produced a comprehensive brand book covering grid construction, typography pairing, color hierarchy, and motion behavior principles.",
      deliverables: [
        "Logo System & Motion Mark",
        "Typography & Grid Guidelines",
        "Packaging & Stationery Mockups",
        "Brand Book Layout",
      ],
      tools: ["Illustrator", "InDesign", "Photoshop", "After Effects"],
      palette: ["#1C1917", "#9E7B56", "#C8A987", "#FAF8F5"],
      featuredMetric: "Complete Identity System",
      aspectType: "branding",
    },
    {
      id: "zilicon-annual-visual-report",
      title: "Corporate Visual Storytelling & Editorial Deck",
      client: "Zilicon Network Solution",
      category: "Brand Identity",
      year: "2024",
      summary:
        "Executive communication system and interactive visual presentation translating complex network metrics into clear, compelling diagrams and layouts.",
      challenge:
        "Turning dense technical and operational information into an engaging narrative for stakeholders without sacrificing precision.",
      outcome:
        "Designed custom iconography, clean data visualizations, and modular slide architectures used across company-wide communications.",
      deliverables: [
        "Custom Iconography & Infographic System",
        "Executive Presentation Layouts",
        "Animated Data Callouts",
        "Internal Brand Communication Kit",
      ],
      tools: ["Illustrator", "InDesign", "After Effects"],
      palette: ["#181615", "#9E7B56", "#DCC0A3", "#F4EFE8"],
      featuredMetric: "Modular Visual System",
      aspectType: "editorial",
    },
  ] as ProjectItem[],
};

