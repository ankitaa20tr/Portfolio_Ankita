import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    id: 1,
    type: 'Education',
    title: 'Bachelors in Computer',
    company: 'BITS PILANI',
    location: 'Remote',
    period: 'July 2024 - July 2028',
    description: 'Doing Undergraduate and building my skills.',
    skills: ['DSA', 'Web Dev', 'AI/ML', 'Docker'],
    icon: GraduationCap,
    color: 'text-secondary'
  },
  {
    id: 2,
    type: 'work',
    title: 'Backend Developer',
    company: 'Aspire',
    location: 'Bengaluru, India',
    period: 'March 2025 - May 2025',
    description: 'Leading development of microservices architecture and mentoring junior developers.',
    skills: ['React', 'FastAPI', 'HuggingFace'],
    icon: Building,
    color: 'text-primary'
  },
  {
    id: 3,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Aistra',
    location: 'Remote',
    period: 'June 2025 - Present',
    description: 'Built the entire product from scratch and currently working with companies to leverage them AI.',
    skills: ['MERN', 'Python', 'GEN AI'],
    icon: Building,
    color: 'text-secondary'
  },
  {
    id: 4,
    type: 'work',
    title: 'CEO & Co-founder',
    company: 'MEDOUT',
    location: 'Bengaluru, India',
    period: '2025 August - Present',
    description: 'Building in HealthTEch.',
    skills: ['MERN', 'Python', 'AI', 'ML'],
    icon: Building,
    color: 'text-accent'
  }
];

export const TimelineSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A timeline of my professional and educational milestones.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start gap-6 group cursor-pointer"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 border-card-border bg-card transition-all duration-300 ${
                  activeItem === item.id ? 'border-primary shadow-glow scale-110' : ''
                }`}>
                  <item.icon className={`w-6 h-6 ${item.color} transition-all duration-300 ${
                    activeItem === item.id ? 'scale-110' : ''
                  }`} />
                </div>

                {/* Content Card */}
                <Card className={`flex-1 bg-card/50 backdrop-blur-sm border-card-border transition-all duration-300 ${
                  activeItem === item.id ? 'border-primary/50 shadow-glow transform translate-x-2' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-foreground-muted font-medium">{item.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-foreground-muted mb-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground-muted">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-muted mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};