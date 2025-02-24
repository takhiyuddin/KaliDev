"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      items: ["Quick Start Guide", "Installation", "Basic Concepts"]
    },
    {
      title: "Core Features",
      icon: <Code className="w-6 h-6" />,
      items: ["Authentication", "Database", "File Storage", "API Reference"]
    },
    {
      title: "Tutorials",
      icon: <Terminal className="w-6 h-6" />,
      items: ["Building Your First App", "Deployment", "Best Practices"]
    },
    {
      title: "Resources",
      icon: <FileText className="w-6 h-6" />,
      items: ["Examples", "FAQ", "Troubleshooting"]
    }
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
        >
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          <p className="text-xl text-gray-600 mb-12">
            Everything you need to know about building with KaliDev
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-3">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-blue-600">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}