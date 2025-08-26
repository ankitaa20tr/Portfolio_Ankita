import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';
import image from "@/assets/image.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"


const projects = [
  {
    id: 1,
    title: "Aistra - Automate your business with Agents",
    description: "We build agents for you on both standarised and personalised businesses.",
    image: image,
    tags: ["Python", "React", "LLM"],
    github: "https://github.com/ankitaa20tr/Aistra",
    demo: "https://aistra.vercel.app/",
    stars: 127
  },
  {
    id: 2,
    title: "PathFinder - Get your own roadmap as per skills to reach a goal.",
    description: "A personalized guidance tool that analyzes your current skills, strengths, and gaps to create a step-by-step roadmap for achieving your desired goal.",
    image: image2,
    tags: ["TypeScript", "WebRTC", "Socket.io", "Monaco Editor"],
    github: "#",
    demo: "#",
    stars: 89
  },
  {
    id: 3,
    title: "Mentora - Match your mentor across the world",
    description: "Mentora is your personalized mentorship-matching platform that breaks boundaries.From career growth to personal development, get guidance that truly fits you, anytime and anywhere.p",
    image: image3,
    tags: ["React", "Node.js", "MQTT", "Chart.js"],
    github: "#",
    demo: "#",
    stars: 203
  }
];

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group cursor-pointer bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/30 transition-all duration-500 hover-scale ${
                hoveredProject === project.id ? 'shadow-glow' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-foreground-muted">
                    <Star className="w-4 h-4 fill-current" />
                    {project.stars}
                  </div>
                </div>
                <CardDescription className="text-foreground-muted">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="glow" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
