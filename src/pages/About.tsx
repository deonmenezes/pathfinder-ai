import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mam from "../assets/mam.jpeg";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every interaction, ensuring our clients receive the highest quality career guidance."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand that career decisions are deeply personal and approach each client with genuine care and understanding."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their career journey, fostering open communication and trust."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional relationships and career guidance practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Chris Pathfinder
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Dedicated to empowering individuals through expert career guidance and professional development
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                Founded in 2013, Chris Pathfinder has been at the forefront of career guidance and professional development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Expert Career Guidance Since 2013
                </h3>
                <p className="text-muted-foreground leading-relaxed">
  At Chris Pathfinder, we help students discover the right career path with clarity and confidence. Through our 5-dimensional psychometric test, we assess personality, interests, aptitude, emotional intelligence, and learning style. The AI-generated report then provides a scientific roadmap for making informed career choices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to transform lost and unsure students into confident decision-makers. With personalized, data-driven guidance, we turn career confusion into a clear vision for the future. At Chris Pathfinder, we work with you to unlock true potential and build a future that excites.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Schedule Consultation
                </Button>
              </div>
              <div className="bg-gradient-primary/10 rounded-2xl p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Careers Transformed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">95%</div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">12+</div>
                    <div className="text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our mission to transform careers and empower individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:animate-bounce-gentle">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Expert
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by Pricilla Ramani, a certified career counselor with extensive experience in helping individuals achieve their professional goals
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center border-0 shadow-elegant">
           <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
  <img
    src={mam}
    alt="Profile"
    className="w-full h-full object-cover rounded-full"
  />
</div>

              <h3 className="text-3xl font-bold text-foreground mb-2">
              Priscilla Ramani (M.A., B.Ed.)
              </h3>
              <p className="text-primary font-semibold mb-4">
                Founder & Senior Career Counselor
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
               I am a passionate Career Counsellor (M.A., B.Ed.) with 18+ years of teaching experience in junior colleges and schools. Having completed multiple certification courses through the Government of Maharashtra and private institutes, I combine expertise with empathy to guide students in discovering their true potential.
              </p>
              <p>
                
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Certified Career Counselor</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Psychometric Specialist</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Leadership Coach</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;