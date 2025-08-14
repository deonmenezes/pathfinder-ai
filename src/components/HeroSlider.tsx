import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Target, TrendingUp } from "lucide-react";

const slides = [
  {
    title: "Transform Your Career with Expert Guidance",
    subtitle: "Discover your true potential and find the perfect career path",
    description: "Professional career counselling with personalized assessment and strategic planning for students and working professionals.",
    icon: Target,
    buttonText: "Start Your Journey"
  },
  {
    title: "Scientific Career Assessment & Planning",
    subtitle: "Data-driven insights for better career decisions", 
    description: "Advanced psychometric testing and AI-powered career matching to identify your strengths and ideal career opportunities.",
    icon: TrendingUp,
    buttonText: "Take Assessment"
  },
  {
    title: "Join 10,000+ Success Stories",
    subtitle: "Proven track record of career transformation",
    description: "From confused students to successful professionals - we've helped thousands find their dream careers across various industries.",
    icon: Users,
    buttonText: "See Success Stories"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Text Content */}
            <div className="text-center lg:text-left text-primary-foreground space-y-6 animate-fade-in">
              <div className="flex justify-center lg:justify-start mb-4">
                {slides[currentSlide].icon && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce-gentle">
                    {React.createElement(slides[currentSlide].icon, { className: "h-12 w-12 text-primary-foreground" })}
                  </div>
                )}
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slides[currentSlide].title}
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground/90">
                {slides[currentSlide].subtitle}
              </h3>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-3 shadow-elegant"
                >
                  {slides[currentSlide].buttonText}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 animate-pulse-slow">
                  <div className="bg-white/30 rounded-full p-8">
                    <div className="bg-white rounded-full p-12">
                      {React.createElement(slides[currentSlide].icon, { className: "h-24 w-24 text-primary" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-primary-foreground rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-primary-foreground rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;