import Link from "next/link";
import { ArrowLeft, FileX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PortfolioNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--neutral-50)]">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-[var(--neutral-200)] rounded-full flex items-center justify-center mx-auto mb-8">
          <FileX className="w-12 h-12 text-[var(--neutral-400)]" />
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)] mb-4">
          Project Not Found
        </h1>
        
        <p className="text-lg text-[var(--neutral-600)] mb-8 leading-relaxed">
          The portfolio project you're looking for doesn't exist or may have been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
