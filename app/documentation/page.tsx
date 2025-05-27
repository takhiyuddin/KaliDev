"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      items: [
        { name: "Quick Start Guide", path: "/documentation/getting-started" },
        { name: "Installation", path: "/documentation/getting-started" },
        { name: "Basic Concepts", path: "/documentation/getting-started" }
      ]
    },
    {
      title: "Core Features",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Authentication", path: "/documentation/core-features" },
        { name: "Database", path: "/documentation/core-features" },
        { name: "File Storage", path: "/documentation/core-features" },
        { name: "API Reference", path: "/documentation/core-features" }
      ]
    },
    {
      title: "Tutorials",
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { name: "Building Your First App", path: "/documentation/tutorials" },
        { name: "Deployment", path: "/documentation/tutorials" },
        { name: "Best Practices", path: "/documentation/tutorials" }
      ]
    },
    {
      title: "Resources",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { name: "Examples", path: "/documentation/resources" },
        { name: "FAQ", path: "/documentation/resources" },
        { name: "Troubleshooting", path: "/documentation/resources" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Everything you need to know about building with Koderupa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-sm border"
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
                    <Link href={item.path}>
                      <Button variant="ghost" className="w-full justify-start hover:text-blue-600">
                        {item.name}
                      </Button>
                    </Link>
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