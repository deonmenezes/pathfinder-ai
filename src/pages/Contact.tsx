// src/pages/Contact.tsx

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
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

    if (!formData.captchaToken) {
      setFormStatus({ message: 'Please complete the reCAPTCHA.', color: 'red' });
      return;
    }

    setLoading(true);
    setFormStatus({ message: 'Submitting...', color: 'gray' });


    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ message: data.message, color: 'green' });
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
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      setFormStatus({ message: error.message || 'An error occurred.', color: 'red' });
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

            <Card className="p-4 sm:p-8 border-0 shadow-elegant shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName"> Name</Label>
                    <Input id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob"> Date of Birth</Label>
                    <Input id="dob" name="dob" type="date" placeholder="Enter your date of birth" value={formData.dob} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Qualification</Label>
                    <select id="profession" name="profession" value={formData.profession} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select your profession</option>
                      <option value="student">Student</option>
                      <option value="graduate">Professional</option>
                      <option value="postgraduate">Clueless Explorer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex items-center gap-6 border rounded-lg px-3 py-2 flex-wrap">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} className="accent-primary" />Male</label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} className="accent-primary" />Female</label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="transgender" checked={formData.gender === "transgender"} onChange={handleChange} className="accent-primary" />Transgender</label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your career goals and how we can help you..." value={formData.message} onChange={handleChange} className="min-h-[120px]" />
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA sitekey="6LdTeN4rAAAAADytWSvmwLDpVCMiqBMjvHO9tedM" onChange={handleCaptchaChange} />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-gradient-primary hover:opacity-90 px-8" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                 {formStatus.message && (
                    <p style={{ color: formStatus.color, textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
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