"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Database, HardDrive, Code, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoreFeatures() {
  const features = [
    {
      title: "Authentication",
      icon: <Lock className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Authentication</h3>
        <p class="mb-4">Koderupa provides a robust authentication system that supports multiple authentication methods and security features.</p>
        
        <h4 class="font-medium mb-2">Supported Authentication Methods</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Email and password</li>
          <li>Social login (Google, GitHub, Twitter)</li>
          <li>Single Sign-On (SSO)</li>
          <li>Magic links</li>
          <li>Two-factor authentication (2FA)</li>
        </ul>
        
        <h4 class="font-medium mb-2">Key Security Features</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>JWT-based authentication</li>
          <li>Secure password hashing</li>
          <li>Rate limiting and brute force protection</li>
          <li>Session management</li>
          <li>Role-based access control (RBAC)</li>
        </ul>
        
        <h4 class="font-medium mb-2">Implementation Example</h4>
        <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Initialize authentication
import { KaliAuth } from '@Koderupa/auth';

const auth = new KaliAuth({
  apiKey: process.env.Koderupa_API_KEY,
  authDomain: 'your-app.Koderupa.com'
});

// Sign in a user
const signIn = async (email, password) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    console.error('Authentication error:', error);
  }
};</code></pre>
      `
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Database</h3>
        <p class="mb-4">Koderupa's database solution provides a scalable, secure, and easy-to-use data storage system for your applications.</p>
        
        <h4 class="font-medium mb-2">Database Features</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Automatic scaling</li>
          <li>Real-time data synchronization</li>
          <li>Offline support</li>
          <li>Comprehensive security rules</li>
          <li>Data validation</li>
          <li>Transactions</li>
        </ul>
        
        <h4 class="font-medium mb-2">Supported Data Types</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Strings, numbers, booleans</li>
          <li>Arrays and objects</li>
          <li>Dates and timestamps</li>
          <li>Geolocation data</li>
          <li>References to other documents</li>
        </ul>
        
        <h4 class="font-medium mb-2">Implementation Example</h4>
        <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Initialize database
import { KaliDB } from '@Koderupa/database';

const db = new KaliDB({
  apiKey: process.env.Koderupa_API_KEY,
  projectId: 'your-project-id'
});

// Create a new document
const addUser = async (userData) => {
  try {
    const docRef = await db.collection('users').add({
      name: userData.name,
      email: userData.email,
      createdAt: db.serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Database error:', error);
  }
};</code></pre>
      `
    },
    {
      title: "File Storage",
      icon: <HardDrive className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">File Storage</h3>
        <p class="mb-4">Koderupa's file storage solution allows you to securely store and serve user-generated content and application assets.</p>
        
        <h4 class="font-medium mb-2">Storage Features</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Secure file uploads and downloads</li>
          <li>Content delivery network (CDN) integration</li>
          <li>Image optimization and transformation</li>
          <li>Access control with security rules</li>
          <li>Metadata management</li>
          <li>Resumable uploads</li>
        </ul>
        
        <h4 class="font-medium mb-2">Supported File Types</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Images (JPEG, PNG, GIF, WebP, etc.)</li>
          <li>Videos and audio files</li>
          <li>Documents (PDF, DOCX, etc.)</li>
          <li>Archives (ZIP, RAR, etc.)</li>
          <li>Custom file types</li>
        </ul>
        
        <h4 class="font-medium mb-2">Implementation Example</h4>
        <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Initialize storage
import { KaliStorage } from '@Koderupa/storage';

const storage = new KaliStorage({
  apiKey: process.env.Koderupa_API_KEY,
  projectId: 'your-project-id'
});

// Upload a file
const uploadFile = async (file, path) => {
  try {
    const storageRef = storage.ref(path);
    const snapshot = await storageRef.put(file);
    const downloadURL = await snapshot.ref.getDownloadURL();
    return downloadURL;
  } catch (error) {
    console.error('Storage error:', error);
  }
};</code></pre>
      `
    },
    {
      title: "API Reference",
      icon: <Server className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">API Reference</h3>
        <p class="mb-4">Koderupa provides a comprehensive API that allows you to interact with all platform services programmatically.</p>
        
        <h4 class="font-medium mb-2">API Features</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>RESTful and GraphQL endpoints</li>
          <li>Webhook integrations</li>
          <li>Rate limiting and usage monitoring</li>
          <li>API keys and token management</li>
          <li>Comprehensive documentation</li>
        </ul>
        
        <h4 class="font-medium mb-2">Common API Endpoints</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 mt-2">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b text-left">Endpoint</th>
                <th class="py-2 px-4 border-b text-left">Method</th>
                <th class="py-2 px-4 border-b text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b">/api/v1/users</td>
                <td class="py-2 px-4 border-b">GET</td>
                <td class="py-2 px-4 border-b">List all users</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">/api/v1/users/:id</td>
                <td class="py-2 px-4 border-b">GET</td>
                <td class="py-2 px-4 border-b">Get a specific user</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">/api/v1/projects</td>
                <td class="py-2 px-4 border-b">POST</td>
                <td class="py-2 px-4 border-b">Create a new project</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">/api/v1/auth/token</td>
                <td class="py-2 px-4 border-b">POST</td>
                <td class="py-2 px-4 border-b">Generate an authentication token</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 class="font-medium mb-2 mt-4">Implementation Example</h4>
        <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Make an API request
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.Koderupa.com/v1',
  headers: {
    'Authorization': \`Bearer \${process.env.Koderupa_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('API error:', error);
  }
};</code></pre>
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
          <h1 className="text-4xl font-bold mb-8">Core Features</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore the powerful features that make Koderupa the perfect platform for modern applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: feature.content }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Need more details?</h3>
          </div>
          <p className="mb-6">
            Check out our detailed API documentation and SDK references for complete information on all available methods and parameters.
          </p>
          <Link href="/documentation">
            <Button className="w-full sm:w-auto">
              View Full API Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}