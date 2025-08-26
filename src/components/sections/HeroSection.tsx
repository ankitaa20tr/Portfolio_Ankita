import { Button } from '@/components/ui/button';
import { PixelAvatar } from '@/components/PixelAvatar';
import { TypewriterText } from '@/components/TypewriterText';
import { ArrowDown, Github, Download } from 'lucide-react';

export const HeroSection = () => {
  const roles = [
    "Full Stack Developer",
    "Creative Problem Solver", 
    "Tech Enthusiast",
    "Digital Creator",
    "AI Strategist"
  ];

  const handleViewWork = () => {
    window.open('https://github.com/ankitaa20tr', '_blank');
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf file to the public folder
    link.download = 'Ankita_Tiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative starscape">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Avatar */}
          <div className="mb-8">
            <PixelAvatar size="lg" className="mx-auto" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              Ankita Tiwari
            </span>
          </h1>

          {/* Typewriter Role */}
          <div className="text-xl sm:text-2xl text-foreground-muted mb-8 font-mono">
            I'm a{' '}
            <TypewriterText 
              texts={roles}
              className="text-primary font-semibold"
              speed={80}
            />
          </div>

          {/* Description */}
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          I love turning ideas into digital experiences that feel alive. For me, it's more than just building products—it's about creating something that connects with people, solves real purpose, and leaves a little spark of joy in their day. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="glow" size="lg" className="font-semibold" onClick={handleViewWork}>
              <Github className="mr-2" />
              View My Work
            </Button>
            <Button variant="hero" size="lg" className="font-semibold" onClick={handleDownloadResume}>
              <Download className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full w-12 h-12 hover:bg-primary/10"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};