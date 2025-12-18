import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, MessageCircle, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const recentQuestions = [
  {
    question: "What's your favorite programming language and why?",
    answer: "I love Python becuase of its libraries and developer experience, but I'm also excited about Typescript.",
    timestamp: "2 days ago"
  },
  {
    question: "How do you stay motivated during long coding sessions?",
    answer: "Good music, regular breaks, and remembering the impact my code will have on users keeps me going!",
    timestamp: "1 week ago"
  }
];

export const AMASection = () => {
  const [formData, setFormData] = useState({
    question: '',
    email: '',
    anonymous: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/ankitatiwariceo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          question: formData.question,
          email: formData.email || 'anonymous@no-reply.com',
          _subject: 'New AMA Question from Portfolio',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      toast({
        title: "Question submitted!",
        description: "Thanks for your question. I'll get back to you soon!",
      });

      setFormData({ question: '', email: '', anonymous: false });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: 'destructive'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="ama" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ask Me <span className="gradient-text">Anything</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Got questions about tech, coding, or life? I love connecting with the community and sharing knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Question Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Submit Your Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="question">Your Question</Label>
                  <Textarea
                    id="question"
                    name="question"
                    placeholder="What would you like to know?"
                    value={formData.question}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[120px] bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-background/50"
                  />
                  <p className="text-xs text-foreground-muted mt-1">
                    Leave blank to submit anonymously
                  </p>
                </div>

                <Button type="submit" variant="glow" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Question
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Q&A */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Recent Questions</h3>
            </div>

            <div className="space-y-6">
              {recentQuestions.map((qa, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-card-border">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-foreground mb-2">
                          Q: {qa.question}
                        </p>
                        <p className="text-foreground-muted text-sm leading-relaxed">
                          A: {qa.answer}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-xs text-foreground-muted">
                        <span>{qa.timestamp}</span>
                        <Button variant="ghost" size="sm" className="h-auto p-1 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">
                View All Questions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};