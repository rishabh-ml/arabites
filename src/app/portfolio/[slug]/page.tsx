import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/sections/portfolio/CaseStudyHero";
import CaseStudyContent from "@/components/sections/portfolio/CaseStudyContent";
import CaseStudyCTA from "@/components/sections/portfolio/CaseStudyCTA";
import Footer from "@/components/sections/Footer";
import { getPortfolioBySlug, getAllPortfolioSlugs, getRelatedProjects, generatePortfolioMetadata } from "@/lib/portfolio";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = getPortfolioBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Arabites Portfolio",
      description: "The requested project could not be found in our portfolio.",
    };
  }

  return generatePortfolioMetadata(project);
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getPortfolioBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(params.slug, 2);

  return (
    <main className="min-h-screen">
      <CaseStudyHero project={project} />
      <CaseStudyContent project={project} />
      <CaseStudyCTA relatedProjects={relatedProjects} />
      <Footer />
    </main>
  );
}
