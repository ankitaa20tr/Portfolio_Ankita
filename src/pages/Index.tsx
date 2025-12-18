import { Navigation } from '@/components/Navigation';
import { SocialLinks } from '@/components/SocialLinks';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { NowSection } from '@/components/sections/NowSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AMASection } from '@/components/sections/AMASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background starscape */}
      <div className="fixed inset-0 starscape pointer-events-none" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Floating Social Links */}
      <SocialLinks />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <TimelineSection />
        <NowSection />
        <StatsSection />
        <AMASection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-background-secondary/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground-muted">
            Built with ❤️ using React, TypeScript, and Experience
          </p>
          <p className="text-sm text-foreground-muted mt-2">
            © 2025 Ankita Tiwari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
