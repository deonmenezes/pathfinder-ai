import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
