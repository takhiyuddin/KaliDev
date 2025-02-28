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
      content: `
        <h3 class="text-xl font-semibold mb-4">Building Your First App</h3>
        <p class="mb-4">Follow this step-by-step tutorial to build your first application with KaliDev.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">Step 1: Set Up Your Project</h4>
            <p class="mb-2">Create a new KaliDev project using our CLI tool:</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npx create-kalidev-app my-first-app
cd my-first-app</code></pre>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Step 2: Configure Authentication</h4>
            <p class="mb-2">Set up authentication for your application:</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// src/auth.js
import { KaliAuth } from '@kalidev/auth';

export const auth = new KaliAuth({
  apiKey: process.env.KALIDEV_API_KEY,
  authDomain: 'your-app.kalidev.com'
});</code></pre>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Step 3: Create Your First Component</h4>
            <p class="mb-2">Create a simple component to display user information:</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { auth } from '../auth';

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return (
      <div>
        <h2>Please sign in</h2>
        <button onClick={() => auth.signInWithRedirect()}>
          Sign In
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
}</code></pre>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Step 4: Run Your Application</h4>
            <p class="mb-2">Start the development server to see your application in action:</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npm run dev</code></pre>
            <p class="mt-2">Your application should now be running at <code>http://localhost:3000</code>.</p>
          </div>
        </div>
      `
    },
    {
      title: "Deployment",
      icon: <Rocket className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Deployment</h3>
        <p class="mb-4">Learn how to deploy your KaliDev application to production.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">Preparing for Deployment</h4>
            <p>Before deploying your application, make sure you've completed these steps:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li>Set up environment variables for production</li>
              <li>Run tests to ensure everything works correctly</li>
              <li>Optimize your application for production</li>
              <li>Configure your deployment settings in <code>kalidev.config.js</code></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Deployment Options</h4>
            <p>KaliDev supports multiple deployment options:</p>
            
            <div class="mt-4 space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-medium mb-1">KaliDev Cloud (Recommended)</h5>
                <p class="mb-2">Deploy directly to our managed cloud platform:</p>
                <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npx kalidev-cli deploy</code></pre>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-medium mb-1">Custom Server</h5>
                <p class="mb-2">Build your application for deployment to your own server:</p>
                <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>npm run build
# Copy the build directory to your server</code></pre>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-medium mb-1">Docker</h5>
                <p class="mb-2">Deploy using Docker containers:</p>
                <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>docker build -t my-kalidev-app .
docker run -p 3000:3000 my-kalidev-app</code></pre>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Continuous Deployment</h4>
            <p>Set up continuous deployment with GitHub Actions:</p>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code># .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to KaliDev
        run: npx kalidev-cli deploy
        env:
          KALIDEV_API_KEY: ${{ secrets.KALIDEV_API_KEY }}</code></pre>
          </div>
        </div>
      `
    },
    {
      title: "Best Practices",
      icon: <Shield className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Best Practices</h3>
        <p class="mb-4">Follow these best practices to build secure, scalable, and maintainable applications with KaliDev.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">Security Best Practices</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li>Always use environment variables for sensitive information</li>
              <li>Implement proper authentication and authorization</li>
              <li>Use security rules to protect your database and storage</li>
              <li>Validate user input on both client and server</li>
              <li>Keep dependencies updated to avoid security vulnerabilities</li>
              <li>Implement rate limiting for API endpoints</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Performance Optimization</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li>Use code splitting to reduce initial load time</li>
              <li>Implement caching strategies for frequently accessed data</li>
              <li>Optimize images and other assets</li>
              <li>Use pagination for large data sets</li>
              <li>Minimize database queries and optimize indexes</li>
              <li>Implement lazy loading for components and routes</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Code Organization</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
              <li>Follow a consistent file and folder structure</li>
              <li>Use a style guide and linting tools</li>
              <li>Write unit tests for critical functionality</li>
              <li>Document your code with comments and documentation</li>
              <li>Use TypeScript for type safety</li>
              <li>Implement a state management solution for complex applications</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Example: Optimized Database Queries</h4>
            <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Bad practice: Fetching all documents
const getAllUsers = async () => {
  const snapshot = await db.collection('users').get();
  return snapshot.docs.map(doc => doc.data());
};

// Good practice: Pagination and limiting fields
const getUsers = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const snapshot = await db.collection('users')
    .select('name', 'email', 'role') // Only fetch needed fields
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .offset(offset)
    .get();
  
  return {
    users: snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })),
    totalPages: Math.ceil(snapshot.size / limit),
    currentPage: page
  };
};</code></pre>
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
          <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
          <p className="text-xl text-gray-600 mb-12">
            Step-by-step guides to help you build amazing applications with KaliDev
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
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {tutorial.icon}
                </div>
                <h2 className="text-2xl font-semibold">{tutorial.title}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Want to learn more?</h3>
          </div>
          <p className="mb-6">
            Check out our video tutorials and interactive workshops for more in-depth learning.
          </p>
          <Link href="/documentation">
            <Button className="w-full sm:w-auto">
              View Video Tutorials
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}