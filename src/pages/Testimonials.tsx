// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Star, Quote } from "lucide-react";

// // Import testimonial images
// import testimonial1 from "@/assets/testimonial-1.jpg";
// import testimonial2 from "@/assets/testimonial-2.jpg";
// import testimonial3 from "@/assets/testimonial-3.jpg";
// import testimonial4 from "@/assets/testimonial-4.jpg";
// import testimonial5 from "@/assets/testimonial-5.jpg";
// import testimonial6 from "@/assets/testimonial-6.jpg";
// import EmailFormModal from "./EmailFormModel";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Michael Chen",
//       role: "Software Engineer",
//       company: "Tech Innovations Inc.",
//       image: testimonial1,
//       rating: 5,
//       testimonial: "Chris Pathfinder completely transformed my career trajectory. Their guidance helped me transition from a junior developer to a senior software engineer at a Fortune 500 company. The personalized approach and industry insights were invaluable."
//     },
//     {
//       id: 2,
//       name: "Sarah Williams",
//       role: "Marketing Director",
//       company: "Global Marketing Solutions",
//       image: testimonial2,
//       rating: 5,
//       testimonial: "The career coaching sessions were exactly what I needed. Chris helped me identify my strengths and navigate a complex industry transition. I'm now leading a team of 15 professionals and couldn't be happier with my career growth."
//     },
//     {
//       id: 3,
//       name: "David Rodriguez",
//       role: "Financial Analyst",
//       company: "Investment Partners LLC",
//       image: testimonial3,
//       rating: 5,
//       testimonial: "From resume optimization to interview preparation, Chris Pathfinder provided comprehensive support throughout my job search. I received multiple offers and landed my dream job in investment banking. Highly recommended!"
//     },
//     {
//       id: 4,
//       name: "Emily Thompson",
//       role: "Product Manager",
//       company: "Innovation Labs",
//       image: testimonial4,
//       rating: 5,
//       testimonial: "The career assessment and planning services opened my eyes to opportunities I never considered. Chris's expertise in product management helped me secure a role at a leading tech startup with 40% salary increase."
//     },
//     {
//       id: 5,
//       name: "James Anderson",
//       role: "Data Scientist",
//       company: "Analytics Pro",
//       image: testimonial5,
//       rating: 5,
//       testimonial: "Chris Pathfinder's guidance was instrumental in my career pivot from academia to industry. The structured approach and ongoing support helped me land a senior data scientist role within 3 months of starting the program."
//     },
//     {
//       id: 6,
//       name: "Lisa Park",
//       role: "Operations Manager",
//       company: "Logistics Excellence",
//       image: testimonial6,
//       rating: 5,
//       testimonial: "The LinkedIn optimization and networking strategies provided by Chris were game-changers. I went from having few professional connections to building a strong network that led to multiple career opportunities."
//     }
//   ];

//   const testimonialImages = [
//     { image: testimonial1, position: "top-10 left-10" },
//     { image: testimonial2, position: "top-24 right-16" },
//     { image: testimonial3, position: "top-40 left-24" },
//     { image: testimonial4, position: "top-56 right-8" },
//     { image: testimonial5, position: "top-72 left-8" },
//     { image: testimonial6, position: "top-96 right-20" }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       <main className="py-20">
//         {/* Hero Section with Floating Images */}
//         <section className="relative bg-muted/30 py-32 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/10"></div>
          
//           {/* Floating Testimonial Images */}
//           <div className="absolute inset-0 hidden lg:block">
//             {testimonialImages.map((item, index) => (
//               <div
//                 key={index}
//                 className={`absolute ${item.position} animate-fade-in`}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="relative group">
//                   <div className="w-20 h-20 rounded-xl overflow-hidden shadow-elegant hover-scale">
//                     <img
//                       src={item.image}
//                       alt={`Testimonial ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Center Content */}
//           <div className="relative z-10 container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto">
//               <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
//                 Testimonials
//               </div>
              
//               <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                 Trusted by <span className="text-primary">leaders</span>
//                 <br />
//                 <span className="text-muted-foreground">from various industries</span>
//               </h1>
              
//               <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//                 Learn why professionals trust our solutions to accelerate their career journeys and achieve their professional goals.
//               </p>
              
//               <Button 
//                 className="bg-gradient-primary hover:opacity-90 transition-opacity"
//                 size="lg"
//               >
//                 Read Success Stories →
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Grid */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <Card 
//                   key={testimonial.id} 
//                   className="hover-scale animate-fade-in border-0 shadow-elegant bg-card/80 backdrop-blur-sm"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex items-center mb-6">
//                       <div className="relative">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-16 h-16 rounded-full object-cover"
//                         />
//                         <div className="absolute -top-2 -right-2">
//                           <Quote className="w-8 h-8 text-primary/20 fill-current" />
//                         </div>
//                       </div>
//                       <div className="ml-4">
//                         <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
//                         <p className="text-sm text-primary font-medium">{testimonial.role}</p>
//                         <p className="text-xs text-muted-foreground">{testimonial.company}</p>
//                       </div>
//                     </div>
                    
//                     {/* Rating */}
//                     <div className="flex items-center mb-4">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                       ))}
//                     </div>
                    
//                     <p className="text-muted-foreground leading-relaxed">
//                       "{testimonial.testimonial}"
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Ready to <span className="text-primary">transform</span> your career?
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Join thousands of professionals who have accelerated their careers with our expert guidance and personalized approach.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
               

//                  <EmailFormModal
//                   trigger={
//                  <Button 
//                   className="bg-gradient-primary hover:opacity-90 transition-opacity"
//                   size="lg"
//                 >
//                      Book Free Consultation
//                       </Button>
//     }
//   />

//                 <Button 
//                   variant="outline" 
//                   size="lg"
//                   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                 >
//                   View Success Stories
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Testimonials;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

// Import testimonial images
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import EmailFormModal from "./EmailFormModel";
import "./testimonials.css";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "Tech Innovations Inc.",
      image: testimonial1,
      rating: 5,
      testimonial:
        "Chris Pathfinder completely transformed my career trajectory. Their guidance helped me transition from a junior developer to a senior software engineer at a Fortune 500 company. The personalized approach and industry insights were invaluable.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Marketing Director",
      company: "Global Marketing Solutions",
      image: testimonial2,
      rating: 5,
      testimonial:
        "The career coaching sessions were exactly what I needed. Chris helped me identify my strengths and navigate a complex industry transition. I'm now leading a team of 15 professionals and couldn't be happier with my career growth.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Financial Analyst",
      company: "Investment Partners LLC",
      image: testimonial3,
      rating: 5,
      testimonial:
        "From resume optimization to interview preparation, Chris Pathfinder provided comprehensive support throughout my job search. I received multiple offers and landed my dream job in investment banking. Highly recommended!",
    },
    {
      id: 4,
      name: "Emily Thompson",
      role: "Product Manager",
      company: "Innovation Labs",
      image: testimonial4,
      rating: 5,
      testimonial:
        "The career assessment and planning services opened my eyes to opportunities I never considered. Chris's expertise in product management helped me secure a role at a leading tech startup with 40% salary increase.",
    },
    {
      id: 5,
      name: "James Anderson",
      role: "Data Scientist",
      company: "Analytics Pro",
      image: testimonial5,
      rating: 5,
      testimonial:
        "Chris Pathfinder's guidance was instrumental in my career pivot from academia to industry. The structured approach and ongoing support helped me land a senior data scientist role within 3 months of starting the program.",
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Operations Manager",
      company: "Logistics Excellence",
      image: testimonial6,
      rating: 5,
      testimonial:
        "The LinkedIn optimization and networking strategies provided by Chris were game-changers. I went from having few professional connections to building a strong network that led to multiple career opportunities.",
    },
  ];

  const testimonialImages = [
    { image: testimonial1, position: "top-10 left-10" },
    { image: testimonial2, position: "top-24 right-16" },
    { image: testimonial3, position: "top-40 left-24" },
    { image: testimonial4, position: "top-56 right-8" },
    { image: testimonial5, position: "top-72 left-8" },
    { image: testimonial6, position: "top-96 right-20" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        {/* Hero Section with Floating Images */}
        <section className="relative bg-muted/30 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/10"></div>

          {/* Floating Testimonial Images */}
          <div className="absolute inset-0 hidden lg:block">
            {testimonialImages.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative group">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-elegant hover-scale">
                    <img
                      src={item.image}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Testimonials
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Trusted by <span className="text-primary">leaders</span>
                <br />
                <span className="text-muted-foreground">
                  from various industries
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn why professionals trust our solutions to accelerate their
                career journeys and achieve their professional goals.
              </p>

              <Button
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                Read Success Stories →
              </Button>
            </div>
          </div>
        </section>

        {/* 🔥 Changed: Testimonials Horizontal Scroll */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex gap-6 animate-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-[280px] max-w-[280px] flex-shrink-0 hover-scale border-0 shadow-elegant bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
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
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-primary">transform</span> your
                career?
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
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
