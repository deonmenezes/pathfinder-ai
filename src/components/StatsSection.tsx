import { Users, Clock, Target, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Students Guided",
    description: "Successful career transformations"
  },
  {
    icon: Clock,
    value: "15,000+",
    label: "Counselling Hours",
    description: "Expert guidance provided"
  },
  {
    icon: Target,
    value: "95%",
    label: "Success Rate",
    description: "Client satisfaction score"
  },
  {
    icon: Award,
    value: "12+",
    label: "Years Experience",
    description: "In career guidance"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to transforming careers and building futures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:animate-bounce-gentle">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;