import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipForward, Volume2, BookOpen, Code, Briefcase } from 'lucide-react';
import { useState } from 'react';

const currentActivities = [
  {
    icon: Code,
    title: "Building a MedOut",
    description: "Hospital Discharges Under 30 minutes.",
    status: "In Progress",
    progress: 30
  },
  {
    icon: BookOpen,
    title: "Learning AI/ML",
    description: "Diving deep into AI Infra and Workflows",
    status: "Active",
    progress: 45
  },
  {
    icon: Briefcase,
    title: "Building Agents for Businesses",
    description: "Helping a startup scale by agents.",
    status: "Almost Done",
    progress: 90
  }
];

const focusPlaylist = {
  title: "Bollywood Focus",
  currentSong: "Kalank (Instrumental)",
  artist: "Bollywood Instrumentals",
  duration: "3:45",
  isPlaying: false,
  embedSrc: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?utm_source=generator"
};

export const NowSection = () => {
  const [isPlaying, setIsPlaying] = useState(focusPlaylist.isPlaying);

  return (
    <section id="now" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What I'm Up To <span className="gradient-text">Now</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Current projects, learning goals, and what's keeping me busy these days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Projects */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Current Projects</h3>
            <div className="space-y-6">
              {currentActivities.map((activity, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <activity.icon className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{activity.title}</CardTitle>
                          <p className="text-sm text-foreground-muted mt-1">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={activity.status === 'In Progress' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${activity.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{activity.progress}%</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Music Player */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Focus Playlist</h3>
            <Card className="bg-card/50 backdrop-blur-sm border-card-border">
              <CardHeader>
                <CardTitle className="text-lg">Now Playing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Spotify Embed */}
                <div className="w-full">
                  <iframe
                    style={{ borderRadius: 12 }}
                    src={focusPlaylist.embedSrc}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                {/* Song Info */}
                <div className="text-center">
                  <h4 className="font-semibold truncate">{focusPlaylist.currentSong}</h4>
                  <p className="text-sm text-foreground-muted">{focusPlaylist.artist}</p>
                </div>

                {/* Progress Bar (hidden when using embed) */}
                <div className="hidden" />

                {/* Controls */}
                <div className="hidden" />

                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    {focusPlaylist.title}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};