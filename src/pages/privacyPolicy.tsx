"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ✅ Common Header */}
      <Header />

      {/* ✅ Hero Section (same as Services) */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Chris Pathfinders — Effective Date: August 20, 20
          </p>
        </div>
      </section>

      {/* ✅ Content Section */}
      <div className="container mx-auto px-4 py-16 space-y-8">
        {[
          {
            title: "Introduction",
            content: `Chris Pathfinders (“we,” “our,” “us”) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, share, and safeguard the personal 
            information you provide when you use our website and services. By using our website 
            or submitting your details through our forms, you agree to the practices described 
            in this Privacy Policy.`,
          },
          {
            title: "Information We Collect",
            content: `We collect information you voluntarily provide through forms, including:\n
• Personal Information: Name, contact details, date of birth, etc.  
• Academic Details: Educational background, test scores.  
• Preferences: College, course, and study destination preferences.  
• Financial Information: Budget for education and related expenses.  
• Other Voluntary Information you choose to share.\n
👉 Note: We do not collect sensitive details such as Aadhaar numbers, passport details, or bank credentials.`,
          },
          {
            title: "How We Use Your Information",
            content: `Your data helps us to:\n
• Provide personalized career and education counseling  
• Assist with applications and college/university selection  
• Support accommodation arrangements  
• Facilitate education loan guidance  
• Improve our services  
• Fulfill legal or regulatory requirements\n
We do not sell your personal data to third parties.`,
          },
          {
            title: "Sharing of Information",
            content: `We may share your data with trusted service partners for:\n
• Admissions guidance  
• Accommodation assistance  
• Education loan services`,
          },
          {
            title: "Data Storage & Retention",
            content: `We retain your personal data for the lifetime of our services unless required otherwise by law. 
            This allows us to support your academic and career journey in the future.`,
          },
          {
            title: "Data Security",
            content: `We implement industry-standard safeguards to protect your information. 
            While we take strict measures, no system or online transmission is 100% secure.`,
          },
          {
            title: "Your Responsibilities",
            content: `By submitting your information, you confirm:\n
• The details you provide are true and accurate.  
• You consent to storage and use of your data as per this Policy.  
• You accept responsibility for any inaccuracies.`,
          },
          {
            title: "Your Rights",
            content: `Currently, we do not provide a deletion option after data submission. 
            If you prefer not to share, please avoid filling out the form.`,
          },
          {
            title: "Policy Updates",
            content: `We may update this Privacy Policy periodically due to changes in law, technology, or practices. 
            Updated versions will be posted with a revised effective date.`,
          },
          {
            title: "Consent",
            content: `By using our website and submitting details, you confirm that you have read, understood, 
            and agree to this Privacy Policy.`,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-primary">
                  {section.title}
                </h2>
                <Separator />
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ✅ Common Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
