import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

import EmailFormModal from "./EmailFormModel";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jasmine Nadar",
      role: "Student of Ace Classes",
      image: "/blank.jpg",
      rating: 5,
      testimonial:
        "The Psychometric Test helped me gain a deeper understanding of my strengths, interests, and hidden traits. It gave me clarity about myself and my career direction. Above all, it was truly an eye-opener for my parents, who now better understand my abilities and aspirations. This experience has made me more confident about my future choices",
    },
    {
      id: 2,
      name: "Aaron Samuel",
      role: "IT Graduate",
      image: "/aaron-samuel.jpg",
      rating: 5,
      testimonial:
        "After completing my B.Sc. IT, I was clueless for almost six months and didn’t know what to do next. Taking the Psychometric Test was a turning point—it revealed my interest in Cloud Computing. With that clarity, I explored opportunities and found a free AWS course, which I have now joined to build my skills. This test gave me the direction I was searching for.",
    },
    {
      id: 3,
      name: "Aaryan Jadhav",
      role: "Student",
      image: "/aaryan jadhav.jpg",
      rating: 5,
      testimonial:
        "I have always been dedicated to my studies and wanted to choose the right career path early. The Psychometric Test gave me clarity and confidence about my strengths and interests. With Chris Pathfinder guidance, I decided to pursue MPSC and have already joined classes for competitive exams along with my college studies. This test helped me align my passion with a purposeful career",
    },
    {
      id: 4,
      name: "Jyoti Gohil",
      role: "Parent",
      image: "/blank.jpg",
      rating: 5,
      testimonial:
        "My son, Abhishak Gohil, a student of 10th standard, took the psychometric test to understand his strengths, motivation, study pattern, and learning style. The assessment gave him great self-awareness and clarity about his abilities. As a parent, I am very much satisfied with the detailed insights and guidance provided by Chris Pathfinder through the test. It has given us a clear direction and confidence for his future studies.",
    },
    {
      id: 5,
      name: "Anjali",
      role: "Parent",
      image: "/blank.jpg",
      rating: 5,
      testimonial:
     `I recently had the pleasure of using Chris Pathfinder's services, 
      and I couldn't be more impressed! The quick service they provide is unmatched, ensuring you get timely assistance without compromising quality. Their highly experienced team brings a wealth of knowledge to the table, making every interaction smooth and efficir you're looking for 
      reliable support with a personal touch.
      Chris Pathfinder is the way to go! Highly recommend!`,
    },
    {
      id: 6,
      name: "Aman Wakle",
      role: "Student",
      image: "/aman-wakle.jpg",
      rating: 5,
      testimonial:
         `The tests were well-structured and gave me a clear understanding of my strengths, interests, and potential career paths. The counseling session that followed was insightful, with personalized guidance that helped me make informed decisions about my future.
The career planning process was also well-organized, providing me with practical steps to move forward. Overall, the service was professional, informative, and genuinely beneficial. I appreciate the support and would highly recommend Chris Pathfinder to anyone seeking career clarity and direction`
    },
    {
      id: 7,
      name: "Suraiya Ansari",
      role: "Parent",
      image: "/blank.jpg",
      rating: 5,
      testimonial:
     `I consulted them for my daughter and had a very nice experience. I appreciate the way each and every detail was explained and all her queries was solved.
The counselor is very experienced and counseling session was excellent. Highly recommended.`,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Learn why professionals trust our solutions to accelerate their
              career journeys and achieve their professional goals.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Desktop → continuous scroll */}
            {!isMobile ? (
              <div className="flex gap-6 animate-scroll">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="min-w-[280px] max-w-[280px] flex-shrink-0 hover-scale border-0 shadow-elegant bg-card/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-8">
                      <TestimonialCard testimonial={testimonial} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Mobile → Centered grid with proper spacing
              <div className="grid grid-cols-1 gap-8 justify-items-center">
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="w-full max-w-[340px] border-0 shadow-elegant bg-card/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6 sm:p-8">
                      <TestimonialCard testimonial={testimonial} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-primary">transform</span> your career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who have accelerated their
                careers with our expert guidance and personalized approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EmailFormModal
                  trigger={
                    <Button className="bg-gradient-primary hover:opacity-90 transition-opacity" size="lg">
                      Book Free Consultation
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Extracted testimonial card UI
const TestimonialCard = ({ testimonial }) => (
  <>
    <div className="flex items-center mb-6">
      <div className="relative">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="absolute -top-2 -right-2">
          <Quote className="w-8 h-8 text-primary/20 fill-current" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
      </div>
    </div>

    {/* Rating */}
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>

    <p className="text-muted-foreground leading-relaxed">
      "{testimonial.testimonial}"
    </p>
  </>
);

export default Testimonials;