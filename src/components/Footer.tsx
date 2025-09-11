import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
  import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 rounded-lg p-2">
                <span className="text-xl font-bold">CP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Chris Pathfinder</h3>
                <p className="text-sm opacity-90">Career Guidance Expert</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering individuals to discover their true potential and build successful careers through expert guidance and scientific assessment.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19UjMAaXXL/" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="https://x.com/Chriscounseling?t=EnsUkAZyn-ga17k7K0W5wQ&s=09" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://www.linkedin.com/company/chris-pathfinder/" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/chris.pathfinder?igsh=MXAwczNvenZldXBzbg==" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#testimonials" className="opacity-90 hover:opacity-100 transition-opacity">Testimonials</a></li>
              <li><a href="#career-options" className="opacity-90 hover:opacity-100 transition-opacity">Career Options</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Career Assessment</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Academic Guidance</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Professional Development</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Group Workshops</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Career Planning</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">One-on-One Counselling</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 opacity-90" />
                <div>
                  <p className="opacity-90">93 East ,1102, Mahakali </p>
                  <p className="opacity-90">Caves Road, Andheri (East ) </p>
                  <p className="opacity-90">Mumbai 400093</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-90" />
                <span className="opacity-90">+91 8779193439</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-90" />
                <span className="opacity-90">chris.pathfinder.72@gmail.com</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-sm opacity-90">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm opacity-90">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm opacity-90">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              © 2013 Chris Pathfinder. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {/* <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a> */}
                <Link
        to="/privacy-policy"
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        Privacy Policy
      </Link>
<Link
  to="/terms"
  className="opacity-90 hover:opacity-100 transition-opacity"
>
  Terms of Service
</Link>
              {/* <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Terms of Service</a> */}
              {/* <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Cookie Policy</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;