"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, HelpCircle, AlertTriangle, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Resources() {
  const resources = [
    {
      title: "Examples",
      icon: <Code2 className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Examples</h3>
        <p class="mb-4">Explore these example projects to learn how to implement common features and patterns with Koderupa.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-white border rounded-lg p-4">
            <h4 class="font-medium mb-2">Authentication Demo</h4>
            <p class="text-sm text-gray-600 mb-3">A complete authentication system with sign-up, login, password reset, and profile management.</p>
            <div class="flex space-x-2">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Authentication</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
            </div>
            <div class="mt-4">
              <a href="#" class="text-blue-600 hover:underline text-sm">View Demo</a>
              <span class="mx-2 text-gray-300">|</span>
              <a href="#" class="text-blue-600 hover:underline text-sm">Source Code</a>
            </div>
          </div>
          
          <div class="bg-white border rounded-lg p-4">
            <h4 class="font-medium mb-2">E-commerce Store</h4>
            <p class="text-sm text-gray-600 mb-3">A fully functional e-commerce store with product listings, cart, checkout, and order management.</p>
            <div class="flex space-x-2">
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">E-commerce</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Payments</span>
            </div>
            <div class="mt-4">
              <a href="#" class="text-blue-600 hover:underline text-sm">View Demo</a>
              <span class="mx-2 text-gray-300">|</span>
              <a href="#" class="text-blue-600 hover:underline text-sm">Source Code</a>
            </div>
          </div>
          
          <div class="bg-white border rounded-lg p-4">
            <h4 class="font-medium mb-2">Real-time Chat</h4>
            <p class="text-sm text-gray-600 mb-3">A real-time chat application with private messaging, group chats, and notifications.</p>
            <div class="flex space-x-2">
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Real-time</span>
              <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">WebSockets</span>
            </div>
            <div class="mt-4">
              <a href="#" class="text-blue-600 hover:underline text-sm">View Demo</a>
              <span class="mx-2 text-gray-300">|</span>
              <a href="#" class="text-blue-600 hover:underline text-sm">Source Code</a>
            </div>
          </div>
          
          <div class="bg-white border rounded-lg p-4">
            <h4 class="font-medium mb-2">File Upload System</h4>
            <p class="text-sm text-gray-600 mb-3">A file upload system with drag-and-drop, progress tracking, and image previews.</p>
            <div class="flex space-x-2">
              <span class="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Storage</span>
              <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">File Handling</span>
            </div>
            <div class="mt-4">
              <a href="#" class="text-blue-600 hover:underline text-sm">View Demo</a>
              <span class="mx-2 text-gray-300">|</span>
              <a href="#" class="text-blue-600 hover:underline text-sm">Source Code</a>
            </div>
          </div>
        </div>
        
        <p class="mb-4">All example projects include detailed documentation and comments to help you understand how they work.</p>
      `
    },
    {
      title: "FAQ",
      icon: <HelpCircle className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        <p class="mb-4">Find answers to common questions about Koderupa.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">General Questions</h4>
            
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">What is Koderupa?</h5>
                <p>Koderupa is a modern development platform that provides tools and services for building web and mobile applications. It includes authentication, database, storage, and other features to help developers build applications faster.</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Is Koderupa free to use?</h5>
                <p>Koderupa offers a free tier for development and small projects. For production applications and larger teams, we offer paid plans with additional features and higher usage limits. See our <a href="/pricing" class="text-blue-600 hover:underline">pricing page</a> for details.</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Can I use Koderupa with my existing project?</h5>
                <p>Yes, Koderupa can be integrated with existing projects. Our SDKs and APIs are designed to work with any JavaScript framework or library. You can start by adding individual features like authentication or database to your project.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Technical Questions</h4>
            
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">How do I handle user authentication?</h5>
                <p>Koderupa provides a complete authentication system that supports email/password, social login, and other authentication methods. You can use our authentication SDK to handle user sign-up, login, and session management. See the <a href="/documentation/core-features" class="text-blue-600 hover:underline">Authentication documentation</a> for details.</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">How do I deploy my Koderupa application?</h5>
                <p>Koderupa offers multiple deployment options. You can deploy to our managed cloud platform with a single command, or build your application for deployment to your own server or cloud provider. See the <a href="/documentation/tutorials" class="text-blue-600 hover:underline">Deployment tutorial</a> for step-by-step instructions.</p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Does Koderupa support offline data?</h5>
                <p>Yes, Koderupa's database solution includes built-in support for offline data. Your application can work offline and automatically sync data when the connection is restored. This is especially useful for mobile applications and progressive web apps.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Troubleshooting",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-semibold mb-4">Troubleshooting</h3>
        <p class="mb-4">Solutions to common issues and errors you might encounter when using Koderupa.</p>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">Authentication Issues</h4>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Error: "Invalid API key"</h5>
                <p class="mb-2">This error occurs when your API key is invalid or has been revoked.</p>
                <p class="font-medium mt-2">Solution:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Check that you've correctly set the API key in your environment variables</li>
                  <li>Verify that the API key is valid in the Koderupa dashboard</li>
                  <li>Generate a new API key if necessary</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Error: "Email already in use"</h5>
                <p class="mb-2">This error occurs when trying to create a new user with an email that's already registered.</p>
                <p class="font-medium mt-2">Solution:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Implement a check to see if the email is already registered before attempting to create a new user</li>
                  <li>Provide a "Forgot Password" option for users who may have forgotten they already have an account</li>
                  <li>Consider implementing social login options to reduce the need for multiple accounts</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Database Issues</h4>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Error: "Permission denied"</h5>
                <p class="mb-2">This error occurs when a user tries to access or modify data they don't have permission to.</p>
                <p class="font-medium mt-2">Solution:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Check your security rules to ensure they're correctly configured</li>
                  <li>Verify that the user is authenticated before attempting to access protected data</li>
                  <li>Implement proper role-based access control for your application</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Error: "Document not found"</h5>
                <p class="mb-2">This error occurs when trying to access a document that doesn't exist in the database.</p>
                <p class="font-medium mt-2">Solution:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Check that you're using the correct document ID</li>
                  <li>Implement error handling to gracefully handle missing documents</li>
                  <li>Consider using transactions for operations that depend on multiple documents</li>
                </ul>
                <pre class="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto"><code>// Example of proper error handling
const getDocument = async (id) => {
  try {
    const doc = await db.collection('items').doc(id).get();
    
    if (!doc.exists) {
      console.log('Document not found');
      return null;
    }
    
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
};</code></pre>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-2">Deployment Issues</h4>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h5 class="font-medium mb-2">Error: "Build failed"</h5>
                <p class="mb-2">This error occurs when the build process fails during deployment.</p>
                <p class="font-medium mt-2">Solution:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Check the build logs for specific error messages</li>
                  <li>Ensure all dependencies are correctly installed</li>
                  <li>Verify that your code passes all linting and type checking</li>
                  <li>Test the build process locally before deploying</li>
                </ul>
              </div>
            </div>
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
          <h1 className="text-4xl font-bold mb-8">Resources</h1>
          <p className="text-xl text-gray-600 mb-12">
            Additional resources to help you make the most of Koderupa
          </p>
        </motion.div>

        <div className="space-y-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {resource.icon}
                </div>
                <h2 className="text-2xl font-semibold">{resource.title}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: resource.content }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Need more help?</h3>
          </div>
          <p className="mb-6">
            If you couldn't find what you're looking for, reach out to our support team or join our community forum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
            <Button className="w-full">
              Join Community Forum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}