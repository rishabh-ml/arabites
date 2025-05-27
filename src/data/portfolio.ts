export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  overview: string;
  goals: string[];
  solution: string;
  results: string[];
  duration: string;
  client: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "myvilla-dubai",
    title: "MyVilla Dubai",
    category: "Real Estate Platform",
    description: "Luxury real estate platform connecting buyers with premium Dubai properties through immersive virtual tours and AI-powered recommendations.",
    thumbnail: "/portfolio/myvilla-thumb.jpg",
    images: [
      "/portfolio/myvilla-1.jpg",
      "/portfolio/myvilla-2.jpg",
      "/portfolio/myvilla-3.jpg",
      "/portfolio/myvilla-4.jpg"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Mapbox", "Three.js"],
    projectUrl: "https://myvilla-dubai.demo.arabites.com",
    overview: "MyVilla Dubai revolutionizes the luxury real estate market in Dubai by providing an immersive digital platform that connects high-net-worth individuals with premium properties. The platform features virtual 3D tours, AI-powered property recommendations, and seamless transaction management.",
    goals: [
      "Create an immersive property viewing experience",
      "Implement AI-driven property matching",
      "Streamline the luxury property buying process",
      "Integrate secure payment processing",
      "Build trust through verified listings"
    ],
    solution: "We developed a full-stack platform with 3D virtual tours using Three.js, integrated Mapbox for location services, and implemented AI algorithms for personalized property recommendations. The platform includes secure user authentication, payment processing via Stripe, and a comprehensive admin panel for property management.",
    results: [
      "40% increase in qualified leads",
      "60% reduction in physical property visits",
      "25% faster transaction completion",
      "95% user satisfaction rate",
      "Featured in Gulf News as 'PropTech Innovation of 2024'"
    ],
    duration: "4 months",
    client: "MyVilla Properties LLC",
    featured: true
  },
  {
    id: "2", 
    slug: "wellnesspro",
    title: "WellnessPro",
    category: "Health & Wellness App",
    description: "Comprehensive wellness platform enabling users to book spa treatments, fitness classes, and wellness consultations across Dubai's premium wellness centers.",
    thumbnail: "/portfolio/wellness-thumb.jpg",
    images: [
      "/portfolio/wellness-1.jpg",
      "/portfolio/wellness-2.jpg", 
      "/portfolio/wellness-3.jpg",
      "/portfolio/wellness-4.jpg"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe", "SendGrid", "Expo"],
    projectUrl: "https://wellnesspro.demo.arabites.com",
    overview: "WellnessPro transforms how Dubai residents access wellness services by providing a unified platform to discover, book, and manage appointments across multiple wellness centers. The app includes real-time availability, integrated payments, and personalized wellness recommendations.",
    goals: [
      "Unify fragmented wellness booking systems",
      "Provide real-time availability and booking", 
      "Create personalized wellness journeys",
      "Enable seamless payment processing",
      "Build a community around wellness"
    ],
    solution: "We built a cross-platform mobile application using React Native with a robust Node.js backend. The solution includes real-time booking management, push notifications, integrated payment processing, and a recommendation engine based on user preferences and booking history.",
    results: [
      "300+ wellness centers onboarded",
      "50,000+ app downloads in first 6 months",
      "85% booking completion rate",
      "4.8/5 app store rating",
      "35% increase in revenue for partner centers"
    ],
    duration: "6 months",
    client: "WellnessPro Technologies",
    featured: true
  },
  {
    id: "3",
    slug: "quickcart",
    title: "QuickCart",
    category: "E-commerce Platform",
    description: "Modern e-commerce solution with lightning-fast checkout, inventory management, and multi-currency support for Dubai's growing online retail market.",
    thumbnail: "/portfolio/quickcart-thumb.jpg",
    images: [
      "/portfolio/quickcart-1.jpg",
      "/portfolio/quickcart-2.jpg",
      "/portfolio/quickcart-3.jpg",
      "/portfolio/quickcart-4.jpg"
    ],
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Framer Motion", "Stripe", "Algolia"],
    projectUrl: "https://quickcart.demo.arabites.com",
    githubUrl: "https://github.com/arabites/quickcart-demo",
    overview: "QuickCart addresses the unique challenges of e-commerce in the Middle East by providing a culturally-aware, multi-currency platform with Arabic language support and regional payment methods. The platform focuses on speed, security, and user experience.",
    goals: [
      "Create a lightning-fast shopping experience",
      "Support multiple currencies and languages",
      "Integrate regional payment methods",
      "Implement advanced search and filtering",
      "Ensure mobile-first responsive design"
    ],
    solution: "We developed a headless e-commerce solution using Next.js and Shopify's Storefront API, with custom Arabic language support and RTL layout. The platform includes advanced search powered by Algolia, multiple payment gateways, and optimized performance with sub-2-second load times.",
    results: [
      "200% improvement in page load speed",
      "45% increase in conversion rate",
      "60% reduction in cart abandonment",
      "Support for 12+ payment methods",
      "Seamless Arabic/English language switching"
    ],
    duration: "3 months",
    client: "QuickCart Retail Solutions",
    featured: false
  }
];

export const getPortfolioProjects = () => portfolioProjects;

export const getFeaturedProjects = () => portfolioProjects.filter(project => project.featured);

export const getProjectCategories = () => {
  const categories = portfolioProjects.map(project => project.category);
  return [...new Set(categories)];
};
