import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
  import { Link } from "react-router-dom";
  import logo from "../assets/logo.png";
  import footerlog from "../assets/footer logo.png"
import projectName from "../assets/chris.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 rounded-lg ">
                <span className="text-xl font-bold">
                  <img src={logo} alt=""  className="w-[45px] h-auto"/>
                </span>
              </div>
              <div>
                {/* <h3 className="text-xl font-bold">CHRIS PATHFINDER</h3> */}
                 <img src={footerlog} alt=""  className="w-[215px] h-auto"/>
                {/* <p className="text-sm opacity-90">Career Guidance Expert</p> */}
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering individuals to discover their true potential and build successful careers through expert guidance and scientific assessment.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19bDabgFgy/" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
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
           {/* import { Link } from "react-router-dom"; */}

<ul className="space-y-3 text-sm">
  <li>
    <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
      Home
    </Link>
  </li>
  <li>
    <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
      Services
    </Link>
  </li>
  <li>
    <Link to="/testimonials" className="opacity-90 hover:opacity-100 transition-opacity">
      Testimonials
    </Link>
  </li>
  <li>
    <Link to="/career-library" className="opacity-90 hover:opacity-100 transition-opacity">
      Career Options
    </Link>
  </li>
  <li>
    <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
      Contact Us
    </Link>
  </li>
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
                <span className="opacity-90">info@chrispathfinder.com</span>
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
              © 2025 Chris Pathfinder. All rights reserved.
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