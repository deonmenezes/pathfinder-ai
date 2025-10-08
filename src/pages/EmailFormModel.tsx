"use client";

import { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import ReCAPTCHA from "react-google-recaptcha";  
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface EmailFormModalProps {
  trigger: ReactNode;
  title?: string;
}

interface FormData {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  profession: string;
  gender: string;
  message: string;
  captchaToken?: string;
}

const EmailFormModal: React.FC<EmailFormModalProps> = ({
  trigger,
  title = "Send Us a Message",
}) => {
  const [formData, setFormData] = useState<FormData>({
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
      alert("⚠️ Please complete the CAPTCHA verification.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submit-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // ✅ send captchaToken to backend
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
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
        alert("❌ Failed: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <Dialog>
    //   <DialogTrigger asChild>{trigger}</DialogTrigger>

    //   <DialogContent className="sm:max-w-xl z-[9999] overflow-y-auto">
    //     <DialogHeader>
    //       <DialogTitle>{title}</DialogTitle>
    //     </DialogHeader>

    //     {loading && (
    //       <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-[10000] rounded-lg">
    //         <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    //       </div>
    //     )}

    //     <form className="space-y-6" onSubmit={handleSubmit}>
    //       {/* Name & DOB */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <div className="space-y-2">
    //           <Label htmlFor="fullName"> Name</Label>
    //           <Input
    //             id="fullName"
    //             name="fullName"
    //             placeholder="Enter your full name"
    //             value={formData.fullName}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="dob"> Date of Birth</Label>
    //           <Input
    //             id="dob"
    //             name="dob"
    //             type="date"
    //             value={formData.dob}
    //             onChange={handleChange}
    //             min="1900-01-01"
    //             max={new Date().toISOString().split("T")[0]}
    //             className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    //           />
    //         </div>
    //       </div>

    //       {/* Email & Phone */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             name="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={formData.email}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="phone">Phone</Label>
    //           <Input
    //             id="phone"
    //             name="phone"
    //             type="tel"
    //             placeholder="Enter your phone number"
    //             value={formData.phone}
    //             onChange={handleChange}
    //           />
    //         </div>
    //       </div>

    //       {/* Profession & Gender */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         <div className="space-y-2">
    //           <Label htmlFor="profession">Qualification</Label>
    //           <select
    //             id="profession"
    //             name="profession"
    //             value={formData.profession}
    //             onChange={handleChange}
    //             className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    //           >
    //             <option value="">Select your profession</option>
    //             <option value="student">Student</option>
    //             <option value="graduate">Professional</option>
    //             <option value="postgraduate">Clueless Explorer</option>
    //           </select>
    //         </div>
    //         <div className="space-y-2">
    //           <Label>Gender</Label>
    //           <div className="flex items-center gap-3 px-2 py-2">
    //             <label className="flex items-center gap-2 cursor-pointer">
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 value="male"
    //                 checked={formData.gender === "male"}
    //                 onChange={handleChange}
    //                 className="accent-primary"
    //               />
    //               Male
    //             </label>
    //             <label className="flex items-center gap-2 cursor-pointer">
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 value="female"
    //                 checked={formData.gender === "female"}
    //                 onChange={handleChange}
    //                 className="accent-primary"
    //               />
    //               Female
    //             </label>
    //             <label className="flex items-center gap-2 cursor-pointer">
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 value="transgender"
    //                 checked={formData.gender === "transgender"}
    //                 onChange={handleChange}
    //                 className="accent-primary"
    //               />
    //               Transgender
    //             </label>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Message */}
    //       <div className="space-y-2">
    //         <Label htmlFor="message">Message</Label>
    //         <Textarea
    //           id="message"
    //           name="message"
    //           placeholder="Tell us about your career goals and how we can help you..."
    //           value={formData.message}
    //           onChange={handleChange}
    //           className="min-h-[50px]"
    //         />
    //       </div>

    //       {/* CAPTCHA */}
    //       <div className="flex justify-center">
    //         <ReCAPTCHA
    //           sitekey="6LeYS8grAAAAADatlFRnJeFVEmtRsoBSmCEnZ8Id"
    //           onChange={handleCaptchaChange}
    //         />
    //       </div>

    //       {/* Submit Button */}
    //       <div className="text-center">
    //         <Button
    //           type="submit"
    //           size="lg"
    //           className="bg-gradient-primary hover:opacity-90 px-8"
    //           disabled={loading}
    //         >
    //           {loading ? "Sending..." : "Send Message"}
    //         </Button>
    //       </div>
    //     </form>
    //   </DialogContent>
    // </Dialog>
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-full max-w-[95%] sm:max-w-xl z-[9999] max-h-[90vh] overflow-y-auto sm:max-h-none sm:overflow-visible p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

    {loading && (
      <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-[10000] rounded-lg">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )}

    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name & DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName"> Name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob"> Date of Birth</Label>
          <Input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            min="1900-01-01"
            max={new Date().toISOString().split("T")[0]}
            className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
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

      {/* Profession & Gender */}
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
            <option value="graduate">Professional</option>
            <option value="postgraduate">Clueless Explorer</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <div className="flex items-center gap-3 px-2 py-2 flex-wrap">
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

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your career goals and how we can help you..."
          value={formData.message}
          onChange={handleChange}
          className="min-h-[50px]"
        />
      </div>

      {/* CAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey="6LdTeN4rAAAAADytWSvmwLDpVCMiqBMjvHO9tedM"
          onChange={handleCaptchaChange}
        />
      </div>

      {/* Submit Button */}
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
    </form>
  </DialogContent>
</Dialog>

  );
};

export default EmailFormModal;
