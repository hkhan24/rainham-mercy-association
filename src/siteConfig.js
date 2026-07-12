// ╔══════════════════════════════════════════════════════════════════╗
// ║  RAINHAM MERCY ASSOCIATION — SITE CONFIGURATION                ║
// ║                                                                ║
// ║  Edit this file to update all dynamic content on the website.  ║
// ║  No need to touch any component code.                          ║
// ╚══════════════════════════════════════════════════════════════════╝

export const siteConfig = {

  // ─── Organisation ─────────────────────────────────────────────────
  name: "Rainham Mercy Association",
  shortName: "RMA",
  acronymExpanded: "Rahma",
  established: 2026,
  tagline: "A Beacon of Mercy in the Heart of Rainham",
  subtitle:
    "Join our growing community for weekly Jummah prayer and special occasions",

  // ─── Jummah Prayer ───────────────────────────────────────────────
  // UPDATE THIS SECTION EVERY WEEK
  jummah: {
    date: "Every Friday",
    startTime: "1:00 PM",
    jamaatTime: "1:30 PM",
    imam: "TBC",
  },

  // ─── Eid Prayer (set to null to hide) ────────────────────────────
  eid: null,

  dailyPrayers: {
    city: "Rainham",
    country: "United Kingdom",
    method: 15, // 15 = Moonsighting Committee Worldwide (Moonsighting.com)
  },

  // ─── Location ────────────────────────────────────────────────────
  location: {
    venueName: "The Oast",
    addressLine1: "Granary Close",
    addressLine2: "Gillingham, Kent",
    postcode: "ME8 7SG",
    mapsQuery:
      "The+Oast,+Granary+Close,+Gillingham,+ME8+7SG",
  },

  // ─── Contact ─────────────────────────────────────────────────────
  contact: {
    whatsapp: { display: "TBC", raw: "" },
    phone: { display: "TBC", raw: "" },
    whatsappGroup: "",
  },

  // ─── Notices ─────────────────────────────────────────────────────
  // Add or remove notices as needed. Each needs a unique id.
  notices: [
    {
      id: "parking",
      icon: "parking",
      title: "Parking Notice",
      body: "We kindly ask all attendees to park with consideration for our neighbours. Please avoid blocking driveways and access roads so we can maintain the warm relationship we value with the local community.",
    },
    {
      id: "wudhu",
      icon: "wudhu",
      title: "Wudhu Reminder",
      body: "Please note that wudhu facilities may not be available at the venue. We ask that you kindly arrive in a state of purification so you can join the prayer comfortably.",
    },
  ],

  // ─── About Section ───────────────────────────────────────────────
  about: {
    heading: "Our Beginning",
    paragraphs: [
      "Founded in June 2026, the Rainham Mercy Association — Rahma — was born from a simple yet powerful idea: that the Muslim community in Rainham and the surrounding Kent towns deserves a welcoming, accessible space for congregational worship and mutual support.",
      "The name 'Rahma' means mercy in Arabic, and it reflects our core mission — to be a source of mercy, compassion, and service to everyone in our community, regardless of background.",
      "We are more than a prayer service — we are a community taking its first steps together, guided by the needs and aspirations of every member who walks through our doors.",
    ],
  },

  // ─── Vision Pillars ──────────────────────────────────────────────
  vision: {
    heading: "Our Vision",
    subtitle: "Three pillars that guide everything we do",
    pillars: [
      {
        icon: "mosque",
        title: "Rooted in Worship",
        description:
          "Our foundation is the weekly Jummah prayer and special occasions such as Eid Salah. As we grow, our services will expand to meet the spiritual needs of our community.",
      },
      {
        icon: "community",
        title: "Guided by Mercy",
        description:
          "Rahma — mercy — is at the heart of everything we do. We strive to build a community where compassion, kindness, and mutual support are lived values, not just words.",
      },
      {
        icon: "growth",
        title: "Growing Together",
        description:
          "From humble beginnings to a thriving association, our journey is just starting. Every new face, every shared prayer, and every act of kindness adds a new chapter to our story.",
      },
    ],
  },

  // ─── Footer ──────────────────────────────────────────────────────
  footer: {
    closingMessage: "We look forward to welcoming you this Friday",
    verse: {
      arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
      translation:
        "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
      reference: "Qur'an 21:107",
    },
  },
};
