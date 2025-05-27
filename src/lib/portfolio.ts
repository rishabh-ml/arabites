import { portfolioProjects, type PortfolioProject } from '@/data/portfolio';

export function getPortfolioBySlug(slug: string): PortfolioProject | null {
  return portfolioProjects.find(project => project.slug === slug) || null;
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioProjects.map(project => project.slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter(project => project.featured);
}

export function getRelatedProjects(currentSlug: string, limit: number = 2): PortfolioProject[] {
  const currentProject = getPortfolioBySlug(currentSlug);
  if (!currentProject) return [];

  return portfolioProjects
    .filter(project => 
      project.slug !== currentSlug && 
      project.category === currentProject.category
    )
    .slice(0, limit);
}

export function generatePortfolioMetadata(project: PortfolioProject) {
  return {
    title: `${project.title} - Case Study | Arabites Portfolio`,
    description: project.description,
    keywords: `${project.title}, ${project.category}, ${project.technologies.join(', ')}, Dubai digital agency, case study`,
    openGraph: {
      title: `${project.title} - Case Study | Arabites Portfolio`,
      description: project.description,
      url: `https://arabites.com/portfolio/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study | Arabites Portfolio`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}
