"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-6 lg:px-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-indigo-700">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mt-2">Chris Pathfinder</p>
        <p className="text-sm text-gray-500 mt-1">
          Effective Date: June 10, 2025
        </p>
      </motion.div>

      {/* Content */}
      <div className="space-y-6">
        {[
          {
            title: "1. Overview",
            content: `This website is operated by Chris Pathfinder (“we,” “our,” “us”). 
            By using our website or accessing any of our services, you agree to comply with and 
            be bound by these Terms & Conditions. Please read these Terms carefully. 
            If you do not agree, you should not access our website or use our services.`,
          },
          {
            title: "2. Eligibility",
            content: `You must be at least 18 years old, or have parental/guardian consent if you are a minor. 
            You also agree not to use our services for unlawful purposes.`,
          },
          {
            title: "3. Services",
            content: `Chris Pathfinder provides career counseling, admissions support, 
            accommodation assistance, and education loan guidance. These services do not guarantee 
            admissions, scholarships, visas, or loans.`,
          },
          {
            title: "4. Accuracy of Information",
            content: `We strive to provide accurate information, but do not guarantee error-free content. 
            Reliance on our website is at your own risk.`,
          },
          {
            title: "5. Pricing & Modifications",
            content: `Prices and services may change at any time without notice. 
            We are not liable for modifications, suspensions, or discontinuations.`,
          },
          {
            title: "6. Use of Website",
            content: `You must not upload malicious code, spam, or misuse our website. 
            Violation may result in termination of access.`,
          },
          {
            title: "7. Third-Party Services & Links",
            content: `We may link to external websites. We are not responsible 
            for third-party content, policies, or transactions.`,
          },
          {
            title: "8. User Submissions",
            content: `By submitting feedback or suggestions, you grant us the right 
            to use them without obligation.`,
          },
          {
            title: "9. Personal Information",
            content: `Your data is protected under our Privacy Policy. 
            Please review it for details.`,
          },
          {
            title: "10. Limitation of Liability",
            content: `We provide services “as-is” without guarantees. 
            We are not liable for damages or financial losses.`,
          },
          {
            title: "11. Indemnification",
            content: `You agree to indemnify Chris Pathfinder from claims 
            resulting from misuse of our services.`,
          },
          {
            title: "12. Termination",
            content: `We may suspend or terminate your access if you breach these Terms 
            or as required by law.`,
          },
          {
            title: "13. Governing Law",
            content: `These Terms are governed by the laws of India, with jurisdiction in Mumbai, Maharashtra.`,
          },
          {
            title: "14. Entire Agreement",
            content: `These Terms, along with our Privacy Policy, constitute the complete agreement 
            between you and Chris Pathfinder.`,
          },
          {
            title: "15. Contact Us",
            content: `📧 Email: chris.pathfinder.72@gmail.com  
📍 Address: Mumbai, Maharashtra, India – 400093  
📞 Phone: +91 8779193439`,
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
                <h2 className="text-xl font-semibold text-indigo-600">
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
    </div>
  );
};

export default TermsAndConditions;
