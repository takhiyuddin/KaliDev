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
        <p class="mb-4">Get up and running with KaliDev in minutes. This guide will help you set up your first project and understand the basics of our platform.</p>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 1: Create an account</h4>
            <p>Sign up for a KaliDev account to access all our features and tools.</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 2: Initialize your project</h4>
            <p>Use our CLI tool to create a new project with a single command.</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npx create-kalidev-app my-awesome-project</code></pre>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-medium mb-2">Step 3: Start development</h4>
            <p>Navigate to your project directory and start the development server.</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>cd my-awesome-project
npm run dev</code></pre>
          </div>
        </div>
      `
    },
    {
      title: "Installation",
      icon: <Terminal className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Installation</h3>
        <p class="mb-4">Follow these steps to install KaliDev on your system.</p>
        
        <h4 class="font-medium mb-2">System Requirements</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Node.js 16.x or later</li>
          <li>npm 7.x or later</li>
          <li>Git (optional, but recommended)</li>
        </ul>
        
        <h4 class="font-medium mb-2">Installation Methods</h4>
        
        <div class="mb-4">
          <h5 class="font-medium">Using npm (recommended)</h5>
          <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npm install -g kalidev-cli</code></pre>
        </div>
        
        <div class="mb-4">
          <h5 class="font-medium">Using yarn</h5>
          <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>yarn global add kalidev-cli</code></pre>
        </div>
        
        <div>
          <h5 class="font-medium">Manual Installation</h5>
          <p class="mt-1">Clone the repository and install dependencies:</p>
          <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>git clone https://github.com/kalidev/kalidev-cli.git
cd kalidev-cli
npm install
npm link</code></pre>
        </div>
      `
    },
    {
      title: "Basic Concepts",
      icon: <BookOpen className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Basic Concepts</h3>
        <p class="mb-6">Understanding these core concepts will help you make the most of KaliDev's platform.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2 text-lg">Projects</h4>
            <p>A project is the top-level container for all your code, assets, and configurations. Each project has its own settings and can be deployed independently.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Components</h4>
            <p>Components are reusable building blocks that make up your application. KaliDev provides a library of pre-built components that you can customize and extend.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Services</h4>
            <p>Services handle the business logic of your application. They can be connected to various data sources and APIs to provide functionality to your components.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Deployments</h4>
            <p>Deployments are instances of your project that are running in a specific environment. KaliDev supports multiple deployment environments, such as development, staging, and production.</p>
          </div>
          
          <div>
            <h4 class="font-medium mb-2 text-lg">Workspaces</h4>
            <p>Workspaces allow you to organize multiple projects and share resources between them. They're especially useful for larger teams or organizations.</p>
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
            Everything you need to know to begin your journey with KaliDev
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
            Now that you understand the basics, explore our other documentation sections to learn more about KaliDev's powerful features.
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