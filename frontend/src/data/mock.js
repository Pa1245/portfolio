// Mock data for portfolio content

export const profile = {
  name: "Parag Amrutkar",
  title: "Technical Product Manager",
  tagline: "Building products at the intersection of technology and user experience",
  bio: "Passionate Technical Product Manager with expertise in leveraging AI/ML and data-driven strategies to solve complex product challenges. I bridge the gap between technical teams and business objectives, transforming insights into impactful product solutions.",
  email: "paragamrutkar1103@gmail.com",
  linkedin: "https://linkedin.com/in/parag-amrutkar",
  github: "https://github.com/pa1245",
  location: "New York, NY"
};

export const skills = [
  {
    category: "Product Management",
    items: ["Product Strategy", "Roadmap Planning", "User Research", "A/B Testing", "Feature Prioritization", "Stakeholder Management"]
  },
  {
    category: "Technical Skills",
    items: ["SQL", "Java", "Python", "Data Analysis", "API Design", "System Architecture", "Agile/Scrum"]
  },
  {
    category: "Business Strategy",
    items: ["Pricing Strategy", "Market Analysis", "Competitive Research", "Growth Metrics", "Revenue Optimization"]
  }
];

export const projects = [
  {
    id: "disney-ml",
    title: "Disney+ ML Case Study",
    subtitle: "Leveraging Machine Learning for Streaming Excellence",
    description: "Developed comprehensive ML strategy for Disney+ to enhance user experience and maximize viewer engagement through personalized content recommendations, thumbnail optimization, and data-driven content development insights.",
    challenge: "Disney+ needed to strengthen its position in the competitive streaming landscape and maximize viewer engagement by leveraging its extensive content libraries (Marvel, Star Wars, Pixar) through advanced ML technologies.",
    solution: "Proposed strategic ML use cases including personalized content recommendations using advanced algorithms, content development insights through viewership data analysis, and adaptive streaming quality optimization to minimize lags during high-traffic periods.",
    impact: [
      "Designed data infrastructure strategy to consolidate first, second, and third-party data across Disney+, Hulu, and ESPN+",
      "Identified key ML use cases to increase viewer engagement and retention",
      "Developed framework to inform content development decisions based on audience preferences",
      "Proposed thumbnail personalization and streaming quality optimization systems"
    ],
    technologies: ["Machine Learning", "Recommendation Systems", "Data Infrastructure", "Personalization", "Streaming Optimization"],
    image: "https://images.unsplash.com/photo-1549399905-5d1bad747576",
    category: "ML Strategy",
    year: "2025"
  },
  {
    id: "etsy-smartlist",
    title: "Etsy SmartList",
    subtitle: "AI-Powered Product Listing Tool",
    description: "Designed an AI-powered product listing assistant to streamline catalog management for Etsy's 8M+ sellers, reducing listing time by 50-70% while improving product discoverability and sales conversion.",
    challenge: "Etsy sellers spent up to 8 hours weekly creating product listings, facing challenges with SEO optimization and discoverability among 100M+ items. Manual errors in listings negatively impacted conversion rates.",
    solution: "Created SmartList, an AI tool that automates product names, descriptions, metadata generation, and category selection. The system uses AI language models, Google Trends, and brand guidelines to ensure consistency and SEO optimization.",
    impact: [
      "Reduced listing time by 50-70% for third-party sellers",
      "Decreased manual errors by 30-40% through AI-driven validation",
      "Improved conversion rates by 10% with SEO-optimized content",
      "Designed A/B testing framework (Fake Door, Pretoyping, MVP tests)",
      "Projected to serve 8M+ active Etsy sellers"
    ],
    technologies: ["Large Language Models (LLMs)", "Google Trends", "SEO Optimization", "A/B Testing", "Product Analytics"],
    image: "https://images.unsplash.com/photo-1617529497832-5ad49d9b5928",
    category: "AI/Product Design",
    year: "2025"
  },
  {
    id: "basecamp-pricing",
    title: "Basecamp Pricing Strategy",
    subtitle: "Optimizing Revenue Through Strategic Pricing",
    description: "Conducted comprehensive pricing strategy analysis for Basecamp's project management platform, evaluating multiple pricing models to balance revenue growth with the company's philosophy of simplicity and customer value.",
    challenge: "As the project management market evolved with increased competition, Basecamp needed to optimize pricing to capture revenue opportunities while maintaining their core philosophy of avoiding per-user charges and preserving simplicity.",
    solution: "Analyzed multiple pricing strategies including tiered pricing, feature gating, premium add-ons, and the 'With Clients' feature. Evaluated trade-offs between revenue optimization and customer experience using A/B testing and the Van Westendorp Price Sensitivity Meter.",
    impact: [
      "Evaluated 9+ pricing scenarios to optimize revenue capture",
      "Recommended middle-tier decoy pricing strategy to improve conversions",
      "Analyzed customer lifetime value (LTV) implications for each pricing model",
      "Balanced growth objectives with founder's vision of sustainable, customer-centric business",
      "Designed framework for premium feature positioning"
    ],
    technologies: ["Pricing Strategy", "A/B Testing", "Van Westendorp PSM", "Customer Analytics", "Revenue Modeling"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    category: "Pricing & Strategy",
    year: "2025"
  }
];

export const terminalCommands = {
  help: {
    description: "Show available commands",
    output: `Available Commands:

  help        Show this help message
  about       Display bio and skills
  projects    List all projects
  project <id> Show details for a specific project
              (disney-ml, etsy-smartlist, basecamp-pricing)
  contact     Show contact information
  gui         Switch to GUI mode
  clear       Clear terminal screen
  theme       Change terminal theme (dark, light, matrix)

Type any command and press Enter to execute.`
  },
  about: {
    description: "Display bio and skills"
  },
  projects: {
    description: "List all projects"
  },
  contact: {
    description: "Show contact information"
  },
  gui: {
    description: "Switch to GUI mode"
  },
  clear: {
    description: "Clear terminal screen"
  },
  theme: {
    description: "Change terminal theme"
  }
};
