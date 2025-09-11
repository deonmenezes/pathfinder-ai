// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
//       description: "Call us for immediate assistance"
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: ["chris.pathfinder.72@gmail.com", "support@chrispathfinder.com"],
//       description: "Send us your queries anytime"
//     },
//     {
//       icon: MapPin,
//       title: "Office",
//       details: ["123 Career Street", "Professional District, CD 12345"],
//       description: "Visit us for in-person consultations"
//     },
//     {
//       icon: Clock,
//       title: "Hours",
//       details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
//       description: "We're here when you need us"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-primary text-primary-foreground py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Contact Us
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
//             Ready to transform your career? Get in touch with our expert team today
//           </p>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               We're here to help you navigate your career journey. Reach out to us through any of the channels below
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {contactInfo.map((info, index) => (
//               <Card key={index} className="p-8 text-center group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:animate-bounce-gentle">
//                   <info.icon className="h-8 w-8 text-primary-foreground" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground mb-4">
//                   {info.title}
//                 </h3>
//                 <div className="space-y-2 mb-4">
//                   {info.details.map((detail, detailIndex) => (
//                     <p key={detailIndex} className="text-primary font-medium">
//                       {detail}
//                     </p>
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {info.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-foreground mb-4">
//                 Send Us a Message
//               </h2>
//               <p className="text-xl text-muted-foreground">
//                 Fill out the form below and we'll get back to you within 24 hours
//               </p>
//             </div>

//        <Card className="p-8 border-0 shadow-elegant shadow-lg">
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         {/* Full Name */}
//         <div className="space-y-2">
//           <Label htmlFor="fullName">Full Name</Label>
//           <Input
//             id="fullName"
//             name="fullName"
//             placeholder="Enter your full name"
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Email & Phone */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone</Label>
//             <Input
//               id="phone"
//               name="phone"
//               type="tel"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Profession & Gender */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="profession">Profession</Label>
//             <select
//               id="profession"
//               name="profession"
//               value={formData.profession}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//             >
//               <option value="">Select your profession</option>
//               <option value="student">Student</option>
//               <option value="graduate">Graduate</option>
//               <option value="postgraduate">Postgraduate</option>
//               <option value="working">Working Professional</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <Label>Gender</Label>
//             <div className="flex items-center gap-6 border rounded-lg px-3 py-2">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={formData.gender === "male"}
//                   onChange={handleChange}
//                   className="accent-primary"
//                 />
//                 Male
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={formData.gender === "female"}
//                   onChange={handleChange}
//                   className="accent-primary"
//                 />
//                 Female
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Message */}
//         <div className="space-y-2">
//           <Label htmlFor="message">Message</Label>
//           <Textarea
//             id="message"
//             name="message"
//             placeholder="Tell us about your career goals and how we can help you..."
//             value={formData.message}
//             onChange={handleChange}
//             className="min-h-[120px]"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <Button type="submit" size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
//             Send Message
//           </Button>
//         </div>
//       </form>
//     </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-primary text-primary-foreground">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Start Your Career Journey?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Don't wait to transform your career. Schedule a free consultation today and take the first step towards your dream job.
//           </p>
//           <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
//             Book Free Consultation
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import { useState } from 'react'
import emailjs from 'emailjs-com'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import {EmailFormModal } from "../pages/EmailFormModel"
import EmailFormModal from '../pages/EmailFormModel'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    profession: '',
    gender: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .send(
        'service_xdmkdrp', // 👉 replace with EmailJS Service ID
        'template_zbpmuz9', // 👉 replace with EmailJS Template ID
        {
          to_email: 'ganeshpund0000@gmail.com', // destination email
          fullName: formData.fullName,
          dob: formData.dob,
          email: formData.email,
          phone: formData.phone,
          profession: formData.profession,
          gender: formData.gender,
          message: formData.message
        },
        '6-mLqh2HSECJ4bCd6' // 👉 replace with EmailJS Public Key
      )
      .then(
        () => {
          alert('✅ Message sent successfully!')
          setFormData({
            fullName: '',
            dob: '',
            email: '',
            phone: '',
            profession: '',
            gender: '',
            message: ''
          })
        },
        error => {
          alert('❌ Failed to send message. Try again later.')
          console.error(error)
        }
      )
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8779193439'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['chris.pathfinder.72@gmail.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['93 East ,1102, Mahakali Caves Road, Andheri (East ) ', 'Mumbai, CD 400093'],
      description: 'Visit us for in-person consultations'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 09:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: "We're here when you need us"
    }
  ]

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='bg-gradient-primary text-primary-foreground py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Contact Us</h1>
          <p className='text-xl md:text-2xl max-w-3xl mx-auto opacity-90'>
            Ready to transform your career? Get in touch with our expert team
            today
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Get In Touch
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We're here to help you navigate your career journey. Reach out to
              us through any of the channels below
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className='p-8 text-center group hover:shadow-elegant transition-all duration-300 border-0 shadow-card'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:animate-bounce-gentle'>
                  <info.icon className='h-8 w-8 text-primary-foreground' />
                </div>
                <h3 className='text-2xl font-bold text-foreground mb-4'>
                  {info.title}
                </h3>
                <div className='space-y-2 mb-4'>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className='text-primary font-medium'>
                      {detail}
                    </p>
                  ))}
                </div>
                <p className='text-muted-foreground text-sm'>
                  {info.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-foreground mb-4'>
                Send Us a Message
              </h2>
              <p className='text-xl text-muted-foreground'>
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <Card className='p-8 border-0 shadow-elegant shadow-lg'>
              <form className='space-y-6' onSubmit={handleSubmit}>
                {/*   Name */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='fullName'> Name</Label>
                  <Input
                    id='fullName'
                    name='fullName'
                    placeholder='Enter your full name'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='dob'> Date of Birth</Label>
                  <Input
                    id='dob'
                    name='dob'
                    type='date'
                    placeholder='Enter your full name'
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

                {/* Email & Phone */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Enter your email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='Enter your phone number'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>



                {/* Profession & Gender */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='profession'>Qualification</Label>
                    <select
                      id='profession'
                      name='profession'
                      value={formData.profession}
                      onChange={handleChange}
                      className='w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                    >
                      <option value=''>Select your profession</option>
                      <option value='student'>Student</option>
                      <option value='graduate'>Professional</option>
                      <option value='postgraduate'>Clueless Explorer</option>
                      {/* <option value='working'>Working Professional</option> */}
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <Label>Gender</Label>
                    <div className='flex items-center gap-6 border rounded-lg px-3 py-2'>
                      <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='gender'
                          value='male'
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                          className='accent-primary'
                        />
                        Male
                      </label>
                      <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='gender'
                          value='female'
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                          className='accent-primary'
                        />
                        Female
                      </label>
                      <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='gender'
                          value='transgender'
                          checked={formData.gender === 'transgender'}
                          onChange={handleChange}
                          className='accent-primary'
                        />
                        Transgender
                      </label>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us about your career goals and how we can help you...'
                    value={formData.message}
                    onChange={handleChange}
                    className='min-h-[120px]'
                  />
                </div>

                {/* Submit Button */}
                <div className='text-center'>
                  {/* <EmailFormModal
                    trigger={ */}
                      <Button
                        type='button'
                        size='lg'
                        className='bg-gradient-primary hover:opacity-90 px-8'
                      >
                        Send Message
                      </Button>
                    {/* }
                    title='Send Us a Message'
                  /> */}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-primary text-primary-foreground'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Start Your Career Journey?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
            Don't wait to transform your career. Schedule a free consultation
            today and take the first step towards your dream job.
          </p>

          <div className='hidden lg:block'>
            <EmailFormModal
              trigger={
                <Button
                  size='lg'
                  variant='secondary'
                  className='bg-white text-primary hover:bg-white/90'
                >
                  Book Free Consultation
                </Button>
              }
            />
          </div>

          {/* <EmailFromModal
  title="Book Free Consultation"
  trigger={
    <Button
      size="lg"
      variant="secondary"
      className="bg-white text-primary hover:bg-white/90"
    >
      Book Free Consultation
    </Button>
  }
/> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
