// src/pages/Contact.tsx

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    profession: "",
    gender: "",
    message: "",
    captchaToken: "",
  });

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', color: '' });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setFormData((prev) => ({ ...prev, captchaToken: token || "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({ message: 'Please fill in all required fields.', color: 'red' });
      return;
    }

    if (!formData.captchaToken) {
      setFormStatus({ message: 'Please complete the reCAPTCHA.', color: 'red' });
      return;
    }

    setLoading(true);
    setFormStatus({ message: 'Sending your message...', color: 'gray' });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_x6ka1b8';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_a7yi44v';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9y3JcD65WyL-ug2lS';

      console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Set' : 'Missing' });

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
      }

      // Prepare template parameters - match your EmailJS template variables
      const templateParams = {
        to_email: 'chris.pathfinder.72@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        dob: formData.dob || 'Not provided',
        profession: formData.profession || 'Not provided',
        gender: formData.gender || 'Not provided',
        message: formData.message,
        reply_to: formData.email, // Important for EmailJS
      };

      console.log('Sending email with params:', templateParams);

      // Initialize EmailJS if not already done
      emailjs.init(publicKey);

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setFormStatus({ 
          message: 'Message sent successfully! We will get back to you soon.', 
          color: 'green' 
        });
        
        // Reset form
        setFormData({
          fullName: "",
          dob: "",
          email: "",
          phone: "",
          profession: "",
          gender: "",
          message: "",
          captchaToken: "",
        });
        
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
        
        // Reset form ref if needed
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(`EmailJS returned status ${response.status}`);
      }
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      // Better error handling
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text) {
        // EmailJS error
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      // Check for specific error types
      if (error.message?.includes('<!DOCTYPE')) {
        errorMessage = 'Configuration error: Invalid EmailJS credentials. Please contact the administrator.';
      } else if (error.message?.includes('429')) {
        errorMessage = 'Too many requests. Please try again in a few minutes.';
      } else if (error.message?.includes('401') || error.message?.includes('403')) {
        errorMessage = 'Authentication failed. Please check EmailJS configuration.';
      }
      
      setFormStatus({ message: errorMessage, color: 'red' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8779193439"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chrispathfinder.com"],
      description: "Send us your queries anytime",
    },
    {
      icon: MapPin,
      title: "Office",
      details: [
        "93 East ,1102, Mahakali Caves Road, Andheri (East ) ",
        "Mumbai, CD 400093",
      ],
      description: "Visit us for in-person consultations",
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon - Fri: 09:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM",
      ],
      description: "We're here when you need us",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Ready to transform your career? Get in touch with our expert team
            today
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <Card className="p-4 sm:p-8 border-0 shadow-lg">
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Name *</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      placeholder="Enter your full name" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input 
                      id="dob" 
                      name="dob" 
                      type="date" 
                      placeholder="Enter your date of birth" 
                      value={formData.dob} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Qualification</Label>
                    <select 
                      id="profession" 
                      name="profession" 
                      value={formData.profession} 
                      onChange={handleChange} 
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select your profession</option>
                      <option value="student">Student</option>
                      <option value="professional">Professional</option>
                      <option value="explorer">Clueless Explorer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex items-center gap-6 border rounded-lg px-3 py-2 flex-wrap">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="male" 
                          checked={formData.gender === "male"} 
                          onChange={handleChange} 
                          className="accent-primary" 
                        />
                        Male
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="female" 
                          checked={formData.gender === "female"} 
                          onChange={handleChange} 
                          className="accent-primary" 
                        />
                        Female
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="gender" 
                          value="transgender" 
                          checked={formData.gender === "transgender"} 
                          onChange={handleChange} 
                          className="accent-primary" 
                        />
                        Transgender
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your career goals and how we can help you..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <div className="flex justify-center">
                  <ReCAPTCHA 
                    ref={recaptchaRef}
                    sitekey="6LdTeN4rAAAAADytWSvmwLDpVCMiqBMjvHO9tedM" 
                    onChange={handleCaptchaChange} 
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 px-8" 
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                
                {formStatus.message && (
                  <p style={{ 
                    color: formStatus.color, 
                    textAlign: 'center', 
                    marginTop: '1rem', 
                    fontWeight: 'bold',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: formStatus.color === 'green' ? '#d4edda' : formStatus.color === 'red' ? '#f8d7da' : '#f0f0f0'
                  }}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;