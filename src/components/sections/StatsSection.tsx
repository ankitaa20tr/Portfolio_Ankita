import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, GitBranch, Coffee, Calendar, Clock, MessageSquare } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    label: "Times forgot a Semi-colon",
    value: 1457,
    suffix: "lines",
    color: "text-primary"
  },
  {
    icon: GitBranch,
    label: "Code reviews Survived",
    value: 284,
    suffix: "commits",
    color: "text-secondary"
  },
  {
    icon: Coffee,
    label: "Cups of Coffee",
    value: 182,
    suffix: "cups",
    color: "text-accent"
  },
  {
    icon: MessageSquare,
    label: "AI Prompts Used While Coding",
    value: 185,
    suffix: "articles",
    color: "text-primary"
  }
];

const liveStats = [
  { label: "Current Time", value: "", icon: Clock },
  { label: "Last Coffee", value: "10 minutes ago", icon: Coffee },
  { label: "Current Status", value: "Building awesome stuff", icon: Code2 },
  { label: "Next Vacation", value: "Right after my Bank account permits", icon: Calendar }
];

export const StatsSection = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        timeZone: 'Asia/Kolkata'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Life <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Some fun stats and real-time data about my coding journey and daily life.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/30 transition-all duration-300 hover-glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground-muted">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {stat.value.toLocaleString()}
                  </div>
                  <span className="text-sm text-foreground-muted">{stat.suffix}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Stats */}
        <Card className="bg-card/30 backdrop-blur-lg border-card-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold gradient-text">
              Live Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <stat.icon className="h-5 w-5 text-primary animate-pulse" />
                  <div>
                    <p className="text-sm text-foreground-muted">{stat.label}</p>
                    <p className="font-mono font-semibold">
                      {stat.label === "Current Time" ? currentTime : stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};