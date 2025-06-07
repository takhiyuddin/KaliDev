"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Code, Rocket, Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Tutorials() {
  const tutorials = [
    {
      title: "Building Your First App",
      icon: <Code className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-4">Building Your First App</h3>
          <p className="mb-4">
            Follow this step-by-step tutorial to build your first application with Koderupa.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Step 1: Set Up Your Project</h4>
              <p className="mb-2">Create a new Koderupa project using our CLI tool:</p>
              <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                <code>npx create-Koderupa-app my-first-app{`\n`}cd my-first-app</code>
              </pre>
            </div>

            <div>
              <h4 className="font-medium mb-2">Step 2: Configure Authentication</h4>
              <p className="mb-2">Set up authentication for your application:</p>
              <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                <code>{`// src/auth.js\nimport { KaliAuth } from '@Koderupa/auth';\n\nexport const auth = new KaliAuth({\n  apiKey: process.env.Koderupa_API_KEY,\n  authDomain: 'your-app.Koderupa.com'\n});`}</code>
              </pre>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Deployment",
      icon: <Rocket className="w-5 h-5" />,
      content: (
        <>
          <h3 className="text-xl font-semibold mb-4">Deployment</h3>
          <p className="mb-4">Learn how to deploy your Koderupa application to production.</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Preparing for Deployment</h4>
              <p>Before deploying your application, make sure you've completed these steps:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Set up environment variables for production</li>
                <li>Run tests to ensure everything works correctly</li>
                <li>Optimize your application for production</li>
                <li>Configure your deployment settings in <code>Koderupa.config.js</code></li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/documentation">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation
          </Button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
          <p className="text-xl text-gray-600 mb-12">
            Step-by-step guides to help you build amazing applications with Koderupa
          </p>
        </motion.div>

        <div className="space-y-12">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">{tutorial.icon}</div>
                <h2 className="text-2xl font-semibold">{tutorial.title}</h2>
              </div>
              <div>{tutorial.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}