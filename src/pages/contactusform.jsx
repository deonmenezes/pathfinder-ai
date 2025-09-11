"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactUsFrom = ({ triggerText = "Send Message" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    gender: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "your_service_id", // 👉 replace with your EmailJS Service ID
        "your_template_id", // 👉 replace with your EmailJS Template ID
        formData,
        "your_public_key" // 👉 replace with your EmailJS Public Key
      );
      alert("✅ Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        profession: "",
        gender: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary">{triggerText}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Send Us a Message</DialogTitle>
        </DialogHeader>

        <Card className="p-6 border-0 shadow-elegant shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
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
                <Label htmlFor="profession">Profession</Label>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your profession</option>
                  <option value="student">Student</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="working">Working Professional</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <div className="flex items-center gap-6 border rounded-lg px-3 py-2">
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

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-gradient-primary hover:opacity-90 px-8" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsFrom;
// "use client";

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// const EmailFormModal = ({ trigger, title = "Send Us a Message" }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     profession: "",
//     gender: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "your_service_id", // 👉 replace with your EmailJS Service ID
//         "your_template_id", // 👉 replace with your EmailJS Template ID
//         formData,
//         "your_public_key" // 👉 replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           alert("✅ Message sent successfully!");
//           setFormData({
//             fullName: "",
//             email: "",
//             phone: "",
//             profession: "",
//             gender: "",
//             message: "",
//           });
//         },
//         (error) => {
//           alert("❌ Failed to send message. Try again.");
//           console.error("EmailJS Error:", error);
//         }
//       );
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>{trigger}</DialogTrigger>
//       <DialogContent className="sm:max-w-xl">
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//         </DialogHeader>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div className="space-y-2">
//             <Label htmlFor="fullName">Full Name</Label>
//             <Input
//               id="fullName"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Email & Phone */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* Profession & Gender */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="profession">Profession</Label>
//               <select
//                 id="profession"
//                 name="profession"
//                 value={formData.profession}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//               >
//                 <option value="">Select your profession</option>
//                 <option value="student">Student</option>
//                 <option value="graduate">Graduate</option>
//                 <option value="postgraduate">Postgraduate</option>
//                 <option value="working">Working Professional</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <Label>Gender</Label>
//               <div className="flex items-center gap-6 border rounded-lg px-3 py-2">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="male"
//                     checked={formData.gender === "male"}
//                     onChange={handleChange}
//                     className="accent-primary"
//                   />
//                   Male
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="female"
//                     checked={formData.gender === "female"}
//                     onChange={handleChange}
//                     className="accent-primary"
//                   />
//                   Female
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Tell us about your career goals and how we can help you..."
//               value={formData.message}
//               onChange={handleChange}
//               className="min-h-[120px]"
//             />
//           </div>

//           {/* Submit */}
//           <div className="text-center">
//             <Button
//               type="submit"
//               size="lg"
//               className="bg-gradient-primary hover:opacity-90 px-8"
//             >
//               Send Message
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// // export default EmailFormModal;
// export default EmailFormModal