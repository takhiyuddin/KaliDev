"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Code, FileText, Terminal, CheckCircle, Coffee, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GettingStarted() {
  const sections = [
    {
      title: "Quick Start Guide",
      icon: <Zap className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Quick Start Guide</h3>
        <p class="mb-4">Get up and running with Koderupa in minutes. This guide will help you set up your first project and understand the basics of our platform.</p>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 1: Project Planning</h4>
            <p>Define your project requirements and choose the appropriate package that fits your needs.</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 2: Design Phase</h4>
            <p>Our team will create a custom design based on your brand and requirements.</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 3: Development</h4>
            <p>We'll build your website using modern technologies and best practices.</p>
          </div>
        </div>
      `
    },
    {
      title: "Our Process",
      icon: <Terminal className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Our Development Process</h3>
        <p class="mb-4">We follow a structured approach to ensure the highest quality results for your project.</p>
        
        <h4 class="font-medium mb-2">Development Phases</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Requirements gathering and analysis</li>
          <li>UI/UX design and prototyping</li>
          <li>Frontend and backend development</li>
          <li>Quality assurance and testing</li>
          <li>Deployment and maintenance</li>
        </ul>
        
        <h4 class="font-medium mb-2">Quality Standards</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Clean, maintainable code</li>
          <li>Responsive design for all devices</li>
          <li>Performance optimization</li>
          <li>Security best practices</li>
          <li>SEO optimization</li>
        </ul>
      `
    },
    {
      title: "Basic Concepts",
      icon: <BookOpen className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Basic Concepts</h3>
        <p class="mb-6">Understanding these core concepts will help you make informed decisions about your project.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2 text-lg">Responsive Design</h4>
            <p>Your website will adapt seamlessly to all screen sizes, ensuring a consistent experience across devices.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Performance</h4>
            <p>We optimize your website for speed and efficiency, ensuring fast load times and smooth interactions.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Security</h4>
            <p>Built-in security measures protect your website and user data from common threats and vulnerabilities.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">SEO</h4>
            <p>Search engine optimization helps your website rank better in search results and attract more visitors.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Maintenance</h4>
            <p>Regular updates and support ensure your website stays secure and performs optimally.</p>
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/documentation">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Getting Started</h1>
          <p className="text-xl text-gray-600 mb-12">
            Everything you need to know to begin your journey with Koderupa
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <Coffee className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Ready to dive deeper?</h3>
          </div>
          <p className="mb-6">
            Now that you understand the basics, explore our other documentation sections to learn more about Koderupa's services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/documentation">
              <Button variant="outline" className="w-full justify-start">
                <Code className="w-4 h-4 mr-2" /> Core Features
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" className="w-full justify-start">
                <Terminal className="w-4 h-4 mr-2" /> Tutorials
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" /> Resources
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="w-4 h-4 mr-2" /> Best Practices
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}