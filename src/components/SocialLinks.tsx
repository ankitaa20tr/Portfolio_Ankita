import { Github, Twitter, Linkedin, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ankitaa20tr', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/ankitaa_tr', label: 'Twitter/X' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ankitatiwari20', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ankitatiwariceo@gmail.com', label: 'Email' },
  { icon: Calendar, href: 'https://calendly.com/ankitatiwariceo/30min', label: 'Schedule a meeting' },
];

export const SocialLinks = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-card-border hover:bg-card hover:scale-110 transition-all duration-300 hover-glow group"
            asChild
          >
            <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
              <link.icon className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};