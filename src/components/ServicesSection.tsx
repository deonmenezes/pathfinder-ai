import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  MessageCircle 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Career Assessment",
    description: "Comprehensive psychometric testing to identify your strengths, interests, and career compatibility",
    features: ["Personality Assessment", "Aptitude Testing", "Interest Mapping", "Skills Analysis"]
  },
  {
    icon: GraduationCap,
    title: "Academic Guidance",
    description: "Strategic planning for course selection, college admissions, and academic pathway optimization",
    features: ["Course Selection", "College Guidance", "Scholarship Advice", "Academic Planning"]
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description: "Career advancement strategies for working professionals looking to excel or change careers",
    features: ["Career Switching", "Skill Development", "Leadership Coaching", "Industry Insights"]
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Interactive sessions for schools, colleges, and organizations on career awareness and planning",
    features: ["School Programs", "Corporate Workshops", "Webinars", "Group Coaching"]
  },
  {
    icon: TrendingUp,
    title: "Career Planning",
    description: "Long-term strategic career roadmaps with milestone tracking and regular progress reviews",
    features: ["5-Year Planning", "Goal Setting", "Progress Tracking", "Regular Reviews"]
  },
  {
    icon: MessageCircle,
    title: "One-on-One Counselling",
    description: "Personalized career counselling sessions with expert guidance tailored to your unique situation",
    features: ["Personal Sessions", "Expert Guidance", "Confidential Support", "Follow-up Care"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Career Guidance Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive career solutions designed to unlock your potential and accelerate your professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 group hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-card"
            >
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl group-hover:animate-bounce-gentle">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;