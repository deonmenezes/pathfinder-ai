"use client";

import { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";  
// const siteKey = import.meta.env.SITEKEY;

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
import { Card } from "@/components/ui/card";

// ✅ Define props type
interface EmailFormModalProps {
  trigger: ReactNode;
  title?: string;
}

// ✅ Define form data type
interface FormData {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  profession: string;
  gender: string;
  message: string;
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
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null); // ✅ Captcha state

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // if (!captchaValue) {
  //   //   alert("⚠️ Please verify the captcha before submitting.");
  //   //   return;
  //   // }

  // emailjs
  // .send(
  //   "service_xdmkdrp", // ✅ your Service ID
  //   "template_zbpmuz9",       // 🔥 replace with your actual Template ID from dashboard
  //   {
  //     from_name: formData.fullName,   // must match EmailJS template variable names
  //     dob: formData.dob,
  //     email: formData.email,
  //     phone: formData.phone,
  //     profession: formData.profession,
  //     gender: formData.gender,
  //     message: formData.message,
  //   },
  //   "wLPPuktaqroB46qXE" // ✅ your Public Key (User ID)
  // )
  // .then(
  //   () => {
  //     alert("✅ Message sent successfully!");
  //     setFormData({
  //       fullName: "",
  //       dob: "",
  //       email: "",
  //       phone: "",
  //       profession: "",
  //       gender: "",
  //       message: "",
  //     });
  //     setCaptchaValue(null); // reset captcha
  //   },
  //   (error) => {
  //     alert("❌ Failed to send message. Try again.");
  //     console.error("EmailJS Error:", error);
  //   }
  // );
  // };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://pathfinder-backend-mmle.onrender.com/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

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
      });
    } else {
      alert("❌ Failed to send message: " + data.message);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Something went wrong!");
  }
};

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {/* <Card className='p-8 border-0 shadow-elegant shadow-lg'> */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/*   Name */}
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
                placeholder="Enter your full name"
                value={formData.dob}
                onChange={handleChange}
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
              <div className="flex items-center gap-3  px-2 py-2">
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
              className="min-h-[120px]"
            />
          </div>

          {/* ✅ Captcha */}
          {/* <div className="flex justify-center">
            <ReCAPTCHA
              sitekey='6LeZmcMrAAAAAANEF5S3JpRBbYGpHOWKFEVrHvE5' // 🔑 Replace with reCAPTCHA v2 site key
              onChange={handleCaptchaChange}
            />
          </div> */}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 px-8"
            >
              Send Message
            </Button>
          </div>
        </form>
        {/* </Card> */}
      </DialogContent>
    </Dialog>
  );
};

export default EmailFormModal;
