import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@chrispathfinder.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Expert Career Guidance Since 2010</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-2">
              <span className="text-xl font-bold">CP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Chris Pathfinder</h1>
              <p className="text-xs text-muted-foreground">Career Guidance Expert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="/testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="/career-library" className="text-foreground hover:text-primary transition-colors font-medium">
              Career Options
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Services
              </a>
              <a href="/testimonials" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Testimonials
              </a>
              <a href="/career-library" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Career Options
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1">
                Contact Us
              </a>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity mt-4">
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;