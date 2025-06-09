"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, FileText, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book className="w-8 h-8" />,
      description: "Learn the fundamentals and get up to speed quickly with our comprehensive guides.",
      items: [
        { name: "Quick Start Guide", path: "/documentation/getting-started", description: "Get started in minutes" },
        { name: "Installation", path: "/documentation/getting-started", description: "Setup and configuration" },
        { name: "Basic Concepts", path: "/documentation/getting-started", description: "Core principles explained" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Core Features",
      icon: <Code className="w-8 h-8" />,
      description: "Explore powerful features and capabilities that make development faster and more efficient.",
      items: [
        { name: "Authentication", path: "/documentation/core-features", description: "Secure user management" },
        { name: "Database", path: "/documentation/core-features", description: "Data storage solutions" },
        { name: "File Storage", path: "/documentation/core-features", description: "Asset management" },
        { name: "API Reference", path: "/documentation/core-features", description: "Complete API docs" }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tutorials",
      icon: <Terminal className="w-8 h-8" />,
      description: "Step-by-step tutorials to help you build amazing applications from scratch.",
      items: [
        { name: "Building Your First App", path: "/documentation/tutorials", description: "Complete walkthrough" },
        { name: "Deployment", path: "/documentation/tutorials", description: "Go live with confidence" },
        { name: "Best Practices", path: "/documentation/tutorials", description: "Industry standards" }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Resources",
      icon: <FileText className="w-8 h-8" />,
      description: "Additional resources, examples, and community support to accelerate your development.",
      items: [
        { name: "Examples", path: "/documentation/resources", description: "Real-world implementations" },
        { name: "FAQ", path: "/documentation/resources", description: "Common questions answered" },
        { name: "Troubleshooting", path: "/documentation/resources", description: "Problem-solving guide" }
      ],
      color: "from-orange-500 to-orange-600"
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Documentation
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Everything You Need
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              to Build with Koderupa
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides, tutorials, and references to help you master our platform 
            and build exceptional applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${section.color} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <p className="text-white/90 leading-relaxed">{section.description}</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link href={item.path}>
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 group/item border border-transparent hover:border-slate-200">
                          <div>
                            <h3 className="font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-slate-600">{item.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help you succeed. Get personalized support and guidance 
            for your specific use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                Contact Support
              </Button>
            </Link>
            <Link href="/documentation/getting-started">
              <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Quick Start Guide
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}