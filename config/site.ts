export const siteConfig = {
  name: "Zed",
  url: "https://zed.logicleaps.com",
  getStartedUrl:
    "https://play.google.com/store/apps/details?id=com.logicleaps.zed_app",
  ogImage: "https://zed-ai.app/og.jpg",
  description:
    "Professional-grade AI image editing at your fingertips. Transform, enhance, and create stunning visuals with cutting-edge artificial intelligence.",
  tagline: "AI-Powered Image Editing Redefined",
  links: {
    twitter: "https://twitter.com/zedaiapp",
    github: "https://github.com/zed-ai/zed-app",
    email: "mailto:hello@zed-ai.app",
    playstore: "https://play.google.com/store/apps/details?id=com.zed.ai",
    appstore: "https://apps.apple.com/app/zed-ai/id123456789",
  },
  pricing: {
    free: "Free",
    pro: "$9.99/month",
    team: "$29.99/month",
  },
  stats: {
    downloads: "50K+",
    rating: "4.8",
    features: "10+",
    total: "100K+",
    updated: "14 Oct 2025",
    aiModels: 5,
    filters: 15,
    countries: 50,
    processing: "Real-time",
    upscaling: "4x",
  },
};

export type SiteConfig = typeof siteConfig;
