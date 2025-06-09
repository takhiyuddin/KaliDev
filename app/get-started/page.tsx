"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Clock, MapPin, Instagram, Github, Globe, Send, MessageCircle, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const whatsappMessage = `
*New Contact Form Submission*

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/62895324073524?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const socialMedia = [
    { 
      name: "Instagram", 
      icon: <Instagram className="w-6 h-6" />, 
      url: "https://instagram.com/tqydns",
      handle: "@tqydns"
    },
    { 
      name: "TikTok", 
      icon: <svg className="w-6 h-6\" viewBox="0 0 24 24\" fill="none\" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z\" fill="currentColor"/></svg>, 
      url: "https://tiktok.com/@tqydns",
      handle: "@tqydns"
    },
    { 
      name: "Github", 
      icon: <Github className="w-6 h-6" />, 
      url: "https://github.com/takhiyuddin",
      handle: "@takhiyuddin"
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Get instant responses to your questions",
      value: "+62 895 3240 73524",
      action: "Chat Now",
      link: "https://wa.me/62895324073524"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Send us detailed project requirements",
      value: "afiftqydns@gmail.com",
      action: "Send Email",
      link: "mailto:afiftqydns@gmail.com"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Call",
      description: "Book a free consultation session",
      value: "30-minute consultation",
      action: "Book Now",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team of experts 
            and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{method.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{method.description}</p>
              <p className="font-semibold text-slate-900 mb-6">{method.value}</p>
              <Button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                asChild
              >
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <Send className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or question..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Location</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Boyolali, Central Java<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Phone Number</h4>
                    <p className="text-slate-600">+62 895 3240 73524</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Email</h4>
                    <p className="text-slate-600">afiftqydns@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900">Operating Hours</h4>
                    <p className="text-slate-600">
                      Monday - Sunday<br />
                      09:00 - 22:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Follow Us</h3>
              </div>
              
              <div className="space-y-4">
                {socialMedia.map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 group border border-slate-100 hover:border-slate-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 mr-4 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block">{platform.name}</span>
                      <span className="text-slate-600 text-sm">{platform.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Why Choose Koderupa?</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  500+ Successful Projects Delivered
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  98% Client Satisfaction Rate
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  24/7 Support & Maintenance
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Modern Technology Stack
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Transparent Pricing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}