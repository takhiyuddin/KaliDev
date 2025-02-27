"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Clock, MapPin, Instagram, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetStarted() {
  const socialMedia = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/tqydns" },
    { name: "TikTok", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/></svg>, url: "https://tiktok.com/@tqydns" },
    { name: "Github", icon: <Github className="w-5 h-5" />, url: "https://github.com/takhiyuddins" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">
                    Jl. Slamet Riyadi No. 123<br />
                    Surakarta, Central Java<br />
                    Indonesia 57131
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                  <p className="text-gray-600">+62 895 3240 73524</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">afiftqydns@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday: 09:00 - 22:00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">Social Media</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialMedia.map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-blue-50 p-2 rounded-md text-blue-600 mr-3">
                      {platform.icon}
                    </div>
                    <span className="text-gray-700">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* This is a placeholder for a map. In a real application, you would embed a Google Maps iframe or similar */}
                <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-600">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}